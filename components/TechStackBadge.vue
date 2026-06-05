<script setup lang="ts">
import { getStackTechIcon } from '~/data/stackTechIcons'

const props = withDefaults(
  defineProps<{
    label: string
    size?: 'default' | 'sm'
  }>(),
  { size: 'default' },
)

const { isDark } = useStroTheme()

const icon = computed(() => getStackTechIcon(props.label))

const iconColor = computed(() => {
  if (!icon.value) return undefined
  if (props.label === 'Next.js') {
    return isDark.value ? '#EDEDED' : '#171717'
  }
  return icon.value.color
})

const badgeClass = computed(() =>
  props.size === 'sm'
    ? 'gap-1.5 px-2.5 py-1 text-xs sm:px-3 sm:py-1.5'
    : 'gap-2.5 px-3.5 py-2 text-sm sm:px-4 sm:py-2.5 sm:text-base',
)

const iconClass = computed(() =>
  props.size === 'sm'
    ? 'h-4 w-4'
    : 'h-5 w-5 sm:h-6 sm:w-6',
)

const fallbackClass = computed(() =>
  props.size === 'sm'
    ? 'h-4 w-4 text-[8px] sm:text-[9px]'
    : 'h-5 w-5 sm:h-6 sm:w-6 sm:text-[10px] text-[9px]',
)
</script>

<template>
  <span
    class="inline-flex items-center rounded-[var(--stro-radius-full)] border border-stro-border bg-stro-surface/90 font-medium text-stro-foreground shadow-[var(--stro-shadow-soft)] transition hover:border-stro-purple/35 hover:bg-stro-purple/5"
    :class="badgeClass"
  >
    <svg
      v-if="icon"
      class="shrink-0"
      :class="iconClass"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      :aria-label="icon.title"
      :style="{ color: iconColor }"
    >
      <path :d="icon.path" />
    </svg>
    <span
      v-else
      class="flex shrink-0 items-center justify-center rounded-md bg-stro-purple/15 stro-font-mono font-bold text-stro-purple"
      :class="fallbackClass"
      aria-hidden="true"
    >
      {{ label.charAt(0) }}
    </span>
    <span>{{ label }}</span>
  </span>
</template>
