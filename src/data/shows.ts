import { slugify } from "../util/slug";
import { getHostByName, Host, KRNL_HOST } from "./hosts";
import { ScheduleItem } from "./schedule";

export type Show = {
  name: string;
  splash_text: string;
  description: string;
  hosts: Host[];
  background: string;
  guests?: string; // any guests on the show. they don't get their own page, but they get a mention on the show page.
  scheduleString: string;
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
    scheduleString: "Every Tuesday from 10pm to 11pm",
    schedule: new ScheduleItem("0 22 * * 2", 60),
  },
  {
    name: "Stochastic Shuffle",
    splash_text: "",
    description:
      "This is a totally unplanned show, where anything can happen (within contractual obligations). There's no logic behind this show, it just is.",
    background: "#0f3cec",
    hosts: [getHostByName("Mark")],
    scheduleString: "Every Monday from 9 pm to 10 pm",
    schedule: new ScheduleItem("0 21 * * 1", 60),
  },
  {
    name: "The Vibe",
    splash_text: "vibes~",
    description:
      "Somehow even *more* random than Mark's show, but at least 10x more chill! Ice not required.\n\n*when he feels like it",
    background: "#1c2dae",
    hosts: [getHostByName("Grayson")],
    scheduleString: "Every Saturday from 9pm to 10pm*",
    schedule: new ScheduleItem("0 21 * * 6", 60),
  },
  {
    name: "The After School Special",
    splash_text: "Because no one else streams earlier!",
    description:
      "I play music, different vibes every week, and do some rambling (usually too much rambling)",
    background: "#6f69dd",
    hosts: [getHostByName("Sophie")],
    scheduleString: "Every Thursday from 3:30pm to 4:30pm",
    schedule: new ScheduleItem("30 15 * * 4", 60),
  },
  {
    name: "Latino Hour",
    splash_text: ":D",
    description: "Just vibe and listen to music from across Latin America.",
    background: "#ddfe60",
    hosts: [getHostByName("Zoe")],
    scheduleString: "Every Friday from 4pm to 5pm",
    schedule: new ScheduleItem("0 16 * * 5", 60),
  },
  {
    name: "Timezones",
    splash_text: "International Music and Good Vibes",
    description:
      "Come and listen to music from all over the world! There's no jet lag here, only Timezones.",
    background: "#232323",
    hosts: [getHostByName("Trey"), getHostByName("Zoe")],
    scheduleString: "Every Wednesday from 3:30pm to 4:30pm",
    schedule: new ScheduleItem("30 15 * * 3", 60),
  },
  {
    name: "The Bard's Tale",
    splash_text: "The only show that matters",
    description: "",
    background: "#ddfe60",
    hosts: [getHostByName("Caden")],
    scheduleString: "Every Sunday from 1pm to 3pm",
    schedule: new ScheduleItem("0 13 * * 0", 120),
  },
  {
    name: "KRNL Tabling!",
    splash_text: "Come say hi!",
    description:
      "We'll be on the third floor of Thomas Commons during lunch! Come say hi! Mark (and someone else we just don't quite know who) will also be live throughout the entirety of lunch!",
    background: "#ddfe60",
    hosts: [KRNL_HOST],
    scheduleString: "Tuesday and Wednesday from 11am to 1pm in Thomas Commons",
    schedule: new ScheduleItem("0 11 24,25 1 *", 120, new Date(2023, 2, 2)),
    hiddenAfter: new Date(2023, 2, 1),
  },
];

export function getShowByName(name: string): Show | undefined {
  return shows.find((show) => show.name === name);
}

export function getShowsByHost(host: Host): Show[] {
  return shows.filter(
    (show) => show.hosts.includes(host) || show.hosts.includes(KRNL_HOST)
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
