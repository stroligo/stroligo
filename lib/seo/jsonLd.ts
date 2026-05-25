import { site } from '~/data/site'

export type StroSeoJsonLdInput = {
  locale: 'pt' | 'en'
  pageUrl: string
  title: string
  description: string
  tagline: string
  location: string
  sameAs: string[]
}

export function buildStroJsonLd(input: StroSeoJsonLdInput) {
  const inLanguage = input.locale === 'en' ? 'en-US' : 'pt-BR'
  const imageUrl = `${site.siteUrl}${site.profilePhotoUrl}`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${site.siteUrl}/#website`,
        url: site.siteUrl,
        name: 'stroligo.dev',
        description: input.description,
        inLanguage: ['pt-BR', 'en-US'],
        publisher: { '@id': `${site.siteUrl}/#person` },
      },
      {
        '@type': 'Person',
        '@id': `${site.siteUrl}/#person`,
        name: site.name,
        url: site.siteUrl,
        image: imageUrl,
        jobTitle: input.tagline,
        homeLocation: {
          '@type': 'Place',
          name: input.location,
        },
        sameAs: input.sameAs,
      },
      {
        '@type': 'ProfilePage',
        '@id': `${input.pageUrl}#webpage`,
        url: input.pageUrl,
        name: input.title,
        description: input.description,
        inLanguage,
        isPartOf: { '@id': `${site.siteUrl}/#website` },
        about: { '@id': `${site.siteUrl}/#person` },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: imageUrl,
        },
      },
    ],
  }
}
