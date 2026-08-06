import type { ProjectMeta } from '~/types/portfolio'

export const projectsMeta: ProjectMeta[] = [
  {
    id: 'dr-jose-messias',
    category: 'saude',
    year: '2026',
  },
  {
    id: 'layane-moura',
    category: 'institucional',
    year: '2026',
  },
  {
    id: 'olliv-pericias',
    category: 'institucional',
    year: '2026',
  },
  { id: 'futuro-exterminado', category: 'impacto', featured: true },
  { id: 'crime-index-2025', category: 'impacto' },
  { id: 'transparencia-brasil', category: 'impacto' },
  { id: 'custo-brasil', category: 'impacto' },
  {
    id: 'aborto-brasil',
    category: 'impacto',
    year: '2023',
    behanceUrl:
      'https://www.behance.net/gallery/231025149/Panorama-do-Aborto-no-Brasil',
    featured: true,
  },
  { id: 'amazon-underworld', category: 'impacto', year: '2023' },
  {
    id: 'golpe-flix',
    category: 'impacto',
    year: '2023',
    behanceUrl: 'https://www.behance.net/gabrielstroligo',
  },
  { id: 'cedra', category: 'impacto', year: '2023' },
  {
    id: 'hri',
    category: 'impacto',
    year: '2023',
    behanceUrl: 'https://www.behance.net/gabrielstroligo',
  },
  { id: 'okbr', category: 'impacto', year: '2023' },
  { id: 'saude-ambiental', category: 'saude' },
  { id: 'desiderata', category: 'saude' },
  { id: 'hfpm-who', category: 'saude', year: '2024' },
  { id: 'inovahc', category: 'saude', year: '2024' },
  { id: 'safernet', category: 'saude', year: '2024' },
  { id: 'siga-doacao', category: 'saude' },
  { id: 'weplan-forests', category: 'ambiente', year: '2023' },
  { id: 'narrativas-ancestrais', category: 'ambiente', year: '2022' },
  {
    id: 'nsi',
    category: 'ambiente',
    year: '2022',
    behanceUrl:
      'https://www.behance.net/gallery/180930331/NSI-New-South-Institute',
  },
  {
    id: 'ccr-rmbh',
    category: 'ambiente',
    behanceUrl:
      'https://www.behance.net/gallery/167239667/CCR-Modernizacao-da-Mobilidade-na-RMBH',
  },
  { id: 'tjto', category: 'institucional' },
  { id: 'eles-tao-viajando', category: 'institucional' },
]

export const projectsMetaById = Object.fromEntries(
  projectsMeta.map((meta) => [meta.id, meta]),
) as Record<string, ProjectMeta>
