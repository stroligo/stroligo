<script setup lang="ts">
import { site } from '~/data/site'
import { resolveI18nString } from '~/utils/resolveI18nMessage'

const props = withDefaults(
  defineProps<{
    size?: 'md' | 'lg' | 'hero'
    showCaption?: boolean
  }>(),
  {
    size: 'lg',
    showCaption: false,
  },
)

const { t } = useI18n()
const { profile } = usePortfolio()

const photoAlt = computed(() =>
  resolveI18nString(t('profile.photoAlt', { name: profile.value.name })),
)

const frameClass = computed(() => {
  if (props.size === 'hero') {
    return 'w-full'
  }
  if (props.size === 'lg') {
    return 'w-full max-w-[20rem] mx-auto lg:mx-0 lg:max-w-none'
  }
  return 'w-full max-w-[14rem] mx-auto'
})

const imageClass = computed(() =>
  props.size === 'hero'
    ? 'aspect-[4/5] h-auto w-full object-cover object-[center_18%]'
    : 'aspect-[4/5] h-auto w-full object-cover object-[center_18%]',
)
</script>

<template>
  <figure :class="frameClass">
    <div
      class="stro-profile-photo relative overflow-hidden rounded-[var(--stro-radius-xl)] shadow-[var(--stro-shadow-glow-brand)]"
    >
      <div
        class="absolute inset-0 rounded-[var(--stro-radius-xl)] p-[2px]"
        style="background: var(--stro-gradient-brand)"
        aria-hidden="true"
      />
      <div
        class="relative m-[2px] overflow-hidden rounded-[calc(var(--stro-radius-xl)-2px)] bg-stro-bg"
      >
        <div class="stro-profile-photo__media">
          <img
            :src="site.profilePhotoUrl"
            :alt="photoAlt"
            :width="size === 'hero' ? 640 : 400"
            :height="size === 'hero' ? 800 : 500"
            :class="['stro-profile-photo__img', imageClass]"
            :loading="size === 'lg' || size === 'hero' ? 'eager' : 'lazy'"
            :fetchpriority="size === 'lg' || size === 'hero' ? 'high' : 'auto'"
          />
          <div
            class="stro-profile-photo__overlay"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
    <figcaption
      v-if="showCaption"
      class="mt-3 text-center text-sm text-stro-muted lg:text-left"
    >
      <span class="stro-font-mono text-stro-cyan">{{ profile.name }}</span>
      <span class="mt-0.5 block">{{ profile.tagline }}</span>
    </figcaption>
  </figure>
</template>
