<script setup lang="ts">
import type { Experience } from '~/types/portfolio'
import { buildExperienceTimelineGroups } from '~/lib/experiences/groupByYear'

const props = defineProps<{
  experiences: Experience[]
}>()

const copy = usePortfolioCopy()

const groups = computed(() => buildExperienceTimelineGroups(props.experiences))

const glowColors = [
  'rgb(139 92 246 / 0.2)',
  'rgb(59 130 246 / 0.15)',
  'rgb(16 185 129 / 0.12)',
  'rgb(6 182 212 / 0.12)',
]

function glowForIndex(index: number) {
  return glowColors[index % glowColors.length]
}
</script>

<template>
  <div
    class="experience-timeline relative"
    role="list"
  >
    <div
      class="pointer-events-none absolute bottom-0 left-[1.35rem] top-0 hidden w-px bg-stro-border lg:block"
      aria-hidden="true"
    />

    <ScrollReveal
      v-for="(group, groupIndex) in groups"
      :key="group.isCurrent ? 'current' : group.year"
      variant="fade-up"
      :delay="Math.min(groupIndex * 90, 360)"
      class="experience-timeline__row relative lg:grid lg:grid-cols-[4.5rem_minmax(0,1fr)] lg:gap-x-10"
      :class="groupIndex < groups.length - 1 ? 'mb-10 lg:mb-12' : ''"
      role="listitem"
    >
      <div
        class="mb-4 hidden items-start gap-3 pt-1 lg:flex"
        :aria-hidden="group.isCurrent ? undefined : true"
      >
        <span
          class="relative z-10 mt-0.5 flex h-3 w-3 shrink-0 rounded-full border-2 border-stro-purple bg-stro-bg shadow-[0_0_12px_rgb(139_92_246_/_0.45)]"
          aria-hidden="true"
        />
        <span
          v-if="group.isCurrent"
          class="stro-font-mono text-sm font-medium text-stro-emerald"
        >
          {{ copy.work.current }}
        </span>
        <span
          v-else
          class="stro-font-mono text-sm font-medium text-stro-cyan"
        >
          {{ group.year }}
        </span>
      </div>

      <section
        class="experience-year-group min-w-0"
        :aria-labelledby="group.isCurrent ? 'work-current' : `work-year-${group.year}`"
      >
        <h3
          :id="group.isCurrent ? 'work-current' : `work-year-${group.year}`"
          class="stro-font-mono mb-4 flex items-center gap-3 text-sm lg:sr-only"
          :class="group.isCurrent ? 'text-stro-emerald' : 'text-stro-cyan'"
        >
          <span
            class="h-2 w-2 rounded-full shadow-[0_0_8px_rgb(139_92_246_/_0.5)]"
            :class="group.isCurrent ? 'bg-stro-emerald' : 'bg-stro-purple'"
            aria-hidden="true"
          />
          {{ group.isCurrent ? copy.work.current : group.year }}
        </h3>

        <ul class="space-y-3">
          <li
            v-for="(job, index) in group.items"
            :key="job.id"
          >
            <details
              :open="job.current"
              class="experience-collapse group rounded-[var(--stro-radius-xl)] border border-stro-border bg-stro-surface shadow-[var(--stro-shadow-soft)] transition hover:border-stro-purple/30 open:border-stro-purple/35 open:shadow-[var(--stro-shadow-glow-brand)]"
            >
              <summary
                class="experience-collapse__summary relative cursor-pointer list-none overflow-hidden p-5 sm:p-6"
              >
                <div
                  class="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-40 blur-2xl transition group-open:opacity-60"
                  :style="{ background: glowForIndex(index) }"
                  aria-hidden="true"
                />
                <div class="relative flex flex-wrap items-start justify-between gap-3">
                  <div class="min-w-0 flex-1 pr-8">
                    <div class="mb-2 flex flex-wrap items-center gap-2">
                      <StroBadge
                        v-if="job.current"
                        variant="emerald"
                      >
                        {{ copy.work.current }}
                      </StroBadge>
                      <span class="text-xs text-stro-muted lg:hidden">
                        {{ job.period }}
                      </span>
                    </div>
                    <h4 class="stro-heading text-lg sm:text-xl">
                      <a
                        v-if="job.url"
                        :href="job.url"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="transition hover:text-stro-cyan"
                        @click.stop
                      >
                        {{ job.company }}
                      </a>
                      <span v-else>{{ job.company }}</span>
                    </h4>
                    <p class="mt-1 text-sm font-medium text-stro-blue">
                      {{ job.role }}
                    </p>
                    <p class="mt-1 text-sm text-stro-muted">
                      {{ job.period }} · {{ job.location }}
                    </p>
                  </div>
                  <span
                    class="experience-collapse__chevron absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-stro-border bg-stro-bg/80 text-stro-muted transition group-open:rotate-180 group-open:border-stro-purple/40 group-open:text-stro-cyan sm:right-6 sm:top-6"
                    aria-hidden="true"
                  >
                    <svg
                      class="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </div>
              </summary>

              <div
                class="experience-collapse__panel border-t border-stro-border px-5 pb-5 pt-4 sm:px-6 sm:pb-6"
              >
                <p class="stro-body text-sm leading-relaxed sm:text-base">
                  {{ job.highlight }}
                </p>
                <p
                  v-if="job.details"
                  class="stro-body mt-3 text-sm leading-relaxed text-stro-muted sm:text-base"
                >
                  {{ job.details }}
                </p>
                <p
                  v-if="job.url"
                  class="mt-4"
                >
                  <a
                    :href="job.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sm font-medium text-stro-cyan transition hover:underline"
                  >
                    LinkedIn →
                  </a>
                </p>
              </div>
            </details>
          </li>
        </ul>
      </section>
    </ScrollReveal>
  </div>
</template>

<style scoped>
.experience-collapse__summary::-webkit-details-marker {
  display: none;
}

.experience-collapse__summary::marker {
  content: '';
}
</style>
