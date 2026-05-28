import { buildStroJsonLd } from '~/lib/seo/jsonLd'
import { site } from '~/data/site'

/** SEO da homepage (PT / EN) — meta, Open Graph, Twitter e JSON-LD */
export function useStroSeo() {
  const { locale } = useI18n()
  const { profile, labels, htmlLang, socialLinks } = usePortfolio()

  const pageUrl = computed(() =>
    locale.value === 'pt'
      ? `${site.siteUrl}/pt`
      : `${site.siteUrl}/`,
  )

  const ogImageUrl = computed(
    () => `${site.siteUrl}${site.profilePhotoUrl}`,
  )

  const ogLocale = computed(() =>
    locale.value === 'en' ? 'en_US' : 'pt_BR',
  )

  const ogLocaleAlternate = computed(() =>
    locale.value === 'en' ? 'pt_BR' : 'en_US',
  )

  const photoAlt = computed(() =>
    locale.value === 'en'
      ? `Portrait of ${profile.value.name}`
      : `Retrato de ${profile.value.name}`,
  )

  const hreflangLinks = computed(() => [
    { rel: 'alternate', hreflang: 'en', href: `${site.siteUrl}/` },
    { rel: 'alternate', hreflang: 'pt-BR', href: `${site.siteUrl}/pt` },
    { rel: 'alternate', hreflang: 'x-default', href: `${site.siteUrl}/` },
  ])

  const sameAs = computed(() =>
    socialLinks.value
      .filter((link) => link.external && link.id !== 'email' && link.id !== 'cv')
      .map((link) => link.href),
  )

  const jsonLd = computed(() =>
    buildStroJsonLd({
      locale: locale.value === 'en' ? 'en' : 'pt',
      pageUrl: pageUrl.value,
      title: labels.value.seoTitle,
      description: labels.value.seoDescription,
      tagline: profile.value.tagline,
      location: profile.value.location,
      sameAs: sameAs.value,
    }),
  )

  useSeoMeta({
    title: () => labels.value.seoTitle,
    description: () => labels.value.seoDescription,
    robots: 'index, follow, max-image-preview:large',
    author: site.name,
    language: () => htmlLang.value,
    ogTitle: () => labels.value.seoTitle,
    ogDescription: () => labels.value.ogDescription,
    ogUrl: () => pageUrl.value,
    ogImage: () => ogImageUrl.value,
    ogImageAlt: () => photoAlt.value,
    ogType: 'website',
    ogSiteName: 'stroligo.dev',
    ogLocale: () => ogLocale.value,
    twitterCard: 'summary_large_image',
    twitterTitle: () => labels.value.seoTitle,
    twitterDescription: () => labels.value.ogDescription,
    twitterImage: () => ogImageUrl.value,
    twitterImageAlt: () => photoAlt.value,
  })

  useHead(() => ({
    htmlAttrs: {
      lang: htmlLang.value,
    },
    link: [
      { rel: 'canonical', href: pageUrl.value },
      ...hreflangLinks.value,
    ],
    meta: [
      { property: 'og:locale:alternate', content: ogLocaleAlternate.value },
      { property: 'og:image:secure_url', content: ogImageUrl.value },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:image:width', content: '640' },
      { property: 'og:image:height', content: '800' },
    ],
    script: [
      {
        key: 'stro-jsonld',
        type: 'application/ld+json',
        innerHTML: JSON.stringify(jsonLd.value),
      },
    ],
  }))
}
