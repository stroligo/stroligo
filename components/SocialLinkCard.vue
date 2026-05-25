<script setup lang="ts">
import type { SocialLink, SocialLinkId } from '~/types/portfolio'
import { getSocialIcon } from '~/data/socialIcons'

const props = defineProps<{
  link: SocialLink
}>()

const { isDark } = useStroTheme()

const ariaLabel = computed(() => {
  const base = props.link.label
  const desc = props.link.description
  return desc ? `${base} — ${desc}` : base
})

const icon = computed(() => getSocialIcon(props.link.id))

const iconColor = computed(() => {
  if (props.link.id === 'github') {
    return isDark.value ? '#E5E7EB' : icon.value.color
  }
  return icon.value.color
})

const boxClass = computed(() => {
  if (props.link.primary) {
    return 'border-stro-purple/40 bg-stro-purple/10 shadow-[var(--stro-shadow-glow-brand)] hover:border-stro-cyan/50 hover:bg-stro-purple/20'
  }
  if (props.link.id === 'whatsapp') {
    return 'border-[#25D366]/35 bg-[#25D366]/10 hover:border-[#25D366]/55 hover:bg-[#25D366]/20'
  }
  return 'border-stro-border bg-stro-surface/80 hover:border-stro-purple/35 hover:bg-stro-purple/5'
})
</script>

<template>
  <a
    :href="link.href"
    :target="link.external ? '_blank' : undefined"
    :rel="link.external ? 'noopener noreferrer' : undefined"
    :aria-label="ariaLabel"
    :title="ariaLabel"
    class="group inline-flex shrink-0"
  >
    <span
      class="stro-social-icon flex h-14 w-14 items-center justify-center rounded-[var(--stro-radius-lg)] border transition sm:h-16 sm:w-16"
      :class="boxClass"
    >
      <svg
        class="h-6 w-6 shrink-0 sm:h-7 sm:w-7"
        viewBox="0 0 24 24"
        fill="currentColor"
        role="img"
        :aria-label="icon.title"
        :style="{ color: iconColor }"
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
    box-shadow var(--stro-duration-normal) var(--stro-ease);
}

.stro-social-icon svg {
  transition: color var(--stro-duration-normal) var(--stro-ease);
}

.group:hover .stro-social-icon svg {
  filter: brightness(1.08);
}
</style>
