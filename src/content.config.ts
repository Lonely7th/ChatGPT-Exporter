import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    updated: z.iso.date(),
    published: z.iso.date(),
    order: z.number(),
    minutes: z.number(),
  }),
});
export const collections = { guides };
