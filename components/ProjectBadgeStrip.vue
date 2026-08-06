<script setup lang="ts">
const props = defineProps<{
  stack: string[]
  tags: string[]
  /** Impede abrir o modal ao interagir com a faixa (cards clicáveis). */
  stopPropagation?: boolean
}>()

const { t } = useI18n()

const scroller = ref<HTMLElement | null>(null)
const hasOverflow = ref(false)
const canScrollRight = ref(false)

let resizeObserver: ResizeObserver | null = null

const isEmpty = computed(() => !props.stack.length && !props.tags.length)

function updateScrollState() {
  const el = scroller.value
  if (!el) return
  hasOverflow.value = el.scrollWidth > el.clientWidth + 2
  canScrollRight.value =
    el.scrollLeft + el.clientWidth < el.scrollWidth - 2
}

function scrollReveal() {
  const el = scroller.value
  if (!el) return
  const remaining = el.scrollWidth - el.clientWidth - el.scrollLeft
  el.scrollBy({
    left: Math.max(remaining, el.clientWidth * 0.6),
    behavior: 'smooth',
  })
}

function onStripClick(event: MouseEvent) {
  if (props.stopPropagation) event.stopPropagation()
}

function onStripKeydown(event: KeyboardEvent) {
  if (props.stopPropagation) event.stopPropagation()
}

onMounted(() => {
  nextTick(() => {
    updateScrollState()
    const el = scroller.value
    if (!el) return

    resizeObserver = new ResizeObserver(updateScrollState)
    resizeObserver.observe(el)
    el.addEventListener('scroll', updateScrollState, { passive: true })
  })
})

onUnmounted(() => {
  resizeObserver?.disconnect()
  scroller.value?.removeEventListener('scroll', updateScrollState)
})

watch(
  () => [props.stack, props.tags],
  () => nextTick(updateScrollState),
  { deep: true },
)
</script>

<template>
  <div
    v-if="!isEmpty"
    class="project-badge-strip relative min-w-0 max-w-full overflow-hidden"
  >
    <ul
      ref="scroller"
      class="project-badge-strip__scroller flex flex-nowrap items-center gap-2 overflow-x-auto overscroll-x-contain scroll-smooth sm:gap-2.5"
      :aria-label="t('a11y.projectTags')"
      tabindex="0"
      @click="onStripClick"
      @keydown="onStripKeydown"
    >
      <li
        v-for="tech in stack"
        :key="`stack-${tech}`"
        class="shrink-0"
      >
        <TechStackBadge
          :label="tech"
          size="sm"
        />
      </li>
      <li
        v-for="tag in tags"
        :key="`tag-${tag}`"
        class="shrink-0"
      >
        <StroBadge variant="neutral">{{ tag }}</StroBadge>
      </li>
    </ul>

    <div
      v-if="hasOverflow && canScrollRight"
      class="project-badge-strip__fade pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-stro-surface from-35% to-transparent"
      aria-hidden="true"
    />
    <button
      v-if="hasOverflow && canScrollRight"
      type="button"
      class="absolute inset-y-0 right-0 z-10 my-auto mr-1 flex h-7 min-w-[1.75rem] shrink-0 items-center justify-center rounded-full border border-stro-border bg-stro-surface/95 px-2 text-sm font-medium leading-none text-stro-muted shadow-[var(--stro-shadow-soft)] transition hover:border-stro-purple/40 hover:text-stro-cyan"
      :aria-label="t('projects.moreBadges')"
      @click.stop="scrollReveal"
    >
      …
    </button>
  </div>
</template>

<style scoped>
.project-badge-strip__scroller {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.project-badge-strip__scroller::-webkit-scrollbar {
  display: none;
}
</style>
