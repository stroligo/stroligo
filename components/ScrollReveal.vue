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
const visible = ref(true)
const pending = ref(false)
const staticMode = ref(false)

let observer: IntersectionObserver | null = null

function isInViewport(node: HTMLElement) {
  const rect = node.getBoundingClientRect()
  const vh = window.innerHeight || document.documentElement.clientHeight
  return rect.top < vh * 0.94 && rect.bottom > 0
}

onMounted(() => {
  staticMode.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (staticMode.value) {
    visible.value = true
    pending.value = false
    return
  }

  const node = root.value
  if (!node) return

  // Already on screen (e.g. filter re-render): show immediately, don't flash hidden.
  if (isInViewport(node)) {
    visible.value = true
    pending.value = false
    return
  }

  visible.value = false
  pending.value = true

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        visible.value = true
        pending.value = false
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
