import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import {
  BannerEffect,
  MetaEffect,
  ScheduleEffect,
  ThemeEffect,
} from "./effects";
import { ScheduleItem } from "./schedule";

type Event = {
  name: string;
  effects: {
    banner?: BannerEffect;
    theme?: ThemeEffect;
    schedule?: ScheduleEffect;
    meta?: MetaEffect;
  };
  schedule: ScheduleItem;
};

export const events: Event[] = [
  {
    name: "Graduation",
    effects: {
      banner: {
        background_theme: {
          type: "tailwind",
        },
        home_banner_text:
          "Congrats Brock, Garnett, and Chickadee! We'll miss you!",
        site_banner_text: "Congrats Brock, Garnett, and Chickadee!",
      },
    },
    schedule: new ScheduleItem(
      // may 12, 2024
      new Date(2024, 4, 12, 0, 0),
      new Date(2024, 4, 17, 0, 0),
    ),
  },
];

export function getCurrentEvents() {
  return events.filter((event) => event.schedule.isCurrent());
}

export function getAllEvents() {
  return events;
}

export function isScheduleSuppressed() {
  // is it suppressed (either hard or soft?)
  return getCurrentEvents().some(
    (event) => event.effects.schedule !== undefined,
  );
}

export function scheduleSuppressedBy() {
  return getCurrentEvents().filter(
    (event) => event.effects.schedule !== undefined,
  );
}

export function isScheduleHardSuppressed() {
  // is it suppressed hard?
  return getCurrentEvents().some(
    (event) =>
      event.effects.schedule !== undefined &&
      event.effects.schedule.is_hard_suppression === true,
  );
}

export function hasSiteBanner() {
  return getCurrentEvents().some(
    (event) =>
      event.effects.banner !== undefined &&
      event.effects.banner.site_banner_text !== undefined,
  );
}

export function getSiteBanner() {
  return getCurrentEvents().find(
    (event) =>
      event.effects.banner !== undefined &&
      event.effects.banner.site_banner_text !== undefined,
  );
}

export function hasHomeBanner() {
  return getCurrentEvents().some(
    (event) =>
      event.effects.banner !== undefined &&
      event.effects.banner.home_banner_text !== undefined,
  );
}

export function getHomeBanner() {
  return getCurrentEvents().find(
    (event) =>
      event.effects.banner !== undefined &&
      event.effects.banner.home_banner_text !== undefined,
  );
}

export function getOverrideTheme() {
  return getCurrentEvents().find((event) => event.effects.theme !== undefined);
}
