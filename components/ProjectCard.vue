<script setup lang="ts">
import type { Project } from '~/types/portfolio'

defineProps<{
  project: Project
}>()

const copy = usePortfolioCopy()
</script>

<template>
  <StroCard
    variant="solid"
    hover
    padding="none"
    class="group flex h-full flex-col overflow-hidden"
  >
    <a
      v-if="project.siteUrl"
      :href="project.siteUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="block shrink-0"
      :aria-label="`${project.title} — ${copy.projects.viewSite}`"
    >
      <ProjectCover :project="project" />
    </a>
    <div v-else class="shrink-0">
      <ProjectCover :project="project" />
    </div>

    <div class="flex flex-1 flex-col p-5 sm:p-6">
      <div class="mb-3 flex flex-wrap items-start justify-between gap-2">
        <div class="min-w-0 flex-1">
          <p class="stro-kicker !text-[10px] !tracking-widest text-stro-purple">
            {{ project.organization }}
          </p>
          <h3 class="stro-heading mt-2 text-lg sm:text-xl">
            <a
              v-if="project.siteUrl"
              :href="project.siteUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="transition hover:text-stro-cyan"
            >
              {{ project.title }}
            </a>
            <span v-else>{{ project.title }}</span>
          </h3>
        </div>
        <StroBadge v-if="project.year" variant="neutral">
          {{ project.year }}
        </StroBadge>
      </div>

      <p class="stro-body mb-5 flex-1 line-clamp-3 text-sm">
        {{ project.description }}
      </p>

      <ul class="mb-4 flex flex-wrap gap-2">
        <li v-for="tag in project.tags.slice(0, 4)" :key="tag">
          <StroBadge variant="neutral">{{ tag }}</StroBadge>
        </li>
      </ul>

      <div class="mt-auto flex flex-wrap gap-2">
        <StroButton
          v-if="project.siteUrl"
          :href="project.siteUrl"
          variant="primary"
          size="sm"
          external
        >
          {{ copy.projects.viewSite }}
        </StroButton>
        <StroButton
          v-if="project.behanceUrl"
          :href="project.behanceUrl"
          variant="secondary"
          size="sm"
          external
        >
          {{ copy.projects.behanceCta }}
        </StroButton>
      </div>
    </div>
  </StroCard>
</template>
