// https://public.radio.co/stations/s209f09ff1/requests/tracks
// post to https://public.radio.co/stations/s209f09ff1/requests
// {"track_id":16345279}
// 429 Too Many Requests
// {
//     "errors": [
//         {
//             "code": 1711,
//             "message": "You have already made a maximum 1 requests in 10 minutes"
//         }
//     ]
// }
// {
//     "errors": [
//         {
//             "code": 1711,
//             "message": "You have already made a maximum of 2 requests today"
//         }
//     ]
// }
// 201 Created
// {}

import parser from "cron-parser";
import { toast } from "react-toastify";
import { Emitter } from "../player/Emitter";

export type RequestStatus =
  | "available"
  | "temporary_throttled"
  | "daily_throttled"
  | "unavailable";

export type RequestTrack = {
  id: number;
  title: string;
  artist: string;
  artwork: {
    url: string | null;
    large_url: string | null;
  };
};

export default class RequestsCore extends Emitter {
  station_id: string;
  status: RequestStatus = "unavailable";
  last_request: Date = new Date(0);
  probable_next_request: Date = new Date(0);
  requests_today: number = 0;
  requests_this_period: number = 0;
  total_requests: number = 0;

  max_requests_per_day: number = 25; // presumably resets at midnight, cron job?
  max_requests_per_period: number = 2;
  period_length: number = 10; // in minutes, presumably resets every x minutes, cron job?

  // so, i have NO IDEA how the throttling works on radio.co's end, so we're gonna handle it here also

  constructor(station_id: string) {
    super();
    this.station_id = station_id;
    this._load_from_storage();
    this.update_throttle_status();
  }

  update_throttle_status() {
    let daily_throttle = parser.parseExpression("0 0 * * *", {
      currentDate: this.last_request,
    }); // every day at midnight
    let temporary_throttle = parser.parseExpression(
      `*/${this.period_length} * * * *`,
      {
        currentDate: this.last_request,
      }
    );
    // if daily throttle's next occurance is before the last request, we're good!
    let next_daily = daily_throttle.next().toDate();
    let next_temporary = temporary_throttle.next().toDate();
    let now = new Date();
    // if the last request was before the next daily throttle, and we're past the next daily throttle, reset requests_today
    if (this.last_request < next_daily && now > next_daily) {
      // console.log("resetting requests_today");
      this.requests_today = 0;
      this.requests_this_period = 0;
      this.status = "available";
    }

    // if the last request was before the next temporary throttle, and we're past the next temporary throttle, reset requests_this_period
    if (this.last_request < next_temporary && now > next_temporary) {
      // console.log("resetting requests_this_period");
      this.requests_this_period = 0;
      this.status = "available";
    }

    // okay, let's check if we're throttled
    if (this.requests_this_period >= this.max_requests_per_period) {
      // console.log("hit temporary throttled");
      this.status = "temporary_throttled";
      this.probable_next_request = next_temporary;
    }

    if (this.requests_today >= this.max_requests_per_day) {
      // console.log("hit daily throttled");
      this.status = "daily_throttled";
      this.probable_next_request = next_daily;
    }

    if (this.status === "unavailable") {
      // we're going to assume we're good, don't have any data!
      this.status = "available";
    }

    this._save_to_storage();
  }

  hit_period_throttle() {
    this.requests_this_period = this.max_requests_per_period;
    this.last_request = new Date();
    this.update_throttle_status();
  }

  hit_daily_throttle() {
    this.requests_today = this.max_requests_per_day;
    this.last_request = new Date();
    this.update_throttle_status();
  }

  hit_request() {
    this.requests_today++;
    this.requests_this_period++;
    this.total_requests++;
    this.last_request = new Date();
    this.update_throttle_status();
  }

  _load_from_storage() {
    // load from storage
    let data = JSON.parse(localStorage.getItem("requests") || "{}");

    // if the object is empty
    if (Object.keys(data).length === 0) {
      this.last_request = new Date(0);
      this.requests_today = 0;
      this.requests_this_period = 0;
      this.total_requests = 0;
    } else {
      this.last_request = new Date(data.last_request);
      this.requests_today = data.requests_today;
      this.requests_this_period = data.requests_this_period;
      this.total_requests = data.total_requests;
    }
  }

  _save_to_storage() {
    // save to storage
    localStorage.setItem(
      "requests",
      JSON.stringify({
        last_request: this.last_request,
        requests_today: this.requests_today,
        requests_this_period: this.requests_this_period,
        total_requests: this.total_requests,
      })
    );
  }

  async request(track_id: number) {
    const result = await this._request(track_id);
    if (result === "throttled") {
      toast("Throttled!", { type: "error" });
    } else if (result === "success") {
      toast("Request sent!", { type: "success" });
    } else if (result === "already_requested") {
      toast("Already requested!", { type: "warning" });
    } else {
      toast("Unknown error!", { type: "error" });
    }
  }

  async _request(track_id: number) {
    const response = await fetch(
      `https://public.radio.co/stations/${this.station_id}/requests`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ track_id }),
      }
    );

    if (response.status === 429) {
      // fuck we're throttled somehow
      const data = await response.json();
      const error = data.errors[0];
      if (error.message.includes("today")) {
        this.hit_daily_throttle();
      } else {
        this.hit_period_throttle();
      }
      this.emit("throttled", this.status);
      // toast("Throttled!", { type: "error" });
      return "throttled";
    } else if (response.status === 201) {
      this.hit_request();
      this.emit("success");
      // toast("Request sent!", { type: "success" });
      return "success";
    } else if (response.status === 409) {
      // already requested
      // toast("Already requested!", { type: "error" });
      return "already_requested";
    } else {
      // how did we get here???
      console.log("unknown error", response);
      // toast("Unknown error", { type: "error" });
      return "unknown_error";
    }
  }

  async get_tracks(): Promise<RequestTrack[]> {
    const response = await fetch(
      `https://public.radio.co/stations/${this.station_id}/requests/tracks`
    );
    const data = await response.json();
    return data.tracks;
  }

  async request_random() {
    // for debugging
    const tracks = await this.get_tracks();
    const track = tracks[Math.floor(Math.random() * tracks.length)];
    return this.request(track.id);
  }
}
