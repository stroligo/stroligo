<script setup lang="ts">
const localePath = useLocalePath()

const props = withDefaults(
  defineProps<{
    size?: 'sm' | 'md' | 'lg'
    showTagline?: boolean
    href?: string | false
  }>(),
  {
    size: 'md',
    showTagline: false,
    href: '/',
  },
)

const copy = usePortfolioCopy()

const isLink = computed(() => props.href !== false)

const sizeClass = computed(() => {
  if (props.size === 'sm') return 'text-sm'
  if (props.size === 'lg') return 'text-xl sm:text-2xl'
  return 'text-base sm:text-lg'
})
</script>

<template>
  <component
    :is="isLink ? 'NuxtLink' : 'div'"
    :to="isLink ? localePath(String(href)) : undefined"
    class="inline-flex flex-col gap-1.5"
    :class="isLink ? 'transition opacity-95 hover:opacity-100' : ''"
  >
    <span
      class="stro-font-mono inline-flex items-center gap-0.5 font-semibold tracking-tight"
      :class="sizeClass"
    >
      <span class="stro-bracket-left" aria-hidden="true">&lt;</span>
      <span class="text-stro-foreground">stroligo.dev</span>
      <span class="stro-bracket-right" aria-hidden="true">&gt;</span>
    </span>
    <span
      v-if="showTagline"
      class="border-t border-stro-border/60 pt-2 text-xs text-stro-muted sm:text-sm"
    >
      {{ copy.brandTagline }}
    </span>
  </component>
</template>
