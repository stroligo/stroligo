import type { ContentLocale } from '~/lib/portfolio/locale'

type ProjectBodyCopy = {
  en: string
  pt: string
}

/** Texto completo dos projetos — alinhado às publicações do LinkedIn. */
export const projectBodiesById: Record<string, ProjectBodyCopy> = {
  'dr-jose-messias': {
    en: `Developed a modern and responsive medical website for Dr. José Messias, focused on presenting bariatric surgery and obesity treatment services in a professional, accessible, and trustworthy way.

The project was designed to strengthen the doctor's digital presence by combining clean visual design, intuitive navigation, and performance-oriented frontend development. The website highlights medical specialties, patient information, consultation options, and contact channels while ensuring a seamless experience across desktop and mobile devices.

Throughout the development process, I focused on responsiveness, accessibility, user experience, visual consistency, and optimized performance to deliver a fast and reliable web experience aligned with the client's professional identity and patient-centered approach.`,
    pt: `Desenvolvi um site médico moderno e responsivo para o Dr. José Messias, focado em apresentar cirurgia bariátrica e tratamento da obesidade de forma profissional, acessível e confiável.

O projeto foi pensado para fortalecer a presença digital do médico com design limpo, navegação intuitiva e front-end orientado a performance. O site destaca especialidades, informações ao paciente, opções de consulta e canais de contacto, garantindo experiência fluida em desktop e mobile.

Durante o desenvolvimento, priorizei responsividade, acessibilidade, experiência do usuário, consistência visual e performance — entregando uma experiência rápida e alinhada à identidade profissional e ao cuidado centrado no paciente.`,
  },
  'layane-moura': {
    en: `Developed a modern, responsive portfolio website for Layane Moura, an illustrator and map designer, focused on letting her work speak for itself while keeping navigation simple and professional.

Built with Nuxt and Vue, the site combines a visual-first gallery, bilingual support (English/Portuguese), and project pages that open in a lightbox-style modal so visitors can explore each piece without leaving the flow. A dedicated contact page includes a form that sends inquiries directly by email, and a content layer allows the client to update projects over time without depending on a developer for every change.

Throughout the project, I balanced performance, responsive layout, brand consistency, and long-term maintainability — from mobile-friendly grids to SEO basics (metadata, sitemap, structured data) and a production setup ready for real-world hosting.`,
    pt: `Desenvolvi um portfólio moderno e responsivo para Layane Moura, ilustradora e designer de mapas, com foco em deixar o trabalho falar por si e manter a navegação simples e profissional.

O site combina galeria visual, suporte bilíngue (PT/EN) e páginas de projeto em modal lightbox para explorar cada peça sem quebrar o fluxo. Uma página de contacto inclui formulário por e-mail, e uma camada de conteúdo permite atualizar projetos ao longo do tempo sem depender de desenvolvedor a cada mudança.

Equilibrei performance, layout responsivo, consistência de marca e manutenção de longo prazo — de grids mobile-friendly a bases de SEO (metadados, sitemap, dados estruturados) e setup pronto para produção.`,
  },
  'olliv-pericias': {
    en: `Developed a modern and responsive landing page for Olliv Perícias, focused on presenting the company's services in a clear, professional, and accessible way.

The project was designed to strengthen the company's digital presence by combining clean visual design, intuitive navigation, and performance-focused frontend development. The landing page highlights the company's expertise, service offerings, and contact channels while ensuring a seamless experience across desktop and mobile devices.

Throughout the development process, I focused on responsiveness, user experience, visual consistency, and optimized performance to deliver a fast and reliable web experience aligned with the client's brand identity.`,
    pt: `Desenvolvi uma landing page moderna e responsiva para a Olliv Perícias, focada em apresentar os serviços da empresa de forma clara, profissional e acessível.

O projeto fortalece a presença digital da empresa com design limpo, navegação intuitiva e front-end orientado a performance. A página destaca expertise, ofertas de serviço e canais de contacto, com experiência fluida em desktop e mobile.

Priorizei responsividade, experiência do usuário, consistência visual e performance — entregando uma experiência rápida e alinhada à identidade da marca.`,
  },
  'futuro-exterminado': {
    en: `I contributed to Futuro Exterminado, a data-driven platform by Instituto Fogo Cruzado that maps and documents the impact of armed violence on children and adolescents in the Rio de Janeiro metropolitan region.

The platform brings together verified data, interactive maps, and visual indicators to reveal how gun violence affects young lives — transforming statistics into visibility, memory, and evidence. By organizing information on shootings, victims, and geographic patterns, the project supports journalists, researchers, civil society, and policymakers in understanding the scale and dynamics of this human rights issue.

Contributing to a project like this reinforces the role of open data, transparency, and civic technology as essential tools for social accountability and public debate, especially in contexts marked by structural violence and inequality.`,
    pt: `Contribuí para o Futuro Exterminado, plataforma orientada a dados do Instituto Fogo Cruzado que mapeia e documenta o impacto da violência armada sobre crianças e adolescentes na região metropolitana do Rio de Janeiro.

A plataforma reúne dados verificados, mapas interativos e indicadores visuais para tornar visível como a violência armada afeta vidas jovens — transformando estatísticas em memória, evidência e debate público. Ao organizar informações sobre tiroteios, vítimas e padrões geográficos, o projeto apoia jornalistas, pesquisadores, sociedade civil e gestores públicos.

Projetos assim reforçam o papel de dados abertos, transparência e civic tech como ferramentas essenciais de responsabilização social, especialmente em contextos de violência estrutural e desigualdade.`,
  },
  'crime-index-2025': {
    en: `I was part of the development of the Global Organized Crime Index 2025 – Crime at a Crossroads, a global platform that analyzes organized crime trends, state resilience, and the dynamics shaping security and public integrity worldwide.

The project brings together data, research, and interactive visualizations to make complex information accessible and actionable for journalists, researchers, policymakers, and the public. It's truly rewarding to contribute to an initiative that reinforces the power of transparency, open data, and civic technology in addressing global challenges.`,
    pt: `Participei do desenvolvimento do Global Organized Crime Index 2025 – Crime at a Crossroads, plataforma global que analisa tendências do crime organizado, resiliência estatal e dinâmicas que moldam segurança e integridade pública no mundo.

O projeto reúne dados, pesquisa e visualizações interativas para tornar informação complexa acessível e útil a jornalistas, pesquisadores, formuladores de políticas e sociedade — reforçando transparência, dados abertos e civic tech diante de desafios globais.`,
  },
  'transparencia-brasil': {
    en: `I was part of the development of a platform dedicated to transparency in Brazil and civic impact — bringing together content, data, and strategies to strengthen public integrity, support journalists, researchers, and public managers, and empower society with accessible and reliable information.

It was truly rewarding to contribute to an initiative that connects evidence, policy, and real-world impact, reinforcing how open and reliable data can elevate public debate and accountability.`,
    pt: `Participei do desenvolvimento de uma plataforma dedicada à transparência e ao impacto cívico no Brasil — reunindo conteúdo, dados e estratégias para fortalecer a integridade pública, apoiar jornalistas, pesquisadores e gestores, e empoderar a sociedade com informação acessível e confiável.

Foi gratificante contribuir para uma iniciativa que conecta evidência, política e impacto real, reforçando como dados abertos elevam o debate público e a responsabilização.`,
  },
  'custo-brasil': {
    en: `I contributed to the Observatório do Custo Brasil, a platform dedicated to analyzing and monitoring the economic challenges facing Brazil. This initiative provides valuable insights into how structural inefficiencies in the country's economy — such as high taxes, bureaucracy, and logistical barriers — impact businesses and society as a whole.

The observatory serves as a critical resource for policymakers, businesses, and citizens to understand and address the factors that contribute to Brazil's high cost of doing business.`,
    pt: `Contribuí para o Observatório do Custo Brasil, plataforma dedicada a analisar e monitorar os desafios econômicos do país. A iniciativa oferece insights sobre como ineficiências estruturais — altos impostos, burocracia e barreiras logísticas — impactam empresas e sociedade.

O observatório é recurso crítico para gestores, empresas e cidadãos compreenderem e enfrentarem os fatores que elevam o custo de fazer negócios no Brasil.`,
  },
  'aborto-brasil': {
    en: `I contributed to the creation of the new website for Instituto AzMina, an organization dedicated to advancing reproductive rights and sexual health in Brazil. One of their prominent initiatives, the Mapa do Aborto Legal, plays a vital role in mapping the availability and access to legal abortion services across the country — a critical resource given the ongoing challenges in Brazil's public health system.`,
    pt: `Contribuí para a criação do novo site do Instituto AzMina, organização dedicada a direitos reprodutivos e saúde sexual no Brasil. Uma das iniciativas centrais, o Mapa do Aborto Legal, mapeia a disponibilidade e o acesso a serviços legais de aborto em todo o país — recurso crítico diante dos desafios persistentes do sistema público de saúde.`,
  },
  'amazon-underworld': {
    en: `I contributed to Amazon Underworld, an interactive map created in partnership with InfoAmazonia. This project sheds light on complex networks of organized crime in the Amazon — from illegal mining to trafficking and logging activities. The map provides crucial data on criminal activities impacting the rainforest, with a focus on environmental consequences and indigenous communities.

By integrating data from multiple sources and using advanced mapping tools like Mapbox and QGIS, we visualized the extent of these networks in an accessible and engaging format — underscoring the role of investigative journalism and technology in addressing pressing social and environmental issues.`,
    pt: `Contribuí para o Amazon Underworld, mapa interativo criado em parceria com a InfoAmazonia. O projeto ilumina redes complexas de crime organizado na Amazônia — de mineração ilegal a tráfico e desmatamento. O mapa oferece dados sobre atividades criminosas que impactam a floresta, com foco nas consequências ambientais e nas comunidades indígenas.

Integrando múltiplas fontes e ferramentas como Mapbox e QGIS, visualizamos a extensão dessas redes de forma acessível — reforçando o papel do jornalismo investigativo e da tecnologia em questões sociais e ambientais urgentes.`,
  },
  'golpe-flix': {
    en: `I collaborated on Golpe Flix, a significant initiative by Aos Fatos. This project serves as a digital memorial documenting widespread disinformation campaigns leading up to Brazil's January 8 attacks on democracy. Presented in a streaming format, Golpe Flix curates and analyzes over 600 pieces of media to reveal how extremist propaganda gained traction on digital platforms — emphasizing the urgent need to counter such narratives and protect democratic values.`,
    pt: `Colaborei no Golpe Flix, iniciativa da Aos Fatos. O projeto funciona como memorial digital que documenta campanhas de desinformação antes dos ataques de 8 de janeiro à democracia brasileira. Em formato streaming, curadoria e analisa mais de 600 peças de mídia para revelar como propaganda extremista ganhou tração em plataformas digitais — reforçando a urgência de combater essas narrativas e proteger valores democráticos.`,
  },
  cedra: {
    en: `I contributed to the website for CEDRA (Centro de Estudos e Dados sobre Desigualdades Raciais). The organization is a pivotal resource in the fight for racial equity in Brazil, offering comprehensive data and insights into racial inequalities across education, employment, housing, and beyond. Through CEDRA's platform, activists, policymakers, and researchers gain access to reliable information that supports transformative action toward a more equitable society.`,
    pt: `Contribuí para o site do CEDRA (Centro de Estudos e Dados sobre Desigualdades Raciais). A organização é referência na luta por equidade racial no Brasil, oferecendo dados e análises sobre desigualdades em educação, emprego, moradia e outros eixos. Pela plataforma do CEDRA, ativistas, gestores e pesquisadores acessam informação confiável para ação transformadora rumo a uma sociedade mais justa.`,
  },
  hri: {
    en: `I developed the website for Harm Reduction International (HRI), a global organization dedicated to promoting evidence-based strategies to minimize the negative impacts of drug use and drug policies. Their work focuses on advancing public health, human rights, and social justice. One flagship initiative is the Global State of Harm Reduction, a comprehensive report monitoring harm reduction policies and services worldwide.`,
    pt: `Desenvolvi o site da Harm Reduction International (HRI), organização global dedicada a estratégias baseadas em evidência para minimizar impactos negativos do uso de drogas e das políticas sobre drogas. O trabalho avança saúde pública, direitos humanos e justiça social. Uma iniciativa central é o Global State of Harm Reduction, relatório que monitora políticas e serviços de redução de danos no mundo.`,
  },
  okbr: {
    en: `I contributed to the new website for Open Knowledge Brasil (OKBR), an organization committed to fostering open data and transparency in Brazil. One of their key projects, the Open Data Index for Cities, evaluates and promotes the quality of open data across Brazilian capitals — empowering public administrators and civil society to make data-driven decisions that enhance governance and combat misinformation.`,
    pt: `Contribuí para o novo site da Open Knowledge Brasil (OKBR), organização comprometida com dados abertos e transparência no Brasil. Um projeto-chave, o Índice de Dados Abertos das Cidades, avalia e promove a qualidade de dados abertos nas capitais — empoderando gestores e sociedade civil a decidir com dados e fortalecer a governança.`,
  },
  'saude-ambiental': {
    en: `I worked on the Saúde Ambiental portal, an initiative by Brazil's Ministry of Environment focused on the intersection between environmental quality and public health. The platform centralizes content, data, and strategies related to air quality, chemical safety, and environmental determinants of health — supporting public managers, researchers, and society with accessible information for decision-making and awareness.

It was fulfilling to contribute to a project that highlights how a healthy environment is essential for a healthy society — bridging data, policy, and impact in such a critical area.`,
    pt: `Atuei no portal Saúde Ambiental, iniciativa do Ministério do Meio Ambiente sobre a interseção entre qualidade ambiental e saúde pública. A plataforma centraliza conteúdo, dados e estratégias sobre qualidade do ar, segurança química e determinantes ambientais da saúde — apoiando gestores, pesquisadores e sociedade com informação acessível para decisão e conscientização.

Foi gratificante contribuir para um projeto que mostra como ambiente saudável é essencial para sociedade saudável — conectando dados, política e impacto em área crítica.`,
  },
  desiderata: {
    en: `I contributed to the new website for Instituto Desiderata, an organization focused on improving public healthcare for children and adolescents in Brazil. The institute is dedicated to enhancing early diagnosis and treatment for childhood cancer, as well as addressing other chronic health issues such as childhood obesity — including work on the Pediatric Oncology Panorama and related health data experiences.`,
    pt: `Contribuí para o novo site do Instituto Desiderata, organização focada em melhorar a saúde pública de crianças e adolescentes no Brasil. O instituto atua no diagnóstico precoce e tratamento do câncer infantil e em outras questões crônicas de saúde infantil — incluindo o Panorama da Oncologia Pediátrica e experiências de dados em saúde.`,
  },
  'hfpm-who': {
    en: `I contributed to the Health Financing Progress Matrix (HFPM) website, an essential tool by the World Health Organization (WHO). HFPM assesses a country's health financing system, providing insights to drive progress toward Universal Health Coverage (UHC). By evaluating how well countries align health financing policies with UHC goals, the matrix helps identify key gaps and opportunities for reform — improving financial protection and access to quality healthcare.`,
    pt: `Contribuí para o site da Health Financing Progress Matrix (HFPM), ferramenta essencial da Organização Mundial da Saúde (OMS). A HFPM avalia sistemas de financiamento em saúde e orienta progresso rumo à Cobertura Universal de Saúde (UHC). Ao avaliar o alinhamento de políticas com metas de UHC, a matriz identifica lacunas e oportunidades de reforma — fortalecendo proteção financeira e acesso à saúde de qualidade.`,
  },
  inovahc: {
    en: `I contributed to the new website for InovaHC, the innovation hub at Hospital das Clínicas, University of São Paulo. InovaHC advances healthcare innovation through digital health, telemedicine, and training healthcare professionals — with strong social impact, connecting people and resources to transform healthcare, especially in underserved regions of Brazil.`,
    pt: `Contribuí para o novo site do InovaHC, hub de inovação do Hospital das Clínicas da USP. O InovaHC avança inovação em saúde com saúde digital, telemedicina e formação de profissionais — com forte impacto social, conectando pessoas e recursos para transformar o cuidado, especialmente em regiões menos atendidas do Brasil.`,
  },
  safernet: {
    en: `I contributed to the website for Disciplina de Cidadania Digital, a vital initiative by SaferNet Brasil. The program equips educators with tools and resources to teach digital citizenship — online safety, empathy in digital interactions, and responsible use of technology. The curriculum aligns with Brazil's educational and legal frameworks, including the BNCC and LGPD, ensuring a comprehensive and impactful learning experience.`,
    pt: `Contribuí para o site da Disciplina de Cidadania Digital, iniciativa da SaferNet Brasil. O programa oferece a educadores ferramentas para ensinar cidadania digital — segurança online, empatia nas interações digitais e uso responsável da tecnologia. O currículo alinha-se à BNCC e à LGPD, garantindo experiência de aprendizagem abrangente e impactante.`,
  },
  'siga-doacao': {
    en: `I worked on Siga Sua Doação, a platform designed to make donating easier and more transparent. Part of MOL Central de Impacto, the project connects donors with organizations in need and helps track the impact of contributions — strengthening a culture of giving and social responsibility in Brazil.

Through Siga Sua Doação, donors can track the impact of their contributions and support causes that truly make a difference.`,
    pt: `Atuei no Siga Sua Doação, plataforma que torna a doação mais simples e transparente. Integrante da MOL Central de Impacto, conecta doadores a organizações e permite acompanhar o impacto das contribuições — fortalecendo a cultura de doação e responsabilidade social no Brasil.

Pela plataforma, doadores acompanham o impacto das contribuições e apoiam causas que fazem diferença real.`,
  },
  'weplan-forests': {
    en: `I was part of the development of WePlan-Forests, an innovative tool supporting tropical and subtropical forest ecosystem restoration. The platform provides evidence-based, spatially explicit solutions to help countries optimize restoration efforts — balancing carbon sequestration, biodiversity conservation, and cost-effectiveness.

WePlan-Forests empowers decision-makers to analyze scenarios and plan restoration initiatives effectively, contributing to global efforts in climate change mitigation and sustainable development. Developed with partners including the International Institute for Sustainability and the Forest Ecosystem Restoration Initiative.`,
    pt: `Participei do WePlan-Forests, ferramenta inovadora de apoio à restauração de ecossistemas florestais tropicais e subtropicais. A plataforma oferece soluções espaciais baseadas em evidência para otimizar esforços de restauração — equilibrando sequestro de carbono, biodiversidade e custo-efetividade.

WePlan-Forests empodera gestores a analisar cenários e planear iniciativas de restauração, contribuindo para mitigação climática e desenvolvimento sustentável. Desenvolvida com parceiros como o IIS e a Forest Ecosystem Restoration Initiative.`,
  },
  'narrativas-ancestrais': {
    en: `I contributed to the Narrativas Ancestrais website for Amoreira, an initiative celebrating and preserving the cultural heritage of indigenous and Afro-Brazilian communities. The project highlights ancestral narratives through storytelling, digital media, and art — offering a space for important voices to be shared and honored.

It was an honor to work on this project, helping amplify the voices of those who have been custodians of invaluable cultural wisdom for generations.`,
    pt: `Contribuí para o site Narrativas Ancestrais da Amoreira, iniciativa que celebra e preserva a herança cultural de comunidades indígenas e afro-brasileiras. O projeto destaca narrativas ancestrais por storytelling, mídia digital e arte — ampliando vozes importantes e a relevância da preservação cultural.

Foi uma honra ajudar a amplificar vozes que guardam saberes culturais invaluáveis há gerações.`,
  },
  nsi: {
    en: `I contributed to the new website for the New South Institute (NSI), devoted to addressing complex challenges in fragile democracies through evidence-based research and policy advocacy. NSI's initiatives include programs on state capture, public service reform, migration governance, and South-South Dialogues — fostering effective, accountable institutions across the Global South.`,
    pt: `Contribuí para o novo site do New South Institute (NSI), dedicado a desafios complexos em democracias frágeis por meio de pesquisa e advocacy baseados em evidência. As iniciativas incluem captura do Estado, reforma do serviço público, governança migratória e Diálogos Sul-Sul — fortalecendo instituições eficazes no Sul Global.`,
  },
  'ccr-rmbh': {
    en: `Visual communication project on mobility modernization in the Belo Horizonte metropolitan region. The work translates complex infrastructure and urban mobility themes into clear narratives and visual systems for public engagement — supporting CCR's communication around modernization across the RMBH.`,
    pt: `Projeto de comunicação visual sobre modernização da mobilidade na região metropolitana de Belo Horizonte. O trabalho traduz temas complexos de infraestrutura e mobilidade urbana em narrativas e sistemas visuais claros para engajamento público — apoiando a comunicação da CCR sobre modernização na RMBH.`,
  },
  tjto: {
    en: `Since 2011, I have worked as a web developer in the Judiciary, responsible for creating and maintaining all institutional websites. We use Joomla as the CMS for our projects, and the entire template is developed by our team.

The main portal of TJTO (tjto.jus.br) is a robust and stable platform, with an average of 8.9 thousand daily visits. Over the years I have created dedicated microsites, improved the user management system, and continuously evolved the front-end — ensuring high performance, accessibility, and reliability even under heavy traffic.

Additionally, I have continuously worked on developing new versions and improvements to these projects, significantly contributing to their evolution and success.`,
    pt: `Desde 2011 atuo como desenvolvedor web no Judiciário, responsável pela criação e manutenção de todos os sites institucionais. Utilizamos Joomla como CMS, com templates desenvolvidos internamente.

O portal principal do TJTO (tjto.jus.br) é plataforma robusta com média de 8,9 mil visitas diárias. Ao longo dos anos criei hotsites dedicados, melhorei a gestão de usuários e evoluí continuamente o front-end — garantindo performance, acessibilidade e confiabilidade mesmo com alto tráfego.

Trabalho de forma contínua em novas versões e melhorias, contribuindo significativamente para a evolução e o sucesso desses projetos.`,
  },
  'eles-tao-viajando': {
    en: `Eles Tão Viajando is a full-stack application developed as the final project for the Full Stack Web Developer course at FLAG. The platform allows users to share travel experiences with interactive maps, image galleries, a blog, and an admin area for content management.

It was a great opportunity to work with a modern stack, external API integrations, security practices, and a complete, well-organized system — combining front-end and back-end delivery in a production-ready project.`,
    pt: `Eles Tão Viajando é aplicação full stack desenvolvida como projeto final do curso Professional Full Stack Web Development na FLAG. A plataforma permite compartilhar experiências de viagem com mapas interativos, galerias, blog e área admin para gestão de conteúdo.

Foi oportunidade de trabalhar stack moderna, integrações com APIs externas, práticas de segurança e um sistema completo e organizado — unindo entrega front-end e back-end em projeto pronto para produção.`,
  },
}

export function projectBodyForLocale(
  id: string,
  locale: ContentLocale,
): string | undefined {
  const entry = projectBodiesById[id]
  if (!entry) return undefined
  return locale === 'en' ? entry.en : entry.pt
}
