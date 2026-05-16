<script setup lang="ts">
const linkedInUrl = 'https://www.linkedin.com/in/gabrielstroligo/'

useHead({
  title: 'Redirecionando…',
  link: [{ rel: 'canonical', href: linkedInUrl }],
})

useSeoMeta({
  robots: 'noindex, follow',
})

await navigateTo(linkedInUrl, { external: true, replace: true })
</script>

<template>
  <div
    class="flex min-h-screen items-center justify-center bg-gray-800 p-8 text-center text-gray-200"
  >
    <div class="space-y-4">
      <p class="text-lg">Redirecionando para o LinkedIn…</p>
      <p>
        <a
          :href="linkedInUrl"
          class="text-blue-400 underline decoration-blue-400/40 underline-offset-4 hover:text-blue-300"
        >
          Clique aqui
        </a>
        se não for redirecionado.
      </p>
    </div>
  </div>
</template>
