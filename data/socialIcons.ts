import type { SimpleIcon } from 'simple-icons'
import {
  siBehance,
  siFiles,
  siGithub,
  siGmail,
  siWhatsapp,
} from 'simple-icons'
import type { SocialLinkId } from '~/types/portfolio'

export type SocialIconDef = {
  path: string
  title: string
}

/** LinkedIn não está mais no pacote simple-icons; path oficial mantido. */
const LINKEDIN_ICON: SocialIconDef = {
  path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.957 2.957 0 01-2.963-2.963 2.957 2.957 0 012.963-2.963 2.958 2.958 0 012.963 2.963 2.957 2.957 0 01-2.963 2.963zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  title: 'LinkedIn',
}

function fromSimpleIcon(icon: SimpleIcon): SocialIconDef {
  return {
    path: icon.path,
    title: icon.title,
  }
}

/** Ícones oficiais — https://simpleicons.org */
export const socialIcons: Record<SocialLinkId, SocialIconDef> = {
  cv: {
    ...fromSimpleIcon(siFiles),
    title: 'Currículo PDF',
  },
  linkedin: LINKEDIN_ICON,
  github: fromSimpleIcon(siGithub),
  behance: fromSimpleIcon(siBehance),
  email: fromSimpleIcon(siGmail),
  whatsapp: fromSimpleIcon(siWhatsapp),
}

export function getSocialIcon(id: SocialLinkId): SocialIconDef {
  return socialIcons[id]
}
