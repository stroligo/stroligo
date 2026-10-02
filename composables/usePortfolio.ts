import {
  contentLocaleToHtmlLang,
  contentLocaleToOpenGraphLocale,
  contentLocaleToSitePath,
  i18nCodeToContentLocale,
} from '~/lib/i18n/contentLocale'
import type { ContentLocale } from '~/lib/portfolio/locale'
import { buildPortfolioFromContent } from '~/lib/portfolio/fromContent'
import { buildPortfolioFromLocales } from '~/lib/portfolio/fromLocales'

export function usePortfolio() {
  const { locale } = useI18n()

  const contentLocale = computed<ContentLocale>(() =>
    i18nCodeToContentLocale(locale.value),
  )

  const loadPortfolio = async (loc: ContentLocale) => {
    const fromContent = await buildPortfolioFromContent(loc)
    if (fromContent) return fromContent
    return buildPortfolioFromLocales(loc)
  }

  const { data: portfolio } = useAsyncData(
    'portfolio',
    () => loadPortfolio(contentLocale.value),
    {
      watch: [contentLocale],
      default: () => buildPortfolioFromLocales(contentLocale.value),
    },
  )

  const content = computed(() => portfolio.value!)

  const profile = computed(() => content.value.profile)
  const labels = computed(() => content.value.labels)
  const projects = computed(() => content.value.projects)

  const projectCategories = computed(() => content.value.projectCategories)
  const experiences = computed(() => content.value.experiences)
  const socialLinks = computed(() => content.value.socialLinks)
  const linkedInProjectsUrl = computed(() => content.value.linkedInProjectsUrl)

  const htmlLang = computed(() =>
    contentLocaleToHtmlLang(contentLocale.value),
  )

  const heroExperienceLabel = computed(() => {
    const fallbacks: Record<ContentLocale, string> = {
      en: '{years} years of experience',
      pt: '{years} anos de experiência',
      es: '{years} años de experiencia',
    }
    const raw = labels.value.heroExperience
    const template =
      (typeof raw === 'string' ? raw : '') ||
      fallbacks[contentLocale.value]
    return template.replace(
      /\{years\}/g,
      profile.value.experienceYears,
    )
  })

  const projectCountLabel = (count: number) =>
    count === 1
      ? labels.value.projectsCountOne
      : labels.value.projectsCountMany

  return {
    profile,
    labels,
    projects,
    projectCategories,
    experiences,
    socialLinks,
    htmlLang,
    linkedInProjectsUrl,
    heroExperienceLabel,
    projectCountLabel,
    content,
    contentLocale,
    sitePath: computed(() => contentLocaleToSitePath(contentLocale.value)),
  }
}
