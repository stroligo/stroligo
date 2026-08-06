<script setup lang="ts">
import type { Project } from '~/types/portfolio'
import {
  resolveProjectCategoryTags,
  resolveProjectStack,
} from '~/lib/projects/stack'

const props = defineProps<{
  project: Project
}>()

const copy = usePortfolioCopy()
const { t } = useI18n()
const { openProjectModal } = useProjectModal()

const stack = computed(() => resolveProjectStack(props.project))
const categoryTags = computed(() => resolveProjectCategoryTags(props.project))

function onOpen() {
  openProjectModal(props.project)
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    onOpen()
  }
}
</script>

<template>
  <StroCard
    as="div"
    variant="solid"
    hover
    padding="none"
    class="group flex h-full w-full min-w-0 max-w-full cursor-pointer flex-col overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stro-cyan"
    tabindex="0"
    role="button"
    :aria-label="t('projects.openDetails', { title: project.title })"
    @click="onOpen"
    @keydown="onKeydown"
  >
    <div class="block w-full min-w-0 shrink-0 overflow-hidden">
      <ProjectCover :project="project" />
    </div>

    <div class="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
      <div class="mb-3 flex flex-wrap items-start justify-between gap-2">
        <div class="min-w-0 flex-1">
          <p class="stro-kicker !text-[10px] !tracking-widest text-stro-purple">
            {{ project.organization }}
          </p>
          <h3 class="stro-heading mt-2 text-lg sm:text-xl">
            {{ project.title }}
          </h3>
        </div>
        <StroBadge v-if="project.year" variant="neutral">
          {{ project.year }}
        </StroBadge>
      </div>

      <p class="stro-body mb-5 flex-1 line-clamp-3 text-sm">
        {{ project.description }}
      </p>

      <ProjectBadgeStrip
        class="mb-4"
        :stack="stack"
        :tags="categoryTags"
        stop-propagation
      />

      <div class="mt-auto flex flex-wrap gap-2">
        <StroButton
          v-if="project.siteUrl"
          :href="project.siteUrl"
          variant="primary"
          size="sm"
          external
          @click.stop
        >
          {{ copy.projects.viewSite }}
        </StroButton>
        <StroButton
          v-if="project.behanceUrl"
          :href="project.behanceUrl"
          variant="secondary"
          size="sm"
          external
          @click.stop
        >
          {{ copy.projects.behanceCta }}
        </StroButton>
      </div>
    </div>
  </StroCard>
</template>
