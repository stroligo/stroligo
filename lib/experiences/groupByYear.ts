import type { Experience } from '~/types/portfolio'

export type ExperienceTimelineGroup = {
  year: number
  /** Grupo com cargos em andamento (Vex Tech, Café.art.br, TJTO). */
  isCurrent?: boolean
  items: Experience[]
}

export function compareExperiences(a: Experience, b: Experience): number {
  if (Boolean(a.current) !== Boolean(b.current)) {
    return a.current ? -1 : 1
  }
  if (b.yearStart !== a.yearStart) return b.yearStart - a.yearStart
  const endA = a.yearEnd ?? (a.current ? 9999 : a.yearStart)
  const endB = b.yearEnd ?? (b.current ? 9999 : b.yearStart)
  if (endB !== endA) return endB - endA
  return a.id.localeCompare(b.id)
}

export function buildExperienceTimelineGroups(
  experiences: Experience[],
): ExperienceTimelineGroup[] {
  const sorted = [...experiences].sort(compareExperiences)
  const groups: ExperienceTimelineGroup[] = []

  const current = sorted.filter((e) => e.current)
  const past = sorted.filter((e) => !e.current)

  if (current.length) {
    groups.push({
      year: Math.max(...current.map((e) => e.yearStart)),
      isCurrent: true,
      items: current,
    })
  }

  const map = new Map<number, Experience[]>()
  for (const item of past) {
    const list = map.get(item.yearStart) ?? []
    list.push(item)
    map.set(item.yearStart, list)
  }

  for (const [year, items] of [...map.entries()].sort(([a], [b]) => b - a)) {
    groups.push({
      year,
      items: [...items].sort(compareExperiences),
    })
  }

  return groups
}

/** @deprecated Use buildExperienceTimelineGroups */
export function groupExperiencesByYear(
  experiences: Experience[],
): ExperienceTimelineGroup[] {
  return buildExperienceTimelineGroups(experiences)
}

export function experienceTimelineYears(
  groups: ExperienceTimelineGroup[],
): number[] {
  return groups.filter((g) => !g.isCurrent).map((g) => g.year)
}
