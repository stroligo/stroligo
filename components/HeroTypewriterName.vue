<script setup lang="ts">
const props = defineProps<{
  text: string
}>()

const TYPE_MS = 90
const DELETE_MS = 50
const PAUSE_COMPLETE_MS = 2800
const PAUSE_EMPTY_MS = 700

const line1 = ref('')
const line2 = ref('')
const cursorLine = ref<1 | 2>(1)
const staticMode = ref(false)

const nameParts = computed(() => {
  const space = props.text.indexOf(' ')
  if (space === -1) {
    return { first: props.text, second: '' }
  }
  return {
    first: props.text.slice(0, space),
    second: props.text.slice(space + 1),
  }
})

let timers: ReturnType<typeof setTimeout>[] = []

function clearTimers() {
  for (const id of timers) clearTimeout(id)
  timers = []
}

function schedule(fn: () => void, ms: number) {
  timers.push(setTimeout(fn, ms))
}

function resetLines() {
  line1.value = ''
  line2.value = ''
  cursorLine.value = 1
}

function applyStaticText() {
  line1.value = nameParts.value.first
  line2.value = nameParts.value.second
}

function typeName() {
  const { first, second } = nameParts.value
  resetLines()

  let firstIndex = 0

  const typeFirst = () => {
    if (firstIndex < first.length) {
      line1.value = first.slice(0, firstIndex + 1)
      firstIndex += 1
      cursorLine.value = 1
      schedule(typeFirst, TYPE_MS)
      return
    }

    if (!second) {
      schedule(deleteName, PAUSE_COMPLETE_MS)
      return
    }

    cursorLine.value = 2
    let secondIndex = 0

    const typeSecond = () => {
      if (secondIndex < second.length) {
        line2.value = second.slice(0, secondIndex + 1)
        secondIndex += 1
        cursorLine.value = 2
        schedule(typeSecond, TYPE_MS)
        return
      }
      schedule(deleteName, PAUSE_COMPLETE_MS)
    }

    typeSecond()
  }

  typeFirst()
}

function deleteName() {
  const deleteSecond = () => {
    if (line2.value.length > 0) {
      line2.value = line2.value.slice(0, -1)
      cursorLine.value = 2
      schedule(deleteSecond, DELETE_MS)
      return
    }

    cursorLine.value = 1

    const deleteFirst = () => {
      if (line1.value.length > 0) {
        line1.value = line1.value.slice(0, -1)
        cursorLine.value = 1
        schedule(deleteFirst, DELETE_MS)
        return
      }
      schedule(typeName, PAUSE_EMPTY_MS)
    }

    deleteFirst()
  }

  deleteSecond()
}

function startLoop() {
  clearTimers()
  typeName()
}

onMounted(() => {
  staticMode.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (staticMode.value) {
    applyStaticText()
    return
  }
  startLoop()
})

onUnmounted(clearTimers)

watch(
  () => props.text,
  () => {
    if (staticMode.value) {
      applyStaticText()
      return
    }
    startLoop()
  },
)
</script>

<template>
  <h1
    class="hero-typewriter stro-heading stro-font-mono text-[clamp(2.25rem,5vw,var(--stro-text-hero))] leading-[var(--stro-leading-tight)]"
    :aria-label="text"
  >
    <template v-if="staticMode">
      <span
        class="stro-gradient-text block"
        aria-hidden="true"
      >{{ line1 }}</span>
      <span
        v-if="nameParts.second"
        class="stro-gradient-text block"
        aria-hidden="true"
      >{{ line2 }}</span>
    </template>

    <template v-else>
      <!-- reserva altura exata das duas linhas -->
      <span
        class="hero-typewriter__sizer"
        aria-hidden="true"
      >
        <span class="block">{{ nameParts.first }}</span>
        <span
          v-if="nameParts.second"
          class="block"
        >{{ nameParts.second }}</span>
      </span>

      <span
        class="hero-typewriter__live stro-gradient-text"
        aria-hidden="true"
      >
        <span class="block">
          {{ line1 }}<span
            v-if="cursorLine === 1"
            class="hero-typewriter__cursor"
          >_</span>
        </span>
        <span
          v-if="nameParts.second"
          class="block"
        >
          {{ line2 }}<span
            v-if="cursorLine === 2"
            class="hero-typewriter__cursor"
          >_</span>
        </span>
      </span>
    </template>
  </h1>
</template>

<style scoped>
.hero-typewriter {
  position: relative;
}

.hero-typewriter__sizer {
  visibility: hidden;
  pointer-events: none;
  user-select: none;
}

.hero-typewriter__live {
  position: absolute;
  inset: 0;
  top: 0;
  left: 0;
}

.hero-typewriter__cursor {
  display: inline-block;
  margin-left: 0.02em;
  color: var(--stro-cyan);
  font-weight: 500;
  animation: hero-typewriter-blink 1s step-end infinite;
}

@keyframes hero-typewriter-blink {
  0%,
  49% {
    opacity: 1;
  }

  50%,
  100% {
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-typewriter__cursor {
    animation: none;
  }
}
</style>
