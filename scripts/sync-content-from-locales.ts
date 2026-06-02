/**
 * Gera ficheiros em content/portfolio/ a partir de locales/pt.ts e locales/en.ts.
 * Uso: npm run sync:content
 */
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import { experiencesForLocale } from '../data/experiences'
import en from '../locales/en'
import pt from '../locales/pt'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const contentRoot = join(root, 'content', 'portfolio')

type LocaleBundle = typeof pt

function writeJson(path: string, data: unknown) {
  mkdirSync(dirname(path), { recursive: true })
  writeFileSync(path, `${JSON.stringify(data, null, 2)}\n`, 'utf8')
}

function exportLocale(code: 'pt' | 'en', m: LocaleBundle) {
  const base = join(contentRoot, code)

  const home = {
    brandTagline: m.brand.tagline,
    seoTitle: m.seo.title,
    seoDescription: m.seo.description,
    ogDescription: m.seo.ogDescription,
    navAbout: m.nav.about,
    navWork: m.nav.work,
    navProjects: m.nav.projects,
    navContact: m.nav.contact,
    navResume: m.nav.resume,
    navLinkedin: m.nav.linkedin,
    navHome: m.nav.home,
    heroLinkedinCta: m.hero.linkedinCta,
    heroExploreProjects: m.hero.exploreProjects,
    heroExperience: m.hero.experience,
    heroStatsProjects: m.hero.stats.projects,
    heroStatsFeatured: m.hero.stats.featured,
    heroStatsRoles: m.hero.stats.roles,
    aboutTitle: m.about.title,
    stackTitle: m.about.stackTitle,
    workTitle: m.work.title,
    workSubtitle: m.work.subtitle,
    workCurrent: m.work.current,
    projectsTitle: m.projects.title,
    projectsSubtitle: m.projects.subtitle,
    projectsLinkedinAll: m.projects.linkedinAll,
    projectsBehanceCta: m.projects.behanceCta,
    projectsViewSite: m.projects.viewSite,
    projectsFeaturedTitle: m.projects.featuredTitle,
    projectsFeaturedSubtitle: m.projects.featuredSubtitle,
    projectsCountOne: m.projects.countOne,
    projectsCountMany: m.projects.countMany,
    contactTitle: m.contact.title,
    contactSubtitle: m.contact.subtitle,
    contactEmailIntro: m.contact.emailIntro,
  }

  writeJson(join(base, 'home.json'), home)
  writeJson(join(base, 'profile.json'), {
    tagline: m.profile.tagline,
    location: m.profile.location,
    experienceYears: m.profile.experienceYears,
    resumeLabel: m.profile.resumeLabel,
    about: m.about.paragraphs,
    stack: m.profile.stack,
  })
  writeJson(join(base, 'categories.json'), m.projects.categories)
  writeJson(join(base, 'experiences.json'), {
    items: experiencesForLocale(code),
  })
  writeJson(join(base, 'social.json'), m.social)

  for (const item of m.projects.items) {
    writeJson(join(base, 'projects', `${item.id}.json`), item)
  }
}

exportLocale('pt', pt)
exportLocale('en', en)

console.log('Conteúdo exportado para content/portfolio/{pt,en}/')
