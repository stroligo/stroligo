import { site } from '~/data/site'
import {
  contentLocaleToOpenGraphLocale,
  contentLocaleToSitePath,
} from '~/lib/i18n/contentLocale'
import type { ContentLocale } from '~/lib/portfolio/locale'
import { buildStroJsonLd } from '~/lib/seo/jsonLd'

const ogImageAltByLocale: Record<ContentLocale, string> = {
  en: `${site.name} — front-end portfolio at stroligo.dev`,
  pt: `${site.name} — portfólio front-end em stroligo.dev`,
  es: `${site.name} — portafolio front-end en stroligo.dev`,
}

/** SEO da homepage (EN / ES / PT) — meta, Open Graph, Twitter e JSON-LD */
export function useStroSeo() {
  const { locale } = useI18n()
  const { profile, labels, htmlLang, socialLinks, projects, contentLocale } =
    usePortfolio()

  const pageUrl = computed(
    () => `${site.siteUrl}${contentLocaleToSitePath(contentLocale.value)}`,
  )

  const ogImageUrl = computed(() => `${site.siteUrl}${site.ogImageUrl}`)

  const ogLocale = computed(() =>
    contentLocaleToOpenGraphLocale(contentLocale.value),
  )

  const ogLocaleAlternate = computed(() => {
    const all: ContentLocale[] = ['en', 'es', 'pt']
    return all
      .filter((code) => code !== contentLocale.value)
      .map((code) => contentLocaleToOpenGraphLocale(code))
  })

  const ogImageAlt = computed(() => ogImageAltByLocale[contentLocale.value])

  const hreflangLinks = computed(() => [
    { rel: 'alternate', hreflang: 'en', href: `${site.siteUrl}/` },
    { rel: 'alternate', hreflang: 'es', href: `${site.siteUrl}/es` },
    { rel: 'alternate', hreflang: 'pt', href: `${site.siteUrl}/pt` },
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
      locale: contentLocale.value,
      pageUrl: pageUrl.value,
      title: labels.value.seoTitle,
      description: labels.value.seoDescription,
      tagline: profile.value.tagline,
      location: profile.value.location,
      sameAs: sameAs.value,
      projects: projects.value,
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
    ogImageAlt: () => ogImageAlt.value,
    ogType: 'website',
    ogSiteName: 'stroligo.dev',
    ogLocale: () => ogLocale.value,
    twitterCard: 'summary_large_image',
    twitterTitle: () => labels.value.seoTitle,
    twitterDescription: () => labels.value.ogDescription,
    twitterImage: () => ogImageUrl.value,
    twitterImageAlt: () => ogImageAlt.value,
  })

  useHead(() => ({
    htmlAttrs: {
      lang: htmlLang.value,
    },
    link: [
      { rel: 'canonical', href: pageUrl.value },
      {
        rel: 'sitemap',
        type: 'application/xml',
        title: 'Sitemap',
        href: `${site.siteUrl}/sitemap.xml`,
      },
      ...hreflangLinks.value,
    ],
    meta: [
      ...ogLocaleAlternate.value.map((alt) => ({
        property: 'og:locale:alternate',
        content: alt,
      })),
      { property: 'og:image:secure_url', content: ogImageUrl.value },
      { property: 'og:image:type', content: site.ogImageType },
      { property: 'og:image:width', content: String(site.ogImageWidth) },
      { property: 'og:image:height', content: String(site.ogImageHeight) },
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
