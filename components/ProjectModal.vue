<script setup lang="ts">
import {
  resolveProjectCategoryTags,
  resolveProjectStack,
} from '~/lib/projects/stack';

const { activeProject, closeProjectModal } = useProjectModal();
const copy = usePortfolioCopy();
const { t } = useI18n();

const stack = computed(() =>
  activeProject.value ? resolveProjectStack(activeProject.value) : [],
);
const categoryTags = computed(() =>
  activeProject.value ? resolveProjectCategoryTags(activeProject.value) : [],
);

const bodyParagraphs = computed(() => {
  if (!activeProject.value) return [];
  const text =
    activeProject.value.body?.trim() || activeProject.value.description;
  return text.split(/\n\s*\n/).filter(Boolean);
});

const titleId = 'project-modal-title';

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') closeProjectModal();
}

watch(activeProject, (project) => {
  if (!import.meta.client) return;
  document.documentElement.classList.toggle(
    'overflow-hidden',
    Boolean(project),
  );
});

onMounted(() => window.addEventListener('keydown', onKeydown));
onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown);
  if (import.meta.client) {
    document.documentElement.classList.remove('overflow-hidden');
  }
});
</script>

<template>
  <Teleport to="body">
    <Transition name="project-modal">
      <div
        v-if="activeProject"
        class="project-modal fixed inset-0 z-[120] flex items-end justify-center p-0 sm:items-center sm:p-4"
        role="presentation"
      >
        <button
          type="button"
          class="absolute inset-0 bg-stro-bg/75 backdrop-blur-sm"
          :aria-label="t('projects.closeModal')"
          @click="closeProjectModal"
        />

        <div
          role="dialog"
          aria-modal="true"
          :aria-labelledby="titleId"
          class="project-modal__panel relative z-10 grid max-h-[92vh] w-full max-w-4xl grid-cols-1 overflow-hidden rounded-t-[var(--stro-radius-xl)] border border-stro-border bg-stro-surface shadow-[var(--stro-shadow-glow-brand)] sm:max-h-[88vh] sm:rounded-[var(--stro-radius-xl)] md:grid-cols-[minmax(11rem,16rem)_minmax(0,1fr)] lg:grid-cols-[minmax(12rem,18rem)_minmax(0,1fr)]"
        >
          <button
            type="button"
            class="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-stro-border bg-stro-bg/90 text-stro-muted shadow-[var(--stro-shadow-soft)] transition hover:border-stro-purple/40 hover:text-stro-cyan"
            :aria-label="t('projects.closeModal')"
            @click="closeProjectModal"
          >
            <svg
              class="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <aside
            class="relative min-h-[14rem] border-b border-stro-border md:sticky md:top-0 md:flex md:max-h-[88vh] md:min-h-0 md:self-start md:border-b-0 md:border-r h-full"
          >
            <ProjectCover :project="activeProject" layout="modal" />
          </aside>

          <div class="flex min-h-0 flex-col">
            <div
              class="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-5 sm:px-6 sm:py-6"
            >
              <div
                class="mb-4 flex flex-wrap items-start justify-between gap-3 pr-8"
              >
                <div class="min-w-0 flex-1">
                  <p
                    class="stro-kicker !text-[10px] !tracking-widest text-stro-purple"
                  >
                    {{ activeProject.organization }}
                  </p>
                  <h2
                    :id="titleId"
                    class="stro-heading mt-2 text-xl sm:text-2xl"
                  >
                    {{ activeProject.title }}
                  </h2>
                </div>
                <StroBadge v-if="activeProject.year" variant="neutral">
                  {{ activeProject.year }}
                </StroBadge>
              </div>

              <div class="space-y-4">
                <p
                  v-for="(paragraph, index) in bodyParagraphs"
                  :key="index"
                  class="stro-body text-sm leading-relaxed sm:text-base"
                >
                  {{ paragraph }}
                </p>
              </div>

              <div v-if="stack.length" class="mt-6">
                <h3 class="stro-kicker mb-2.5 !text-stro-purple sm:mb-3">
                  {{ copy.about.stackTitle }}
                </h3>
                <ProjectBadgeStrip :stack="stack" :tags="[]" />
              </div>

              <div v-if="categoryTags.length" class="mt-4">
                <ProjectBadgeStrip :stack="[]" :tags="categoryTags" />
              </div>
            </div>

            <div
              v-if="activeProject.siteUrl || activeProject.behanceUrl"
              class="flex shrink-0 flex-wrap gap-2 border-t border-stro-border px-5 py-4 sm:px-6"
            >
              <StroButton
                v-if="activeProject.siteUrl"
                :href="activeProject.siteUrl"
                variant="primary"
                size="sm"
                external
              >
                {{ copy.projects.viewSite }}
              </StroButton>
              <StroButton
                v-if="activeProject.behanceUrl"
                :href="activeProject.behanceUrl"
                variant="secondary"
                size="sm"
                external
              >
                {{ copy.projects.behanceCta }}
              </StroButton>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.project-modal-enter-active,
.project-modal-leave-active {
  transition: opacity 0.22s ease;
}

.project-modal-enter-active .project-modal__panel,
.project-modal-leave-active .project-modal__panel {
  transition:
    transform 0.28s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.22s ease;
}

.project-modal-enter-from,
.project-modal-leave-to {
  opacity: 0;
}

.project-modal-enter-from .project-modal__panel,
.project-modal-leave-to .project-modal__panel {
  opacity: 0;
  transform: translateY(1.25rem);
}

@media (min-width: 640px) {
  .project-modal-enter-from .project-modal__panel,
  .project-modal-leave-to .project-modal__panel {
    transform: translateY(0.75rem) scale(0.98);
  }
}
</style>
