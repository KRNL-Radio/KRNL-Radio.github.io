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
    name: "Winter Break",
    effects: {
      schedule: {
        is_hard_suppression: false,
        message: "We're on break for the holidays! We'll be back soon!",
      },
    },
    schedule: new ScheduleItem(
      new Date(2022, 11, 21, 9, 0),
      new Date(2023, 0, 14, 9, 0),
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
