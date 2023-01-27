import { isMobile } from "is-mobile";
import { toast } from "react-toastify";
import { AUTOMATED_HOST } from "../data/hosts";
import RequestsCore from "../requests/core";
import { Emitter } from "./Emitter";

type PlayerData = {
  status: string; // should *always* be "online". if it ain't, we got a problem.
  source: string; // how stuff is playing. should be "live" or "automated" (MAY BE SOMETHING ELSE)
  host_string: string; // the name of the host. should be a valid host name.
  collaborators: string[]; // the names of the collaborators. should be valid host names.

  current_track: Track;
  previous_tracks: Track[];
};

export type StreamFormat = "mobile" | "desktop" | "auto";

type PlayerOptions = {
  // format is either "desktop", "mobile", or "auto"
  format: StreamFormat;
  // volume is a number between 0 and 1
  volume: number;
  skip_autoplay: boolean;
};

function default_options(): PlayerOptions {
  return {
    format: "auto",
    volume: 0.5,
    skip_autoplay: false,
  };
}

export type Track = {
  title: string;
  // artist: string;
  // album: string;
  album_art: string;
};

export type PlayerFormat = {
  streaming_url: string;
  name: string;
  format: string;
  bitrate: number;
};

type timer = ReturnType<typeof setTimeout>;

function get_or_default_player_options(): PlayerOptions {
  const options = localStorage.getItem("player_options");
  if (options === null) {
    return default_options();
  }
  return JSON.parse(options);
}

function save_player_options(options: PlayerOptions) {
  localStorage.setItem("player_options", JSON.stringify(options));
}

export class PlayerCore extends Emitter {
  station_id: string;
  player_data?: PlayerData;
  formats?: PlayerFormat[];
  desktop_format?: PlayerFormat; // best guess at the desktop format
  mobile_format?: PlayerFormat; // best guess at the mobile format
  refresh_mode: "none" | "slow" | "fast" = "none";
  requests_core: RequestsCore;
  private _refresh_track_data_interval?: timer;
  private _refresh_metadata_interval?: timer;
  private _audio?: HTMLAudioElement;

  player_options: PlayerOptions = get_or_default_player_options();

  constructor(station_id: string) {
    super();
    this.station_id = station_id;
    this.requests_core = new RequestsCore(station_id);
    Promise.allSettled([
      this._refresh_metadata(),
      this._refresh_formats(),
      this._refresh_track_data(),
    ]).catch(console.error);
  }

  async refresh() {
    await Promise.allSettled([
      this._refresh_metadata(),
      this._refresh_formats(),
      this._refresh_track_data(),
    ]);
  }

  stop_refreshing() {
    if (this.refresh_mode === "none") return;
    clearInterval(this._refresh_metadata_interval);
    clearInterval(this._refresh_track_data_interval);
    this._refresh_metadata_interval = undefined;
    this._refresh_track_data_interval = undefined;
    this.refresh_mode = "none";
    save_player_options(this.player_options);
  }

  check_connection() {
    // todo: check for offline / connectivity issues
    // if we're offline, kill everything

    // determine if we're offline
    let offline = false;

    if (offline) {
      this.stop_refreshing();
      this.unload();
    }
  }

  start_slow_refresh() {
    if (this.refresh_mode === "slow") return;
    if (this.refresh_mode === "fast") return;
    this._refresh_metadata_interval = setInterval(
      () => this._refresh_metadata(),
      1000 * 60 * 5
    );
    this._refresh_track_data_interval = setInterval(
      () => this._refresh_track_data(),
      1000 * 30
    );
    this.refresh_mode = "slow";
  }

  start_fast_refresh() {
    if (this.refresh_mode === "fast") return;
    this._refresh_metadata_interval = setInterval(
      () => this._refresh_metadata(),
      1000 * 30
    );
    this._refresh_track_data_interval = setInterval(
      () => this._refresh_track_data(),
      1000 * 5
    );
    this.refresh_mode = "fast";
  }

  async _refresh_formats() {
    let data = await (
      await fetch(`https://public.radio.co/stations/${this.station_id}/status`)
    ).json();
    this.formats = data.outputs.map((output: any) => {
      return {
        streaming_url: `https://${data.streaming_hostname}/${this.station_id}/${output.name}`,
        name: output.name,
        format: output.format,
        bitrate: output.bitrate,
      };
    });
    this.desktop_format = this.formats!.find(
      (format) => format.format.toLowerCase() === "mp3"
    );
    this.mobile_format = this.formats!.find(
      (format) => format.format.toLowerCase() === "aac"
    );
  }

  async _refresh_metadata() {
    let data = await (
      await fetch(`https://public.radio.co/stations/${this.station_id}/status`)
    ).json();
    const previous_tracks = this.player_data?.previous_tracks;
    const host = data.source.collaborator || AUTOMATED_HOST;
    this.player_data = {
      status: data.status,
      source: data.source.type,
      host_string: host.name,
      // host_string: "",
      collaborators: data.source.collaborators || [],
      current_track: {
        title: data.current_track.title,
        album_art: data.current_track.artwork_url_large,
      },
      previous_tracks:
        previous_tracks ||
        data.history.map((track: any) => {
          return {
            title: track.title,
            album_art: "https://placekitten.com/200/200", // art not available :( (which is weird, it's on the website...)
          };
        }),
    };
    this.emit("metadata", this.player_data);
    this.emit("current_track", this.player_data.current_track);
  }

