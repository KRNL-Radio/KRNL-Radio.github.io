import { slugify } from "../util/slug";
import GraysonImg from "../assets/members/grayson.jpg";
import SophieImg from "../assets/members/sophie.jpg";
import AdrienImg from "../assets/members/adrien.jpg";
import ZoeImg from "../assets/members/zoe.jpg";
import TreyImg from "../assets/members/trey.jpg";
import SolaceImg from "../assets/members/solace.jpg";
import JakeImg from "../assets/members/jake.jpg";
import SamiImg from "../assets/members/sami.jpg";
import OrionImg from "../assets/members/orion.jpg";
import EvaImg from "../assets/members/eva.jpg";
import BeanImg from "../assets/members/bean.jpg";
import BruceImg from "../assets/members/bruce.jpg";
import RonnieImg from "../assets/members/ronnie.jpg";
import ValeImg from "../assets/members/vale.jpg";
import OriImg from "../assets/members/ori.jpg";
import LunaImg from "../assets/members/luna.jpg";
import getRandomSplash from "../egg/splash";

// Badge Colors:
// Current (no matter what): gold
// Past: silver
// Alumni: purple

export type HostBadge =
  | "DJ"
  | "Station Manager"
  | "Technical Director"
  | "Program Director"
  | "Financial Director"
  | "Event and Marketing Director"
  | "Music Director"
  | "Sports Director"
  | "Executive Board"
  | "Faculty Advisor"
  | "Alumni"
  | "Honorary"
  | "Past Executive Board" // Either alumni or current students, but no longer on the exec board.
  | "Past" // Not yet alumni, but no longer on the team.
  | "Hidden"; // Hidden from the website. Not *really* a badge, but it's easier to handle it here.

export type Platform =
  | "Instagram"
  | "Twitter"
  | "Facebook"
  | "LinkedIn"
  | "YouTube"
  | "Twitch"
  | "Spotify"
  | "SoundCloud"
  | "Apple Music"
  | "GitHub"
  | "Tumblr"
  | "Email"
  | "TikTok"
  | "Generic";

export type Social = {
  platform: Platform;
  url: string;
};

export type Host = {
  name: string;
  pronouns: string[];
  splash_text: string;
  bio: string;
  image: string;
  socials?: Social[];
  badges?: HostBadge[];
};

