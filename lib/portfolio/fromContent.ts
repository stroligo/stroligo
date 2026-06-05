import { projectsMetaById } from '~/data/projects.meta'
import { projectBodiesById } from '~/data/projectBodies'
import { projectStacksById } from '~/data/projectStacks'
import { enrichAndSortProjects } from '~/lib/portfolio/enrichProjects'
import { experienceBodiesById } from '~/data/experienceBodies'
import { experiencesForLocale } from '~/data/experiences'
import {
  resumeUrlForLocale,
  site,
  socialHrefs,
  socialLinkIds,
  whatsappContactUrl,
} from '~/data/site'
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

type ContentDoc = {
  stem?: string
  _path?: string
  _id?: string
  id?: string
  meta?: unknown
}

/** Locale a partir do stem (ex.: portfolio/pt/projects/foo). */
function localeFromDoc(doc: ContentDoc): ContentLocale | null {
  const stem = doc.stem ?? ''
  if (stem.startsWith('portfolio/en/')) return 'en'
  if (stem.startsWith('portfolio/pt/')) return 'pt'
  return null
}

function matchesLocale(doc: ContentDoc, locale: ContentLocale) {
  return localeFromDoc(doc) === locale
}

/** ID do projeto: campo id no JSON ou último segmento do stem. */
function projectIdFromDoc(doc: ContentDoc & { id?: string }) {
  if (doc.id && !String(doc.id).includes('/')) return String(doc.id)
  const stem = doc.stem ?? ''
  const slug = stem.split('/').pop()
  return slug ?? ''
}

/** Conteúdo guardado em meta quando o schema era z.record (legado). */
function unwrapMeta<T extends Record<string, unknown>>(doc: T): T {
  const { meta, ...rest } = doc as T & { meta?: unknown }
  if (!meta) return doc
  if (typeof meta === 'object' && meta !== null && !Array.isArray(meta)) {
    return { ...rest, ...(meta as Record<string, unknown>) } as T
  }
  if (typeof meta === 'string') {
    try {
      return { ...rest, ...JSON.parse(meta) } as T
    } catch {
      return doc
    }
  }
  return doc
}

export async function buildPortfolioFromContent(
  locale: ContentLocale,
): Promise<PortfolioContent | null> {
  const [
    homes,
    profiles,
    categoriesDocs,
    experiencesDocs,
    socialDocs,
    projectDocs,
  ] = await Promise.all([
    queryCollection('portfolioHome').all(),
    queryCollection('portfolioProfile').all(),
    queryCollection('portfolioCategories').all(),
    queryCollection('portfolioExperiences').all(),
    queryCollection('portfolioSocial').all(),
    queryCollection('portfolioProject').all(),
  ])

  const homeRaw = homes.find((doc) => matchesLocale(doc, locale))
  const profileDoc = profiles.find((doc) => matchesLocale(doc, locale))
  const categoriesRaw = categoriesDocs.find((doc) =>
    matchesLocale(doc, locale),
  )
  const experiencesDoc = experiencesDocs.find((doc) =>
    matchesLocale(doc, locale),
  )
  const socialRaw = socialDocs.find((doc) => matchesLocale(doc, locale))

  if (!homeRaw || !profileDoc || !categoriesRaw || !experiencesDoc || !socialRaw) {
    return null
  }

  const localeProjects = projectDocs.filter((doc) => matchesLocale(doc, locale))

  if (!localeProjects.length) {
    return null
  }

  const home = unwrapMeta(homeRaw as Record<string, unknown>) as PortfolioLabels
  const categories = unwrapMeta(
    categoriesRaw as Record<string, unknown>,
  ) as Record<string, string>
  const social = unwrapMeta(socialRaw as Record<string, unknown>) as Record<
    string,
    { label: string; description: string }
  >

  const profile = {
    name: site.name,
    tagline: profileDoc.tagline,
    location: profileDoc.location,
    experienceYears: profileDoc.experienceYears,
    resumeLabel: profileDoc.resumeLabel,
    siteUrl: site.siteUrl,
    resumeUrl: resumeUrlForLocale(locale),
    email: site.email,
    about: profileDoc.about,
    stack: profileDoc.stack,
  }

  const categoryIds = [
    'todos',
    'impacto',
    'saude',
    'ambiente',
    'institucional',
  ] as const

  const projectCategories = categoryIds.map((id) => ({
    id,
    label: categories[id] ?? id,
  }))

  const projects: Project[] = enrichAndSortProjects(
    localeProjects
      .map((item) => {
        const id = projectIdFromDoc(item)
        const meta = projectsMetaById[id]
        if (!meta) return null
        return {
          id,
          title: item.title,
          organization: item.organization,
          description: item.description,
          body: item.body ?? projectBodiesById[id]?.[locale],
          tags: item.tags,
          stack: item.stack?.length
            ? item.stack
            : projectStacksById[id],
          ...meta,
        }
      })
      .filter((item): item is Project => item !== null),
  )

  if (!projects.length || !home.projectsTitle) {
    return null
  }

  const experiences: Experience[] =
    experiencesDoc.items?.length &&
    experiencesDoc.items.every((item) => item.id && item.details)
      ? experiencesDoc.items.map((item) => ({
          id: item.id,
          company: item.company,
          role: item.role,
          period: item.period,
          location: item.location,
          highlight: item.highlight,
          details: item.details,
          body: item.body ?? experienceBodiesById[item.id]?.[locale],
          stack: item.stack?.length ? item.stack : undefined,
          yearStart: item.yearStart,
          yearEnd: item.yearEnd ?? null,
          url: item.url || undefined,
          current: Boolean(item.current),
        }))
      : experiencesForLocale(locale)

  const socialLinks: SocialLink[] = socialLinkIds.map((id) => {
    const linkId = id as SocialLinkId
    const entry = social[linkId]
    return {
      id: linkId,
      label:
        linkId === 'email'
          ? site.email
          : linkId === 'whatsapp'
            ? site.whatsapp
            : entry?.label ?? linkId,
      href:
        linkId === 'cv'
          ? resumeUrlForLocale(locale)
          : linkId === 'whatsapp'
            ? whatsappContactUrl(locale)
            : socialHrefs[linkId],
      description: entry?.description,
      primary: linkId === 'linkedin',
      external: linkId !== 'cv' && linkId !== 'email',
    }
  })

  return normalizePortfolioContent({
    profile,
    labels: home,
    projects,
    projectCategories,
    experiences,
    socialLinks,
    linkedInProjectsUrl: site.linkedInProjectsUrl,
  })
}
