import { z, defineCollection, type ImageFunction } from 'astro:content';

const seoSchema = (image: ImageFunction) => z.object({
  title: z.string(),
  description: z.string(),
  type: z.string().optional(),
  image: image().refine((img) => img.width >= 1080, {
    message: 'OG image must be at least 1280 pixels wide!',
  }).optional(),
  keywords: z.string().optional(),
  canonicalUrl: z.string(),
});

const ctaSchema = z.object({
  label: z.string(),
  url: z.string(),
});

const notesCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    draft: z.boolean().default(false),
    title: z.string(),
    featuredImage: image().refine((img) => img.width >= 1280, {
      message: 'Featured image must be at least 1280 pixels wide!',
    }).optional(),
    publishedAt: z.date().nullable(),
    seo: seoSchema(image).optional(),
  }),
});

const workCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    draft: z.boolean().default(false),
    tag: z.string(),
    title: z.string(),
    description: z.string(),
    publishedAt: z.date().nullable(),
    featuredImage: image().refine((img) => img.width >= 1280, {
      message: 'Featured image must be at least 1280 pixels wide!',
    }).optional(),
    live: z.string().optional(),
    services: z.array(z.string()).default([]),
    seo: seoSchema(image).optional(),
  }),
});

const pageCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    cta: ctaSchema.optional(),
    seo: seoSchema(image).optional(),
  }),
});

export const collections = {
  'notes': notesCollection,
  'work': workCollection,
  'pages': pageCollection,
};