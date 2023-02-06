import {
  FIRE_THEME,
  FOUNTAIN_THEME,
  SEA_ANEMONE_THEME,
  SNOW_THEME,
} from "../themes";

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
    name: "Fountain",
    type: "particles",
    options: [FOUNTAIN_THEME],
  },
  {
    name: "Sea Anemone",
    type: "particles",
    options: [SEA_ANEMONE_THEME],
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
    name: "Seasonal - Winter",
    type: "particles",
    options: [SNOW_THEME],
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
