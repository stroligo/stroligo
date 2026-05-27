import type { ContentLocale } from '~/lib/portfolio/locale'
import { site } from '~/data/site'
import { experiencesForLocale } from '~/data/experiences'
import en from '~/locales/en'
import pt from '~/locales/pt'

export type ResumeLocale = ContentLocale

export type ResumeProject = {
  title: string
  organization: string
  year?: string
  description: string
  stack: string
  contribution: string
}

export type ResumeContent = {
  locale: ResumeLocale
  filename: string
  htmlLang: string
  updated: string
  name: string
  headline: string
  location: string
  email: string
  phone: string
  siteUrl: string
  linkedIn: string
  github: string
  sections: {
    summary: string
    skills: string
    experience: string
    projects: string
    education: string
    certifications: string
    languages: string
  }
  labels: {
    stack: string
    contribution: string
    footer: string
  }
  summary: string[]
  skills: string
  projects: ResumeProject[]
  education: { school: string; degree: string; period: string }[]
  certifications: string[]
  languages: { name: string; level: string }[]
}

const resumeProjectIds = [
  'aborto-brasil',
  'futuro-exterminado',
  'desiderata',
  'safernet',
  'hfpm-who',
  'inovahc',
  'weplan-forests',
  'transparencia-brasil',
  'tjto',
] as const

const projectYears: Record<
  ResumeLocale,
  Partial<Record<(typeof resumeProjectIds)[number] | 'euipo', string>>
> = {
  en: {
    'aborto-brasil': '2023',
    'futuro-exterminado': '2024',
    desiderata: '2024',
    safernet: '2024',
    'hfpm-who': '2024',
    inovahc: '2024',
    'weplan-forests': '2023',
    'transparencia-brasil': '2023',
    tjto: '2011 - Present',
    euipo: '2025 - Present',
  },
  pt: {
    'aborto-brasil': '2023',
    'futuro-exterminado': '2024',
    desiderata: '2024',
    safernet: '2024',
    'hfpm-who': '2024',
    inovahc: '2024',
    'weplan-forests': '2023',
    'transparencia-brasil': '2023',
    tjto: '2011 - Presente',
    euipo: '2025 - Presente',
  },
}

const contributions: Record<ResumeLocale, Record<string, string>> = {
  en: {
    'aborto-brasil':
      'Front-end architecture, interactive maps, and data visualization for investigative journalism on reproductive rights.',
    'futuro-exterminado':
      'End-to-end front-end: maps, indicators, and responsive UI for civic data on armed violence.',
    desiderata:
      'Institutional website and health data experiences; collaboration on pediatric oncology panorama content.',
    safernet:
      'Educational platform UI, accessibility, and LGPD-aligned resources for teachers.',
    'hfpm-who':
      'WHO health financing tool — charts, dashboards, and multilingual UI components.',
    inovahc:
      'Digital health innovation hub website; React/Nuxt implementation and content structure.',
    'weplan-forests':
      'Spatial data UI for forest restoration scenarios (carbon, biodiversity, policy).',
    'transparencia-brasil':
      'Civic tech portal integrating open data, editorial content, and transparency workflows.',
    tjto:
      'Lead front-end since 2011: Joomla templates, hotsites, high-traffic portal (~8,900 daily visits), accessibility.',
    euipo:
      'EUIPO Spanish platform UI — React, TypeScript, Material UI, Agile delivery for European public sector.',
  },
  pt: {
    'aborto-brasil':
      'Arquitetura front-end, mapas interativos e visualização de dados para jornalismo investigativo sobre direitos reprodutivos.',
    'futuro-exterminado':
      'Front-end completo: mapas, indicadores e interface responsiva para dados cívicos sobre violência armada.',
    desiderata:
      'Site institucional e experiências de dados em saúde; colaboração no Panorama da Oncologia Pediátrica.',
    safernet:
      'Interface da plataforma educacional, acessibilidade e recursos alinhados à LGPD para educadores.',
    'hfpm-who':
      'Ferramenta OMS de financiamento em saúde — gráficos, dashboards e componentes multilíngues.',
    inovahc:
      'Site do hub de inovação em saúde digital; implementação React/Nuxt e estrutura de conteúdo.',
    'weplan-forests':
      'Interface de dados espaciais para cenários de restauração florestal (carbono, biodiversidade, políticas).',
    'transparencia-brasil':
      'Portal civic tech com dados abertos, conteúdo editorial e fluxos de transparência pública.',
    tjto:
      'Liderança front-end desde 2011: templates Joomla, hotsites, portal de alto tráfego (~8.900 visitas/dia), acessibilidade.',
    euipo:
      'UI da plataforma EUIPO em espanhol — React, TypeScript, Material UI, entregas Agile para setor público europeu.',
  },
}

