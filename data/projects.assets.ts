/**
 * URLs, imagens e ordem (LinkedIn) por projeto.
 * Imagens locais: public/projects/{id}.webp (gerar com npm run sync:projects)
 */
export type ProjectAsset = {
  /** Site ou app ao vivo */
  siteUrl?: string
  /** Caminho local (/projects/…) ou URL absoluta */
  imageUrl?: string
  imageAlt?: string
  /** Ordem no perfil LinkedIn (menor = mais destaque) */
  order: number
  /** Galeria Behance quando não está em projects.meta */
  behanceUrl?: string
}

export const projectAssetsById: Record<string, ProjectAsset> = {
  'dr-jose-messias': {
    siteUrl: 'https://drmessias.com.br/',
    order: 0,
  },
  'layane-moura': {
    siteUrl: 'https://layanemoura.com/',
    order: 1,
  },
  'olliv-pericias': {
    siteUrl: 'https://www.ollivpericias.com.br/',
    order: 2,
  },
  'futuro-exterminado': {
    siteUrl: 'https://futuroexterminado.com.br/',
    order: 3,
  },
  'crime-index-2025': {
    siteUrl: 'https://ocindex.net/',
    order: 4,
  },
  'transparencia-brasil': {
    siteUrl: 'https://www.transparencia.org.br/',
    order: 5,
  },
  'custo-brasil': {
    siteUrl: 'https://www.custobrasil.org.br/',
    order: 6,
  },
  'aborto-brasil': {
    siteUrl: 'https://mapa.abortoazmina.org/',
    order: 7,
  },
  'amazon-underworld': {
    siteUrl: 'https://amazonunderworld.org/',
    order: 8,
    behanceUrl: 'https://www.behance.net/gabrielstroligo',
  },
  'golpe-flix': {
    siteUrl: 'https://www.aosfatos.org/golpeflix/',
    order: 9,
    behanceUrl: 'https://www.behance.net/gabrielstroligo',
  },
  cedra: {
    siteUrl: 'https://cedra.org.br/',
    order: 10,
    behanceUrl: 'https://www.behance.net/gabrielstroligo',
  },
  hri: {
    siteUrl: 'https://hri.global/',
    order: 11,
    behanceUrl: 'https://www.behance.net/gabrielstroligo',
  },
  okbr: {
    siteUrl: 'https://ok.org.br/',
    order: 12,
  },
  'saude-ambiental': {
    siteUrl:
      'https://www.gov.br/mma/pt-br/assuntos/saude-e-qualidade-de-vida/saude-ambiental',
    order: 13,
  },
  desiderata: {
    siteUrl: 'https://panoramadaoncologia.desiderata.org.br/',
    order: 14,
  },
  'hfpm-who': {
    siteUrl:
      'https://www.who.int/teams/health-financing-and-economics/health-financing/diagnostics/health-financing-progress-matrix',
    order: 15,
  },
  inovahc: {
    siteUrl: 'https://inovahc.com.br/',
    order: 16,
  },
  safernet: {
    siteUrl: 'https://cidadaniadigital.org.br/',
    order: 17,
  },
  'siga-doacao': {
    siteUrl: 'https://sigasuadoacao.com.br/',
    order: 18,
  },
  'weplan-forests': {
    siteUrl: 'https://www.weplan-forests.org/methodology',
    order: 19,
  },
  'narrativas-ancestrais': {
    siteUrl: 'http://www.amoreira.info/narrativasancestrais/',
    order: 20,
  },
  nsi: {
    siteUrl: 'https://newsouthinstitute.com/',
    order: 21,
  },
  'ccr-rmbh': {
    order: 22,
  },
  tjto: {
    siteUrl: 'https://www.tjto.jus.br/',
    order: 23,
  },
  'eles-tao-viajando': {
    siteUrl: 'https://github.com/stroligo/elestaoviajando',
    order: 24,
  },
}

export function projectImagePath(id: string): string {
  return `/projects/${id}.webp`
}
