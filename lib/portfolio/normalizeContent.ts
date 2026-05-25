import { resolveI18nList, resolveI18nString } from '~/utils/resolveI18nMessage'
import type {
  Experience,
  PortfolioContent,
  PortfolioLabels,
  PortfolioProfile,
  Project,
  SocialLink,
} from '~/types/portfolio'

function normalizeLabels(labels: PortfolioLabels): PortfolioLabels {
  const keys = Object.keys(labels) as (keyof PortfolioLabels)[]
  const out = { ...labels }
  for (const key of keys) {
    out[key] = resolveI18nString(labels[key])
  }
  return out
}

function normalizeProfile(profile: PortfolioProfile): PortfolioProfile {
  return {
    ...profile,
    tagline: resolveI18nString(profile.tagline),
    location: resolveI18nString(profile.location),
    experienceYears: resolveI18nString(profile.experienceYears),
    resumeLabel: resolveI18nString(profile.resumeLabel),
    about: resolveI18nList(profile.about),
    stack: resolveI18nList(profile.stack),
  }
}

function normalizeProject(project: Project): Project {
  return {
    ...project,
    title: resolveI18nString(project.title),
    organization: resolveI18nString(project.organization),
    description: resolveI18nString(project.description),
    tags: resolveI18nList(project.tags),
    year: project.year ? resolveI18nString(project.year) : undefined,
  }
}

function normalizeExperience(item: Experience): Experience {
  return {
    ...item,
    company: resolveI18nString(item.company),
    role: resolveI18nString(item.role),
    period: resolveI18nString(item.period),
    location: resolveI18nString(item.location),
    highlight: resolveI18nString(item.highlight),
    details: resolveI18nString(item.details),
  }
}

function normalizeSocialLink(link: SocialLink): SocialLink {
  return {
    ...link,
    label: resolveI18nString(link.label),
    description: link.description
      ? resolveI18nString(link.description)
      : undefined,
  }
}

export function normalizePortfolioContent(
  content: PortfolioContent,
): PortfolioContent {
  return {
    ...content,
    profile: normalizeProfile(content.profile),
    labels: normalizeLabels(content.labels),
    projects: content.projects.map(normalizeProject),
    projectCategories: content.projectCategories.map((cat) => ({
      ...cat,
      label: resolveI18nString(cat.label),
    })),
    experiences: content.experiences.map(normalizeExperience),
    socialLinks: content.socialLinks.map(normalizeSocialLink),
  }
}
