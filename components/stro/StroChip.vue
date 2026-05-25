<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    active?: boolean
    tag?: 'button' | 'span'
  }>(),
  { active: false, tag: 'button' },
)
</script>

<template>
  <component
    :is="tag"
    :type="tag === 'button' ? 'button' : undefined"
    :aria-pressed="tag === 'button' ? active : undefined"
    class="rounded-[var(--stro-radius-full)] px-4 py-2 text-sm font-medium transition"
    :class="
      active
        ? 'bg-[image:var(--stro-gradient-brand)] text-stro-bg shadow-[var(--stro-shadow-glow-purple)]'
        : 'border border-stro-border text-stro-muted hover:border-stro-purple/40 hover:text-stro-foreground'
    "
  >
    <slot />
  </component>
</template>
