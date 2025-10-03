import { slugify } from "../util/slug";
import { getHostByName, Host, KRNL_HOST } from "./hosts";
import { ScheduleItem } from "./schedule";
import TSLogo from "../assets/logos/twin-suns.png"; // credit: jake
import ASLogo from "../assets/logos/after-sunset.png"; // credit: bruce
import ASSLogo from "../assets/logos/after-school-special.png"; // credit: bruce

export type ShowLogo = {
  transparent: string;
  opaque: string;
};

export type Show = {
  name: string;
  splash_text: string;
  description: string;
  hosts: Host[];
  logo?: ShowLogo;
  background?: string;
  guests?: string; // any guests on the show. they don't get their own page, but they get a mention on the show page.
  schedule: ScheduleItem;
  hidden?: boolean;
  hiddenAfter?: Date;
};

export const shows: Show[] = [
  {
    name: "Stochastic Shuffle",
    splash_text: "Unpredictability at its finest - every time, by design!",
    description:
      "This is a totally unplanned show, where anything can happen (within contractual obligations). There's no logic behind this show, it just is.",
    background: "#0f3cec",
    hosts: [getHostByName("Mark")],
    schedule: new ScheduleItem("0 21 * * 1", 60),
  },
  {
    name: "After Sunset",
    splash_text: "",
    description:
      "50 or so minutes of music based on a theme. Contains multitudes.",
    background: "#ddfe60",
    hosts: [getHostByName("Bruce")],
    logo: {
      transparent: ASLogo,
      opaque: ASLogo,
    },
    schedule: new ScheduleItem("0 20 * * 6", 60),
  },
  {
    name: "Craft Time",
    splash_text: "",
    description: "",
    background: "#ddfe60",
    hosts: [getHostByName("Ronnie"), getHostByName("Ori")],
    schedule: new ScheduleItem("15 16 * * 3", 60),
  },
  // {
  //   name: "Relics",
  //   splash_text: "",
  //   description: "",
  //   background: "#ddfe60",
  //   hosts: [getHostByName("Mark"), getHostByName("Sophie")],
  //   schedule: new ScheduleItem("30 20 * * 3", 60),
  // },
  {
    name: "Hour of Chaos",
    splash_text: "",
    description: "",
    background: "#ddfe60",
    hosts: [getHostByName("Bean")],
    schedule: new ScheduleItem("0 16 * * 2", 60),
  },
  {
    name: "Kapua's Kapolitics",
    splash_text: "",
    description: "",
    background: "#ddfe60",
    hosts: [getHostByName("Kapua")],
    schedule: new ScheduleItem("0 17 * * 3", 60),
  },
  {
    name: "The Yap",
    splash_text: "",
    description: "",
    background: "#ddfe60",
    hosts: [getHostByName("Camille")],
    schedule: new ScheduleItem("0 17 * * 4", 60),
  },
  {
    name: "Bop Culture",
    splash_text: "",
    description: "",
    background: "#ddfe60",
    hosts: [getHostByName("Chrysalis"), getHostByName("Kira")],
    schedule: new ScheduleItem("0 18 * * 4", 60),
  },
  {
    name: "McD Music",
    splash_text: "",
    description: "",
    background: "#ddfe60",
    hosts: [getHostByName("Andrew")],
    schedule: new ScheduleItem("0 16 * * 5", 60),
  },
  {
    name: "Fall Out Boy Fridays",
    splash_text: "",
    description: "",
    background: "#ddfe60",
    hosts: [getHostByName("Frankie")],
    schedule: new ScheduleItem("0 19 * * 5", 60),
  },
];

export function getShowByName(name: string): Show | undefined {
  return shows.find((show) => show.name === name);
}

export function getShowsByHost(host: Host): Show[] {
  return shows.filter(
    (show) => show.hosts.includes(host) || show.hosts.includes(KRNL_HOST),
  );
}

export function getAllShows(): Show[] {
  return shows.filter((show) => {
    if (show.hidden === true) {
      return false;
    }
    if (show.hiddenAfter !== undefined) {
      if (show.hiddenAfter.getTime() < Date.now()) {
        return false;
      }
    }
    return true;
  });
}

export function findShowByName(name: string, slug?: boolean): Show | undefined {
  if (slug === true) {
    return shows.find((show) => slugify(show.name) === slugify(name));
  }
  return shows.find((show) => show.name === name);
}

export function getNearestShows(): Show[] {
  // const now = new Date();
  const nearest = getAllShows()
    .filter((show) => show.schedule.getNextOccurance() !== undefined)
    .sort((a, b) => {
      const aDate = a.schedule.getNextOccurance();
      const bDate = b.schedule.getNextOccurance();
      if (aDate === undefined || bDate === undefined) {
        return 0;
      }
      return aDate.getTime() - bDate.getTime();
    });
  return nearest;
}

export function getCurrentShows(): Show[] {
  return getAllShows().filter((show) => show.schedule.isCurrent());
}

export function sortShowsByNextOccurance(shows: Show[]): Show[] {
  return shows.sort((a, b) => {
    const aDate = a.schedule.getNextOccurance();
    const bDate = b.schedule.getNextOccurance();
    if (aDate === undefined || bDate === undefined) {
      // whatever one has a date is first
      if (aDate !== undefined) {
        return -1;
      }
      if (bDate !== undefined) {
        return 1;
      }
      // else, they're both undefined, so by name it goes!
      return a.name.localeCompare(b.name);
    }
    return aDate.getTime() - bDate.getTime();
  });
}

export function sortShowsByName(shows: Show[]): Show[] {
  return shows.sort((a, b) => {
    // if the show starts with "The", ignore it
    const aName = a.name.startsWith("The ") ? a.name.slice(4) : a.name;
    const bName = b.name.startsWith("The ") ? b.name.slice(4) : b.name;
    return aName.localeCompare(bName);
  });
}
