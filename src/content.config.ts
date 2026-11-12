import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Every piece of copy the CMS edits is stored as { fr, en }.
// Either language may be left empty; the site falls back to the other one.
const i18n = z
  .object({ fr: z.string().optional().nullable(), en: z.string().optional().nullable() })
  .default({ fr: '', en: '' });

const optionalUrl = z.string().optional().nullable();

const settings = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/settings' }),
  schema: z.object({
    seo: z.object({ title: i18n, description: i18n }),
    hero: z.object({
      title: i18n,
      subtitle: i18n,
      primaryCta: i18n,
      secondaryCta: i18n,
    }),
    about: z.object({
      title: i18n,
      body: i18n,
      facts: z
        .array(z.object({ value: z.string(), label: i18n }))
        .optional()
        .nullable(),
    }),
    solutions: z.object({
      title: i18n,
      intro: i18n,
      items: z.array(
        z.object({
          icon: z.string().default('play'),
          title: i18n,
          body: i18n,
        }),
      ),
    }),
    contact: z.object({
      title: i18n,
      body: i18n,
      email: z.string().optional().nullable(),
      demoUrl: optionalUrl,
    }),
    social: z
      .object({
        linkedin: optionalUrl,
        instagram: optionalUrl,
        facebook: optionalUrl,
        youtube: optionalUrl,
      })
      .optional(),
  }),
});

const products = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/products' }),
  schema: z.object({
    name: z.string(),
    order: z.number().default(0),
    icon: z.string().optional().nullable(),
    url: z.string(),
    appStoreUrl: optionalUrl,
    tagline: i18n,
    description: i18n,
    features: z.array(i18n).optional().nullable(),
    cta: i18n,
    audience: i18n,
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/news' }),
  schema: z.object({
    title: i18n,
    date: z.coerce.date(),
    category: z.enum(['partnership', 'product', 'event', 'company']).default('company'),
    summary: i18n,
    body: i18n,
    image: z.string().optional().nullable(),
    link: optionalUrl,
    draft: z.boolean().default(false),
  }),
});

const clients = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/clients' }),
  schema: z.object({
    name: z.string(),
    logo: z.string().optional().nullable(),
    url: optionalUrl,
    order: z.number().default(0),
    visible: z.boolean().default(true),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    updated: z.string().optional(),
  }),
});

export const collections = { settings, products, news, clients, pages };
