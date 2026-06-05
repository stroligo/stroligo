import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const homeLabelsSchema = z.object({
  brandTagline: z.string(),
  seoTitle: z.string(),
  seoDescription: z.string(),
  ogDescription: z.string(),
  navAbout: z.string(),
  navWork: z.string(),
  navProjects: z.string(),
  navContact: z.string(),
  navResume: z.string(),
  navLinkedin: z.string(),
  navHome: z.string(),
  heroLinkedinCta: z.string(),
  heroExploreProjects: z.string(),
  heroExperience: z.string(),
  heroStatsProjects: z.string(),
  heroStatsFeatured: z.string(),
  heroStatsRoles: z.string(),
  aboutTitle: z.string(),
  stackTitle: z.string(),
  workTitle: z.string(),
  workSubtitle: z.string(),
  workCurrent: z.string(),
  projectsTitle: z.string(),
  projectsSubtitle: z.string(),
  projectsLinkedinAll: z.string(),
  projectsBehanceCta: z.string(),
  projectsViewSite: z.string(),
  projectsFeaturedTitle: z.string(),
  projectsFeaturedSubtitle: z.string(),
  projectsCountOne: z.string(),
  projectsCountMany: z.string(),
  contactTitle: z.string(),
  contactSubtitle: z.string(),
  contactEmailIntro: z.string(),
})

const categoriesSchema = z.object({
  todos: z.string(),
  impacto: z.string(),
  saude: z.string(),
  ambiente: z.string(),
  institucional: z.string(),
})

const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  organization: z.string(),
  description: z.string(),
  body: z.string().optional(),
  tags: z.array(z.string()),
  stack: z.array(z.string()).optional(),
})

const experienceItemSchema = z.object({
  id: z.string(),
  company: z.string(),
  role: z.string(),
  period: z.string(),
  location: z.string(),
  highlight: z.string(),
  details: z.string(),
  body: z.string().optional(),
  yearStart: z.number(),
  yearEnd: z.number().nullable().optional(),
  url: z.string().optional(),
  current: z.boolean().optional(),
  stack: z.array(z.string()).optional(),
})

const socialItemSchema = z.object({
  label: z.string(),
  description: z.string(),
})

const socialSchema = z.object({
  cv: socialItemSchema,
  linkedin: socialItemSchema,
  github: socialItemSchema,
  behance: socialItemSchema,
  email: socialItemSchema,
  whatsapp: socialItemSchema,
})

export default defineContentConfig({
  collections: {
    portfolioHome: defineCollection({
      type: 'data',
      source: 'portfolio/*/home.json',
      schema: homeLabelsSchema,
    }),
    portfolioProfile: defineCollection({
      type: 'data',
      source: 'portfolio/*/profile.json',
      schema: z.object({
        tagline: z.string(),
        location: z.string(),
        experienceYears: z.string(),
        resumeLabel: z.string(),
        about: z.array(z.string()),
        stack: z.array(z.string()),
      }),
    }),
    portfolioProject: defineCollection({
      type: 'data',
      source: 'portfolio/*/projects/*.json',
      schema: projectSchema,
    }),
    portfolioExperiences: defineCollection({
      type: 'data',
      source: 'portfolio/*/experiences.json',
      schema: z.object({
        items: z.array(experienceItemSchema),
      }),
    }),
    portfolioSocial: defineCollection({
      type: 'data',
      source: 'portfolio/*/social.json',
      schema: socialSchema,
    }),
    portfolioCategories: defineCollection({
      type: 'data',
      source: 'portfolio/*/categories.json',
      schema: categoriesSchema,
    }),
  },
})
