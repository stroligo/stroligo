export type ProjectCategory =
  | 'todos'
  | 'impacto'
  | 'saude'
  | 'ambiente'
  | 'institucional'

export type ProjectMeta = {
  id: string
  category: Exclude<ProjectCategory, 'todos'>
  year?: string
  /** Site ou repositório ao vivo */
  siteUrl?: string
  behanceUrl?: string
  /** Caminho em /public ou URL absoluta */
  imageUrl?: string
  imageAlt?: string
  featured?: boolean
  /** Ordem no LinkedIn (menor = mais destaque) */
  order?: number
}

export type ProjectContent = {
  id: string
  title: string
  organization: string
  description: string
  tags: string[]
}

export type Project = ProjectContent & ProjectMeta

export type Experience = {
  id: string
  company: string
  role: string
  period: string
  location: string
  highlight: string
  details: string
  yearStart: number
  yearEnd?: number | null
  url?: string
  current?: boolean
}

export type SocialLinkId =
  | 'cv'
  | 'linkedin'
  | 'github'
  | 'behance'
  | 'email'
  | 'whatsapp'

export type SocialLink = {
  id: SocialLinkId
  label: string
  href: string
  description?: string
  primary?: boolean
  external?: boolean
}

export type PortfolioProfile = {
  name: string
  tagline: string
  location: string
  experienceYears: string
  resumeLabel: string
  siteUrl: string
  resumeUrl: string
  email: string
  about: string[]
  stack: string[]
}

export type PortfolioLabels = {
  brandTagline: string
  seoTitle: string
  seoDescription: string
  ogDescription: string
  navAbout: string
  navWork: string
  navProjects: string
  navContact: string
  navResume: string
  navLinkedin: string
  navUikit: string
  navHome: string
  heroLinkedinCta: string
  heroExploreProjects: string
  heroExperience: string
  heroStatsProjects: string
  heroStatsFeatured: string
  heroStatsRoles: string
  aboutTitle: string
  stackTitle: string
  workTitle: string
  workSubtitle: string
  workCurrent: string
  projectsTitle: string
  projectsSubtitle: string
  projectsLinkedinAll: string
  projectsBehanceCta: string
  projectsViewSite: string
  projectsFeaturedTitle: string
  projectsFeaturedSubtitle: string
  projectsCountOne: string
  projectsCountMany: string
  contactTitle: string
  contactSubtitle: string
  contactEmailIntro: string
}

export type PortfolioContent = {
  profile: PortfolioProfile
  labels: PortfolioLabels
  projects: Project[]
  projectCategories: { id: ProjectCategory; label: string }[]
  experiences: Experience[]
  socialLinks: SocialLink[]
  linkedInProjectsUrl: string
}
