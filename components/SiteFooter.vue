<script setup lang="ts">
const copy = usePortfolioCopy()
const { profile, socialLinks } = usePortfolio()
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const year = new Date().getFullYear()

const alternateLocale = computed(() =>
  locale.value === 'pt'
    ? { href: switchLocalePath('en'), label: 'English version' }
    : { href: switchLocalePath('pt'), label: 'Versão em português' },
)
</script>

<template>
  <footer class="relative z-10 border-t border-stro-border bg-stro-surface/50">
    <ScrollReveal variant="fade-up">
      <div
        class="stro-container flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <StroLogo size="sm" :show-tagline="true" :href="false" />
          <p class="mt-4 text-sm text-stro-muted">
            {{ profile.tagline }} · {{ profile.location }}
          </p>
        </div>

        <nav class="flex flex-wrap gap-x-5 gap-y-2 text-sm" :aria-label="copy.a11y.socialNav">
          <a
            v-for="link in socialLinks"
            :key="link.id"
            :href="link.href"
            target="_blank"
            :rel="link.external === false ? 'noopener' : 'noopener noreferrer'"
            class="text-stro-muted transition hover:text-stro-foreground"
            :class="link.primary ? 'font-medium text-stro-blue hover:text-stro-cyan' : ''"
          >
            {{ link.label }}
          </a>
          <a
            :href="alternateLocale.href"
            class="text-stro-muted transition hover:text-stro-cyan"
          >
            {{ alternateLocale.label }}
          </a>
        </nav>
      </div>
    </ScrollReveal>

    <ScrollReveal variant="fade-in" :delay="100">
      <p
        class="border-t border-stro-border/60 py-5 text-center text-xs text-stro-muted"
      >
        © {{ year }} {{ profile.name }} · stroligo.dev
      </p>
    </ScrollReveal>
  </footer>
</template>
