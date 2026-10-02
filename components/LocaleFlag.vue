<script setup lang="ts">
defineProps<{
  locale: 'en' | 'pt' | 'es'
}>()
</script>

<template>
  <span
    class="locale-flag inline-flex size-3.5 shrink-0 overflow-hidden rounded-full ring-1 ring-black/10"
    aria-hidden="true"
  >
    <!-- Brasil (PT) -->
    <svg
      v-if="locale === 'pt'"
      class="size-full"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="20" height="20" fill="#009b3a" />
      <path d="M10 3.2 17.2 10 10 16.8 2.8 10Z" fill="#fedf00" />
      <circle cx="10" cy="10" r="3.4" fill="#002776" />
      <path
        d="M7.2 10.2c1.1-.9 2.5-1.1 3.8-.5.5.2.9.6 1.2 1-.6-.5-1.4-.7-2.2-.5-1 .3-1.8 1-2.1 2 .2-.9.8-1.7 1.5-2Z"
        fill="#fff"
        opacity="0.95"
      />
    </svg>
    <!-- Espanha (ES) -->
    <svg
      v-else-if="locale === 'es'"
      class="size-full"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="20" height="20" fill="#c60b1e" />
      <rect y="5" width="20" height="10" fill="#ffc400" />
    </svg>
    <!-- EUA (EN) -->
    <svg
      v-else
      class="size-full"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="20" height="20" fill="#b22234" />
      <path
        fill="#fff"
        d="M0 1.54h20V3.08H0zm0 3.08h20v1.54H0zm0 3.08h20v1.54H0zm0 3.08h20v1.54H0zm0 3.08h20v1.54H0z"
      />
      <rect width="8.6" height="8.6" fill="#3c3b6e" />
      <g fill="#fff" transform="scale(0.42) translate(1.2 1.2)">
        <circle cx="2" cy="2" r="0.55" />
        <circle cx="6" cy="2" r="0.55" />
        <circle cx="10" cy="2" r="0.55" />
        <circle cx="4" cy="5" r="0.55" />
        <circle cx="8" cy="5" r="0.55" />
        <circle cx="2" cy="8" r="0.55" />
        <circle cx="6" cy="8" r="0.55" />
        <circle cx="10" cy="8" r="0.55" />
      </g>
    </svg>
  </span>
</template>
