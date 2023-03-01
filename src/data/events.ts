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
  {
    name: "The Big Event",
    effects: {
      banner: {
        background_theme: {
          type: "tailwind",
        },
        site_banner_text: "The Big Event is today!!",
        site_banner_icon: solid("calendar"),
        home_banner_text: `The Big Event is happening *today*! Come join PAAC, the Big Event Comittee, and, of course, us, for a concert by Bryce Vine!
        
(We'll be posting updates to our Twitter and Instagram once the time is closer!)`,
      },
    },
    schedule: new ScheduleItem(
      new Date(2023, 1, 18, 0, 0),
      new Date(2023, 1, 19, 1, 0)
    ),
  },
  {
    name: "Big Event Karaoke",
    effects: {
      banner: {
        background_theme: {
          type: "tailwind",
          tailwind_options: ["from-blue-500", "to-blue-700"],
        },
        site_banner_text: "Big Event Karaoke is happening right now on the OC!",
        site_banner_icon: solid("microphone"),
        home_banner_text: `We (along with The Big Event Committee) are hosting the Big Event Karaoke Night! Come sing on the OC!

(You can sing just about anything, but sing anything by Bryce Vine and you'll (potentially) get a special prize!)`,
      },
      meta: {
        title: "Big Event Karaoke starts soon!",
        subtitle: "Go sing songs on the OC!",
      },
    },
    schedule: new ScheduleItem(
      new Date(2023, 1, 16, 19, 55),
      new Date(2023, 1, 16, 22, 5)
    ),
  },
  {
    name: "Iowa 'We Say Gay' Walkout",
    effects: {
      banner: {
        background_theme: {
          type: "tailwind",
          tailwind_options: ["from-slate-900", "to-slate-800"],
        },
        site_banner_text: "🏳️‍🌈 Iowa 'We Say Gay' Walkout 🏳️‍⚧️",
        home_banner_text: `Iowa students are walking out of class today to protest the ever growing number of anti-LGBTQ+ bills in the state legislature. We stand with them in solidarity.
        
[*Contact Your Representatives*](https://www.house.gov/representatives/find-your-representative)

[*Iowa Bill Watch*](https://docs.google.com/document/d/1b2Jq7Vczsd6Slin-vSIvPpUkwQym6FXhx2y1DOV0G6Y/edit)

[*Affiliated Organizations at Cornell*](https://www.cornellcollege.edu/intercultural-life/organizations.shtml)

🏳️‍🌈🏳️‍⚧️
`,
      },
    },
    schedule: new ScheduleItem(
      new Date(2023, 2, 1, 9, 50),
      new Date(2023, 2, 1, 11, 10)
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
  // TODO: this!
  return (
    getCurrentEvents().find((event) => event.effects.theme !== undefined) ||
    "Seasonal"
  );
}
