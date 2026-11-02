import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Each project is a chapter: one .mdx file in src/content/chapters.
const chapters = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/chapters" }),
  schema: z.object({
    chapter: z.number().int().positive(),
    title: z.string(),
    jp: z.string().optional(), // optional Japanese subtitle under the title
    summary: z.string(),
    stack: z.array(z.string()).default([]),
    year: z.number().int().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { chapters };
