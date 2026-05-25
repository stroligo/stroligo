<script setup lang="ts">
const { t } = useI18n()
const { isDark, setDarkMode } = useStroTheme()

const label = computed(() =>
  isDark.value ? t('theme.disableDark') : t('theme.enableDark'),
)
</script>

<template>
  <label
    class="group flex cursor-pointer items-center gap-2 rounded-[var(--stro-radius-md)] border border-stro-border bg-stro-surface/80 px-2 py-1.5 text-stro-muted transition hover:border-stro-purple/35 hover:text-stro-foreground sm:gap-2.5 sm:px-2.5"
    :title="label"
  >
    <span class="sr-only">{{ label }}</span>
    <svg
      class="h-4 w-4 shrink-0 transition"
      :class="isDark ? 'text-stro-cyan' : 'text-stro-muted'"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.75"
      aria-hidden="true"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
      />
    </svg>
    <span
      class="relative h-5 w-9 shrink-0 rounded-full border border-stro-border bg-stro-bg-input transition-colors group-hover:border-stro-purple/40"
      role="presentation"
    >
      <span
        class="absolute top-0.5 left-0.5 h-3.5 w-3.5 rounded-full bg-[image:var(--stro-gradient-button)] shadow-sm transition-transform duration-200"
        :class="isDark ? 'translate-x-0' : 'translate-x-4'"
      />
    </span>
    <svg
      class="h-4 w-4 shrink-0 transition"
      :class="!isDark ? 'text-amber-500' : 'text-stro-muted'"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.75"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="4"
      />
      <path
        stroke-linecap="round"
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
      />
    </svg>
    <input
      type="checkbox"
      class="sr-only"
      :checked="isDark"
      @change="setDarkMode(($event.target as HTMLInputElement).checked)"
    >
  </label>
</template>
