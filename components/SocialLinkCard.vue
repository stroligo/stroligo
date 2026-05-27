<script setup lang="ts">
import type { SocialLink } from '~/types/portfolio'
import { resumePdfFilename } from '~/data/resume'
import { getSocialIcon } from '~/data/socialIcons'

const props = defineProps<{
  link: SocialLink
}>()

const { locale } = useI18n()

const cvDownloadName = computed(() =>
  resumePdfFilename(locale.value === 'pt' ? 'pt' : 'en'),
)

const ariaLabel = computed(() => {
  const base = props.link.label
  const desc = props.link.description
  return desc ? `${base} — ${desc}` : base
})

const icon = computed(() => getSocialIcon(props.link.id))
</script>

<template>
  <a
    :href="link.href"
    :download="link.id === 'cv' ? cvDownloadName : undefined"
    :target="link.external ? '_blank' : undefined"
    :rel="link.external ? 'noopener noreferrer' : undefined"
    :aria-label="ariaLabel"
    :title="ariaLabel"
    class="group inline-flex shrink-0"
  >
    <span
      class="stro-social-icon flex h-14 w-14 items-center justify-center rounded-[var(--stro-radius-lg)] border border-stro-border bg-stro-surface/80 text-stro-muted transition hover:border-stro-purple/35 hover:bg-stro-purple/5 hover:text-stro-foreground sm:h-16 sm:w-16"
    >
      <svg
        class="h-6 w-6 shrink-0 sm:h-7 sm:w-7"
        viewBox="0 0 24 24"
        fill="currentColor"
        role="img"
        :aria-label="icon.title"
      >
        <path :d="icon.path" />
      </svg>
      <span class="sr-only">{{ link.label }}</span>
    </span>
  </a>
</template>

<style scoped>
.stro-social-icon {
  transition:
    border-color var(--stro-duration-normal) var(--stro-ease),
    background-color var(--stro-duration-normal) var(--stro-ease),
    color var(--stro-duration-normal) var(--stro-ease);
}
</style>
