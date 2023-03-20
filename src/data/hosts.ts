import { slugify } from "../util/slug";
import GraysonImg from "../assets/members/grayson.jpg";
import SophieImg from "../assets/members/sophie.jpg";
import AdrienImg from "../assets/members/adrien.jpg";
import MarkImg from "../assets/members/mark.jpg";
import ZoeImg from "../assets/members/zoe.jpg";
import TreyImg from "../assets/members/trey.jpg";
import CadenImg from "../assets/members/caden.jpg";
import ChickadeeImg from "../assets/members/chickadee.jpg";
import BrockImg from "../assets/members/brock.jpg";
import getRandomSplash from "../egg/splash";

// Badge Colors:
// Current (no matter what): gold
// Past: silver
// Alumni: purple

export type HostBadge =
  | "DJ"
  | "Station Manager"
  | "Public Relations"
  | "Technical Director"
  | "Sports Director"
  | "Record Keeper"
  | "Faculty Advisor"
  | "Alumni"
  | "Past" // Not yet alumni, but no longer on the team.
  | "Hidden"; // Hidden from the website. Not *really* a badge, but it's easier to handle it here.

// export enum Social {
//   "Twitter",
//   "Instagram",
//   "Facebook",
//   "LinkedIn",
//   "YouTube",
//   "Twitch",
//   "Spotify",
//   "Soundcloud",
//   "Apple Music",
//   "GitHub",
//   // Let me know if you want more!
// }

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
  | "TikTok";

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
  // socials: Partial<Record<keyof typeof Social, string>>;
  socials: Social[];
  badges?: HostBadge[];
};

export const hosts: Host[] = [
  {
    name: "Adrien",
    pronouns: ["they", "he"],
    splash_text: "Resurrected Radio Star",
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
    badges: ["DJ", "Station Manager"],
  },
  {
    name: "Mark",
    pronouns: ["he", "they"],
    splash_text: getRandomSplash(),
    bio: `Hello, world! I'm Mark, and I make stuff and also play music occassionally.


I also somehow ended up providing the station with a stuffed Pikachu. Don't ask, I don't know how that happened either.`,
    image: MarkImg,
    socials: [
      {
        platform: "Tumblr",
        url: "https://totallynotmark6.tumblr.com",
      },
      // {
      //   platform: "Twitter",
      //   url: "https://twitter.com/totallynotmark6",
      // },
      {
        platform: "Instagram",
        url: "https://instagram.com/totallynotmark6",
      },
      {
        platform: "YouTube",
        url: "https://youtube.com/@totallynotmark6",
      },
      // {
      //   platform: "Twitch",
      //   url: "https://twitch.tv/TheShawChemist",
      // },
      {
        platform: "GitHub",
        url: "https://github.com/totallynotmark6",
      },
    ],
    badges: ["DJ", "Technical Director"],
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
    badges: ["DJ", "Public Relations"],
  },
  {
    name: "Brock",
    pronouns: ["he", "him"],
    splash_text: "The Elusive One",
    bio: `Hello! I'm Brock, the one that is impossible to get a hold of. I don't know what I'm doing either :)`,
    image: BrockImg,
    socials: [],
    badges: ["DJ", "Sports Director"],
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
    badges: ["DJ", "Record Keeper"],
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
    name: "Caden",
    pronouns: ["they", "them"],
    splash_text: "Arch-Bishop of the Church of the Bards",
    bio: "*Missing bio!*",
    image: CadenImg,
    socials: [],
    badges: ["DJ"],
  },
  {
    name: "Chickadee",
    pronouns: ["they", "them"],
    splash_text: "",
    bio: "*Missing bio!*",
    image: ChickadeeImg, // TODO: get actual image :D
    socials: [],
    badges: ["DJ"],
  },
  // {
  //   name: "Matt",
  //   pronouns: ["he", "him"],
  //   splash_text: "The The",
  //   bio: `Markdown render demo`,
  //   image: "https://picsum.photos/516",
  //   socials: [],
  //   badges: ["Faculty Advisor"],
  // },
];

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
      platform: "Twitter",
      url: "https://twitter.com/krnl_cornell",
    },
    {
      platform: "TikTok",
      url: "https://www.tiktok.com/@krnl_cornell",
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
  socials: [],
  badges: ["Hidden"],
};

export const AUTOMATED_HOST: Host = {
  name: "Max Jr.",
  pronouns: ["they", "them"],
  splash_text: "The Machine",
  bio: "Max Jr. is a machine that plays music. They are not a person, but they are a member of the team.",
  image: "",
  socials: [],
  badges: ["Hidden"],
};
