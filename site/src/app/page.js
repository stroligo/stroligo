import Image from 'next/image';

export default function Home() {
  return (
    <div
      id="__next"
      className="bg-gray-800 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-white"
      /*   onMouseMove={handleMouseMove} */
    >
      <div className="relative">
        <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"></div>
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:flex-row lg:justify-between lg:gap-4 flex-col-reverse">
            {/* Conteudo */}
            <main className="pt-24 lg:w-1/2 lg:py-24">
              {/* Sessao Sobre */}
              <section
                id="Sobre"
                className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                aria-label="Sobre"
              >
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    Sobre
                  </h2>
                </div>
                <div>
                  <p className="mb-4">
                    Com mais de 15 anos de experiência no desenvolvimento web,
                    trilhei um caminho diversificado que abrange tecnologia,
                    criação e marketing. Atualmente, sou colaborador do Tribunal
                    de Justiça do Estado do Tocantins. Além disso, tive o
                    privilégio de ser co-fundador da Web Success na Irlanda e do
                    42 Bar e Board Games no Tocantins.
                  </p>
                  <p className="mb-4">
                    Especializei-me no Front-End, onde acumulei vasto
                    conhecimento e experiência. Minha expertise centraliza-se em
                    Javascript. Possuo uma formação acadêmica sólida, com
                    graduação em Artes e mestrado em Modelagem Computacional,
                    ambos pela Universidade Federal do Tocantins.
                  </p>
                  <p className="mb-4">
                    Como uma pessoa naturalmente hiperativa, canalizo minha
                    energia em projetos que desafiem minha criatividade e busco
                    incessantemente superar barreiras. Minha motivação reside em
                    aprimorar constantemente minhas habilidades e aplicá-las na
                    criação de experiências web excepcionais.
                  </p>
                  <p className="mb-4">
                    Estou sempre em busca de novos desafios e oportunidades para
                    crescer profissionalmente. Se você está em busca de um
                    colaborador dedicado, apaixonado e comprometido com a
                    excelência, estou pronto para contribuir de forma
                    significativa em seus projetos.
                  </p>
                </div>
              </section>
              {/* Sessao Contato */}
              <section
                id="Contato"
                className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                aria-label="Contato"
              >
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    Contato
                  </h2>
                </div>
                <div>
                  <p className="mb-4">
                    Contato - Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. At mollitia quaerat quasi dolorem ea amet
                    quisquam aut sint eligendi impedit, culpa quod molestiae
                    animi cupiditate, labore saepe accusantium quibusdam
                    laudantium.
                  </p>
                </div>
              </section>
              {/* Sessao Footer */}
              <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
                <p>
                  Loosely designed in{' '}
                  <a
                    href="https://www.figma.com/"
                    className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Figma (opens in a new tab)"
                  >
                    Figma
                  </a>{' '}
                  and coded in{' '}
                  <a
                    href="https://code.visualstudio.com/"
                    className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Visual Studio Code (opens in a new tab)"
                  >
                    Visual Studio Code
                  </a>{' '}
                  by yours truly. Built with{' '}
                  <a
                    href="https://nextjs.org/"
                    className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Next.js (opens in a new tab)"
                  >
                    Next.js
                  </a>{' '}
                  and{' '}
                  <a
                    href="https://tailwindcss.com/"
                    className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Tailwind CSS (opens in a new tab)"
                  >
                    Tailwind CSS
                  </a>
                  , deployed with{' '}
                  <a
                    href="https://vercel.com/"
                    className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Vercel (opens in a new tab)"
                  >
                    Vercel
                  </a>
                  . All text is set in the{' '}
                  <a
                    href="https://rsms.me/inter/"
                    className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Inter (opens in a new tab)"
                  >
                    Inter
                  </a>{' '}
                  typeface.
                </p>
              </footer>
            </main>
            {/* Sidebar */}
            <aside className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
              <header className="flex flex-col justify-end items-end">
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                  Gabriel Stroligo
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                  Senior Frontend Engineer
                </h2>
                <p className="mt-4 max-w-xs leading-normal text-right">
                  I build pixel-perfect, engaging, and accessible digital
                  experiences.
                </p>
                <nav
                  className="nav hidden lg:block"
                  aria-label="In-page jump links"
                >
                  <ul className="mt-16 w-max">
                    <li>
                      <a
                        className="group flex items-center justify-end py-3"
                        href="#Sobre"
                      >
                        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                          Sobre
                        </span>
                        <span className="nav-indicator ml-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="group flex items-center justify-end py-3"
                        href="#Contato"
                      >
                        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                          Contato
                        </span>
                        <span className="nav-indicator ml-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </header>
              <footer className="flex flex-col justify-end items-end">
                <div>Links Uteis</div>
                <ul
                  className="ml-1 mt-8 flex items-center justify-end"
                  aria-label="Social media"
                >
                  {/* Github */}
                  <li className="mr-5 text-xs shrink-0">
                    <a
                      className="block hover:text-slate-200"
                      href="https://github.com/stroligo"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="GitHub (opens in a new tab)"
                      title="GitHub"
                    >
                      <span className="sr-only">GitHub</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-6 w-6"
                        aria-hidden="true"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                      </svg>
                    </a>
                  </li>
                  {/* Linkedin */}
                  <li className="mr-5 text-xs shrink-0">
                    <a
                      className="block hover:text-slate-200"
                      href="https://www.linkedin.com/in/gabrielstroligo/"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="LinkedIn (opens in a new tab)"
                      title="LinkedIn"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6"
                        aria-hidden="true"
                      >
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                      </svg>
                    </a>
                  </li>
                  {/* Behance */}
                  <li className="mr-5 text-xs shrink-0">
                    <a
                      className="block hover:text-slate-200"
                      href="https://www.behance.net/gabrielstroligo"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Behance (opens in a new tab)"
                      title="Behance"
                    >
                      <span className="sr-only">Behance</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6"
                        aria-hidden="true"
                      >
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </footer>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
