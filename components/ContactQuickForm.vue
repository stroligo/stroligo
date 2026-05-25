<script setup lang="ts">
const props = defineProps<{
  toEmail: string
}>()

const { t, locale } = useI18n()

const name = ref('')
const fromEmail = ref('')
const message = ref('')

const canSubmit = computed(
  () =>
    name.value.trim().length > 0 && message.value.trim().length > 0,
)

function submit() {
  if (!canSubmit.value) return

  const subject =
    locale.value === 'en'
      ? `stroligo.dev — message from ${name.value.trim()}`
      : `stroligo.dev — mensagem de ${name.value.trim()}`

  const lines = [
    locale.value === 'en' ? `Name: ${name.value.trim()}` : `Nome: ${name.value.trim()}`,
  ]
  if (fromEmail.value.trim()) {
    lines.push(
      locale.value === 'en'
        ? `Reply-to: ${fromEmail.value.trim()}`
        : `Responder para: ${fromEmail.value.trim()}`,
    )
  }
  lines.push('', message.value.trim())

  const params = new URLSearchParams({
    subject,
    body: lines.join('\n'),
  })

  window.location.href = `mailto:${props.toEmail}?${params.toString()}`
}
</script>

<template>
  <StroCard
    variant="glass"
    padding="lg"
    class="mt-8"
  >
    <h4 class="stro-kicker mb-5 !text-stro-purple">
      {{ t('contact.formTitle') }}
    </h4>

    <form
      class="space-y-4"
      @submit.prevent="submit"
    >
      <div>
        <label
          for="contact-name"
          class="mb-2 block text-sm text-stro-muted"
        >
          {{ t('contact.formNameLabel') }}
        </label>
        <StroInput
          id="contact-name"
          v-model="name"
          name="name"
          autocomplete="name"
          :placeholder="t('contact.formNamePlaceholder')"
          required
        />
      </div>

      <div>
        <label
          for="contact-email"
          class="mb-2 block text-sm text-stro-muted"
        >
          {{ t('contact.formEmailLabel') }}
        </label>
        <StroInput
          id="contact-email"
          v-model="fromEmail"
          name="email"
          type="email"
          autocomplete="email"
          :placeholder="t('contact.formEmailPlaceholder')"
        />
      </div>

      <div>
        <label
          for="contact-message"
          class="mb-2 block text-sm text-stro-muted"
        >
          {{ t('contact.formMessageLabel') }}
        </label>
        <StroTextarea
          id="contact-message"
          v-model="message"
          name="message"
          :rows="4"
          :placeholder="t('contact.formMessagePlaceholder')"
          required
        />
      </div>

      <StroButton
        type="submit"
        variant="primary"
        class="w-full sm:w-auto"
        :disabled="!canSubmit"
      >
        {{ t('contact.formSubmit') }}
        <span aria-hidden="true">→</span>
      </StroButton>
    </form>

    <p class="mt-4 text-xs text-stro-muted sm:text-sm">
      {{ t('contact.formHint') }}
      {{ t('contact.formOrEmail') }}
      <a
        :href="`mailto:${toEmail}`"
        class="stro-font-mono font-medium text-stro-cyan transition hover:text-stro-blue"
      >
        {{ toEmail }}
      </a>
    </p>
  </StroCard>
</template>
