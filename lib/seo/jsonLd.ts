import type { Project } from '~/types/portfolio'
import type { ContentLocale } from '~/lib/portfolio/locale'
import { site } from '~/data/site'

export type StroSeoJsonLdInput = {
  locale: ContentLocale
  pageUrl: string
  title: string
  description: string
  tagline: string
  location: string
  sameAs: string[]
  projects: Project[]
}

function projectUrl(project: Project) {
  return project.siteUrl ?? project.behanceUrl
}

const knowsAboutByLocale: Record<ContentLocale, readonly string[]> = {
  en: [
    'Front-end development',
    'Nuxt',
    'Vue',
    'React',
    'TypeScript',
    'Accessibility',
    'Data visualization',
    'Civic tech',
  ],
  es: [
    'Desarrollo front-end',
    'Nuxt',
    'Vue',
    'React',
    'TypeScript',
    'Accesibilidad',
    'Visualización de datos',
    'Tecnología cívica',
  ],
  pt: [
    'Desenvolvimento front-end',
    'Nuxt',
    'Vue',
    'React',
    'TypeScript',
    'Acessibilidade',
    'Visualização de dados',
    'Tecnologia cívica',
  ],
}

const featuredProjectsTitle: Record<ContentLocale, string> = {
  en: 'Featured projects',
  es: 'Proyectos destacados',
  pt: 'Projetos em destaque',
}

export function buildStroJsonLd(input: StroSeoJsonLdInput) {
  const inLanguage =
    input.locale === 'en'
      ? 'en-US'
      : input.locale === 'es'
        ? 'es'
        : 'pt-BR'
  const imageUrl = `${site.siteUrl}${site.ogImageUrl}`
  const photoUrl = `${site.siteUrl}${site.profilePhotoUrl}`
  const featuredProjects = input.projects
    .filter((project) => project.siteUrl || project.behanceUrl)
    .slice(0, 12)

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
        image: photoUrl,
        jobTitle: input.tagline,
        homeLocation: {
          '@type': 'Place',
          name: input.location,
        },
        sameAs: input.sameAs,
        knowsAbout: [...knowsAboutByLocale[input.locale]],
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
        mainEntity: { '@id': `${site.siteUrl}/#person` },
        primaryImageOfPage: {
          '@id': `${input.pageUrl}#primary-image`,
          '@type': 'ImageObject',
          url: imageUrl,
          width: site.ogImageWidth,
          height: site.ogImageHeight,
          caption: site.name,
        },
        hasPart: [
          {
            '@type': 'WebPageElement',
            name: 'About',
            cssSelector: '#sobre',
          },
          {
            '@type': 'WebPageElement',
            name: 'Projects',
            cssSelector: '#projetos',
          },
          {
            '@type': 'WebPageElement',
            name: 'Work',
            cssSelector: '#atuacao',
          },
          {
            '@type': 'WebPageElement',
            name: 'Contact',
            cssSelector: '#contato',
          },
        ],
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: input.pageUrl,
            },
          ],
        },
      },
      {
        '@type': 'ItemList',
        '@id': `${input.pageUrl}#projects`,
        name: featuredProjectsTitle[input.locale],
        itemListElement: featuredProjects.map((project, index) => {
          const url = projectUrl(project)
          return {
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'CreativeWork',
              name: project.title,
              description: project.description,
              ...(url ? { url } : {}),
              creator: { '@id': `${site.siteUrl}/#person` },
            },
          }
        }),
      },
    ],
  }
}
