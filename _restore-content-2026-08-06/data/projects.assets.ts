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
  'trampos-do-futuro': {
    siteUrl: 'https://www.fundacaoitau.org.br/trampos-do-futuro-2026/',
    order: 0,
  },
  'dr-jose-messias': {
    siteUrl: 'https://drmessias.com.br/',
    order: 1,
  },
  'layane-moura': {
    siteUrl: 'https://layanemoura.com/',
    order: 2,
  },
  'olliv-pericias': {
    siteUrl: 'https://www.ollivpericias.com.br/',
    order: 3,
  },
  'futuro-exterminado': {
    siteUrl: 'https://futuroexterminado.com.br/',
    order: 4,
  },
  'crime-index-2025': {
    siteUrl: 'https://ocindex.net/',
    order: 5,
  },
  'transparencia-brasil': {
    siteUrl: 'https://www.transparencia.org.br/',
    order: 6,
  },
  'saude-ambiental': {
    siteUrl:
      'https://www.gov.br/mma/pt-br/assuntos/saude-e-qualidade-de-vida/saude-ambiental',
    order: 7,
  },
  euipo: {
    siteUrl: 'https://www.euipo.europa.eu/',
    order: 8,
  },
  'eles-tao-viajando': {
    siteUrl: 'https://github.com/stroligo/elestaoviajando',
    order: 9,
  },
  'siga-doacao': {
    siteUrl: 'https://sigasuadoacao.com.br/',
    order: 10,
  },
  desiderata: {
    siteUrl: 'https://panoramadaoncologia.desiderata.org.br/',
    order: 11,
  },
  'custo-brasil': {
    siteUrl: 'https://www.custobrasil.org.br/',
    order: 12,
  },
  'hfpm-who': {
    siteUrl:
      'https://www.who.int/teams/health-financing-and-economics/health-financing/diagnostics/health-financing-progress-matrix',
    order: 13,
  },
  inovahc: {
    siteUrl: 'https://inovahc.com.br/',
    order: 14,
  },
  safernet: {
    siteUrl: 'https://cidadaniadigital.org.br/',
    order: 15,
  },
  'aborto-brasil': {
    siteUrl: 'https://mapa.abortoazmina.org/',
    order: 16,
  },
  'amazon-underworld': {
    siteUrl: 'https://amazonunderworld.org/',
    order: 17,
    behanceUrl: 'https://www.behance.net/gabrielstroligo',
  },
  cedra: {
    siteUrl: 'https://cedra.org.br/',
    order: 18,
    behanceUrl: 'https://www.behance.net/gabrielstroligo',
  },
  'golpe-flix': {
    siteUrl: 'https://www.aosfatos.org/golpeflix/',
    order: 19,
    behanceUrl: 'https://www.behance.net/gabrielstroligo',
  },
  hri: {
    siteUrl: 'https://hri.global/',
    order: 20,
    behanceUrl: 'https://www.behance.net/gabrielstroligo',
  },
  okbr: {
    siteUrl: 'https://ok.org.br/',
    order: 21,
  },
  'weplan-forests': {
    siteUrl: 'https://www.weplan-forests.org/methodology',
    order: 22,
  },
  'narrativas-ancestrais': {
    siteUrl: 'http://www.amoreira.info/narrativasancestrais/',
    order: 23,
  },
  nsi: {
    siteUrl: 'https://newsouthinstitute.com/',
    order: 24,
  },
  'ccr-rmbh': {
    order: 25,
  },
  tjto: {
    siteUrl: 'https://www.tjto.jus.br/',
    order: 26,
  },
}

export function projectImagePath(id: string): string {
  return `/projects/${id}.webp`
}
