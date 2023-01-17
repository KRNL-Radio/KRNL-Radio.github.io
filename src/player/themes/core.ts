export type ThemeType = "particles" | "background";

export type Theme = {
  name: string;
  description?: string;
  type: ThemeType;
  // if the theme is a background, the options is the css background property
  // or if the first option is "tailwind", the remaining options are the tailwind classes
  // if the theme is a particles, the options is the particles.js config
  options: any[];
};

export const themes: Theme[] = [
  {
    name: "Default",
    type: "background",
    options: ["#000000", "#ffffff"],
  },
  {
    name: "OLED Lover",
    type: "background",
    options: ["#000000"],
  },
];

export function getTheme(name: string) {
  return themes.find((theme) => theme.name === name);
}

export function getDefaultTheme() {
  let isSafari =
    navigator.vendor &&
    navigator.vendor.indexOf("Apple") > -1 &&
    navigator.userAgent &&
    navigator.userAgent.indexOf("CriOS") === -1 &&
    navigator.userAgent.indexOf("FxiOS") === -1;
  if (isSafari) {
    return getTheme("");
  } else {
    return getTheme("Seasonal");
  }
}
