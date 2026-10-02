<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
    lines?: string[]
  }>(),
  {
    title: 'portfolio.ts',
    lines: () => [
      'const dev = {',
      '  name: "Gabriel Stroligo",',
      '  stack: ["React", "Nuxt", "TS"],',
      '  focus: "impact + craft",',
      '};',
      '',
      'export default dev;',
    ],
  },
)

function lineClass(line: string) {
  if (!line.trim()) return 'text-transparent'
  if (line.startsWith('export')) return 'text-stro-cyan'
  if (line.startsWith('const')) return 'text-stro-purple'
  if (line.includes('stack')) return 'text-stro-emerald'
  if (line.includes('focus')) return 'text-stro-cyan'
  if (line.includes('name')) return 'text-stro-blue'
  return 'text-stro-foreground'
}
</script>

<template>
  <StroCard
    variant="glass"
    class="stro-terminal block w-full min-w-0 overflow-hidden p-0"
  >
    <div
      class="flex items-center gap-3 border-b border-stro-border px-3.5 py-2.5 sm:px-4 sm:py-3"
    >
      <div class="stro-terminal-dots" aria-hidden="true">
        <span /><span /><span />
      </div>
      <span class="stro-font-mono text-[11px] text-stro-muted sm:text-xs">{{ title }}</span>
    </div>
    <pre
      class="stro-font-mono m-0 overflow-hidden px-3.5 py-3.5 text-[0.6875rem] leading-[1.6] sm:px-4 sm:py-4 sm:text-xs sm:leading-relaxed"
    ><code class="block"><span
        v-for="(line, i) in lines"
        :key="i"
        class="block min-h-[1.6em] whitespace-pre-wrap break-words"
      ><span
          class="mr-2 inline-block w-[1.25rem] select-none text-right tabular-nums text-stro-muted/80"
        >{{ line.trim() ? i + 1 : '' }}</span><span :class="lineClass(line)">{{ line || ' ' }}</span></span></code></pre>
  </StroCard>
</template>