export const hosts: Host[] = [
  {
    name: "Adrien",
    pronouns: ["they", "he"],
    splash_text: "Driver of the Clown Car",
    bio: `Hi!! I’m Adrien: alt rock lover, ‘80s music extraordinaire, black lipstick aficionado.
    
[*It’s not a phase, mom.*](https://www.youtube.com/watch?v=Kjr7US2Z9aY)`,
    image: AdrienImg,
    socials: [
      {
        platform: "Instagram",
        url: "https://www.instagram.com/jellybeanz_3/",
      },
      {
        platform: "Spotify",
        url: "https://open.spotify.com/user/akaplan1488",
      },
    ],
    badges: ["DJ", "Station Manager", "Executive Board"],
  },
  {
    name: "Mark",
    pronouns: ["they", "them"],
    splash_text: getRandomSplash(),
    bio: `Hello, world! I'm [Mark](/#/members/luna), and I make stuff and also play music occassionally.


I also somehow ended up providing the station with a stuffed Pikachu. Don't ask, I don't know how that happened either.`,
    image: LunaImg,
    badges: ["DJ", "Station Manager", "Executive Board", "Financial Director"],
  },
  {
    // ... yeah. :c
    name: "Luna",
    pronouns: ["she", "they"],
    splash_text: getRandomSplash(),
    bio: `hello, world! i'm luna! you might know me as someone else. who knows? i sure don't.`,
    image: LunaImg,
    badges: ["Honorary"],
  },
  {
    name: "Sophie",
    pronouns: ["they", "them"],
    splash_text: "The Legend",
    bio: `Heyo! I'm Sophie and I play music sometimes! come share in the vibes! :)`,
    image: SophieImg,
    socials: [
      {
        platform: "Instagram",
        url: "https://www.instagram.com/s_brown_6/",
      },
      {
        platform: "Spotify",
        url: "https://open.spotify.com/user/caucasian_nugget",
      },
    ],
    badges: ["DJ", "Music Director", "Executive Board"],
  },
  {
    name: "Grayson",
    pronouns: ["he", "him"],
    splash_text: "Defender of the World from Nickelback",
    bio: `It's so hard being a single mom when you have no kids and are a male teenager.`,
    image: GraysonImg,
    socials: [
      {
        platform: "Instagram",
        url: "https://www.instagram.com/son_ofgray/",
      },
    ],
    badges: ["DJ", "Sports Director", "Executive Board"],
  },
  {
    name: "Zoe",
    pronouns: ["they", "she"],
    splash_text: "Resident Bookwarm",
    bio: `Hey, I’m Zoe! [Waiting Room by Phoebe Bridgers](https://www.youtube.com/watch?v=cgJLXrOtASc) was my #1 song this year, interpret that how you will.`,
    image: ZoeImg,
    socials: [
      {
        platform: "Instagram",
        url: "https://www.instagram.com/zothevirg.o/",
      },
    ],
    badges: ["DJ"],
  },
  {
    name: "Trey",
    pronouns: ["he", "him"],
    splash_text: "Enjoyer of Things, Listener of Music",
    bio: "Yo, I’m Trey, lover of all things art, media, and entertainment? ...Honestly, I’d enjoy almost anything",
    image: TreyImg,
    socials: [
      {
        platform: "Instagram",
        url: "https://www.instagram.com/ssvfw/",
      },
    ],
    badges: ["DJ"],
  },
  {
    name: "Solace",
    pronouns: ["she", "they"],
    splash_text: "Arch-Bishop of the Church of the Bards",
    bio: "*Missing bio!*",
    image: SolaceImg,
    badges: ["DJ"],
  },
  {
    name: "Jake",
    pronouns: ["he", "him"],
    splash_text: "Season Ticket Holder to the Boonta Eve Classic",
    bio: "Hi! I'm Jake. It wasn't until I worked at a wedding venue that I realized my playlist was mostly millennial reception music.",
    image: JakeImg,
    socials: [
      {
        platform: "Instagram",
        url: "https://www.instagram.com/jakethsnowflaketh",
      },
    ],
    badges: ["DJ"],
  },
  {
    name: "Sami",
    pronouns: ["they", "them"],
    splash_text: "Certified Dog Photo Shower",
    bio: `Hi I’m Sami! I have a very wide range of music taste but Florence + the machine, the crane wives, Marika Hackman, and vocaloid (PAFL) are my go-to! Peace and love Hatsune Miku!`,
    image: SamiImg,
    socials: [
      {
        platform: "Instagram",
        url: "https://www.instagram.com/still.want.a.ferret/",
      },
    ],
    badges: ["DJ"],
  },
  {
    name: "Orion",
    pronouns: OrionPronouns(),
    splash_text: "resident door artist",
    bio: "ex-blonde and sad about it",
    image: OrionImg,
    badges: ["DJ", "Event and Marketing Director", "Executive Board"],
  },
  {
    name: "Eva",
    pronouns: ["She", "they"],
    splash_text: "Lover of all things Cat",
    bio: "Hi! I love to read, sing, and hang with cool people :)",
    image: EvaImg,
    badges: ["DJ"],
  },
  {
    name: "Bean",
    pronouns: ["she", "her"],
    splash_text: "Forklift Certified",
    bio: `just your run of the mill music loving book loving theater kid`,
    image: BeanImg,
    badges: ["DJ", "Technical Director", "Executive Board"],
  },
  {
    name: "Bruce",
    pronouns: ["he", "him"],
    splash_text: "guy",
    bio: "I'm Bruce.",
    image: BruceImg,
    badges: ["DJ"],
  },
  {
    name: "Ronnie",
    pronouns: ["she", "her"],
    splash_text: "Boy Scout",
    bio: "Hi!! If I'm not in the woods, I'm thinking about the woods - blasting music that reminds me of the woods.",
    image: RonnieImg,
    badges: ["DJ"],
  },
  {
    name: "Vale",
    pronouns: ["he", "they"],
    splash_text: "Endorphin orphan morphing lemon cheese equally",
    bio: "Lover of all music. \nI strive to listen to every song ever, so send me to me. \nAlso Jon Mess is my spirit animal.",
    image: ValeImg,
    badges: ["DJ"],
  },
  {
    name: "Ori",
    pronouns: ["she", "they"],
    splash_text: "scottish wannabe",
    bio: "hey hey! i like music that your parents would listen to, music that’s not in english, music you could milk a cow to, and pitbull",
    image: OriImg,
    badges: ["DJ", "Program Director", "Executive Board"],
  },
  {
    name: "Eli",
    pronouns: ["he", "him"],
    splash_text: "",
    bio: "HELP I FORGOT ELI I'M SO SORRY ~Luna",
    image: "",
    badges: ["DJ"],
  },
  // {
  //   name: "Matt",
  //   pronouns: ["he", "him"],
  //   splash_text: "The The",
  //   bio: `Markdown render demo`,
  //   image: "https://picsum.photos/516",
  //   badges: ["Faculty Advisor"],
  // },
];

