<script setup lang="ts">
import { i18nCodeToContentLocale } from '~/lib/i18n/contentLocale';

const props = defineProps<{
  toEmail: string;
}>();

const { t, locale } = useI18n();

const name = ref('');
const fromEmail = ref('');
const message = ref('');

const canSubmit = computed(
  () => name.value.trim().length > 0 && message.value.trim().length > 0,
);

function submit() {
  if (!canSubmit.value) return;

  const loc = i18nCodeToContentLocale(locale.value);
  const trimmedName = name.value.trim();

  const subjectByLocale = {
    en: `stroligo.dev — message from ${trimmedName}`,
    es: `stroligo.dev — mensaje de ${trimmedName}`,
    pt: `stroligo.dev — mensagem de ${trimmedName}`,
  } as const

  const nameLineByLocale = {
    en: `Name: ${trimmedName}`,
    es: `Nombre: ${trimmedName}`,
    pt: `Nome: ${trimmedName}`,
  } as const

  const replyLineByLocale = {
    en: `Reply-to: ${fromEmail.value.trim()}`,
    es: `Responder a: ${fromEmail.value.trim()}`,
    pt: `Responder para: ${fromEmail.value.trim()}`,
  } as const

  const lines: string[] = [nameLineByLocale[loc]];
  if (fromEmail.value.trim()) {
    lines.push(replyLineByLocale[loc]);
  }
  lines.push('', message.value.trim());

  const params = new URLSearchParams({
    subject: subjectByLocale[loc],
    body: lines.join('\n'),
  });

  window.location.href = `mailto:${props.toEmail}?${params.toString()}`;
}
</script>

<template>
  <StroCard
    variant="glass"
    padding="lg"
    class="flex w-full max-w-2xl flex-col"
  >
    <h3 class="stro-kicker mb-5 !text-stro-purple">
      {{ t('contact.formTitle') }}
    </h3>

    <form
      class="flex w-full flex-col gap-4"
      @submit.prevent="submit"
    >
      <div class="flex w-full flex-col gap-2">
        <label for="contact-name" class="block text-sm text-stro-muted">
          {{ t('contact.formNameLabel') }}
        </label>
        <StroInput
          id="contact-name"
          v-model="name"
          name="name"
          autocomplete="name"
          class="block w-full"
          :placeholder="t('contact.formNamePlaceholder')"
          required
        />
      </div>

      <div class="flex w-full flex-col gap-2">
        <label for="contact-email" class="block text-sm text-stro-muted">
          {{ t('contact.formEmailLabel') }}
        </label>
        <StroInput
          id="contact-email"
          v-model="fromEmail"
          name="email"
          type="email"
          autocomplete="email"
          class="block w-full"
          :placeholder="t('contact.formEmailPlaceholder')"
        />
      </div>

      <div class="flex w-full flex-col gap-2">
        <label for="contact-message" class="block text-sm text-stro-muted">
          {{ t('contact.formMessageLabel') }}
        </label>
        <StroTextarea
          id="contact-message"
          v-model="message"
          name="message"
          class="block w-full"
          :rows="4"
          :placeholder="t('contact.formMessagePlaceholder')"
          required
        />
      </div>

      <StroButton
        type="submit"
        variant="primary"
        class="w-full"
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
