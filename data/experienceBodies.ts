import type { ContentLocale } from '~/lib/portfolio/locale'
import type { Experience } from '~/types/portfolio'

type ExperienceBodyCopy = {
  en: string
  pt: string
}

/** Texto completo das experiências — alinhado ao perfil do LinkedIn. */
export const experienceBodiesById: Record<string, ExperienceBodyCopy> = {
  'vex-tech': {
    en: `Allocated to the European Union Intellectual Property Office project through Axians, contributing to the development and evolution of large-scale frontend applications used by businesses, legal professionals, and public institutions across the European Union.

Responsible for implementing, enhancing, and maintaining critical user interfaces for the Spanish version of the EUIPO platform, ensuring accessibility, performance, scalability, and adherence to high code quality standards.

Collaborating within multicultural Agile teams, actively participating in technical discussions, architectural decisions, and continuous improvement initiatives.

Working on this project has strengthened my experience in building robust public-sector digital services that support intellectual property protection and innovation throughout Europe.`,
    pt: `Alocado ao projeto da European Union Intellectual Property Office (EUIPO) através da Axians, contribuindo para o desenvolvimento e evolução de aplicações front-end em larga escala usadas por empresas, profissionais jurídicos e instituições públicas em toda a União Europeia.

Responsável por implementar, evoluir e manter interfaces críticas da versão espanhola da plataforma EUIPO, garantindo acessibilidade, performance, escalabilidade e aderência a elevados padrões de qualidade de código.

Atuação em equipas Agile multiculturais, com participação ativa em discussões técnicas, decisões de arquitetura e iniciativas de melhoria contínua.

Este projeto reforçou minha experiência na construção de serviços digitais robustos no setor público, apoiando a proteção da propriedade intelectual e a inovação em toda a Europa.`,
  },
  'cafe-art': {
    en: `At Café com Marketing, I was responsible for transforming creative concepts and design prototypes into modern, scalable, and high-performance web applications.

Working across the full frontend development lifecycle, I built responsive interfaces with a strong focus on user experience, accessibility, performance, and maintainable code. I collaborated closely with designers, marketers, and stakeholders to deliver digital products tailored to diverse audiences and business goals.

Throughout this role, I contributed to a wide range of websites, landing pages, and custom web solutions, leveraging modern frameworks and tools to ensure fast, reliable, and visually engaging experiences.`,
    pt: `No Café com Marketing, fui responsável por transformar conceitos criativos e protótipos de design em aplicações web modernas, escaláveis e de alta performance.

Atuando em todo o ciclo de desenvolvimento front-end, construí interfaces responsivas com forte foco em experiência do usuário, acessibilidade, performance e código sustentável. Colaborei de perto com designers, profissionais de marketing e stakeholders para entregar produtos digitais adaptados a públicos e objetivos de negócio diversos.

Ao longo desta função, contribuí para uma ampla gama de sites, landing pages e soluções web customizadas, usando frameworks e ferramentas modernas para garantir experiências rápidas, confiáveis e visualmente envolventes.`,
  },
  tjto: {
    en: `Since 2011, I have been working as a Front-End Developer in the Judiciary, leading the design and implementation of all institutional websites with a strong focus on performance, accessibility, and user experience. I specialize in developing custom, responsive templates using Joomla as the CMS, ensuring consistency and scalability across a diverse range of projects.

One of the most significant platforms under my responsibility is the TJTO portal (tjto.jus.br), which receives an average of 8,900 daily visits. I've contributed to the platform's long-term stability by creating dedicated hotsites, enhancing the UI architecture, and implementing front-end performance optimizations to ensure fast load times, intuitive navigation, and cross-device compatibility.

Beyond routine maintenance, I actively drive the front-end evolution of these platforms—developing new visual components, improving responsiveness, and refining the user interface to align with accessibility standards and evolving user needs.`,
    pt: `Desde 2011, atuo como Desenvolvedor Front-End no Judiciário, liderando o design e a implementação de todos os sites institucionais com forte foco em performance, acessibilidade e experiência do usuário. Especializo-me em templates responsivos customizados com Joomla como CMS, garantindo consistência e escalabilidade em projetos diversos.

Uma das plataformas mais significativas sob minha responsabilidade é o portal TJTO (tjto.jus.br), com média de 8.900 visitas diárias. Contribuí para a estabilidade de longo prazo da plataforma criando hotsites dedicados, evoluindo a arquitetura de UI e implementando otimizações de performance front-end para garantir carregamento rápido, navegação intuitiva e compatibilidade entre dispositivos.

Além da manutenção rotineira, conduzo ativamente a evolução front-end dessas plataformas — desenvolvendo novos componentes visuais, melhorando a responsividade e refinando a interface alinhada a padrões de acessibilidade e necessidades dos usuários.`,
  },
  'web-success': {
    en: `Being part of the foundation of a technology company in Dublin was an enriching and challenging experience. We had the opportunity to build a solid client base, offering a wide range of services, including technical consultancy, website development, and the creation of custom small-scale systems.

I was responsible for managing the technical side of the company, leading talent recruitment and project management, ensuring the delivery of high-quality solutions.

My partner focused on client relations and administrative matters, allowing the company to operate smoothly and efficiently.`,
    pt: `Participar da fundação de uma empresa de tecnologia em Dublin foi uma experiência enriquecedora e desafiadora. Construímos uma base sólida de clientes, oferecendo consultoria técnica, desenvolvimento de sites e criação de sistemas customizados em pequena escala.

Fui responsável pela gestão técnica da empresa, liderando recrutamento de talentos e gestão de projetos, garantindo a entrega de soluções de alta qualidade.

Meu sócio concentrou-se em relações com clientes e assuntos administrativos, permitindo que a empresa operasse de forma fluida e eficiente.`,
  },
  '42-bar': {
    en: `As a co-owner of 42, I had the extraordinary opportunity to work across nearly every aspect of the business. Some of the key responsibilities I took on include:

Bar Management | Brand Strategy and Positioning | Customer Relations | Corporate Marketing | Team Training and Development | Menu Design (for both Kitchen and Cocktails) | Event Production and Coordination | Quality Assurance and Control.

My expertise in technology, design, and marketing was instrumental in creating the bar's visual identity, as well as all of the advertising materials we used.

I managed customer relations on social media, and I was also responsible for planning and executing the bar's campaigns and events.

I often say that I served as the creative lead at 42, a role I fulfilled with passion and dedication.`,
    pt: `Como co-proprietário do 42, tive a oportunidade de atuar em praticamente todos os aspectos do negócio. Entre as principais responsabilidades:

Gestão do bar | Estratégia e posicionamento de marca | Relacionamento com clientes | Marketing corporativo | Treinamento e desenvolvimento de equipe | Design de cardápio (cozinha e coquetéis) | Produção e coordenação de eventos | Controle de qualidade.

Minha experiência em tecnologia, design e marketing foi fundamental para criar a identidade visual do bar e todos os materiais publicitários utilizados.

Gerenciei o relacionamento com clientes nas redes sociais e fui responsável por planejar e executar campanhas e eventos do espaço.

Costumo dizer que fui o creative lead do 42 — um papel que exerce com paixão e dedicação.`,
  },
  prte: {
    en: `At PRTE - Educational Technology and Solutions, I worked as a front-end developer, specializing in visual design and website development. During my tenure, I focused on creating responsive and innovative web solutions tailored to client needs and industry trends.

My responsibilities included developing and implementing intuitive and visually appealing user interfaces; creating responsive designs to ensure a consistent user experience across various devices; collaborating with design and development teams to build functional and visually impactful websites; and utilizing technologies such as HTML5, JavaScript, and CSS to develop and optimize web pages.

These experiences provided me with a strong understanding of front-end development best practices and honed my ability to deliver high-quality projects.`,
    pt: `Na PRTE - Tecnologia e Soluções Educacionais, atuei como desenvolvedor front-end, com foco em design visual e desenvolvimento de sites. Durante esse período, criei soluções web responsivas e inovadoras alinhadas às necessidades dos clientes e às tendências do mercado.

Minhas responsabilidades incluíam desenvolver e implementar interfaces intuitivas e visualmente atraentes; criar designs responsivos para experiência consistente em diversos dispositivos; colaborar com equipes de design e desenvolvimento para sites funcionais e impactantes; e utilizar HTML5, JavaScript e CSS para desenvolver e otimizar páginas web.

Essas experiências consolidaram meu entendimento de boas práticas de front-end e minha capacidade de entregar projetos de alta qualidade.`,
  },
  microlins: {
    en: `During my time as a computer instructor at Microlins, I taught a broad range of courses, including Windows, Microsoft Office (Word, Excel, PowerPoint), Photoshop, Corel Draw, PageMaker, HTML, CSS, Dreamweaver, Fireworks, and Flash with ActionScript, as well as website design and creation.

In addition to teaching, I developed and managed the Microlins newsletter and created the website www.microlinspalmas.com.br. I was also responsible for developing internal campaigns to promote the brand and services, and for creating the Microlins model company, which served as a reference for other franchises.

These experiences provided me with a solid foundation in web design and development.`,
    pt: `Como instrutor de informática na Microlins, ministrei cursos de Windows, Microsoft Office (Word, Excel, PowerPoint), Photoshop, Corel Draw, PageMaker, HTML, CSS, Dreamweaver, Fireworks e Flash com ActionScript, além de design e criação de sites.

Além do ensino, desenvolvi e gerenciei a newsletter da Microlins e criei o site www.microlinspalmas.com.br. Também fui responsável por campanhas internas de promoção da marca e serviços, e pela criação da empresa modelo Microlins, referência para outras franquias.

Essas experiências me deram base sólida em design e desenvolvimento web.`,
  },
  'cartorio-moromizato': {
    en: `At Cartório e Tabelionato de Protesto Moromizato, I was responsible for maintaining and supporting the office's computers, as well as providing network support. I also developed advertising materials and created internal campaigns to promote the office's services.

A key achievement was the development of the website www.cartoriomoromizato.com.br, which enhanced the organization's online presence.

These experiences provided me with valuable skills in technical support, web development, and promotional material creation.`,
    pt: `No Cartório e Tabelionato de Protesto Moromizato, fui responsável pela manutenção e suporte dos computadores do escritório, além de suporte de rede. Também desenvolvi materiais publicitários e campanhas internas para promover os serviços do cartório.

Um marco importante foi o desenvolvimento do site www.cartoriomoromizato.com.br, que ampliou a presença online da organização.

Essas experiências me deram competências valiosas em suporte técnico, desenvolvimento web e criação de materiais promocionais.`,
  },
  'qi-informatica': {
    en: `As a computer instructor at Q.I. Informática, I taught a variety of courses, including AutoCAD, Photoshop, Corel Draw, PageMaker, HTML, CSS, Dreamweaver, Fireworks, Flash with ActionScript, and website design and creation.

These courses covered a range of topics from graphic design and layout creation to web development and interactive functionality. My role involved developing educational materials, monitoring student progress, and adapting content to meet market needs.`,
    pt: `Como instrutor de informática na Q.I. Informática, ministrei cursos de AutoCAD, Photoshop, Corel Draw, PageMaker, HTML, CSS, Dreamweaver, Fireworks, Flash com ActionScript, e design e criação de sites.

Os cursos abrangiam design gráfico, layout, desenvolvimento web e funcionalidades interativas. Minha função incluía desenvolver materiais didáticos, acompanhar o progresso dos alunos e adaptar conteúdo às necessidades do mercado.`,
  },
  'to-online': {
    en: `As a front-end developer at To Online - Marketing de Resultados, I was involved in visual design and website development, contributing to the creation of over 30 projects.

My role included developing engaging and functional interfaces using technologies such as HTML, CSS, and JavaScript to ensure a high-quality user experience. I played a key role in executing web design and development projects, aligning them with marketing strategies and client objectives.`,
    pt: `Como desenvolvedor front-end na To Online - Marketing de Resultados, atuei em design visual e desenvolvimento de sites, contribuindo para mais de 30 projetos.

Desenvolvi interfaces funcionais e envolventes com HTML, CSS e JavaScript para garantir alta qualidade de experiência. Tive papel central na execução de projetos de design e desenvolvimento web, alinhados a estratégias de marketing e objetivos dos clientes.`,
  },
  'tema-informatica': {
    en: `As a computer instructor at TEMA INFORMÁTICA, I taught a wide range of courses including AutoCAD, Humanization (AutoCAD-Corel), Computer Assembly and Maintenance, Structured Network Cabling, Linux (Debian - Kurumin), OpenOffice (Writer, Calc, Impress), Windows, Microsoft Office (Word, Excel, PowerPoint), Photoshop, Corel Draw, PageMaker, HTML, CSS, Dreamweaver, Fireworks, Flash with ActionScript, and Website Design and Creation.

In addition to my teaching role, I served as a pedagogical assistant, responsible for standardizing teaching methods across the 6 branches of TEMA. I developed the course plan for 2007 and revised the educational materials for that year, ensuring the quality and consistency of the educational content throughout the network.`,
    pt: `Como instrutor de informática na TEMA INFORMÁTICA, ministrei cursos de AutoCAD, Humanização (AutoCAD-Corel), Montagem e Manutenção de Computadores, Cabeamento Estruturado de Redes, Linux (Debian - Kurumin), OpenOffice (Writer, Calc, Impress), Windows, Microsoft Office (Word, Excel, PowerPoint), Photoshop, Corel Draw, PageMaker, HTML, CSS, Dreamweaver, Fireworks, Flash com ActionScript, e Design e Criação de Sites.

Além do ensino, fui assistente pedagógico, responsável por padronizar métodos de ensino nas 6 filiais da TEMA. Elaborei o plano de cursos de 2007 e revisei os materiais didáticos daquele ano, garantindo qualidade e consistência do conteúdo educacional em toda a rede.`,
  },
}

export function experienceBodyForLocale(
  id: string,
  locale: ContentLocale,
): string | undefined {
  const entry = experienceBodiesById[id]
  if (!entry) return undefined
  return locale === 'en' ? entry.en : entry.pt
}

export function experienceBodyParagraphs(body: string | undefined): string[] {
  if (!body?.trim()) return []
  return body
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean)
}

const STACK_PARAGRAPH =
  /^(main stack|stack principal|technologies|tecnologias)\s*:/i

export function experienceBulletsForResume(
  job: Pick<Experience, 'body' | 'highlight' | 'details'>,
  maxBullets = 5,
): string[] {
  const fromBody = experienceBodyParagraphs(job.body).filter(
    (p) => !STACK_PARAGRAPH.test(p),
  )
  if (fromBody.length) return fromBody.slice(0, maxBullets)
  return [job.highlight, job.details].filter(Boolean).slice(0, maxBullets)
}
