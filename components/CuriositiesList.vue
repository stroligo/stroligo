<script setup lang="ts">
import type { HobbyCuriosity } from '~/data/hobbies'
import { getCuriosityIcon } from '~/data/curiosityIcons'

const props = defineProps<{
  items: HobbyCuriosity[]
}>()

function iconFor(item: HobbyCuriosity) {
  return getCuriosityIcon(item.id)
}

function iconBoxStyle(color: string) {
  return {
    color,
    background: `color-mix(in srgb, ${color} 14%, var(--stro-bg))`,
    borderColor: `color-mix(in srgb, ${color} 32%, var(--stro-border))`,
    boxShadow: `0 0 20px color-mix(in srgb, ${color} 18%, transparent)`,
  }
}
</script>

<template>
  <ul
    class="curiosities-list rounded-[var(--stro-radius-xl)] border border-stro-border bg-stro-surface/50 p-5 shadow-[var(--stro-shadow-soft)] sm:p-6"
    role="list"
  >
    <li
      v-for="(item, index) in props.items"
      :key="item.id"
      class="curiosities-list__item flex items-center gap-3.5 sm:gap-4"
      :class="{ 'curiosities-list__item--last': index === props.items.length - 1 }"
    >
      <span
        class="curiosities-list__icon flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--stro-radius-lg)] border transition sm:h-12 sm:w-12"
        :style="iconBoxStyle(iconFor(item).color)"
        aria-hidden="true"
      >
        <svg
          class="h-[1.35rem] w-[1.35rem] sm:h-6 sm:w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.65"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            v-for="(d, pathIndex) in iconFor(item).paths"
            :key="pathIndex"
            :d="d"
            :fill="iconFor(item).fills?.[pathIndex] ?? 'none'"
          />
        </svg>
      </span>
      <span
        class="min-w-0 text-sm leading-relaxed text-stro-foreground/90 sm:text-base"
      >
        {{ item.text }}
      </span>
    </li>
  </ul>
</template>

<style scoped>
.curiosities-list__item:not(.curiosities-list__item--last) {
  padding-bottom: 0.875rem;
  margin-bottom: 0.875rem;
  border-bottom: 1px solid color-mix(in srgb, var(--stro-border) 65%, transparent);
}

.curiosities-list__icon {
  transition:
    transform var(--stro-duration-normal) var(--stro-ease),
    box-shadow var(--stro-duration-normal) var(--stro-ease);
}

.curiosities-list__item:hover .curiosities-list__icon {
  transform: translateY(-1px);
}
</style>
