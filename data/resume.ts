import type { ContentLocale } from '~/lib/portfolio/locale'
import { site } from '~/data/site'
import { experiencesForLocale } from '~/data/experiences'
import {
  resumeEuipoCopy,
  resumeProjectCopy,
} from '~/lib/resume/mapPortfolio'
import en from '~/locales/en'
import es from '~/locales/es'
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
  'trampos-do-futuro',
  'aborto-brasil',
  'futuro-exterminado',
  'panorama-oncologia',
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
  Partial<
    Record<(typeof resumeProjectIds)[number] | 'euipo' | 'trampos-do-futuro', string>
  >
> = {
  en: {
    'trampos-do-futuro': '2026',
    'aborto-brasil': '2023',
    'futuro-exterminado': '2024',
    'panorama-oncologia': '2025',
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
    'trampos-do-futuro': '2026',
    'aborto-brasil': '2023',
    'futuro-exterminado': '2024',
    'panorama-oncologia': '2025',
    desiderata: '2024',
    safernet: '2024',
    'hfpm-who': '2024',
    inovahc: '2024',
    'weplan-forests': '2023',
    'transparencia-brasil': '2023',
    tjto: '2011 - Presente',
    euipo: '2025 - Presente',
  },
  es: {
    'trampos-do-futuro': '2026',
    'aborto-brasil': '2023',
    'futuro-exterminado': '2024',
    'panorama-oncologia': '2025',
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
    'trampos-do-futuro':
      'Front-end for Fundação Itaú’s Trampos do Futuro 2026 — Nuxt, Tailwind CSS, accessibility and scalable UX for thousands of students and educators.',
    'aborto-brasil':
      'Front-end architecture, interactive maps, and data visualization for investigative journalism on reproductive rights.',
    'futuro-exterminado':
      'End-to-end front-end: maps, indicators, and responsive UI for civic data on armed violence.',
    'panorama-oncologia':
      'Front-end for Desiderata’s Pediatric Oncology Panorama — indicators, research, and educational resources on childhood cancer in Brazil.',
    desiderata:
      'Institutional website for Instituto Desiderata — mission, initiatives, and child public health resources.',
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
    'trampos-do-futuro':
      'Front-end do Trampos do Futuro 2026 (Fundação Itaú) — Nuxt, Tailwind CSS, acessibilidade e UX escalável para milhares de estudantes e educadores.',
    'aborto-brasil':
      'Arquitetura front-end, mapas interativos e visualização de dados para jornalismo investigativo sobre direitos reprodutivos.',
    'futuro-exterminado':
      'Front-end completo: mapas, indicadores e interface responsiva para dados cívicos sobre violência armada.',
    'panorama-oncologia':
      'Front-end do Panorama da Oncologia Pediátrica (Desiderata) — indicadores, pesquisa e recursos educativos sobre câncer infantil no Brasil.',
    desiderata:
      'Site institucional do Instituto Desiderata — missão, iniciativas e recursos de saúde pública infantil.',
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
  es: {
    'trampos-do-futuro':
      'Front-end de Trampos do Futuro 2026 (Fundação Itaú) — Nuxt, Tailwind CSS, accesibilidad y UX escalable para miles de estudiantes y educadores.',
    'aborto-brasil':
      'Arquitectura front-end, mapas interactivos y visualización de datos para periodismo de investigación sobre derechos reproductivos.',
    'futuro-exterminado':
      'Front-end integral: mapas, indicadores e interfaz responsive para datos cívicos sobre violencia armada.',
    'panorama-oncologia':
      'Front-end del Panorama de Oncología Pediátrica (Desiderata) — indicadores, investigación y recursos educativos sobre cáncer infantil en Brasil.',
    desiderata:
      'Sitio institucional del Instituto Desiderata — misión, iniciativas y recursos de salud pública infantil.',
    safernet:
      'Interfaz de la plataforma educativa, accesibilidad y recursos alineados con la LGPD para educadores.',
    'hfpm-who':
      'Herramienta OMS de financiación en salud — gráficos, dashboards y componentes multilingües.',
    inovahc:
      'Sitio del hub de innovación en salud digital; implementación React/Nuxt y estructura de contenido.',
    'weplan-forests':
      'Interfaz de datos espaciales para escenarios de restauración forestal (carbono, biodiversidad, políticas).',
    'transparencia-brasil':
      'Portal civic tech con datos abiertos, contenido editorial y flujos de transparencia pública.',
    tjto:
      'Liderazgo front-end desde 2011: plantillas Joomla, micrositios, portal de alto tráfico (~8.900 visitas/día), accesibilidad.',
    euipo:
      'UI de la plataforma EUIPO — React, TypeScript, Material UI, entregas Agile para el sector público europeo.',
  },
}

function localeMessages(locale: ResumeLocale) {
  if (locale === 'pt') return pt
  if (locale === 'es') return es
  return en
}

function skillsForLocale(locale: ResumeLocale): string {
  const messages = localeMessages(locale)
  const core = messages.profile.stack.join(', ')
  const extrasByLocale: Record<ResumeLocale, string> = {
    en: 'JavaScript, HTML5, CSS3, Node.js, PHP, Joomla, MySQL, Git, Agile, Scrum, REST APIs, Responsive Web Design, Web Accessibility, WCAG, Data Visualization, UI/UX Implementation, Front-end Architecture, CI/CD',
    es: 'JavaScript, HTML5, CSS3, Node.js, PHP, Joomla, MySQL, Git, Agile, Scrum, APIs REST, Diseño Responsive, Accesibilidad Web, WCAG, Visualización de Datos, Implementación UI/UX, Arquitectura Front-end, CI/CD',
    pt: 'JavaScript, HTML5, CSS3, Node.js, PHP, Joomla, MySQL, Git, Agile, Scrum, APIs REST, Design Responsivo, Acessibilidade Web, WCAG, Visualização de Dados, Implementação UI/UX, Arquitetura Front-end, CI/CD',
  }
  return `${core}, ${extrasByLocale[locale]}`
}

function projectsFromLocale(
  locale: ResumeLocale,
  messages: typeof pt | typeof en | typeof es,
): ResumeProject[] {
  const contrib = contributions[locale]
  const years = projectYears[locale]
  const items = messages.projects.items

  const fromSite = resumeProjectIds
    .map((id) => {
      const item = items.find((p) => p.id === id)
      if (!item) return null
      const copy = resumeProjectCopy(id, locale, {
        description: item.description,
        contribution: contrib[id] ?? '',
      })
      return {
        title: item.title,
        organization: item.organization,
        year: years[id],
        description: copy.description,
        stack: copy.stack || item.tags.join(', '),
        contribution: copy.contribution || contrib[id] || '',
      }
    })
    .filter((p): p is ResumeProject => p !== null)

  const euipoCopy = resumeEuipoCopy(locale)
  const euipoTitleByLocale: Record<ResumeLocale, string> = {
    en: 'EUIPO Digital Platform',
    es: 'Plataforma digital EUIPO',
    pt: 'Plataforma Digital EUIPO',
  }
  const euipo: ResumeProject = {
    title: euipoTitleByLocale[locale],
    organization:
      locale === 'pt'
        ? 'Axians · European Union Intellectual Property Office (EUIPO)'
        : 'Axians · European Union Intellectual Property Office',
    year: years.euipo,
    description: euipoCopy.description,
    stack: euipoCopy.stack,
    contribution: euipoCopy.contribution || contrib.euipo || '',
  }

  // Destaques no topo: Fundação Itaú + EUIPO, depois os demais
  const [trampos, ...rest] = fromSite
  return trampos ? [trampos, euipo, ...rest] : [euipo, ...fromSite]
}

const contentByLocale: Record<ResumeLocale, Omit<ResumeContent, 'locale' | 'filename' | 'htmlLang'>> = {
  en: {
    updated: 'October 2026',
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
    summary: en.about.paragraphs.slice(0, 3),
    skills: skillsForLocale('en'),
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
    updated: 'Outubro 2026',
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
    summary: pt.about.paragraphs.slice(0, 3),
    skills: skillsForLocale('pt'),
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
  es: {
    updated: 'Octubre 2026',
    name: site.name,
    headline:
      'Software Engineer · Especialista front-end · React, Next.js, Vue, Nuxt, TypeScript, Tailwind CSS, Material UI',
    location: 'Portugal / España',
    email: site.email,
    phone: site.whatsapp,
    siteUrl: site.siteUrl,
    linkedIn: 'https://www.linkedin.com/in/gabrielstroligo/',
    github: 'https://github.com/stroligo',
    sections: {
      summary: 'Resumen profesional',
      skills: 'Competencias técnicas',
      experience: 'Experiencia profesional',
      projects: 'Proyectos seleccionados',
      education: 'Formación',
      certifications: 'Certificaciones',
      languages: 'Idiomas',
    },
    labels: {
      stack: 'Tecnologías',
      contribution: 'Rol front-end',
      footer: 'Currículum',
    },
    summary: es.about.paragraphs.slice(0, 3),
    skills: skillsForLocale('es'),
    projects: projectsFromLocale('es', es),
    education: [
      {
        school: 'Universidade Federal do Tocantins (UFT)',
        degree: 'Máster, Modelado computacional de sistemas',
        period: '2018 - 2020',
      },
      {
        school: 'FLAG',
        degree: 'Professional Full Stack Web Development',
        period: '2024 - 2025',
      },
      {
        school: 'Universidade Estadual do Tocantins (UNITINS)',
        degree: 'Grado, Sistemas de información',
        period: '2016 - 2020',
      },
      {
        school: 'Universidade Federal do Tocantins (UFT)',
        degree: 'Grado, Artes',
        period: '2012 - 2017',
      },
    ],
    certifications: [
      'FLAG — Professional Full Stack Web Development (2024-2025)',
      'Frontend Frameworks — React',
      'Workshop: MongoDB, Node.js y Express.js',
      'Workshop: SASS y JavaScript',
    ],
    languages: [
      { name: 'Portugués', level: 'Nativo' },
      { name: 'Inglés', level: 'Competencia profesional completa' },
      { name: 'Español', level: 'Competencia profesional completa' },
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
    htmlLang:
      locale === 'pt' ? 'pt-BR' : locale === 'es' ? 'es' : 'en',
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
  locale: ResumeLocale = 'en',
) {
  const presentByLocale: Record<ResumeLocale, string> = {
    en: 'Present',
    es: 'Presente',
    pt: 'Presente',
  }
  const present = presentByLocale[locale]
  if (current || yearEnd === null) return `${yearStart} - ${present}`
  return `${yearStart} - ${yearEnd}`
}
