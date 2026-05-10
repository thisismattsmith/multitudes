import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
    // Memo metadata — populates the post page's TO and FROM fields.
    to: z.string().optional().default('All'),
    author: z.string().optional().default('Matt Smith'),
  }),
});

export const collections = { blog };