function projectsFromLocale(
  locale: ResumeLocale,
  messages: typeof pt | typeof en,
): ResumeProject[] {
  const contrib = contributions[locale]
  const years = projectYears[locale]
  const items = messages.projects.items

  const fromSite = resumeProjectIds
    .map((id) => {
      const item = items.find((p) => p.id === id)
      if (!item) return null
      return {
        title: item.title,
        organization: item.organization,
        year: years[id],
        description: item.description,
        stack: item.tags.join(', '),
        contribution: contrib[id] ?? '',
      }
    })
    .filter((p): p is ResumeProject => p !== null)

  const euipo: ResumeProject = {
    title: locale === 'en' ? 'EUIPO Digital Platform' : 'Plataforma Digital EUIPO',
    organization:
      locale === 'en'
        ? 'Vex Tech · European Union Intellectual Property Office'
        : 'Vex Tech · European Union Intellectual Property Office (EUIPO)',
    year: years.euipo,
    description:
      locale === 'en'
        ? 'Large-scale front-end for the European Union Intellectual Property Office — interfaces used by businesses, legal professionals, and public institutions across the EU.'
        : 'Front-end em larga escala para o European Union Intellectual Property Office — interfaces usadas por empresas, profissionais jurídicos e instituições públicas na União Europeia.',
    stack: 'React, TypeScript, Material UI, Context API, Agile',
    contribution: contrib.euipo ?? '',
  }

  return [...fromSite.slice(0, 3), euipo, ...fromSite.slice(3)]
}