function OrionPronouns() {
  // random shuffle this!
  const pronouns = ["they", "he"];
  return Math.random() > 0.5 ? pronouns.reverse() : pronouns;
}

export function findHostByName(name: string, slug?: boolean): Host | undefined {
  if (slug === true) {
    return hosts.find((host) => slugify(host.name) === slugify(name));
  }
  return hosts.find((host) => host.name === name);
}

export function getHostByName(name: string): Host {
  return findHostByName(name) ?? NOT_FOUND_HOST;
}

export function getAllHosts(): Host[] {
  // return all of the hosts that aren't hidden
  return hosts.filter((host) => !host.badges?.includes("Hidden"));
}

// So the following three "hosts" are just for internal stuff.
// The first represents the entire station, so if we put on a show that's not hosted by anyone in particular, we can use this.
// The second is just a placeholder for when we can't find a host due to some reason. This should never happen, but it's good to have a fallback.
// The third is for the program that keeps the station running all of the time. (Go buddy :D)
// Because of they way things are implemented (for stability reasons), they share the same properties as a normal host, meaning that they have pronouns,
// a bio, and all of that. This is fine, because they're not actually displayed anywhere.
// The only exception to this is KRNL's socials, which are used for links to KRNL's social media accounts.
// That and the name for the automated host. They're cool.

export const KRNL_HOST: Host = {
  name: "KRNL",
  pronouns: ["they", "them"],
  splash_text: "Everyone is here!",
  bio: "...how'd you get here?",
  image: "#000",
  socials: [
    {
      platform: "Instagram",
      url: "https://instagram.com/krnl_cornell",
    },
    {
      platform: "TikTok",
      url: "https://www.tiktok.com/@krnl_cornell",
    },
    {
      platform: "YouTube",
      url: "https://www.youtube.com/@krnl_cornell",
    },
    {
      platform: "Email",
      url: "mailto:krnl@cornellcollege.edu",
    },
  ],
  badges: ["Hidden"],
};

export const NOT_FOUND_HOST: Host = {
  name: "?",
  pronouns: ["they", "them"],
  splash_text: "The Myth",
  bio: "The member you are searching for isn't here. They may be hiding, or they may not exist at all.",
  image: "",
  badges: ["Hidden"],
};

export const AUTOMATED_HOST: Host = {
  name: "Max Jr.",
  pronouns: ["they", "them"],
  splash_text: "The Machine",
  bio: "Max Jr. is a machine that plays music. They are not a person, but they are a member of the team.",
  image: "",
  badges: ["Hidden"],
};

export function sortHosts(hosts: Host[]): Host[] {
  const HOST_ORDER = [
    "Station Manager",
    "Technical Director",
    "Program Director",
    "Financial Director",
    "Event and Marketing Director",
    "Music Director",
    "Sports Director",
  ];
  return hosts.sort((a, b) => {
    // sort in the following order:
    // station manager
    // technical director
    // program director
    // finance director
    // event and marketing director
    // music director
    // sports director
    // everything else
    // but only if they're currently on exec board (no past execs)
    if (
      a.badges?.includes("Executive Board") &&
      b.badges?.includes("Executive Board")
    ) {
      const a_index = HOST_ORDER.indexOf(
        a.badges?.find((badge) => HOST_ORDER.includes(badge)) ?? "",
      );
      const b_index = HOST_ORDER.indexOf(
        b.badges?.find((badge) => HOST_ORDER.includes(badge)) ?? "",
      );
      console.table({ a_index, b_index, a: a.name, b: b.name });
      if (a_index !== -1 && b_index !== -1) {
        return a_index - b_index;
      }
    } else {
      // if one is on exec board and the other isn't, put the one that is on exec board first
      if (a.badges?.includes("Executive Board")) {
        return -1;
      } else if (b.badges?.includes("Executive Board")) {
        return 1;
      }
    }
    // sort by name
    return a.name.localeCompare(b.name);
  });
}
