import type { ContentLocale } from '~/lib/portfolio/locale'
import type { Experience } from '~/types/portfolio'
import { experienceBodyForLocale } from '~/data/experienceBodies'

const stacksById: Partial<Record<string, string[]>> = {
  'vex-tech': ['React', 'TypeScript', 'Material UI', 'React Context API'],
  'cafe-art': [
    'React',
    'TypeScript',
    'Next.js',
    'Vite',
    'Vue.js',
    'Nuxt',
    'Tailwind CSS',
    'JavaScript',
    'HTML',
    'PHP',
  ],
  tjto: [
    'Joomla',
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'PHP',
    'Tailwind CSS',
    'MySQL',
    'Git',
  ],
  'web-success': ['React', 'Node.js', 'PHP'],
  prte: ['HTML', 'CSS', 'JavaScript', 'PHP'],
  microlins: ['HTML', 'CSS'],
  'to-online': ['HTML', 'CSS', 'JavaScript'],
}

function withStacks(items: Experience[]): Experience[] {
  return items.map((item) => ({
    ...item,
    stack: stacksById[item.id],
  }))
}

function withBodies(
  items: Experience[],
  locale: ContentLocale,
): Experience[] {
  return items.map((item) => ({
    ...item,
    body: experienceBodyForLocale(item.id, locale),
  }))
}

const experiencesPt: Experience[] = withStacks([
  {
    id: 'vex-tech',
    company: 'Vex Tech',
    role: 'Software Engineer · Especialista front-end',
    period: 'jul/2025 — presente',
    yearStart: 2025,
    yearEnd: null,
    location: 'Portugal',
    highlight:
      'Alocado ao projeto EUIPO (European Union Intellectual Property Office). Evolução de sistemas front-end em larga escala na União Europeia. Equipes ágeis multiculturais.',
    details:
      'Desenvolvimento e evolução de interfaces para o EUIPO, com foco em consistência visual, escalabilidade e entrega em ciclos ágeis. Trabalho remoto a partir de Portugal, documentação técnica em inglês e colaboração com equipas distribuídas na Europa.',
    url: 'https://www.linkedin.com/company/vextech-it',
    current: true,
  },
  {
    id: 'cafe-art',
    company: 'Café.art.br',
    role: 'Software Engineer · Especialista front-end',
    period: 'fev/2022 — presente',
    yearStart: 2022,
    yearEnd: null,
    location: 'Rio de Janeiro, BR · remoto',
    highlight:
      'Estúdio de design de informação e visualização de dados (ODS 2030). Ciclo completo de front-end, do protótipo ao deploy.',
    details:
      'Participação em projetos de transparência, saúde pública e meio ambiente — do protótipo ao deploy, com integração a APIs e CMS quando necessário. Inclui Panorama da Oncologia Pediátrica (Desiderata), Inova HC, Cidadania Digital (SaferNet), WePlan Forests e outras plataformas de impacto social.',
    url: 'https://www.linkedin.com/company/cafe-art-br',
    current: true,
  },
  {
    id: 'tjto',
    company: 'TJTO — Tribunal de Justiça do Tocantins',
    role: 'Software Engineer · Front-end',
    period: 'mai/2010 — presente',
    yearStart: 2010,
    yearEnd: null,
    location: 'Palmas, TO',
    highlight:
      'Desde 2011: todos os sites institucionais. CMS institucional com templates customizados. Portal tjto.jus.br (~8.900 visitas/dia). Hotsites, performance e acessibilidade.',
    details:
      'Responsável pelo front-end do ecossistema digital do tribunal: portal principal, hotsites temáticos, gestão de usuários e integrações. Evolução contínua das plataformas com foco em alto tráfego, acessibilidade e manutenção de longo prazo no setor público.',
    url: 'https://www.linkedin.com/company/tjto',
    current: true,
  },
  {
    id: 'web-success',
    company: 'Web Success Ltd',
    role: 'Co-founder',
    period: 'set/2020 — fev/2022',
    yearStart: 2020,
    yearEnd: 2022,
    location: 'Dublin, Irlanda',
    highlight:
      'Consultoria, sites e sistemas customizados. Gestão técnica, recrutamento e entrega de projetos.',
    details:
      'Cofundação da Web Success na Irlanda: desenvolvimento de sites e aplicações sob medida, coordenação técnica, apoio comercial e formação de equipa para clientes europeus em regime remoto.',
    current: false,
  },
  {
    id: '42-bar',
    company: '42 Bar e Board Games',
    role: 'Co-founder · Creative lead',
    period: 'nov/2017 — mar/2020',
    yearStart: 2017,
    yearEnd: 2020,
    location: 'Palmas, TO',
    highlight:
      'Gestão do bar, marca, marketing, eventos e identidade visual nas redes sociais.',
    details:
      'Empreendimento local em Palmas: operação do espaço, curadoria de jogos de tabuleiro, campanhas de marketing e produção de conteúdo visual para redes sociais.',
    current: false,
  },
  {
    id: 'prte',
    company: 'PRTE — Tecnologia e Soluções',
    role: 'Frontend Developer',
    period: 'jun/2014 — jun/2016',
    yearStart: 2014,
    yearEnd: 2016,
    location: 'Palmas, TO',
    highlight:
      'Front-end e interfaces responsivas para clientes locais.',
    details:
      'Desenvolvimento de interfaces para clientes locais, protótipos e integração com backends. Período de consolidação em UI antes do retorno em tempo integral ao TJTO; atuação também ligada à prte.com.br (EAD).',
    current: false,
  },
  {
    id: 'microlins',
    company: 'Microlins',
    role: 'Instrutor de informática',
    period: 'jul/2007 — jan/2010',
    yearStart: 2007,
    yearEnd: 2010,
    location: 'Palmas, TO',
    highlight:
      'Cursos de Office, design e web; site microlinspalmas.com.br, newsletter e campanhas.',
    details:
      'Ministração de turmas presenciais e manutenção da presença digital da unidade, incluindo materiais promocionais e site institucional.',
    current: false,
  },
  {
    id: 'cartorio-moromizato',
    company: 'Cartório Moromizato',
    role: 'Suporte de TI',
    period: 'fev/2009 — dez/2009',
    yearStart: 2009,
    yearEnd: 2009,
    location: 'Palmas, TO',
    highlight:
      'Suporte, rede local e site cartoriomoromizato.com.br.',
    details:
      'Suporte técnico presencial e manutenção da infraestrutura e site institucional do cartório, em paralelo à atuação na Microlins.',
    current: false,
  },
  {
    id: 'qi-informatica',
    company: 'Q.I. Informática',
    role: 'Instrutor de informática',
    period: 'jan/2007 — jun/2008',
    yearStart: 2007,
    yearEnd: 2008,
    location: 'Palmas, TO',
    highlight: 'AutoCAD, design gráfico, web e Flash em turmas presenciais.',
    details:
      'Cursos técnicos com foco em ferramentas de desenho, web e animação Flash nos primeiros anos de atuação formal em informática em Palmas.',
    current: false,
  },
  {
    id: 'to-online',
    company: 'To Online — Marketing de Resultados',
    role: 'Frontend Developer',
    period: 'jan/2007 — dez/2007',
    yearStart: 2007,
    yearEnd: 2007,
    location: 'Palmas, TO',
    highlight: 'Mais de 30 projetos web entregues em um ano.',
    details:
      'Produção acelerada de sites e landing pages para campanhas de marketing digital, consolidando ritmo de entrega e fluência em desenvolvimento front-end.',
    current: false,
  },
  {
    id: 'tema-informatica',
    company: 'TEMA Informática',
    role: 'Instrutor · Assistente pedagógico',
    period: 'jul/2005 — dez/2006',
    yearStart: 2005,
    yearEnd: 2006,
    location: 'Niterói, RJ',
    highlight:
      'Padronização pedagógica em seis filiais e cursos de informática.',
    details:
      'Coordenação de materiais entre unidades e aulas introdutórias de informática — primeiro emprego na área, em rede de escolas no Rio de Janeiro.',
    current: false,
  },
])

