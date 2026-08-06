/**
 * Stack técnica por projeto — competências indicadas no LinkedIn / ChatGPT.
 * @see https://www.linkedin.com/in/gabrielstroligo/details/projects/
 */
export const projectStacksById: Record<string, string[]> = {
  'trampos-do-futuro': ['Nuxt', 'Tailwind CSS'],
  'dr-jose-messias': ['Nuxt', 'Tailwind CSS', 'TypeScript'],
  'layane-moura': ['Nuxt', 'Vue', 'Tailwind CSS', 'TypeScript'],
  'olliv-pericias': ['Nuxt', 'Tailwind CSS', 'JavaScript'],
  'futuro-exterminado': ['Nuxt', 'Tailwind CSS', 'JavaScript'],
  'crime-index-2025': ['Nuxt', 'Tailwind CSS', 'JavaScript'],
  'transparencia-brasil': ['Nuxt', 'Tailwind CSS', 'JavaScript'],
  'saude-ambiental': ['Nuxt', 'Tailwind CSS', 'JavaScript'],
  euipo: ['React', 'TypeScript', 'Material UI'],
  'eles-tao-viajando': ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
  'siga-doacao': ['Nuxt', 'Tailwind CSS', 'JavaScript'],
  desiderata: ['Nuxt', 'Tailwind CSS', 'JavaScript'],
  'custo-brasil': ['WordPress', 'HTML', 'CSS', 'JavaScript'],
  'hfpm-who': ['Nuxt', 'Tailwind CSS', 'JavaScript'],
  inovahc: ['WordPress', 'Tailwind CSS', 'JavaScript'],
  safernet: ['Vue.js', 'Tailwind CSS', 'JavaScript'],
  'aborto-brasil': ['HTML', 'Tailwind CSS', 'JavaScript'],
  'amazon-underworld': ['PHP', 'Tailwind CSS', 'JavaScript', 'Mapbox', 'QGIS'],
  cedra: ['WordPress', 'Tailwind CSS', 'JavaScript'],
  'golpe-flix': ['React', 'Tailwind CSS', 'JavaScript'],
  hri: ['PHP', 'Tailwind CSS', 'JavaScript'],
  okbr: ['PHP', 'Tailwind CSS', 'JavaScript'],
  'weplan-forests': ['Tailwind CSS', 'JavaScript'],
  'narrativas-ancestrais': ['PHP', 'Tailwind CSS', 'JavaScript'],
  nsi: ['Tailwind CSS', 'JavaScript'],
  'ccr-rmbh': ['Tailwind CSS', 'JavaScript'],
  tjto: ['Joomla', 'PHP', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS', 'MySQL'],
}

export function projectStackForId(id: string): string[] | undefined {
  return projectStacksById[id]
}
