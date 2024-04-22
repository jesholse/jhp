import { z, defineCollection } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subTitle: z.string(),
    countries: z.array(z.string()),
    excerpt: z.string(),
  }),
});

const pageCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
  }),
});

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string().default("Jeshol"),
    image: z.string(),
    excerpt: z.string(),
    publishDate: z.string(),
  }),
});
