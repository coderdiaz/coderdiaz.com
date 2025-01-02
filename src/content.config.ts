import { glob } from "astro/loaders";
import { z, defineCollection, type ImageFunction } from "astro:content";

const seoSchema = (image: ImageFunction) =>
  z.object({
    title: z.string(),
    description: z.string(),
    type: z.string().optional(),
    image: image().optional(),
    keywords: z.string().optional(),
    canonicalUrl: z.string(),
  });

const ctaSchema = z.object({
  label: z.string(),
  url: z.string(),
});

const notesCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/notes" }),
  schema: ({ image }) =>
    z.object({
      draft: z.boolean().default(false),
      title: z.string(),
      featuredImage: image().optional(),
      publishedAt: z.date().nullable(),
      seo: seoSchema(image).optional(),
    }),
});

const workCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/work" }),
  schema: ({ image }) =>
    z.object({
      draft: z.boolean().default(false),
      tag: z.string(),
      title: z.string(),
      description: z.string(),
      publishedAt: z.date().nullable(),
      featuredImage: image().optional(),
      live: z.string().optional(),
      year: z.number().default(2024),
      services: z.array(z.string()).default([]),
      seo: seoSchema(image).optional(),
    }),
});

const pageCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/pages" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      cta: ctaSchema.optional(),
      seo: seoSchema(image).optional(),
    }),
});

export const collections = {
  notes: notesCollection,
  work: workCollection,
  pages: pageCollection,
};
