<script setup lang="ts">
type Variant = 'primary' | 'secondary' | 'ghost' | 'linkedin' | 'danger'
type Size = 'sm' | 'md' | 'lg'

const props = withDefaults(
  defineProps<{
    variant?: Variant
    size?: Size
    href?: string
    external?: boolean
    type?: 'button' | 'submit'
    disabled?: boolean
    ariaLabel?: string
  }>(),
  {
    variant: 'primary',
    size: 'md',
    type: 'button',
    disabled: false,
    external: false,
  },
)

const tag = computed(() => (props.href ? 'a' : 'button'))

const classes = computed(() => {
  const base =
    'inline-flex items-center justify-center gap-2 font-sans font-semibold transition focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50'

  const sizes: Record<Size, string> = {
    sm: 'rounded-[var(--stro-radius-md)] px-4 py-2 text-xs',
    md: 'rounded-[var(--stro-radius-md)] px-5 py-3 text-sm',
    lg: 'rounded-[var(--stro-radius-lg)] px-8 py-3.5 text-base',
  }

  const variants: Record<Variant, string> = {
    primary:
      'bg-[image:var(--stro-gradient-button)] text-white shadow-[var(--stro-shadow-glow-brand)] hover:brightness-110 focus-visible:outline-stro-cyan',
    secondary:
      'stro-glass text-stro-foreground hover:border-stro-purple/30 hover:shadow-[var(--stro-shadow-soft)] focus-visible:outline-stro-purple',
    ghost:
      'border border-stro-border bg-stro-surface/60 text-stro-foreground hover:border-stro-blue/40 hover:bg-stro-purple/5 focus-visible:outline-stro-blue',
    linkedin:
      'bg-stro-linkedin text-white hover:brightness-110 focus-visible:outline-stro-cyan',
    danger:
      'border border-stro-danger/40 bg-stro-danger/10 text-stro-danger hover:bg-stro-danger/20',
  }

  return [base, sizes[props.size], variants[props.variant]].join(' ')
})
</script>

<template>
  <component
    :is="tag"
    :href="href"
    :type="href ? undefined : type"
    :disabled="href ? undefined : disabled"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    :aria-label="ariaLabel"
    :class="classes"
  >
    <slot />
  </component>
</template>
