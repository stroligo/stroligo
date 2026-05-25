<script setup lang="ts">
import type { Hobby } from '~/data/hobbies'
import { getHobbyIcon } from '~/data/hobbyIcons'

const props = defineProps<{
  hobby: Hobby
}>()

const icon = computed(() => getHobbyIcon(props.hobby.iconId))

const isExternal = computed(() => Boolean(props.hobby.href))
</script>

<template>
  <component
    :is="isExternal ? 'a' : 'article'"
    :href="hobby.href"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    class="group flex gap-4 rounded-[var(--stro-radius-xl)] border border-stro-border bg-stro-surface/80 p-5 shadow-[var(--stro-shadow-soft)] transition sm:p-6"
    :class="
      isExternal
        ? 'hover:border-stro-purple/35 hover:bg-stro-purple/5 hover:shadow-[var(--stro-shadow-glow-brand)]'
        : ''
    "
  >
    <span
      class="flex h-12 w-12 shrink-0 items-center justify-center rounded-[var(--stro-radius-lg)] border border-stro-border bg-stro-bg/80 sm:h-14 sm:w-14"
      aria-hidden="true"
    >
      <svg
        class="h-6 w-6 sm:h-7 sm:w-7"
        viewBox="0 0 24 24"
        fill="currentColor"
        :style="{ color: icon.color }"
      >
        <path :d="icon.path" />
      </svg>
    </span>

    <div class="min-w-0 flex-1">
      <h3 class="stro-heading text-base sm:text-lg">
        {{ hobby.title }}
      </h3>
      <ul class="mt-3 space-y-2 text-sm text-stro-muted sm:text-base">
        <li
          v-for="(bullet, index) in hobby.bullets"
          :key="index"
          class="flex gap-2.5 leading-relaxed"
        >
          <span
            class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-stro-cyan shadow-[0_0_6px_rgb(6_182_212_/_0.5)]"
            aria-hidden="true"
          />
          <span>{{ bullet }}</span>
        </li>
      </ul>
      <p
        v-if="hobby.linkLabel"
        class="mt-4 text-sm font-medium text-stro-cyan transition group-hover:text-stro-blue"
      >
        {{ hobby.linkLabel }}
        <span aria-hidden="true">→</span>
      </p>
    </div>
  </component>
</template>
