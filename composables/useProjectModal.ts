import type { Project } from '~/types/portfolio'

export function useProjectModal() {
  const activeProject = useState<Project | null>('stro-project-modal', () => null)

  function openProjectModal(project: Project) {
    activeProject.value = project
  }

  function closeProjectModal() {
    activeProject.value = null
  }

  return {
    activeProject,
    openProjectModal,
    closeProjectModal,
  }
}
