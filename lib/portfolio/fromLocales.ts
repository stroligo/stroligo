import { projectsMetaById } from '~/data/projects.meta'
import { enrichAndSortProjects } from '~/lib/portfolio/enrichProjects'
import { experiencesForLocale } from '~/data/experiences'
import {
  resumeUrlForLocale,
  site,
  socialHrefs,
  socialLinkIds,
  whatsappContactUrl,
} from '~/data/site'
import en from '~/locales/en'
import pt from '~/locales/pt'
import type { ContentLocale } from '~/lib/portfolio/locale'
import { normalizePortfolioContent } from '~/lib/portfolio/normalizeContent'
import type {
  Experience,
  PortfolioContent,
  PortfolioLabels,
  Project,
  SocialLink,
  SocialLinkId,
} from '~/types/portfolio'
import { resolveI18nString } from '~/utils/resolveI18nMessage'

type LocaleMessages = typeof pt

function messages(locale: ContentLocale): LocaleMessages {
  return locale === 'en' ? en : pt
}

export function buildPortfolioFromLocales(
  locale: ContentLocale,
): PortfolioContent {
  const m = messages(locale)

  const labels: PortfolioLabels = {
    brandTagline: resolveI18nString(m.brand.tagline),
    seoTitle: resolveI18nString(m.seo.title),
    seoDescription: resolveI18nString(m.seo.description),
    ogDescription: resolveI18nString(m.seo.ogDescription),
    navAbout: resolveI18nString(m.nav.about),
    navWork: resolveI18nString(m.nav.work),
    navProjects: resolveI18nString(m.nav.projects),
    navContact: resolveI18nString(m.nav.contact),
    navResume: resolveI18nString(m.nav.resume),
    navLinkedin: resolveI18nString(m.nav.linkedin),
    navUikit: resolveI18nString(m.nav.uikit),
    navHome: resolveI18nString(m.nav.home),
    heroLinkedinCta: resolveI18nString(m.hero.linkedinCta),
    heroExploreProjects: resolveI18nString(m.hero.exploreProjects),
    heroExperience: resolveI18nString(m.hero.experience),
    heroStatsProjects: resolveI18nString(m.hero.stats.projects),
    heroStatsFeatured: resolveI18nString(m.hero.stats.featured),
    heroStatsRoles: resolveI18nString(m.hero.stats.roles),
    aboutTitle: resolveI18nString(m.about.title),
    stackTitle: resolveI18nString(m.about.stackTitle),
    workTitle: resolveI18nString(m.work.title),
    workSubtitle: resolveI18nString(m.work.subtitle),
    workCurrent: resolveI18nString(m.work.current),
    projectsTitle: resolveI18nString(m.projects.title),
    projectsSubtitle: resolveI18nString(m.projects.subtitle),
    projectsLinkedinAll: resolveI18nString(m.projects.linkedinAll),
    projectsBehanceCta: resolveI18nString(m.projects.behanceCta),
    projectsViewSite: resolveI18nString(m.projects.viewSite),
    projectsFeaturedTitle: resolveI18nString(m.projects.featuredTitle),
    projectsFeaturedSubtitle: resolveI18nString(m.projects.featuredSubtitle),
    projectsCountOne: resolveI18nString(m.projects.countOne),
    projectsCountMany: resolveI18nString(m.projects.countMany),
    contactTitle: resolveI18nString(m.contact.title),
    contactSubtitle: resolveI18nString(m.contact.subtitle),
    contactEmailIntro: resolveI18nString(m.contact.emailIntro),
  }

  const profile = {
    name: site.name,
    tagline: resolveI18nString(m.profile.tagline),
    location: resolveI18nString(m.profile.location),
    experienceYears: resolveI18nString(m.profile.experienceYears),
    resumeLabel: resolveI18nString(m.profile.resumeLabel),
    siteUrl: site.siteUrl,
    resumeUrl: resumeUrlForLocale(locale),
    email: site.email,
    about: m.about.paragraphs.map((p) => resolveI18nString(p)),
    stack: m.profile.stack.map((s) => resolveI18nString(s)),
  }

  const projects: Project[] = enrichAndSortProjects(
    m.projects.items
      .map((item) => {
        const id = resolveI18nString(item.id)
        const meta = projectsMetaById[id]
        if (!meta) return null
        return {
          id,
          title: resolveI18nString(item.title),
          organization: resolveI18nString(item.organization),
          description: resolveI18nString(item.description),
          tags: item.tags.map((tag) => resolveI18nString(tag)),
          ...meta,
        }
      })
      .filter((item): item is Project => item !== null),
  )

  const categoryIds = [
    'todos',
    'impacto',
    'saude',
    'ambiente',
    'institucional',
  ] as const

  const projectCategories = categoryIds.map((id) => ({
    id,
    label: resolveI18nString(m.projects.categories[id]),
  }))

  const experiences: Experience[] = experiencesForLocale(locale)

  const socialLinks: SocialLink[] = socialLinkIds.map((id) => {
    const linkId = id as SocialLinkId
    const social = m.social[linkId]
    return {
      id: linkId,
      label:
        linkId === 'email'
          ? site.email
          : linkId === 'whatsapp'
            ? site.whatsapp
            : resolveI18nString(social.label),
      href:
        linkId === 'cv'
          ? resumeUrlForLocale(locale)
          : linkId === 'whatsapp'
            ? whatsappContactUrl(locale)
            : socialHrefs[linkId],
      description: resolveI18nString(social.description),
      primary: linkId === 'linkedin',
      external: linkId !== 'cv' && linkId !== 'email',
    }
  })

  return normalizePortfolioContent({
    profile,
    labels,
    projects,
    projectCategories,
    experiences,
    socialLinks,
    linkedInProjectsUrl: site.linkedInProjectsUrl,
  })
}
