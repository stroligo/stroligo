import type { ProjectMeta } from '~/types/portfolio'

export const projectsMeta: ProjectMeta[] = [
  {
    id: 'trampos-do-futuro',
    category: 'impacto',
    year: '2026',
    featured: true,
  },
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
  {
    id: 'futuro-exterminado',
    category: 'impacto',
    year: '2025',
    featured: true,
  },
  { id: 'crime-index-2025', category: 'impacto', year: '2025' },
  { id: 'transparencia-brasil', category: 'impacto', year: '2025' },
  { id: 'saude-ambiental', category: 'saude', year: '2024' },
  {
    id: 'euipo',
    category: 'institucional',
    year: '2025',
  },
  { id: 'eles-tao-viajando', category: 'institucional', year: '2025' },
  { id: 'siga-doacao', category: 'saude', year: '2024' },
  { id: 'desiderata', category: 'saude', year: '2024' },
  { id: 'custo-brasil', category: 'impacto', year: '2024' },
  { id: 'hfpm-who', category: 'saude', year: '2024' },
  { id: 'inovahc', category: 'saude', year: '2024' },
  { id: 'safernet', category: 'saude', year: '2024' },
  {
    id: 'aborto-brasil',
    category: 'impacto',
    year: '2023',
    behanceUrl:
      'https://www.behance.net/gallery/231025149/Panorama-do-Aborto-no-Brasil',
    featured: true,
  },
  { id: 'amazon-underworld', category: 'impacto', year: '2023' },
  { id: 'cedra', category: 'impacto', year: '2023' },
  {
    id: 'golpe-flix',
    category: 'impacto',
    year: '2023',
    behanceUrl: 'https://www.behance.net/gabrielstroligo',
  },
  {
    id: 'hri',
    category: 'impacto',
    year: '2023',
    behanceUrl: 'https://www.behance.net/gabrielstroligo',
  },
  { id: 'okbr', category: 'impacto', year: '2023' },
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
    year: '2023',
    behanceUrl:
      'https://www.behance.net/gallery/167239667/CCR-Modernizacao-da-Mobilidade-na-RMBH',
  },
  { id: 'tjto', category: 'institucional', year: '2011' },
]

export const projectsMetaById = Object.fromEntries(
  projectsMeta.map((meta) => [meta.id, meta]),
) as Record<string, ProjectMeta>
