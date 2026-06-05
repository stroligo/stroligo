import { getStackTechIcon } from '~/data/stackTechIcons'
import type { Project } from '~/types/portfolio'

const stackLabelAliases: Record<string, string> = {
  Tailwind: 'Tailwind CSS',
  Node: 'Node.js',
}

export function normalizeStackLabel(label: string): string {
  return stackLabelAliases[label] ?? label
}

export function isKnownStackLabel(label: string): boolean {
  return getStackTechIcon(normalizeStackLabel(label)) !== null
}

export function resolveProjectStack(
  project: Pick<Project, 'stack' | 'tags'>,
): string[] {
  const fromField = project.stack?.map(normalizeStackLabel).filter(Boolean) ?? []
  if (fromField.length) return fromField

  return project.tags
    .map(normalizeStackLabel)
    .filter(isKnownStackLabel)
    .filter((label, index, list) => list.indexOf(label) === index)
}

export function resolveProjectCategoryTags(
  project: Pick<Project, 'stack' | 'tags'>,
): string[] {
  const stackSet = new Set(resolveProjectStack(project))
  return project.tags.filter((tag) => !stackSet.has(normalizeStackLabel(tag)))
}
