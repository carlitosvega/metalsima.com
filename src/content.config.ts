import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const collections = {
	trabajos: defineCollection({
		// Load Markdown files in the src/contenido/trabajo directory.
		loader: glob({ base: './src/content/trabajo', pattern: '**/*.md' }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),
};
