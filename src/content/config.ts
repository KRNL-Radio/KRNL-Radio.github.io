import { z, defineCollection } from "astro:content";

const memberCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    pronouns: z.array(z.string()),
    splash_text: z.string(),
    bio: z.string(),
    // socials: z.optional(z.object()),
    badges: z.array(z.string()),
  }),
});

const showCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    splash_text: z.optional(z.string()),
    description: z.string(),
    hosts: z.array(z.string()),
    schedule: z.object({
      start: z.string(),
      duration: z.number(),
      parseType: z.enum(["cron", "block"]),
      invalidBefore: z.optional(z.date()),
      invalidAfter: z.optional(z.date()),
      invalidBetween: z.optional(z.array(z.date()).length(2)),
    }),
  }),
});

export const collections = {
  members: memberCollection,
  shows: showCollection,
};
