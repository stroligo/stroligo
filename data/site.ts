export const site = {
  name: 'Gabriel Stroligo',
  siteUrl: 'https://stroligo.dev',
  email: 'gabrielstroligo@gmail.com',
  profilePhotoUrl: '/profile/photo.png',
  resumeUrl: '/profile/may-26.pdf',
  linkedInProjectsUrl:
    'https://www.linkedin.com/in/gabrielstroligo/details/projects/',
  whatsapp: '+34 647 520 879',
  whatsappE164: '34647520879',
} as const

export const whatsappUrl = `https://wa.me/${site.whatsappE164}` as const

const whatsappIntro = {
  pt: 'Olá Gabriel, vi seu portfólio em stroligo.dev e gostaria de conversar.',
  en: 'Hi Gabriel, I saw your portfolio at stroligo.dev and would like to get in touch.',
} as const

export function whatsappContactUrl(locale: 'pt' | 'en' = 'pt') {
  return `${whatsappUrl}?text=${encodeURIComponent(whatsappIntro[locale])}`
}

export const socialHrefs = {
  cv: site.resumeUrl,
  linkedin: 'https://www.linkedin.com/in/gabrielstroligo/',
  github: 'https://github.com/stroligo',
  behance: 'https://www.behance.net/gabrielstroligo',
  email: `mailto:${site.email}`,
  whatsapp: whatsappUrl,
} as const

export const socialLinkIds = [
  'cv',
  'linkedin',
  'github',
  'behance',
  'email',
  'whatsapp',
] as const

