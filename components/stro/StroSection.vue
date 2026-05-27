<script setup lang="ts">
withDefaults(
  defineProps<{
    id?: string
    kicker?: string
    title: string
    subtitle?: string
    bordered?: boolean
    tinted?: boolean
    reveal?: boolean
  }>(),
  {
    reveal: true,
  },
)
</script>

<template>
  <section
    :id="id"
    class="scroll-mt-[calc(var(--stro-header-height)+1rem)]"
    :class="[
      bordered ? 'border-y border-stro-border' : '',
      tinted ? 'bg-stro-surface/40' : '',
    ]"
  >
    <div class="stro-container py-16 sm:py-20">
      <ScrollReveal v-if="reveal" variant="fade-up">
        <header class="max-w-2xl">
          <p v-if="kicker" class="stro-kicker mb-3">
            {{ kicker }}
          </p>
          <h2 class="stro-heading stro-heading-accent text-3xl sm:text-4xl">
            {{ title }}
          </h2>
          <p v-if="subtitle" class="mt-4 text-stro-muted sm:text-base">
            {{ subtitle }}
          </p>
        </header>
      </ScrollReveal>

      <header v-else class="max-w-2xl">
        <p v-if="kicker" class="stro-kicker mb-3">
          {{ kicker }}
        </p>
        <h2 class="stro-heading stro-heading-accent text-3xl sm:text-4xl">
          {{ title }}
        </h2>
        <p v-if="subtitle" class="mt-4 text-stro-muted sm:text-base">
          {{ subtitle }}
        </p>
      </header>

      <div class="mt-10">
        <slot />
      </div>
    </div>
  </section>
</template>
