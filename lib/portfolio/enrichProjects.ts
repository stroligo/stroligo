import {
  projectAssetsById,
  projectImagePath,
} from '~/data/projects.assets'
import type { Project } from '~/types/portfolio'

export function enrichProject(project: Project): Project {
  const assets = projectAssetsById[project.id]
  if (!assets) {
    return {
      ...project,
      imageUrl: project.imageUrl ?? projectImagePath(project.id),
      order: project.order ?? 999,
    }
  }

  return {
    ...project,
    siteUrl: assets.siteUrl ?? project.siteUrl,
    imageUrl:
      projectImagePath(project.id) ??
      assets.imageUrl ??
      project.imageUrl,
    imageAlt: assets.imageAlt ?? project.imageAlt,
    order: assets.order ?? project.order ?? 999,
    behanceUrl: project.behanceUrl ?? assets.behanceUrl,
  }
}

export function enrichAndSortProjects(projects: Project[]): Project[] {
  return projects.map(enrichProject).sort((a, b) => {
    const featuredDiff = Number(b.featured) - Number(a.featured)
    if (featuredDiff !== 0) return featuredDiff
    const orderDiff = (a.order ?? 999) - (b.order ?? 999)
    if (orderDiff !== 0) return orderDiff
    return a.title.localeCompare(b.title)
  })
}
