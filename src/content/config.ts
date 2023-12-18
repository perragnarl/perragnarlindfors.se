import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pub: z.coerce.date(),
		updated: z.coerce.date().optional(),
		hero: z.string().optional(),
	}),
});

export const collections = { blog };
