<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: 'purple' | 'cyan' | 'blue' | 'emerald' | 'neutral' | 'gradient'
  }>(),
  { variant: 'neutral' },
)

const classes = computed(() => {
  const base =
    'inline-flex items-center rounded-[var(--stro-radius-full)] px-2.5 py-0.5 text-xs font-medium'

  const map = {
    purple: `${base} bg-stro-purple/15 text-stro-purple`,
    cyan: `${base} bg-stro-cyan/15 text-stro-cyan`,
    blue: `${base} bg-stro-blue/15 text-stro-blue`,
    emerald: `${base} bg-stro-emerald/15 text-stro-emerald`,
    gradient: `${base} bg-[image:var(--stro-gradient-brand)] text-stro-bg`,
    neutral: `${base} border border-stro-border bg-stro-surface/80 text-stro-muted`,
  }

  return map[props.variant]
})
</script>

<template>
  <span :class="classes">
    <slot />
  </span>
</template>
