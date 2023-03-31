import { events } from "../data/events";
import {
  AUTOMATED_HOST,
  hosts,
  KRNL_HOST,
  NOT_FOUND_HOST,
} from "../data/hosts";
import { shows } from "../data/shows";
import { getTheme, themes } from "../themes/core";
import { measureFPS } from "../util/performance";

function RefreshAPI() {
  // TODO: right now, it's read only
  // what if it wasn't >:D
  window.api = window.api || {};
  window.api.fps = measureFPS;
  window.api.refresh = RefreshAPI;
  window.api.data = window.api.data || {};
  window.api.data.events = events;
  window.api.data.hosts = hosts;
  window.api.data.special_hosts = {
    KRNL: KRNL_HOST,
    NOT_FOUND: NOT_FOUND_HOST,
    AUTOMATED: AUTOMATED_HOST,
  };
  window.api.data.shows = shows;
  window.api.data.themes = themes;
  window.api.player = window.api.player || {};
  window.player._refresh_metadata().then(() => {
    window.api.player.formats = {
      desktop: window.player.desktop_format!,
      mobile: window.player.mobile_format!,
    };
    window.api.player.data = window.player.player_data!;
  });
  window.api.requests = window.api.requests || {};
  window.api.requests.options = {
    max_per_day: window.player.requests_core.max_requests_per_day,
    max_per_period: window.player.requests_core.max_requests_per_period,
    period_length: window.player.requests_core.period_length,
  };
  window.api.requests.get_tracks = window.player.requests_core.get_tracks();
  window.api.requests.request_song = window.player.requests_core.request;
  window.api.requests.stats = {
    total: window.player.requests_core.total_requests,
    today: window.player.requests_core.requests_today,
    period: window.player.requests_core.requests_this_period,
    last_request: window.player.requests_core.last_request,
    next_request: window.player.requests_core.probable_next_request,
  };
  window.api.requests.status = window.player.requests_core.status;

  window.api.options = window.api.options || {};
  window.api.options.player = window.player.player_options;
  window.api.options.setPlayerOptions = (options: any) => {
    // merge the options
    let new_options = {
      ...window.player.player_options,
      ...options,
    };
    // save the options
    localStorage.setItem("player_options", JSON.stringify(new_options));
    window.player.player_options = new_options;
    window.api.options.player = new_options;
  };
  window.api.options.theme = getTheme(localStorage.getItem("theme") || "");
  window.api.options.setTheme = (theme: string) => {
    localStorage.setItem("theme", theme);
    window.dispatchEvent(new StorageEvent("storage", { key: "theme" }));
    window.api.options.theme = getTheme(theme);
  };
}

function APIPage() {
  // right let's setup the api!
  RefreshAPI();

  return (
    <div className="flex justify-center items-center h-screen bg-white text-black">
      This page is intentionally left blank.
    </div>
  );
}

export default APIPage;
