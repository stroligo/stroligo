<script setup lang="ts">
import type { Project, ProjectCategory } from '~/types/portfolio'

const props = defineProps<{
  project: Project
  aspect?: 'video' | 'wide'
}>()

const copy = usePortfolioCopy()

const imageFailed = ref(false)

const categoryGradients: Record<
  Exclude<ProjectCategory, 'todos'>,
  string
> = {
  impacto:
    'linear-gradient(135deg, rgb(139 92 246 / 0.45), rgb(59 130 246 / 0.35))',
  saude:
    'linear-gradient(135deg, rgb(16 185 129 / 0.4), rgb(6 182 212 / 0.35))',
  ambiente:
    'linear-gradient(135deg, rgb(34 197 94 / 0.4), rgb(139 92 246 / 0.3))',
  institucional:
    'linear-gradient(135deg, rgb(59 130 246 / 0.4), rgb(107 114 128 / 0.35))',
}

const gradient = computed(
  () => categoryGradients[props.project.category] ?? categoryGradients.impacto,
)

const aspectClass = computed(() =>
  props.aspect === 'wide' ? 'aspect-[21/9]' : 'aspect-video',
)

watch(
  () => props.project.imageUrl,
  () => {
    imageFailed.value = false
  },
)
</script>

<template>
  <div
    class="relative overflow-hidden rounded-[var(--stro-radius-md)] border border-stro-border bg-stro-surface"
    :class="aspectClass"
  >
    <img
      v-if="project.imageUrl && !imageFailed"
      :src="project.imageUrl"
      :alt="project.imageAlt || project.title"
      class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
      loading="lazy"
      decoding="async"
      @error="imageFailed = true"
    />
    <div
      v-else
      class="flex h-full w-full flex-col items-center justify-center gap-2 p-6 text-center"
      :style="{ background: gradient }"
      aria-hidden="true"
    >
      <span
        class="stro-font-mono text-xs uppercase tracking-widest text-white/70"
      >
        {{ project.organization }}
      </span>
      <span class="stro-heading max-w-[14ch] text-lg text-white sm:text-xl">
        {{ project.title }}
      </span>
    </div>
    <StroBadge
      v-if="project.featured"
      variant="gradient"
      class="absolute left-3 top-3 z-10 shadow-[var(--stro-shadow-glow-brand)]"
    >
      {{ copy.projects.featuredBadge }}
    </StroBadge>
    <div
      class="pointer-events-none absolute inset-0 bg-gradient-to-t from-stro-bg/80 via-transparent to-transparent"
      aria-hidden="true"
    />
  </div>
</template>
