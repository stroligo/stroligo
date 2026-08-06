<script setup lang="ts">
import type { ProjectCategory } from '~/types/portfolio';
import { hobbiesForLocale } from '~/data/hobbies';

const { t, locale } = useI18n();
const copy = usePortfolioCopy();
const {
  profile,
  projects,
  projectCategories,
  experiences,
  socialLinks,
  linkedInProjectsUrl,
  heroExperienceLabel,
  projectCountLabel,
} = usePortfolio();

const hobbies = computed(() =>
  hobbiesForLocale(locale.value === 'en' ? 'en' : 'pt'),
);

const activeCategory = ref<ProjectCategory>('todos');

const filteredProjects = computed(() => {
  const list =
    activeCategory.value === 'todos'
      ? projects.value
      : projects.value.filter((p) => p.category === activeCategory.value);
  return list;
});

const filteredCountLabel = computed(() =>
  projectCountLabel(filteredProjects.value.length),
);

const terminalLines = computed(() => [
  `const dev = "${profile.value.name}"`,
  'const stack = ["React", "Nuxt", "TypeScript"]',
  `const focus = "${locale.value === 'pt' ? 'impacto + craft' : 'impact + craft'}"`,
  'export default dev',
]);

useStroSeo();
</script>

<template>
  <div class="relative z-10">
    <a
      href="#conteudo"
      class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[var(--stro-radius-md)] bg-stro-blue px-4 py-2 text-white"
    >
      {{ copy.a11y.skipToContent }}
    </a>

    <SiteHeader />

    <main id="conteudo">
      <!-- Hero -->
      <section class="relative border-b border-stro-border">
        <div
          class="pointer-events-none absolute inset-0 overflow-hidden"
          aria-hidden="true"
        >
          <div
            class="absolute -right-20 top-0 h-[28rem] w-[28rem] rounded-full opacity-60 blur-3xl"
            style="background: rgb(139 92 246 / 0.12)"
          />
          <div
            class="absolute -left-16 bottom-0 h-80 w-80 rounded-full opacity-50 blur-3xl"
            style="background: rgb(6 182 212 / 0.1)"
          />
        </div>

        <div class="relative stro-container py-16">
          <div class="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div class="min-w-0">
              <ScrollReveal variant="fade-up">
                <HeroTypewriterName :text="profile.name" />
              </ScrollReveal>
              <ScrollReveal variant="fade-up" :delay="80">
                <p class="mt-5 max-w-xl text-lg text-stro-muted sm:text-xl">
                  {{ profile.tagline }}
                </p>
                <p class="mt-3 text-sm text-stro-muted">
                  {{ profile.location }} ·
                  {{ heroExperienceLabel }}
                </p>
              </ScrollReveal>

              <div
                id="sobre"
                class="mt-10 scroll-mt-[calc(var(--stro-header-height)+1rem)]"
              >
                <ScrollReveal variant="fade-up" :delay="120">
                  <p class="stro-kicker mb-4">// about</p>

                  <div class="space-y-4 text-base sm:text-lg">
                    <p
                      v-for="(paragraph, index) in profile.about"
                      :key="index"
                      class="stro-body max-w-xl"
                    >
                      {{ paragraph }}
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal variant="fade-up" :delay="200">
                  <div class="mt-8">
                    <h3 class="stro-kicker mb-4 !text-stro-purple sm:mb-5">
                      {{ copy.about.stackTitle }}
                    </h3>
                    <ul class="flex flex-wrap gap-2.5 sm:gap-3">
                      <li v-for="tech in profile.stack" :key="tech">
                        <TechStackBadge :label="tech" />
                      </li>
                    </ul>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            <ScrollReveal
              variant="fade-left"
              :delay="160"
              class="hero-aside lg:sticky lg:z-10 lg:ml-auto lg:w-full lg:max-w-[38rem] lg:self-start"
            >
              <aside aria-label="Retrato e terminal">
                <div class="hero-aside__scene">
                  <div class="hero-photo-wrap">
                    <ProfilePhoto size="hero" />
                  </div>
                  <div class="hero-terminal-overlap">
                    <StroTerminal title="portfolio.ts" :lines="terminalLines" />
                  </div>
                </div>
                <p
                  class="mt-6 text-center text-sm text-stro-muted sm:mt-7 lg:text-left"
                >
                  <span class="stro-font-mono text-stro-cyan">{{
                    profile.name
                  }}</span>
                  <span class="mt-0.5 block">{{ profile.tagline }}</span>
                </p>
              </aside>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <!-- Projetos -->
      <StroSection
        id="projetos"
        kicker="// projects"
        :title="copy.projects.title"
        :subtitle="copy.projects.subtitle"
        class="scroll-mt-20"
      >
        <ScrollReveal variant="fade-up" :delay="80">
          <div class="mb-8 flex flex-wrap items-center justify-between gap-4">
            <p class="text-sm text-stro-muted">
              <span class="stro-font-mono text-stro-cyan">{{
                filteredProjects.length
              }}</span>
              {{ filteredCountLabel }}
            </p>
            <div class="flex flex-wrap gap-2">
              <StroButton
                :href="linkedInProjectsUrl"
                variant="secondary"
                size="sm"
                external
              >
                {{ copy.projects.linkedinAll }}
              </StroButton>
            </div>
          </div>

          <div
            class="mb-8 flex flex-wrap gap-2"
            role="tablist"
            :aria-label="copy.a11y.filterProjects"
          >
            <StroChip
              v-for="category in projectCategories"
              :key="category.id"
              :active="activeCategory === category.id"
              @click="activeCategory = category.id"
            >
              {{ category.label }}
            </StroChip>
          </div>
        </ScrollReveal>

        <Transition name="projects-fade" mode="out-in">
          <div
            :key="activeCategory"
            class="grid min-w-0 gap-6 sm:grid-cols-2 xl:grid-cols-3"
            role="tabpanel"
          >
            <ScrollReveal
              v-for="(project, index) in filteredProjects"
              :key="project.id"
              variant="fade-up"
              :delay="Math.min(index * 70, 420)"
              class="h-full min-w-0"
            >
              <ProjectCard :project="project" />
            </ScrollReveal>
          </div>
        </Transition>

        <ProjectModal />
      </StroSection>

      <!-- Atuação -->
      <StroSection
        id="atuacao"
        kicker="// work"
        :title="copy.work.title"
        :subtitle="copy.work.subtitle"
        bordered
        tinted
      >
        <ExperienceTimeline :experiences="experiences" />
      </StroSection>

      <!-- Redes -->
      <StroSection
        id="contato"
        kicker="// contact"
        :title="copy.contact.title"
        :subtitle="copy.contact.subtitle"
        bordered
        tinted
      >
        <div class="flex flex-col gap-12 lg:gap-10 md:flex-row">
          <div class="md:w-1/2">
            <ContactQuickForm :to-email="profile.email" />
          </div>
          <div class="md:w-1/2">
            <div class="flex flex-col gap-12">
              <div>
                <h3 class="stro-kicker mb-6 !text-stro-cyan">
                  {{ copy.contact.hobbiesTitle }}
                </h3>
                <CuriositiesList :items="hobbies" />
              </div>
              <div>
                <h3 class="stro-kicker mb-6 !text-stro-purple">
                  {{ copy.contact.socialTitle }}
                </h3>
                <div
                  class="flex flex-wrap items-center justify-center gap-3 sm:justify-start sm:gap-4"
                  :aria-label="copy.a11y.socialNav"
                >
                  <SocialLinkCard
                    v-for="link in socialLinks"
                    :key="link.id"
                    :link="link"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </StroSection>
    </main>

    <SiteFooter />
  </div>
</template>