const contentByLocale: Record<ResumeLocale, Omit<ResumeContent, 'locale' | 'filename' | 'htmlLang'>> = {
  en: {
    updated: 'May 2026',
    name: site.name,
    headline:
      'Software Engineer | Front-end Specialist | React, Next.js, Vue, Nuxt, TypeScript, Tailwind CSS, Material UI',
    location: 'Portugal',
    email: site.email,
    phone: site.whatsapp,
    siteUrl: site.siteUrl,
    linkedIn: 'https://www.linkedin.com/in/gabrielstroligo/',
    github: 'https://github.com/stroligo',
    sections: {
      summary: 'Professional Summary',
      skills: 'Technical Skills',
      experience: 'Work Experience',
      projects: 'Selected Projects',
      education: 'Education',
      certifications: 'Certifications',
      languages: 'Languages',
    },
    labels: {
      stack: 'Technologies',
      contribution: 'Front-end role',
      footer: 'Curriculum Vitae',
    },
    summary: [
      'Software Engineer and Front-end Specialist with 18+ years delivering accessible, responsive web applications for public and private sectors. Expert in React, Next.js, Vue, Nuxt, TypeScript, Tailwind CSS, and Material UI — from UI implementation to production deployment in Agile, multicultural teams.',
      'Experience in high-traffic government portals, civic tech, open data, data visualization, and social impact platforms (WHO, NGOs, investigative journalism). Strong focus on performance, WCAG accessibility, sustainable code, Git, REST APIs, and CMS integration.',
    ],
    skills:
      'React, Next.js, Vue.js, Nuxt.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, Material UI, Vite, Node.js, PHP, Joomla, MySQL, Git, Agile, Scrum, REST APIs, Responsive Web Design, Web Accessibility, WCAG, Data Visualization, UI/UX Implementation, Front-end Architecture, CI/CD',
    projects: projectsFromLocale('en', en),
    education: [
      {
        school: 'Universidade Federal do Tocantins (UFT)',
        degree: 'Master, Computational Modeling of Systems',
        period: '2018 - 2020',
      },
      {
        school: 'FLAG',
        degree: 'Professional Full Stack Web Development',
        period: '2024 - 2025',
      },
      {
        school: 'Universidade Estadual do Tocantins (UNITINS)',
        degree: 'Bachelor, Information Systems',
        period: '2016 - 2020',
      },
      {
        school: 'Universidade Federal do Tocantins (UFT)',
        degree: 'Bachelor, Arts',
        period: '2012 - 2017',
      },
    ],
    certifications: [
      'FLAG — Professional Full Stack Web Development (2024-2025)',
      'Frontend Frameworks — React',
      'Workshop: MongoDB, Node.js, Express.js',
      'Workshop: SASS, JavaScript',
    ],
    languages: [
      { name: 'Portuguese', level: 'Native' },
      { name: 'English', level: 'Full Professional Proficiency' },
      { name: 'Spanish', level: 'Full Professional Proficiency' },
    ],
  },
  pt: {
    updated: 'Maio 2026',
    name: site.name,
    headline:
      'Software Engineer · Especialista front-end · React, Next.js, Vue, Nuxt, TypeScript, Tailwind CSS, Material UI',
    location: 'Portugal',
    email: site.email,
    phone: site.whatsapp,
    siteUrl: site.siteUrl,
    linkedIn: 'https://www.linkedin.com/in/gabrielstroligo/',
    github: 'https://github.com/stroligo',
    sections: {
      summary: 'Resumo Profissional',
      skills: 'Competências Técnicas',
      experience: 'Experiência Profissional',
      projects: 'Projetos Selecionados',
      education: 'Formação',
      certifications: 'Certificações',
      languages: 'Idiomas',
    },
    labels: {
      stack: 'Tecnologias',
      contribution: 'Papel front-end',
      footer: 'Currículo',
    },
    summary: [
      'Software Engineer e especialista em front-end com mais de 18 anos de experiência em soluções digitais para setores público e privado. Desenvolvo interfaces modernas, responsivas e acessíveis com React, Next.js, Vue, Nuxt, TypeScript, Tailwind CSS e Material UI — do layout ao deploy, em ambientes ágeis e equipes multiculturais.',
      'Atuação em portais governamentais de alto tráfego, civic tech, dados abertos, visualização de dados e plataformas de impacto social (OMS, ONGs, jornalismo investigativo). Foco em performance, acessibilidade (WCAG), código sustentável, Git, APIs REST e integração com CMS.',
    ],
    skills:
      'React, Next.js, Vue.js, Nuxt.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, Material UI, Vite, Node.js, PHP, Joomla, MySQL, Git, Agile, Scrum, APIs REST, Design Responsivo, Acessibilidade Web, WCAG, Visualização de Dados, Implementação UI/UX, Arquitetura Front-end, CI/CD',
    projects: projectsFromLocale('pt', pt),
    education: [
      {
        school: 'Universidade Federal do Tocantins (UFT)',
        degree: 'Mestrado, Modelagem Computacional de Sistemas',
        period: '2018 - 2020',
      },
      {
        school: 'FLAG',
        degree: 'Professional Full Stack Web Development',
        period: '2024 - 2025',
      },
      {
        school: 'Universidade Estadual do Tocantins (UNITINS)',
        degree: 'Bacharelado, Sistemas de Informação',
        period: '2016 - 2020',
      },
      {
        school: 'Universidade Federal do Tocantins (UFT)',
        degree: 'Bacharelado, Artes',
        period: '2012 - 2017',
      },
    ],
    certifications: [
      'FLAG — Professional Full Stack Web Development (2024-2025)',
      'Frontend Frameworks — React',
      'Workshop: MongoDB, Node.js e Express.js',
      'Workshop: SASS e JavaScript',
    ],
    languages: [
      { name: 'Português', level: 'Nativo' },
      { name: 'Inglês', level: 'Proficiência profissional completa' },
      { name: 'Espanhol', level: 'Proficiência profissional completa' },
    ],
  },
}

export function resumePdfFilename(locale: ResumeLocale) {
  return `gabriel-stroligo-cv-${locale}.pdf` as const
}

export function getResumeContent(locale: ResumeLocale): ResumeContent {
  const base = contentByLocale[locale]
  return {
    locale,
    filename: resumePdfFilename(locale),
    htmlLang: locale === 'en' ? 'en' : 'pt-BR',
    ...base,
  }
}

export function resumeExperiences(locale: ResumeLocale) {
  return experiencesForLocale(locale)
}

export function experienceDateRange(
  yearStart: number,
  yearEnd: number | null,
  current?: boolean,
) {
  if (current || yearEnd === null) return `${yearStart} - Present`
  return `${yearStart} - ${yearEnd}`
}
