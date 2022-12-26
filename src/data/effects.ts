// Various "events" that occur, such as Christmas, Halloween, Graduation, etc. that can change the appearence of the site.

export type BannerEffect = {
  background_color: string;
  site_banner_text?: string;
  site_banner_icon?: string;
  site_banner_link?: string;
  site_banner_link_text?: string;
  home_banner_text?: string;
};

// modifies the player's background effect
// cool name, i know
export type EffectEffect = {
  effect: string;
  options: any[];
};

// suppresses the schedule, useful for breaks!
export type ScheduleEffect = {
  // hard suppress suppresses the schedule entirely, meaning that if someone goes live it won't show up, instead of the "soft suppression", which suppresses everything except if they go live
  is_hard_suppression: boolean;
  message: string;
};
