<script setup lang="ts">
const { locale, locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const options = computed(() =>
  locales.value.map((entry) => ({
    code: entry.code,
    label: entry.code.toUpperCase(),
    path: switchLocalePath(entry.code),
  })),
)
</script>

<template>
  <nav
    class="stro-font-mono flex items-center rounded-[var(--stro-radius-md)] border border-stro-border bg-stro-surface/80 p-0.5 text-xs font-semibold"
    :aria-label="t('a11y.switchLanguage')"
  >
    <NuxtLink
      v-for="option in options"
      :key="option.code"
      :to="option.path"
      class="rounded-[6px] px-2.5 py-1 transition"
      :class="
        locale === option.code
          ? 'bg-[image:var(--stro-gradient-button)] text-white'
          : 'text-stro-muted hover:text-stro-foreground'
      "
      :aria-current="locale === option.code ? 'page' : undefined"
    >
      {{ option.label }}
    </NuxtLink>
  </nav>
</template>
