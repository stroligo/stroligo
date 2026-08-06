/**
 * Stack técnica por projeto — competências indicadas no LinkedIn.
 * @see https://www.linkedin.com/in/gabrielstroligo/details/projects/
 */
export const projectStacksById: Record<string, string[]> = {
  'dr-jose-messias': ['Nuxt', 'Tailwind CSS', 'TypeScript'],
  'layane-moura': ['Nuxt', 'Vue', 'Tailwind CSS', 'TypeScript'],
  'olliv-pericias': ['JavaScript', 'Nuxt', 'Tailwind CSS'],
  'futuro-exterminado': ['Nuxt', 'Tailwind CSS', 'Vue'],
  'crime-index-2025': ['Nuxt', 'Tailwind CSS'],
  'transparencia-brasil': ['Nuxt', 'Tailwind CSS', 'Vue', 'PHP'],
  'custo-brasil': ['WordPress', 'Tailwind CSS'],
  'aborto-brasil': ['HTML', 'Tailwind CSS', 'JavaScript'],
  'amazon-underworld': ['Tailwind CSS', 'PHP', 'JavaScript'],
  'golpe-flix': ['React', 'Tailwind CSS'],
  cedra: ['WordPress', 'Tailwind CSS'],
  hri: ['Tailwind CSS', 'PHP'],
  okbr: ['Tailwind CSS', 'PHP'],
  'saude-ambiental': ['Nuxt', 'Tailwind CSS'],
  desiderata: ['Nuxt', 'Tailwind CSS'],
  'hfpm-who': ['Tailwind CSS', 'CSS'],
  inovahc: ['WordPress', 'Tailwind CSS'],
  safernet: ['Vue', 'Tailwind CSS'],
  'siga-doacao': ['Nuxt', 'Tailwind CSS'],
  'weplan-forests': ['Tailwind CSS', 'JavaScript'],
  'narrativas-ancestrais': ['Tailwind CSS', 'PHP'],
  nsi: ['Tailwind CSS', 'PHP'],
  'ccr-rmbh': ['Tailwind CSS', 'JavaScript'],
  tjto: ['Joomla', 'Tailwind CSS', 'PHP', 'HTML', 'CSS', 'JavaScript', 'Git'],
  'eles-tao-viajando': ['React', 'Node.js', 'Tailwind CSS'],
}

export function projectStackForId(id: string): string[] | undefined {
  return projectStacksById[id]
}
