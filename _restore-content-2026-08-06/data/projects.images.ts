import { projectsMetaById } from '~/data/projects.meta'

/**
 * Fontes de capa por projeto (og:image, Behance, CDN).
 * Ficheiro local: public/projects/{id}.webp — gerar com npm run sync:projects
 */
export type ProjectImageSource = {
  fetchUrls?: string[]
  image?: string
}

export const projectImageSources: Record<string, ProjectImageSource> = {
  'trampos-do-futuro': {
    fetchUrls: ['https://www.fundacaoitau.org.br/trampos-do-futuro-2026/'],
  },
  'dr-jose-messias': {
    fetchUrls: ['https://drmessias.com.br/', 'https://drjosemessias.com.br/'],
  },
  'layane-moura': {
    fetchUrls: ['https://layanemoura.com/'],
  },
  'olliv-pericias': {
    fetchUrls: ['https://www.ollivpericias.com.br/'],
  },
  'futuro-exterminado': {
    fetchUrls: ['https://futuroexterminado.com.br/'],
    image: 'https://futuroexterminado.com.br/share-img.png',
  },
  'crime-index-2025': {
    fetchUrls: ['https://ocindex.net/'],
    image: 'https://ocindex.net/assets/images/share.jpg',
  },
  'transparencia-brasil': {
    fetchUrls: ['https://www.transparencia.org.br/'],
  },
  'custo-brasil': {
    fetchUrls: ['https://www.custobrasil.org.br/'],
  },
  'aborto-brasil': {
    fetchUrls: [
      'https://www.behance.net/gallery/231025149/Panorama-do-Aborto-no-Brasil',
    ],
    image:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/de240d231025149.688157ade1b9c.jpg',
  },
  'amazon-underworld': {
    fetchUrls: ['https://amazonunderworld.org/'],
  },
  'golpe-flix': {
    fetchUrls: ['https://www.aosfatos.org/golpeflix/'],
  },
  cedra: {
    fetchUrls: ['https://cedra.org.br/'],
  },
  hri: {
    fetchUrls: ['https://hri.global/'],
  },
  okbr: {
    fetchUrls: ['https://ok.org.br/'],
  },
  'saude-ambiental': {
    fetchUrls: [
      'https://www.gov.br/mma/pt-br/assuntos/saude-e-qualidade-de-vida/saude-ambiental',
      'https://www.gov.br/mma/pt-br',
    ],
    image:
      'https://www.gov.br/mma/pt-br/pagina-inicial/@@images/74e3e13f-1382-4ad3-a7cb-3867c786b322.jpeg',
  },
  euipo: {
    fetchUrls: ['https://www.euipo.europa.eu/'],
  },
  desiderata: {
    fetchUrls: ['https://panoramadaoncologia.desiderata.org.br/'],
  },
  'hfpm-who': {
    fetchUrls: [
      'https://www.who.int/teams/health-financing-and-economics/health-financing/diagnostics/health-financing-progress-matrix',
    ],
  },
  inovahc: {
    fetchUrls: ['https://inovahc.com.br/'],
  },
  safernet: {
    fetchUrls: ['https://cidadaniadigital.org.br/'],
  },
  'siga-doacao': {
    fetchUrls: ['https://sigasuadoacao.com.br/'],
    image:
      'https://api.sigasuadoacao.com.br/wp-content/uploads/2025/09/Captura-de-tela-2025-09-02-154302.png',
  },
  'weplan-forests': {
    fetchUrls: ['https://www.weplan-forests.org/methodology'],
  },
  'narrativas-ancestrais': {
    fetchUrls: ['http://www.amoreira.info/narrativasancestrais/'],
    image:
      'http://www.amoreira.info/narrativasancestrais/assets/images/share-thumb.png',
  },
  nsi: {
    fetchUrls: [
      'https://www.behance.net/gallery/180930331/NSI-New-South-Institute',
    ],
    image:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/82219b180930331.696079115fa5f.png',
  },
  'ccr-rmbh': {
    fetchUrls: [
      'https://www.behance.net/gallery/167239667/CCR-Modernizacao-da-Mobilidade-na-RMBH',
    ],
    image:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/b3b1d0167239667.642585bf5292b.png',
  },
  tjto: {
    fetchUrls: ['https://www.tjto.jus.br/'],
    image: 'https://www.tjto.jus.br/images/noticias/exemplos/aerea_tjto.jpeg',
  },
  'eles-tao-viajando': {
    fetchUrls: ['https://github.com/stroligo/elestaoviajando'],
    image:
      'https://opengraph.githubassets.com/ea3d76b6a7d9aea67c2dc1124f21640f4367e2a4685fe829886efc2e0bcfb7c3/stroligo/elestaoviajando',
  },
}

/** Behance das galerias em projects.meta */
export function behanceFetchUrl(projectId: string): string | undefined {
  return projectsMetaById[projectId]?.behanceUrl
}
