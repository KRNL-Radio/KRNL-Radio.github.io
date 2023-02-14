import { BannerEffect, EffectEffect, ScheduleEffect } from "./effects";
import { ScheduleItem } from "./schedule";

type Event = {
  name: string;
  effects: {
    banner?: BannerEffect;
    effect?: EffectEffect;
    schedule?: ScheduleEffect;
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
      new Date(2022, 11, 22, 9, 0),
      new Date(2023, 0, 15, 9, 0)
    ),
  },
  {
    name: "Spring Break",
    effects: {
      schedule: {
        is_hard_suppression: false,
        message: "We're on break for the holidays! We'll be back soon!",
      },
    },
    schedule: new ScheduleItem(
      new Date(2023, 2, 9, 9, 0),
      new Date(2023, 2, 19, 9, 0)
    ),
  },
  {
    name: "Summer Break",
    effects: {
      schedule: {
        is_hard_suppression: false,
        message: "We're on break for the holidays! We'll be back soon!",
      },
    },
    schedule: new ScheduleItem(
      new Date(2023, 4, 15, 9, 0),
      new Date(2023, 7, 27, 9, 0)
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
    (event) => event.effects.schedule !== undefined
  );
}

export function scheduleSuppressedBy() {
  return getCurrentEvents().filter(
    (event) => event.effects.schedule !== undefined
  );
}

export function isScheduleHardSuppressed() {
  // is it suppressed hard?
  return getCurrentEvents().some(
    (event) =>
      event.effects.schedule !== undefined &&
      event.effects.schedule.is_hard_suppression === true
  );
}

export function hasSiteBanner() {
  return getCurrentEvents().some(
    (event) =>
      event.effects.banner !== undefined &&
      event.effects.banner.site_banner_text !== undefined
  );
}

export function getSiteBanner() {
  return getCurrentEvents().find(
    (event) =>
      event.effects.banner !== undefined &&
      event.effects.banner.site_banner_text !== undefined
  );
}

export function hasHomeBanner() {
  return getCurrentEvents().some(
    (event) =>
      event.effects.banner !== undefined &&
      event.effects.banner.home_banner_text !== undefined
  );
}

export function getHomeBanner() {
  return getCurrentEvents().find(
    (event) =>
      event.effects.banner !== undefined &&
      event.effects.banner.home_banner_text !== undefined
  );
}

export function getEffect() {
  return (
    getCurrentEvents().find((event) => event.effects.effect !== undefined) ||
    "seasonal"
  );
}