const experiencesEn: Experience[] = withStacks([
  {
    id: 'vex-tech',
    company: 'Vex Tech',
    role: 'Software Engineer · Front-end Specialist',
    period: 'Jul 2025 — present',
    yearStart: 2025,
    yearEnd: null,
    location: 'Portugal',
    highlight:
      'Allocated to the EUIPO (European Union Intellectual Property Office) project. Large-scale front-end systems across the EU. Multicultural agile teams.',
    details:
      'Building and evolving EUIPO interfaces with emphasis on visual consistency, scalability, and agile delivery. Remote from Portugal, technical documentation in English, and collaboration with distributed European teams.',
    url: 'https://www.linkedin.com/company/vextech-it',
    current: true,
  },
  {
    id: 'cafe-art',
    company: 'Café.art.br',
    role: 'Software Engineer · Front-end Specialist',
    period: 'Feb 2022 — present',
    yearStart: 2022,
    yearEnd: null,
    location: 'Rio de Janeiro, BR · remote',
    highlight:
      'Information design and data visualization studio (UN SDGs 2030). Full front-end cycle from prototype to production deploy.',
    details:
      'Transparency, public health, and environmental platforms—from prototype to deploy, with API and CMS integration when needed. Includes Pediatric Oncology Panorama (Desiderata), Inova HC, Digital Citizenship (SaferNet), WePlan Forests, and other social impact work.',
    url: 'https://www.linkedin.com/company/cafe-art-br',
    current: true,
  },
  {
    id: 'tjto',
    company: 'TJTO — Court of Justice of Tocantins',
    role: 'Software Engineer · Front-end',
    period: 'May 2010 — present',
    yearStart: 2010,
    yearEnd: null,
    location: 'Palmas, TO',
    highlight:
      'Since 2011: all institutional websites. Institutional CMS with custom templates. tjto.jus.br portal (~8,900 visits/day). Microsites, performance, and accessibility.',
    details:
      'Owns front-end for the court’s digital ecosystem: main portal, thematic microsites, user management, and integrations. Ongoing evolution of the platforms with focus on high traffic, accessibility, and long-term public-sector maintenance.',
    url: 'https://www.linkedin.com/company/tjto',
    current: true,
  },
  {
    id: 'web-success',
    company: 'Web Success Ltd',
    role: 'Co-founder',
    period: 'Sep 2020 — Feb 2022',
    yearStart: 2020,
    yearEnd: 2022,
    location: 'Dublin, Ireland',
    highlight:
      'Consulting, websites, and custom systems. Technical leadership, hiring, and project delivery.',
    details:
      'Co-founded Web Success in Ireland: bespoke websites and applications, technical coordination, commercial support, and team building for European clients working remotely.',
    current: false,
  },
  {
    id: '42-bar',
    company: '42 Bar & Board Games',
    role: 'Co-founder · Creative lead',
    period: 'Nov 2017 — Mar 2020',
    yearStart: 2017,
    yearEnd: 2020,
    location: 'Palmas, TO',
    highlight:
      'Bar operations, brand, marketing, events, and visual identity on social media.',
    details:
      'Local venture in Palmas: venue operations, board-game curation, marketing campaigns, and visual content for social channels.',
    current: false,
  },
  {
    id: 'prte',
    company: 'PRTE — Technology & Solutions',
    role: 'Frontend Developer',
    period: 'Jun 2014 — Jun 2016',
    yearStart: 2014,
    yearEnd: 2016,
    location: 'Palmas, TO',
    highlight: 'Front-end and responsive interfaces for local clients.',
    details:
      'Interfaces for local clients, prototypes, and backend integration. UI consolidation period before returning full-time to TJTO; work also tied to prte.com.br (distance learning).',
    current: false,
  },
  {
    id: 'microlins',
    company: 'Microlins',
    role: 'Computer instructor',
    period: 'Jul 2007 — Jan 2010',
    yearStart: 2007,
    yearEnd: 2010,
    location: 'Palmas, TO',
    highlight:
      'Office, design, and web courses; microlinspalmas.com.br, newsletter, and campaigns.',
    details:
      'Classroom instruction and maintenance of the branch’s digital presence, including promotional materials and institutional website.',
    current: false,
  },
  {
    id: 'cartorio-moromizato',
    company: 'Cartório Moromizato',
    role: 'IT support specialist',
    period: 'Feb 2009 — Dec 2009',
    yearStart: 2009,
    yearEnd: 2009,
    location: 'Palmas, TO',
    highlight: 'Support, local network, and cartoriomoromizato.com.br.',
    details:
      'On-site technical support and maintenance of the office’s infrastructure and website, alongside the Microlins role.',
    current: false,
  },
  {
    id: 'qi-informatica',
    company: 'Q.I. Informática',
    role: 'Computer instructor',
    period: 'Jan 2007 — Jun 2008',
    yearStart: 2007,
    yearEnd: 2008,
    location: 'Palmas, TO',
    highlight: 'AutoCAD, graphic design, web, and Flash in classroom settings.',
    details:
      'Technical courses focused on drafting tools, web, and Flash animation during early formal IT work in Palmas.',
    current: false,
  },
  {
    id: 'to-online',
    company: 'To Online — Performance Marketing',
    role: 'Frontend Developer',
    period: 'Jan 2007 — Dec 2007',
    yearStart: 2007,
    yearEnd: 2007,
    location: 'Palmas, TO',
    highlight: '30+ web projects delivered within a year.',
    details:
      'Fast-paced websites and landing pages for digital marketing campaigns, building strong front-end delivery rhythm and fluency.',
    current: false,
  },
  {
    id: 'tema-informatica',
    company: 'TEMA Informática',
    role: 'Instructor · Pedagogical assistant',
    period: 'Jul 2005 — Dec 2006',
    yearStart: 2005,
    yearEnd: 2006,
    location: 'Niterói, RJ',
    highlight: 'Pedagogical standards across six branches and IT courses.',
    details:
      'Learning materials coordination and introductory computing classes—first role in the field within a multi-branch school network in Rio de Janeiro.',
    current: false,
  },
])

export function experiencesForLocale(locale: ContentLocale): Experience[] {
  const items = locale === 'en' ? experiencesEn : experiencesPt
  return withBodies(withStacks(items), locale)
}

export function experienceStackForId(id: string): string[] | undefined {
  return stacksById[id]
}
