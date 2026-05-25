<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
    lines?: string[]
  }>(),
  {
    title: 'portfolio.ts',
    lines: () => [
      'const dev = "Gabriel Stroligo"',
      'const stack = ["React", "Nuxt", "TS"]',
      'const focus = "impact + craft"',
      'export default dev',
    ],
  },
)
</script>

<template>
  <StroCard variant="glass" class="overflow-hidden p-0">
    <div
      class="flex items-center gap-3 border-b border-stro-border px-4 py-3"
    >
      <div class="stro-terminal-dots" aria-hidden="true">
        <span /><span /><span />
      </div>
      <span class="text-xs text-stro-muted">{{ title }}</span>
    </div>
    <pre
      class="overflow-x-auto p-4 text-xs leading-relaxed sm:text-sm"
    ><code><span
        v-for="(line, i) in lines"
        :key="i"
        class="block"
      ><span class="text-stro-muted select-none">{{ String(i + 1).padStart(2, ' ') }} </span><span
          :class="{
            'text-stro-purple': line.includes('const'),
            'text-stro-cyan': line.includes('export') || line.includes('focus'),
            'text-stro-emerald': line.includes('stack'),
            'text-stro-foreground': !line.includes('const') && !line.includes('export') && !line.includes('stack'),
          }"
        >{{ line }}</span></span></code></pre>
  </StroCard>
</template>
