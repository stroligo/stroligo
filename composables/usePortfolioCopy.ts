/** Textos da home vindos de locales/ (via usePortfolio). */
import { resolveI18nString } from '~/utils/resolveI18nMessage'

export function usePortfolioCopy() {
  const { t } = useI18n()
  const { labels } = usePortfolio()

  const L = (value: unknown) => resolveI18nString(value)

  return computed(() => ({
    brandTagline: L(labels.value.brandTagline),
    seo: {
      title: L(labels.value.seoTitle),
      description: L(labels.value.seoDescription),
      ogDescription: L(labels.value.ogDescription),
    },
    nav: {
      about: L(labels.value.navAbout),
      work: L(labels.value.navWork),
      projects: L(labels.value.navProjects),
      contact: L(labels.value.navContact),
      resume: L(labels.value.navResume),
      linkedin: L(labels.value.navLinkedin),
      home: L(labels.value.navHome),
    },
    hero: {
      linkedinCta: L(labels.value.heroLinkedinCta),
      exploreProjects: L(labels.value.heroExploreProjects),
      stats: {
        projects: L(labels.value.heroStatsProjects),
        featured: L(labels.value.heroStatsFeatured),
        roles: L(labels.value.heroStatsRoles),
      },
    },
    about: {
      title: L(labels.value.aboutTitle),
      stackTitle: L(labels.value.stackTitle),
    },
    work: {
      title: L(labels.value.workTitle),
      subtitle: L(labels.value.workSubtitle),
      current: L(labels.value.workCurrent),
      timelineAria: L(t('work.timelineAria')),
    },
    projects: {
      title: L(labels.value.projectsTitle),
      subtitle: L(labels.value.projectsSubtitle),
      featuredBadge: L(t('projects.featuredBadge')),
      featuredTitle: L(labels.value.projectsFeaturedTitle),
      featuredSubtitle: L(labels.value.projectsFeaturedSubtitle),
      linkedinAll: L(labels.value.projectsLinkedinAll),
      viewSite: L(labels.value.projectsViewSite),
      behanceCta: L(labels.value.projectsBehanceCta),
    },
    contact: {
      title: L(labels.value.contactTitle),
      subtitle: L(labels.value.contactSubtitle),
      socialTitle: L(t('contact.socialTitle')),
      hobbiesTitle: L(t('contact.hobbiesTitle')),
      emailIntro: L(labels.value.contactEmailIntro),
    },
    a11y: {
      skipToContent: L(t('a11y.skipToContent')),
      mainNav: L(t('a11y.mainNav')),
      filterProjects: L(t('a11y.filterProjects')),
      sortProjects: L(t('a11y.sortProjects')),
      socialNav: L(t('a11y.socialNav')),
    },
  }))
}
