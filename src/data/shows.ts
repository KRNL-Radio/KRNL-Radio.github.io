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
    name: "The Graveyard Shift",
    splash_text: "",
    description:
      "Alt is such a broad genre. What does any of it even mean? All I know is you love listening to me every week.",
    background: "#fc73e3",
    hosts: [getHostByName("Adrien")],
    schedule: new ScheduleItem("0 22 * * 2", 60),
  },
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
    name: "The Vibe",
    splash_text: "vibes~",
    description:
      "Somehow even *more* random than Luna's show, but at least 10x more chill! Ice not required.\n\n*when he feels like it",
    background: "#1c2dae",
    hosts: [getHostByName("Grayson")],
    schedule: new ScheduleItem("0 16 * * 0", 60),
  },
  {
    name: "The After School Special",
    splash_text: "Because no one else streams earlier!",
    description:
      "I play music, different vibes every week, and do some rambling (usually too much rambling)",
    background: "#6f69dd",
    hosts: [getHostByName("Sophie")],
    logo: {
      transparent: ASSLogo,
      opaque: ASSLogo,
    },
    schedule: new ScheduleItem("15 15 * * 4", 60),
  },
  {
    name: "Latino Hour",
    splash_text: "",
    description: `Just vibe and listen to music from across Latin America.
    
[**Suggestions form!**](https://forms.gle/RuyBbKaaxmkEQ3bD9) (Requires Cornell Email! Use the Contact Form if you don't have one)`,
    background: "#ddfe60",
    hosts: [getHostByName("Zoe")],
    schedule: new ScheduleItem("0 16 * * 5", 60),
  },
  {
    name: "Timezones",
    splash_text: "International Music and Good Vibes",
    description:
      "Come and listen to music from all over the world! There's no jet lag here, only Timezones.",
    background: "#232323",
    hosts: [getHostByName("Trey")],
    schedule: new ScheduleItem("30 15 * * 3", 60),
  },
  // {
  //   name: "The Bard's Tale",
  //   splash_text: "Where every note tells a tale of bravery, magic, and mayhem!",
  //   description: "",
  //   background: "#ddfe60",
  //   hosts: [getHostByName("Solace")],
  //   scheduleString: "Every Sunday from 1pm to 3pm",
  //   schedule: new ScheduleItem("0 13 * * 0", 120),
  // },
  {
    name: "CCPR",
    splash_text: "Cornell College Public Radio",
    description: "Because we can do anything in 18 ~~days~~ minutes!",
    background: "#ddfe60",
    hosts: [getHostByName("Adrien"), getHostByName("Sophie")],
    schedule: new ScheduleItem("5 8 * * 1", 18),
  },
  // {
  //   name: "CCPR (Previously Recorded)",
  //   splash_text: "",
  //   description: "Missed the live show? No worries, we got you covered!",
  //   background: "#ddfe60",
  //   hosts: [getHostByName("Adrien"), getHostByName("Sophie")],
  // }
  {
    name: "Twin Suns",
    splash_text: "",
    description:
      "One of us knows a lot about Star Wars, the other... ¯\\\\\\_(ツ)_/¯",
    background: "#ddfe60",
    hosts: [getHostByName("Jake"), getHostByName("Sami")],
    logo: {
      transparent: TSLogo,
      opaque: TSLogo,
    },
    schedule: new ScheduleItem("30 20 * * 2", 60),
  },
  {
    name: "Melatonin",
    splash_text: "",
    description: "WORK IN PROGRESS - Check Instagram for updates!",
    background: "#ddfe60",
    // logo: {
    //   transparent: "https://placekitten.com/521/521",
    //   opaque: "https://placekitten.com/200/200",
    // },
    hosts: [getHostByName("Mark")],
    schedule: new ScheduleItem("0 23 * * 0", 120),
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
    schedule: new ScheduleItem("30 16 * * 1", 60),
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
    name: "Replay",
    splash_text: "",
    description: "",
    background: "#ddfe60",
    hosts: [getHostByName("Vale")],
    schedule: new ScheduleItem("0 15 * * 0", 60),
  },
  {
    name: "Hour of Chaos",
    splash_text: "",
    description: "",
    background: "#ddfe60",
    hosts: [getHostByName("Bean")],
    schedule: new ScheduleItem("0 16 * * 2", 60),
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
