<script setup lang="ts">
import { getStackTechIcon } from '~/data/stackTechIcons'

const props = defineProps<{
  label: string
}>()

const { isDark } = useStroTheme()

const icon = computed(() => getStackTechIcon(props.label))

const iconColor = computed(() => {
  if (!icon.value) return undefined
  if (props.label === 'Next.js') {
    return isDark.value ? '#EDEDED' : '#171717'
  }
  return icon.value.color
})
</script>

<template>
  <span
    class="inline-flex items-center gap-2.5 rounded-[var(--stro-radius-full)] border border-stro-border bg-stro-surface/90 px-3.5 py-2 text-sm font-medium text-stro-foreground shadow-[var(--stro-shadow-soft)] transition hover:border-stro-purple/35 hover:bg-stro-purple/5 sm:px-4 sm:py-2.5 sm:text-base"
  >
    <svg
      v-if="icon"
      class="h-5 w-5 shrink-0 sm:h-6 sm:w-6"
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
      class="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-stro-purple/15 stro-font-mono text-[9px] font-bold text-stro-purple sm:h-6 sm:w-6 sm:text-[10px]"
      aria-hidden="true"
    >
      {{ label.charAt(0) }}
    </span>
    <span>{{ label }}</span>
  </span>
</template>