  _refresh_browser_metadata() {
    if ("mediaSession" in navigator && this._audio) {
      console.log(this.player_data?.current_track.album_art);
      navigator.mediaSession.metadata = new MediaMetadata({
        title: this.player_data?.current_track.title,
        artist: this.player_data?.host_string,
        artwork: [
          {
            src:
              this.player_data?.current_track.album_art ??
              "https://placekitten.com/600/600",
            sizes: "600x600",
            type: "image/jpg",
          },
          // { src: 'https://dummyimage.com/512x512', sizes: '512x512', type: 'image/png' },
          // { src: 'https://dummyimage.com/384x384', sizes: '384x384', type: 'image/png' },
          // { src: 'https://dummyimage.com/256x256', sizes: '256x256', type: 'image/png' },
          // { src: 'https://dummyimage.com/192x192', sizes: '192x192', type: 'image/png' },
          // { src: 'https://dummyimage.com/128x128', sizes: '128x128', type: 'image/png' },
          // { src: 'https://dummyimage.com/96x96', sizes: '96x96', type: 'image/png' },
          // { src: 'https://dummyimage.com/64x64', sizes: '64x64', type: 'image/png' },
          // { src: 'https://dummyimage.com/48x48', sizes: '48x48', type: 'image/png' },
          // { src: 'https://dummyimage.com/32x32', sizes: '32x32', type: 'image/png' },
          // { src: 'https://dummyimage.com/24x24', sizes: '24x24', type: 'image/png' },
          // { src: 'https://dummyimage.com/16x16', sizes: '16x16', type: 'image/png' },
        ],
      });
      navigator.mediaSession.setActionHandler("play", () => this.play());
      navigator.mediaSession.setActionHandler("pause", () => this.pause());
    }
  }

  _refresh_track_data() {
    fetch(`https://public.radio.co/api/v2/${this.station_id}/track/current`)
      .then((res) => res.json())
      .then(async (data) => {
        const new_track: Track = {
          title: data.data.title,
          album_art: data.data.artwork_urls.large,
        };
        if (!this.player_data) {
          await this._refresh_metadata();
          if (!this.player_data) {
            console.error("No player data after force refresh!");
            return;
          }
        }
        if (this.player_data.current_track.title !== new_track.title) {
          this.player_data.previous_tracks.push(this.player_data.current_track);
          if (this.player_data.previous_tracks.length > 10) {
            this.player_data.previous_tracks.shift();
          }
          this.player_data.current_track = new_track;
          this.emit("current_track", new_track);
        }
        this._refresh_browser_metadata();
        save_player_options(this.player_options);
      });
  }

  _get_best_format() {
    if (this.player_options.format === "mobile") {
      return this.mobile_format!;
    } else if (this.player_options.format === "desktop") {
      return this.desktop_format!;
    } else {
      // do a stupid check to see if we're on mobile
      console.log("Autodetected ", isMobile() ? "mobile" : "desktop");
      if (isMobile()) {
        return this.mobile_format!;
      } else {
        return this.desktop_format!;
      }
    }
  }

  get_platform() {
    if (this.player_options.format === "mobile") {
      return "mobile";
    } else if (this.player_options.format === "desktop") {
      return "desktop";
    } else {
      if (isMobile()) {
        return "mobile";
      } else {
        return "desktop";
      }
    }
  }

  async play() {
    if (!this._audio) {
      await this._refresh_formats();
      this._audio = new Audio(this._get_best_format().streaming_url);
    }
    this._audio.volume = this.player_options.volume;
    await this._audio.play();
  }

  pause() {
    if (this._audio) {
      this._audio.pause();
    }
  }

  unload() {
    if (this._audio) {
      this._audio.pause();
      this._audio.remove();
      this._audio = undefined;
    }
    save_player_options(this.player_options);
  }

  volume(volume: number) {
    this.player_options.volume = volume;
    if (this._audio) {
      this._audio.volume = volume;
    }
  }

  setFormat(format: StreamFormat) {
    this.player_options.format = format;
    if (this._audio) {
      toast.promise(
        new Promise<void>((resolve, reject) => {
          this.unload();
          setTimeout(async () => {
            await this.play();
            resolve();
          }, 500);
        }),
        {
          pending: "Changing format...",
          success: "Format changed!",
          error: "Failed to change format!",
        }
      );
    }
  }

  get is_playing() {
    if (!this._audio) {
      return false;
    }
    return !this._audio?.paused;
  }

  get get_volume() {
    return this.player_options.volume;
  }

  get get_preferred_format() {
    return this.player_options.format;
  }
}
