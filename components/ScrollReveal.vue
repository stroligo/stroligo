<script setup lang="ts">
export type ScrollRevealVariant =
  | 'fade-up'
  | 'fade-down'
  | 'fade-in'
  | 'fade-left'
  | 'fade-right'
  | 'scale-up'

const props = withDefaults(
  defineProps<{
    variant?: ScrollRevealVariant
    delay?: number
    duration?: number
    once?: boolean
    threshold?: number
  }>(),
  {
    variant: 'fade-up',
    delay: 0,
    duration: 700,
    once: true,
    threshold: 0.12,
  },
)

const root = ref<HTMLElement | null>(null)
const visible = ref(false)
const pending = ref(false)
const staticMode = ref(false)

let observer: IntersectionObserver | null = null

onMounted(() => {
  staticMode.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (staticMode.value) {
    visible.value = true
    return
  }

  const node = root.value
  if (!node) return

  // Only hide for animation after JS is alive — keeps SSR/no-JS content readable.
  pending.value = true

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        visible.value = true
        if (props.once) observer?.disconnect()
      } else if (!props.once) {
        visible.value = false
      }
    },
    {
      threshold: props.threshold,
      rootMargin: '0px 0px -6% 0px',
    },
  )

  observer.observe(node)
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <div
    ref="root"
    class="stro-reveal"
    :class="[
      `stro-reveal--${variant}`,
      pending && 'stro-reveal--pending',
      visible && 'stro-reveal--visible',
      staticMode && 'stro-reveal--static',
    ]"
    :style="{
      '--stro-reveal-delay': `${delay}ms`,
      '--stro-reveal-duration': `${duration}ms`,
    }"
  >
    <slot />
  </div>
</template>
