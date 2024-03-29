import { CSSProperties } from "react";
import {
  FIREWORKS_THEME,
  FIRE_THEME,
  FOUNTAIN_THEME,
  PRIDE_THEME,
  RABBIT_THEME,
  SEA_ANEMONE_THEME,
  SNOW_THEME,
  SPRING_THEME,
  FALL_THEME,
} from "../player/themes";

export type ThemeType =
  | "particles"
  | "background"
  | "audio"
  | "dynamic"
  | "tailwind";

export type Theme = {
  name: string;
  description?: string;
  type: ThemeType;
  // if the theme is a background, the options are the css background properties
  // if the theme is tailwind, the options are the tailwind classes
  // if the theme is a particles, the options is the particles.js config
  // if the theme is audio, it requires a CANVAS and to be connected to player.audio_node (or whatever i named it)
  // if the theme is dynamic, the function (first elem of list) is called to return the theme
  // that result should be a string that corresponds to a theme name
  // the second elem is how long to wait before calling the function again (in ms)

  // this can return a promise, so you can do async stuff! (useful for dynamic/audio/particles themes)
  options: any[];
  hidden?: boolean;
};

type TailwindDirection = "t" | "tl" | "l" | "bl" | "b" | "br" | "r" | "tr";

export type TinyTheme = {
  type: "css" | "tailwind";
  css_options?: CSSProperties | (() => CSSProperties);
  tailwind_options?: string[];
  tw_large_direction?: TailwindDirection;
  tw_small_direction?: TailwindDirection;
};

export function toTailwind(direction: TailwindDirection) {
  switch (direction) {
    case "t":
      return "bg-gradient-to-t";
    case "tl":
      return "bg-gradient-to-tl";
    case "l":
      return "bg-gradient-to-l";
    case "bl":
      return "bg-gradient-to-bl";
    case "b":
      return "bg-gradient-to-b";
    case "br":
      return "bg-gradient-to-br";
    case "r":
      return "bg-gradient-to-r";
    case "tr":
      return "bg-gradient-to-tr";
  }
}

export const themes: Theme[] = [
  {
    name: "Default",
    type: "tailwind",
    options: [
      "bg-gradient-to-r",
      "from-green-300",
      "via-blue-500",
      "to-purple-600",
    ],
  },
  {
    name: "Seasonal",
    type: "dynamic",
    options: [
      () => {
        let month = new Date().getMonth() + 1;
        switch (month) {
          case 1:
          case 2:
            return "Seasonal - Winter";
          case 3:
          case 4:
          case 5:
            return "Seasonal - Spring";
          case 6:
            return "Seasonal - Pride";
          case 7:
          case 8:
            return "Seasonal - Summer";
          case 9:
          case 10:
          case 11:
            return "Seasonal - Autumn";
          case 12:
            return "Seasonal - Winter";
          default:
            return "Default";
        }
      },
      1000 * 60 * 60 * 24, // 1 day
    ],
  },
  {
    name: "OLED Lover",
    type: "background",
    options: [
      {
        background: "#000",
      },
    ],
  },
  {
    name: "Fire",
    type: "particles",
    options: [FIRE_THEME],
  },
  {
    name: "Fireworks",
    type: "particles",
    options: [FIREWORKS_THEME],
  },
  {
    name: "Fountain",
    type: "particles",
    options: [FOUNTAIN_THEME],
  },
  {
    name: "Rabbits",
    type: "particles",
    options: [RABBIT_THEME],
  },
  {
    name: "Sea Anemone",
    type: "particles",
    options: [SEA_ANEMONE_THEME],
  },
  {
    name: "Seasonal - Winter",
    type: "particles",
    options: [SNOW_THEME],
  },
  {
    name: "Seasonal - Spring",
    type: "particles",
    options: [SPRING_THEME],
  },
  {
    name: "Seasonal - Pride",
    type: "particles",
    options: [PRIDE_THEME],
  },
  {
    // going to be honest, i have no idea what to do for a summer theme
    // just gonna leave this here? gradient doesn't look terrible.
    // maybe i'll do something with the particles later.
    // idk.
    name: "Seasonal - Summer",
    type: "tailwind",
    options: [
      "bg-gradient-to-r",
      "from-yellow-300",
      "via-red-500",
      "to-pink-600",
    ],
  },
  {
    name: "Seasonal - Autumn",
    type: "particles",
    options: [FALL_THEME],
  },
  // {
  //   name: "Weather",
  //   type: "dynamic",
  //   options: [
  //     async () => {
  //       // TODO: THIS
  //     },
  //     1000 * 60 * 60, // 1 hour
  //   ]
  // }
];

export const BLANK_THEME: Theme = {
  name: "",
  type: "background",
  options: [
    {
      background: "black",
    },
  ],
};

export function getTheme(name: string) {
  let found = themes.find((theme) => theme.name === name);
  if (!found) {
    console.warn(`Theme "${name}" not found!`);
    found = themes[0];
  }
  return found;
}

export function getAllThemes() {
  return themes;
}

export function getDefaultTheme() {
  return getTheme("Seasonal");
}
