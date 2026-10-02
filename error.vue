<script setup lang="ts">
const props = defineProps<{
  error: {
    statusCode?: number
    statusMessage?: string
    message?: string
  }
}>()

const localePath = useLocalePath()
const { locale } = useI18n()

const statusCode = computed(() => props.error.statusCode ?? 500)

const copyByLocale = {
  pt: (code: number) => ({
    title: code === 404 ? 'Página não encontrada' : 'Algo correu mal',
    description:
      code === 404
        ? 'O endereço pode estar errado ou a página foi movida.'
        : 'Ocorreu um erro inesperado. Tenta novamente em instantes.',
    home: 'Voltar ao início',
    projects: 'Ver projetos',
  }),
  es: (code: number) => ({
    title: code === 404 ? 'Página no encontrada' : 'Algo salió mal',
    description:
      code === 404
        ? 'La dirección puede ser incorrecta o la página se ha movido.'
        : 'Ocurrió un error inesperado. Inténtalo de nuevo en un momento.',
    home: 'Volver al inicio',
    projects: 'Ver proyectos',
  }),
  en: (code: number) => ({
    title: code === 404 ? 'Page not found' : 'Something went wrong',
    description:
      code === 404
        ? 'The address may be wrong or the page may have moved.'
        : 'An unexpected error occurred. Please try again shortly.',
    home: 'Back to home',
    projects: 'View projects',
  }),
} as const

const copy = computed(() => {
  const key =
    locale.value === 'pt' ? 'pt' : locale.value === 'es' ? 'es' : 'en'
  return copyByLocale[key](statusCode.value)
})

useSeoMeta({
  title: () => copy.value.title,
  description: () => copy.value.description,
  robots: 'noindex, follow',
})

function goHome() {
  clearError({ redirect: localePath('/') })
}
</script>

<template>
  <div class="relative z-10 min-h-screen bg-stro-bg text-stro-foreground">
    <SiteHeader />

    <main class="stro-container flex min-h-[60vh] flex-col items-start justify-center py-20">
      <p class="stro-kicker mb-4">// {{ statusCode }}</p>
      <h1 class="stro-heading max-w-2xl text-4xl sm:text-5xl">
        {{ copy.title }}
      </h1>
      <p class="stro-body mt-4 max-w-xl text-base text-stro-muted sm:text-lg">
        {{ copy.description }}
      </p>

      <div class="mt-10 flex flex-wrap gap-3">
        <StroButton variant="primary" @click="goHome">
          {{ copy.home }}
        </StroButton>
        <StroButton :href="localePath('/#projetos')" variant="secondary">
          {{ copy.projects }}
        </StroButton>
      </div>
    </main>

    <SiteFooter />
  </div>
</template>
