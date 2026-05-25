<script setup lang="ts">
const copy = usePortfolioCopy()
const { profile, socialLinks } = usePortfolio()

const linkedIn = computed(() =>
  socialLinks.value.find((link) => link.id === 'linkedin')!,
)

const nav = computed(() => [
  { href: '#sobre', label: copy.value.nav.about },
  { href: '#atuacao', label: copy.value.nav.work },
  { href: '#projetos', label: copy.value.nav.projects },
  { href: '#redes', label: copy.value.nav.contact },
])
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-stro-border/80 bg-stro-bg/85 backdrop-blur-xl"
    style="height: var(--stro-header-height)"
  >
    <div
      class="stro-container flex h-full items-center justify-between gap-3"
    >
      <StroLogo size="md" />

      <nav
        class="hidden items-center gap-8 text-sm text-stro-muted lg:flex"
        :aria-label="copy.a11y.mainNav"
      >
        <a
          v-for="item in nav"
          :key="item.href"
          :href="item.href"
          class="transition hover:text-stro-foreground"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="flex shrink-0 items-center gap-2 sm:gap-3">
        <ThemeToggle />
        <LocaleSwitcher class="hidden sm:flex" />
        <StroButton
          :href="profile.resumeUrl"
          variant="ghost"
          size="sm"
          class="!hidden md:!inline-flex"
        >
          {{ copy.nav.resume }}
        </StroButton>
        <StroButton
          :href="linkedIn.href"
          variant="linkedin"
          size="sm"
          external
        >
          <span aria-hidden="true" class="stro-font-mono text-base leading-none">in</span>
          <span class="hidden sm:inline">{{ copy.nav.linkedin }}</span>
        </StroButton>
      </div>
    </div>
  </header>
</template>
