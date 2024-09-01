import { z, defineCollection } from "astro:content";

const memberCollection = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        pronouns: z.array(z.string()),
        splash_text: z.string(),
        bio: z.string(),
        // socials: z.object(),
        badges: z.array(z.string()),
    }),
})

const showCollection = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        splash_text: z.string(),
        description: z.string(),
        hosts: z.array(z.string()),
    }),
})

export const collections = {
    'members': memberCollection,
    'shows': showCollection,
}
