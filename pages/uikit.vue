<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()
const copy = usePortfolioCopy()
const { htmlLang } = usePortfolio()

const inputDemo = ref('')

const colorTokens = [
  { key: 'void', var: '--stro-bg', label: 'uikit.colors.void' },
  { key: 'surface', var: '--stro-surface', label: 'uikit.colors.surface' },
  { key: 'border', var: '--stro-border', label: 'uikit.colors.border' },
  { key: 'text', var: '--stro-text-primary', label: 'uikit.colors.textPrimary' },
  { key: 'muted', var: '--stro-text-secondary', label: 'uikit.colors.textSecondary' },
]

const accentTokens = [
  { var: '--stro-purple', hex: '#8B5CF6' },
  { var: '--stro-blue', hex: '#3B82F6' },
  { var: '--stro-cyan', hex: '#06B6D4' },
  { var: '--stro-emerald', hex: '#10B981' },
]

useSeoMeta({
  title: () => t('uikit.seo.title'),
  description: () => t('uikit.seo.description'),
  robots: 'noindex, follow',
})

const canonicalUrl = computed(() =>
  locale.value === 'pt'
    ? 'https://stroligo.dev/pt/uikit'
    : 'https://stroligo.dev/uikit',
)

useHead(() => ({
  htmlAttrs: { lang: htmlLang.value },
  link: [
    { rel: 'canonical', href: canonicalUrl.value },
    { rel: 'alternate', hreflang: 'en', href: 'https://stroligo.dev/uikit' },
    { rel: 'alternate', hreflang: 'pt-BR', href: 'https://stroligo.dev/pt/uikit' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://stroligo.dev/uikit' },
  ],
}))
</script>

<template>
  <div class="relative z-10">
    <SiteHeader />

    <main class="stro-container py-12 sm:py-16">
      <div class="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <StroBadge variant="gradient">
            {{ t('uikit.version') }}
          </StroBadge>
          <h1 class="stro-heading mt-4 text-4xl sm:text-5xl">
            <span class="stro-gradient-text">{{ t('uikit.title') }}</span>
          </h1>
          <p class="stro-body mt-4 max-w-2xl text-base">
            {{ t('uikit.intro') }}
          </p>
        </div>
        <NuxtLink :to="localePath('/')">
          <StroButton variant="ghost">
            ← {{ copy.nav.home }}
          </StroButton>
        </NuxtLink>
      </div>

      <!-- Cores -->
      <section class="mb-20">
        <h2 class="stro-heading stro-heading-accent mb-8 text-2xl">
          {{ t('uikit.sections.colors') }}
        </h2>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <StroCard
            v-for="token in colorTokens"
            :key="token.key"
            padding="sm"
            class="overflow-hidden"
          >
            <div
              class="mb-3 h-16 rounded-[var(--stro-radius-md)] border border-stro-border"
              :style="{ background: `var(${token.var})` }"
            />
            <p class="text-xs text-stro-muted">{{ t(token.label) }}</p>
            <p class="stro-font-mono mt-1 text-[10px] text-stro-foreground">
              {{ token.var }}
            </p>
          </StroCard>
        </div>
        <StroCard variant="gradient-border" padding="lg" class="mt-6">
          <p class="mb-4 text-sm text-stro-muted">{{ t('uikit.colors.gradient') }}</p>
          <div
            class="h-14 rounded-[var(--stro-radius-lg)]"
            style="background: var(--stro-gradient-brand)"
          />
          <div class="mt-4 flex flex-wrap gap-3">
            <span
              v-for="accent in accentTokens"
              :key="accent.var"
              class="stro-font-mono text-xs text-stro-muted"
            >
              <span
                class="mr-2 inline-block h-3 w-3 rounded-full align-middle"
                :style="{ background: `var(${accent.var})` }"
              />
              {{ accent.hex }}
            </span>
          </div>
        </StroCard>
      </section>

      <!-- Tipografia -->
      <section class="mb-20">
        <h2 class="stro-heading stro-heading-accent mb-8 text-2xl">
          {{ t('uikit.sections.typography') }}
        </h2>
        <StroCard padding="lg" class="space-y-8">
          <div>
            <p class="stro-kicker mb-2">{{ t('uikit.typography.hero') }}</p>
            <p
              class="stro-font-mono text-[clamp(2rem,4vw,4.5rem)] font-bold leading-tight stro-gradient-text"
            >
              &lt;stroligo.dev&gt;
            </p>
          </div>
          <div>
            <p class="stro-kicker mb-2">{{ t('uikit.typography.h1') }}</p>
            <p class="stro-heading text-5xl">Gabriel Stroligo</p>
          </div>
          <div>
            <p class="stro-kicker mb-2">{{ t('uikit.typography.h2') }}</p>
            <p class="stro-heading text-4xl">Projetos de impacto</p>
          </div>
          <div>
            <p class="stro-kicker mb-2">{{ t('uikit.typography.body') }}</p>
            <p class="stro-body max-w-prose text-base">
              {{ t('uikit.intro') }}
            </p>
          </div>
          <div>
            <p class="stro-kicker mb-2">{{ t('uikit.typography.mono') }}</p>
            <p class="stro-font-mono text-sm text-stro-cyan">
              const impact = () =&gt; buildWithClarity();
            </p>
          </div>
        </StroCard>
      </section>

      <!-- Logo -->
      <section class="mb-20">
        <h2 class="stro-heading stro-heading-accent mb-8 text-2xl">
          {{ t('uikit.sections.logo') }}
        </h2>
        <div class="grid gap-6 md:grid-cols-3">
          <StroCard padding="lg" class="flex flex-col items-start justify-center">
            <p class="mb-4 text-xs text-stro-muted">{{ t('uikit.logo.principal') }}</p>
            <StroLogo size="lg" :href="false" />
          </StroCard>
          <StroCard padding="lg" class="flex flex-col items-start justify-center">
            <p class="mb-4 text-xs text-stro-muted">{{ t('uikit.logo.signature') }}</p>
            <StroLogo size="md" :show-tagline="true" :href="false" />
          </StroCard>
          <StroCard
            variant="gradient-border"
            padding="lg"
            class="flex flex-col items-center justify-center"
          >
            <p class="mb-4 w-full text-xs text-stro-muted">{{ t('uikit.logo.icon') }}</p>
            <div
              class="stro-font-mono flex h-16 w-16 items-center justify-center rounded-[var(--stro-radius-lg)] border border-stro-border bg-stro-bg text-xl font-bold"
              style="box-shadow: var(--stro-shadow-glow-brand)"
            >
              <span class="stro-bracket-left">&lt;</span><span class="stro-bracket-right">&gt;</span>
            </div>
          </StroCard>
        </div>
      </section>

      <!-- Botões -->
      <section class="mb-20">
        <h2 class="stro-heading stro-heading-accent mb-8 text-2xl">
          {{ t('uikit.sections.buttons') }}
        </h2>
        <StroCard padding="lg">
          <div class="flex flex-wrap gap-4">
            <StroButton variant="primary">{{ t('uikit.sample.buttonPrimary') }}</StroButton>
            <StroButton variant="secondary">{{ t('uikit.sample.buttonSecondary') }}</StroButton>
            <StroButton variant="ghost">{{ t('uikit.sample.buttonGhost') }}</StroButton>
            <StroButton variant="linkedin">LinkedIn</StroButton>
          </div>
        </StroCard>
      </section>

      <!-- Badges & Chips -->
      <section class="mb-20">
        <h2 class="stro-heading stro-heading-accent mb-8 text-2xl">
          {{ t('uikit.sections.badges') }}
        </h2>
        <StroCard padding="lg" class="space-y-6">
          <div class="flex flex-wrap gap-3">
            <StroBadge variant="purple">{{ t('uikit.sample.badgeNew') }}</StroBadge>
            <StroBadge variant="cyan">Cyan</StroBadge>
            <StroBadge variant="blue">Blue</StroBadge>
            <StroBadge variant="emerald">{{ t('uikit.sample.badgeLive') }}</StroBadge>
            <StroBadge variant="gradient">Gradient</StroBadge>
            <StroBadge variant="neutral">Neutral</StroBadge>
          </div>
          <div class="flex flex-wrap gap-2">
            <StroChip>{{ t('uikit.sample.chipAll') }}</StroChip>
            <StroChip active>{{ t('uikit.sample.chipActive') }}</StroChip>
          </div>
        </StroCard>
      </section>

      <!-- Cards -->
      <section class="mb-20">
        <h2 class="stro-heading stro-heading-accent mb-8 text-2xl">
          {{ t('uikit.sections.cards') }}
        </h2>
        <div class="grid gap-6 md:grid-cols-3">
          <StroCard variant="solid" hover padding="md">
            <p class="stro-kicker mb-2">solid</p>
            <p class="stro-body text-sm">Surface + border + soft shadow</p>
          </StroCard>
          <StroCard variant="glass" hover padding="md">
            <p class="stro-kicker mb-2">glass</p>
            <p class="stro-body text-sm">Glassmorphism com blur</p>
          </StroCard>
          <StroCard variant="gradient-border" hover padding="md">
            <p class="stro-kicker mb-2">gradient</p>
            <p class="stro-body text-sm">Borda em gradiente de marca</p>
          </StroCard>
        </div>
      </section>

      <!-- Inputs -->
      <section class="mb-20">
        <h2 class="stro-heading stro-heading-accent mb-8 text-2xl">
          {{ t('uikit.sections.inputs') }}
        </h2>
        <StroCard padding="lg" class="max-w-md">
          <label class="mb-2 block text-sm text-stro-muted">Email</label>
          <StroInput
            v-model="inputDemo"
            :placeholder="t('uikit.sample.placeholder')"
          />
        </StroCard>
      </section>

      <!-- Terminal -->
      <section class="mb-20">
        <h2 class="stro-heading stro-heading-accent mb-8 text-2xl">
          {{ t('uikit.sections.terminal') }}
        </h2>
        <StroTerminal />
      </section>

      <!-- Ícones -->
      <section class="mb-12">
        <h2 class="stro-heading stro-heading-accent mb-8 text-2xl">
          {{ t('uikit.sections.icons') }}
        </h2>
        <div class="grid gap-4 sm:grid-cols-3">
          <StroCard padding="md" class="text-center">
            <p class="stro-font-mono text-2xl text-stro-purple">&lt;/&gt;</p>
            <p class="mt-2 text-xs text-stro-muted">Code</p>
          </StroCard>
          <StroCard padding="md" class="text-center">
            <p class="stro-font-mono text-2xl text-stro-cyan">&gt;_</p>
            <p class="mt-2 text-xs text-stro-muted">Terminal</p>
          </StroCard>
          <StroCard padding="md" class="text-center">
            <p class="stro-font-mono text-2xl">
              <span class="stro-bracket-left">&lt;</span>
              <span class="stro-bracket-right">&gt;</span>
            </p>
            <p class="mt-2 text-xs text-stro-muted">Structure</p>
          </StroCard>
        </div>
      </section>

      <StroCard variant="glass" padding="lg" class="text-center">
        <p class="stro-body text-sm">
          Tokens em
          <code class="stro-font-mono text-stro-cyan">assets/css/tokens.css</code>
          · Doc em
          <code class="stro-font-mono text-stro-purple">PROJETO/stroligo_dev_design_system_v_1.md</code>
        </p>
      </StroCard>
    </main>

    <SiteFooter />
  </div>
</template>
