// Various "events" that occur, such as Christmas, Halloween, Graduation, etc. that can change the appearence of the site.

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Theme, TinyTheme } from "../themes/core";

export type BannerEffect = {
  background_theme: TinyTheme;
  site_banner_text?: string;
  site_banner_icon?: IconDefinition;
  site_banner_link?: string;
  site_banner_link_text?: string;
  home_banner_text?: string;
};

// modifies the player's background effect
// cool name, i know
// ONLY OVERRIDES IF THE THEME IS SET TO "Default"
export type ThemeEffect = {
  theme: Theme;
};

// suppresses the schedule, useful for breaks!
export type ScheduleEffect = {
  // hard suppress suppresses the schedule entirely, meaning that if someone goes live it won't show up, instead of the "soft suppression", which suppresses everything except if they go live
  // hard suppression isn't implemented (yet), i'm not truly checking for that
  is_hard_suppression: boolean;
  message: string;
};

// does nothing... yet.
// eventually going to be used for notificatons and whatnot
export type MetaEffect = {
  title?: string;
  subtitle?: string;
  body?: string;
};
