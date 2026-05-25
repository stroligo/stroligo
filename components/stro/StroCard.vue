<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    as?: string
    variant?: 'glass' | 'solid' | 'gradient-border'
    hover?: boolean
    padding?: 'none' | 'sm' | 'md' | 'lg'
  }>(),
  {
    as: 'div',
    variant: 'solid',
    hover: false,
    padding: 'md',
  },
)

const paddingClass = computed(() => {
  const map = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }
  return map[props.padding]
})

const variantClass = computed(() => {
  switch (props.variant) {
    case 'glass':
      return 'stro-glass rounded-[var(--stro-radius-xl)]'
    case 'gradient-border':
      return 'stro-gradient-border rounded-[var(--stro-radius-xl)] shadow-[var(--stro-shadow-soft)]'
    default:
      return 'rounded-[var(--stro-radius-xl)] border border-stro-border bg-stro-surface shadow-[var(--stro-shadow-soft)]'
  }
})
</script>

<template>
  <component
    :is="as"
    :class="[variantClass, paddingClass, hover ? 'stro-hover-lift' : '']"
  >
    <slot />
  </component>
</template>
