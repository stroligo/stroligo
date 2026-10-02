<script setup lang="ts">
const { locale, locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const root = ref<HTMLElement | null>(null)
const open = ref(false)

const localeOrder = ['en', 'es', 'pt'] as const

const options = computed(() => {
  const byCode = new Map(
    locales.value.map((entry) => [entry.code, entry.code]),
  )
  return localeOrder
    .filter((code) => byCode.has(code))
    .map((code) => ({
      code,
      label: code.toUpperCase(),
      path: switchLocalePath(code),
    }))
})

function toggle() {
  open.value = !open.value
}

function close() {
  open.value = false
}

function onDocumentClick(event: MouseEvent) {
  if (!open.value || !root.value) return
  if (!root.value.contains(event.target as Node)) close()
}

function onDocumentKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') close()
}

onMounted(() => {
  document.addEventListener('click', onDocumentClick)
  document.addEventListener('keydown', onDocumentKeydown)
})

onUnmounted(() => {
  document.removeEventListener('click', onDocumentClick)
  document.removeEventListener('keydown', onDocumentKeydown)
})
</script>

<template>
  <div ref="root" class="locale-switcher relative">
    <button
      type="button"
      class="locale-switcher__trigger inline-flex items-center justify-center gap-1.5 rounded-[var(--stro-radius-md)] border border-stro-border bg-stro-surface/60 px-3 py-2 text-xs font-semibold leading-none text-stro-foreground transition hover:border-stro-blue/40 hover:bg-stro-purple/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stro-blue"
      :aria-expanded="open"
      aria-haspopup="listbox"
      :aria-label="t('a11y.switchLanguage')"
      @click.stop="toggle"
    >
      <LocaleFlag :locale="locale as 'en' | 'pt' | 'es'" />
      <span class="stro-font-mono">{{ locale.toUpperCase() }}</span>
      <svg
        class="size-3 shrink-0 text-stro-muted transition-transform duration-200"
        :class="open ? 'rotate-180' : ''"
        viewBox="0 0 14 14"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M3.5 5.25 7 8.75l3.5-3.5"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>

    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <ul
        v-if="open"
        role="listbox"
        :aria-label="t('a11y.switchLanguage')"
        class="locale-switcher__menu absolute right-0 top-[calc(100%+6px)] z-50 min-w-[5.75rem] overflow-hidden rounded-2xl bg-white shadow-[0_0_9px_rgb(0_0_0/0.15)] dark:bg-stro-surface"
      >
        <li
          v-for="(option, index) in options"
          :key="option.code"
          role="option"
          :aria-selected="locale === option.code"
        >
          <NuxtLink
            :to="option.path"
            class="locale-switcher__item flex h-10 items-center gap-2 px-3 text-sm font-semibold transition"
            :class="[
              locale === option.code
                ? 'text-[#232c64] dark:text-stro-foreground'
                : 'text-[#232c64]/50 hover:text-[#232c64] dark:text-stro-muted dark:hover:text-stro-foreground',
              index === 0 ? 'rounded-t-2xl' : '',
              index === options.length - 1 ? 'rounded-b-2xl' : '',
            ]"
            @click="close"
          >
            <LocaleFlag :locale="option.code as 'en' | 'pt' | 'es'" />
            <span class="stro-font-mono min-w-[1.75rem]">{{ option.label }}</span>
            <svg
              v-if="locale === option.code"
              class="ml-auto size-3.5 shrink-0 text-[#232c64] dark:text-stro-cyan"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2.5 7.25 5.5 10.25 11.5 4.25"
                stroke="currentColor"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </NuxtLink>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<style scoped>
.locale-switcher__item:focus-visible {
  outline: 2px solid var(--stro-cyan);
  outline-offset: -2px;
}
</style>
