import type { ContentLocale } from '~/lib/portfolio/locale'

type ProjectBodyCopy = {
  en: string
  pt: string
}

/**
 * Texto completo dos projetos — alinhado às reescritas LinkedIn (ChatGPT share).
 * @see https://chatgpt.com/share/6a73eeb7-e2bc-83e9-8575-401ec44adcd6
 */
export const projectBodiesById: Record<string, ProjectBodyCopy> = {
  'trampos-do-futuro': {
    en: `Developed the frontend for Trampos do Futuro 2026, an initiative by Fundação Itaú that helps young people explore the careers and opportunities shaping the future of work.

Built with Nuxt and Tailwind CSS, I focused on creating a modern, responsive, and accessible experience that presents event information, activities, and educational content in an engaging way.

Throughout the development, I prioritized performance, accessibility, usability, and maintainability to deliver a scalable digital experience for thousands of students and educators.`,
    pt: `Desenvolvi o frontend do Trampos do Futuro 2026, iniciativa da Fundação Itaú que aproxima jovens das carreiras e oportunidades que moldam o futuro do trabalho.

Com Nuxt e Tailwind CSS, foquei numa experiência moderna, responsiva e acessível que apresenta informações do evento, atividades e conteúdos educativos de forma envolvente.

Priorizei performance, acessibilidade, usabilidade e manutenção a longo prazo — uma experiência escalável para milhares de estudantes e educadores.`,
  },
  'dr-jose-messias': {
    en: `Developed a modern and responsive medical website for Dr. José Messias, focused on presenting bariatric surgery and obesity treatment services in a professional, accessible, and trustworthy way.

The project was designed to strengthen the doctor's digital presence by combining clean visual design, intuitive navigation, and performance-oriented frontend development. The website highlights medical specialties, patient information, consultation options, and contact channels while ensuring a seamless experience across desktop and mobile devices.

Throughout the development process, I focused on responsiveness, accessibility, user experience, visual consistency, and optimized performance to deliver a fast and reliable web experience aligned with the client's professional identity and patient-centered approach.`,
    pt: `Desenvolvi um site médico moderno e responsivo para o Dr. José Messias, focado em apresentar cirurgia bariátrica e tratamento da obesidade de forma profissional, acessível e confiável.

O projeto foi pensado para fortalecer a presença digital do médico com design limpo, navegação intuitiva e front-end orientado a performance. O site destaca especialidades, informações ao paciente, opções de consulta e canais de contacto, garantindo experiência fluida em desktop e mobile.

Durante o desenvolvimento, priorizei responsividade, acessibilidade, experiência do usuário, consistência visual e performance — entregando uma experiência rápida e alinhada à identidade profissional e ao cuidado centrado no paciente.`,
  },
  'layane-moura': {
    en: `Built the frontend for Layane Moura's portfolio using Nuxt and Tailwind CSS, creating a bilingual, responsive, and performance-focused website that showcases her work through a clean and intuitive interface.

The site combines a visual-first gallery, bilingual support (English/Portuguese), and project pages that open in a lightbox-style modal so visitors can explore each piece without leaving the flow. A dedicated contact page includes a form that sends inquiries directly by email, and a content layer allows the client to update projects over time without depending on a developer for every change.

Throughout the project, I balanced performance, responsive layout, brand consistency, and long-term maintainability — from mobile-friendly grids to SEO basics (metadata, sitemap, structured data) and a production setup ready for real-world hosting.`,
    pt: `Construí o frontend do portfólio da Layane Moura com Nuxt e Tailwind CSS — um site bilíngue, responsivo e focado em performance que apresenta o trabalho dela numa interface limpa e intuitiva.

O site combina galeria visual, suporte bilíngue (PT/EN) e páginas de projeto em modal lightbox para explorar cada peça sem quebrar o fluxo. Uma página de contacto inclui formulário por e-mail, e uma camada de conteúdo permite atualizar projetos ao longo do tempo sem depender de desenvolvedor a cada mudança.

Equilibrei performance, layout responsivo, consistência de marca e manutenção de longo prazo — de grids mobile-friendly a bases de SEO (metadados, sitemap, dados estruturados) e setup pronto para produção.`,
  },
  'olliv-pericias': {
    en: `Developed the frontend for the Olliv Perícias website, using Nuxt and Tailwind CSS to create a modern, responsive, and accessible landing page that strengthens the company's digital presence.

The platform was designed to clearly present the company's medical-legal consulting services through an intuitive interface, fast navigation, and a user-centered experience. I focused on building a scalable frontend architecture that delivers consistent performance across desktop and mobile devices.

Throughout the project, I prioritized accessibility, performance, SEO, and maintainable code, ensuring a reliable digital experience aligned with the client's professional identity and long-term growth.`,
    pt: `Desenvolvi o frontend do site da Olliv Perícias com Nuxt e Tailwind CSS — landing page moderna, responsiva e acessível que fortalece a presença digital da empresa.

A plataforma apresenta com clareza os serviços de consultoria médico-legal, com interface intuitiva, navegação rápida e experiência centrada no utilizador. Foquei numa arquitetura frontend escalável com performance consistente em desktop e mobile.

Priorizei acessibilidade, performance, SEO e código sustentável — uma experiência digital alinhada à identidade profissional do cliente e ao crescimento a longo prazo.`,
  },
  'futuro-exterminado': {
    en: `Developed the frontend for Futuro Exterminado, a data-driven platform by Instituto Fogo Cruzado that documents and visualizes the impact of armed violence on children and adolescents in the metropolitan region of Rio de Janeiro.

Built with Nuxt and Tailwind CSS, I focused on creating a responsive, accessible, and high-performance user experience capable of presenting complex datasets through intuitive navigation, interactive maps, and meaningful data visualizations.

The platform transforms verified information into a clear and engaging digital experience, helping journalists, researchers, civil society organizations, and policymakers better understand patterns of violence and support evidence-based discussions around public safety and human rights.

Projects like this demonstrate how frontend engineering can make complex information more accessible, enabling technology to support transparency, public awareness, and social impact.`,
    pt: `Desenvolvi o frontend do Futuro Exterminado, plataforma orientada a dados do Instituto Fogo Cruzado que documenta e visualiza o impacto da violência armada sobre crianças e adolescentes na região metropolitana do Rio de Janeiro.

Com Nuxt e Tailwind CSS, foquei numa experiência responsiva, acessível e de alta performance capaz de apresentar conjuntos de dados complexos com navegação intuitiva, mapas interativos e visualizações significativas.

A plataforma transforma informação verificada numa experiência digital clara e envolvente, ajudando jornalistas, investigadores, organizações da sociedade civil e gestores a compreender padrões de violência e a apoiar debates baseados em evidência sobre segurança pública e direitos humanos.

Projetos assim mostram como a engenharia frontend torna informação complexa mais acessível — tecnologia a serviço da transparência, da consciencialização e do impacto social.`,
  },
  'crime-index-2025': {
    en: `Developed the frontend for the Global Organized Crime Index 2025 – Crime at a Crossroads, a global platform that analyzes organized crime trends, criminal markets, and state resilience across more than 190 countries.

Built with Nuxt and Tailwind CSS, I focused on delivering a responsive, accessible, and high-performance user experience capable of presenting complex research through interactive visualizations and intuitive navigation.

The platform transforms large-scale datasets into clear and actionable insights, supporting researchers, journalists, policymakers, and international organizations in understanding the evolving landscape of organized crime worldwide. Throughout the project, I prioritized performance, accessibility, maintainable code, and a scalable frontend architecture to ensure a reliable experience across devices.`,
    pt: `Desenvolvi o frontend do Global Organized Crime Index 2025 – Crime at a Crossroads, plataforma global que analisa tendências do crime organizado, mercados criminais e resiliência estatal em mais de 190 países.

Com Nuxt e Tailwind CSS, entreguei uma experiência responsiva, acessível e de alta performance capaz de apresentar investigação complexa através de visualizações interativas e navegação intuitiva.

A plataforma transforma conjuntos de dados em larga escala em insights claros e acionáveis, apoiando investigadores, jornalistas, gestores e organizações internacionais a compreender o cenário do crime organizado no mundo. Priorizei performance, acessibilidade, código sustentável e arquitetura frontend escalável.`,
  },
  'transparencia-brasil': {
    en: `Developed the frontend for Transparência Brasil, using Nuxt and Tailwind CSS to build a modern, responsive, and accessible platform that promotes transparency, accountability, and civic engagement in Brazil.

The platform brings together research, public policy content, and data-driven resources through an intuitive and high-performance user experience. I focused on building a scalable frontend architecture that makes complex information easy to navigate while ensuring accessibility and responsiveness across devices.

Throughout the project, I prioritized performance, maintainability, accessibility, and clean component architecture to deliver a reliable digital experience that supports journalists, researchers, public managers, and citizens seeking trustworthy information.`,
    pt: `Desenvolvi o frontend da Transparência Brasil com Nuxt e Tailwind CSS — plataforma moderna, responsiva e acessível que promove transparência, responsabilização e engajamento cívico no Brasil.

A plataforma reúne investigação, conteúdo de políticas públicas e recursos baseados em dados numa experiência intuitiva e de alta performance. Foquei numa arquitetura frontend escalável que facilita a navegação de informação complexa, com acessibilidade e responsividade em todos os dispositivos.

Priorizei performance, manutenção, acessibilidade e componentes limpos — uma experiência digital fiável para jornalistas, investigadores, gestores públicos e cidadãos que procuram informação de confiança.`,
  },
  'saude-ambiental': {
    en: `Developed the frontend for the Saúde Ambiental platform, an initiative by Brazil's Ministry of the Environment and Climate Change (MMA) that provides environmental health indicators and data to support public policies and informed decision-making.

Built with Nuxt and Tailwind CSS, I focused on creating a responsive, accessible, and high-performance user experience capable of presenting complex environmental and public health data through an intuitive interface and interactive visualizations.

The platform brings together indicators, research, and official information to help researchers, public managers, healthcare professionals, and citizens better understand the relationship between environmental conditions and public health. Throughout the development, I prioritized accessibility, performance, maintainable code, and a scalable frontend architecture to ensure a reliable experience across devices.`,
    pt: `Desenvolvi o frontend da plataforma Saúde Ambiental, iniciativa do Ministério do Meio Ambiente e Mudança do Clima (MMA) que disponibiliza indicadores e dados de saúde ambiental para apoiar políticas públicas e decisões informadas.

Com Nuxt e Tailwind CSS, criei uma experiência responsiva, acessível e de alta performance capaz de apresentar dados ambientais e de saúde pública complexos através de interface intuitiva e visualizações interativas.

A plataforma reúne indicadores, investigação e informação oficial para ajudar investigadores, gestores, profissionais de saúde e cidadãos a compreender a relação entre ambiente e saúde pública. Priorizei acessibilidade, performance, código sustentável e arquitetura frontend escalável.`,
  },
  euipo: {
    en: `Contributed to the frontend development of digital platforms for the European Union Intellectual Property Office (EUIPO), using React, TypeScript, and Material UI to build secure, accessible, and scalable user interfaces that support intellectual property services across the European Union.

As part of the development team, I focused on creating and maintaining responsive, high-performance interfaces while ensuring accessibility, usability, and consistency across complex enterprise applications. Working within a large-scale ecosystem required close collaboration, adherence to design systems, and the implementation of maintainable frontend solutions.

Contributing to one of Europe's largest public digital platforms reinforced my experience in building enterprise-grade applications with a strong emphasis on performance, accessibility, scalability, and long-term maintainability.`,
    pt: `Contribuí para o desenvolvimento frontend das plataformas digitais do European Union Intellectual Property Office (EUIPO), com React, TypeScript e Material UI — interfaces seguras, acessíveis e escaláveis que suportam serviços de propriedade intelectual na União Europeia.

Na equipa de desenvolvimento, foquei em criar e manter interfaces responsivas e de alta performance, garantindo acessibilidade, usabilidade e consistência em aplicações empresariais complexas. Trabalhar num ecossistema de larga escala exigiu colaboração próxima, adesão a design systems e soluções frontend sustentáveis.

Contribuir para uma das maiores plataformas digitais públicas da Europa reforçou a minha experiência em aplicações enterprise, com ênfase em performance, acessibilidade, escalabilidade e manutenção a longo prazo.`,
  },
  'eles-tao-viajando': {
    en: `Built the fullstack application Eles Tão Viajando as the final project for the Full Stack Web Developer course at FLAG. The platform allows users to share travel experiences with interactive maps, image galleries, a blog, and an admin area for content management.

On the frontend I used React, Vite, Tailwind CSS, Wouter, React Leaflet and React Splide. On the backend I implemented Node.js, Express, MongoDB (Mongoose), JWT, Bcrypt, Multer and Cloudinary — integrating authentication, file uploads and external APIs in a modular, production-ready architecture.

The project strengthened my backend skills while consolidating a modern full-stack workflow, from public experiences to content administration.`,
    pt: `Construí a aplicação fullstack Eles Tão Viajando como projeto final do curso Full Stack Web Developer na FLAG. A plataforma permite partilhar experiências de viagem com mapas interativos, galerias, blog e área admin para gestão de conteúdo.

No frontend usei React, Vite, Tailwind CSS, Wouter, React Leaflet e React Splide. No backend implementei Node.js, Express, MongoDB (Mongoose), JWT, Bcrypt, Multer e Cloudinary — autenticação, uploads e APIs externas numa arquitetura modular pronta para produção.

O projeto aprofundou o backend e consolidou um fluxo fullstack moderno, da experiência pública à administração de conteúdo.`,
  },
  'siga-doacao': {
    en: `Developed the frontend for Siga Sua Doação, a platform by MOL Central de Impacto that enables donors to transparently track the impact of their contributions and strengthens trust between donors and nonprofit organizations.

Using Nuxt and Tailwind CSS, I built a responsive, accessible, and high-performance user experience focused on making donation tracking simple, intuitive, and reliable across desktop and mobile devices.

The platform helps users monitor donations, access impact information, and better understand how contributions support social initiatives. Throughout the development, I prioritized accessibility, performance, maintainable code, and a scalable frontend architecture to deliver a seamless digital experience.`,
    pt: `Desenvolvi o frontend do Siga Sua Doação, plataforma da MOL Central de Impacto que permite aos doadores acompanhar com transparência o impacto das contribuições e reforça a confiança entre doadores e organizações sem fins lucrativos.

Com Nuxt e Tailwind CSS, construí uma experiência responsiva, acessível e de alta performance, tornando o acompanhamento de doações simples, intuitivo e fiável em desktop e mobile.

A plataforma ajuda utilizadores a monitorizar doações, aceder a informação de impacto e compreender como as contribuições apoiam iniciativas sociais. Priorizei acessibilidade, performance, código sustentável e arquitetura frontend escalável.`,
  },
  desiderata: {
    en: `Developed the frontend for the Panorama Oncologia platform, an initiative by Instituto Desiderata focused on improving childhood cancer awareness, early diagnosis, and pediatric healthcare in Brazil.

Using Nuxt and Tailwind CSS, I built a responsive, accessible, and high-performance user experience designed to present healthcare content, research, and educational resources through a clear and intuitive interface.

The platform helps healthcare professionals, researchers, policymakers, and the public access reliable information that supports early diagnosis and better health outcomes. Throughout the development, I focused on accessibility, performance, maintainable code, and scalable frontend architecture to ensure a seamless experience across devices.`,
    pt: `Desenvolvi o frontend da plataforma Panorama Oncologia, iniciativa do Instituto Desiderata focada em consciencialização sobre cancro infantil, diagnóstico precoce e saúde pediátrica no Brasil.

Com Nuxt e Tailwind CSS, construí uma experiência responsiva, acessível e de alta performance para apresentar conteúdo de saúde, investigação e recursos educativos numa interface clara e intuitiva.

A plataforma ajuda profissionais de saúde, investigadores, gestores e o público a aceder a informação fiável que apoia o diagnóstico precoce e melhores resultados em saúde. Foquei em acessibilidade, performance, código sustentável e arquitetura frontend escalável.`,
  },
  'custo-brasil': {
    en: `Developed the frontend for Observatório do Custo Brasil, a platform dedicated to analyzing the structural factors that impact Brazil's economic competitiveness and business environment.

Using WordPress, I focused on building a responsive, accessible, and user-friendly interface that makes research, reports, and economic indicators easy to explore across desktop and mobile devices.

The platform provides policymakers, businesses, researchers, and the public with access to reliable information through a clear information architecture and intuitive navigation. Throughout the project, I prioritized usability, performance, accessibility, and maintainability to deliver a consistent digital experience.`,
    pt: `Desenvolvi o frontend do Observatório do Custo Brasil, plataforma dedicada a analisar os fatores estruturais que impactam a competitividade económica e o ambiente de negócios no Brasil.

Com WordPress, foquei numa interface responsiva, acessível e amigável que torna fácil explorar investigação, relatórios e indicadores económicos em desktop e mobile.

A plataforma oferece a gestores, empresas, investigadores e cidadãos informação fiável através de arquitetura de informação clara e navegação intuitiva. Priorizei usabilidade, performance, acessibilidade e manutenção.`,
  },
  'hfpm-who': {
    en: `Developed the frontend for the Health Financing Progress Matrix (HFPM), a platform developed for the World Health Organization (WHO) that supports countries in evaluating and strengthening their health financing systems to advance Universal Health Coverage (UHC).

Using Nuxt and Tailwind CSS, I built a responsive, accessible, and high-performance user experience designed to present health financing frameworks, assessments, and policy resources through a clear and intuitive interface.

The platform enables policymakers, researchers, and healthcare organizations to access structured information that supports evidence-based decision-making and health system reforms. Throughout the development, I focused on accessibility, performance, maintainable code, and scalable frontend architecture to ensure a reliable experience across devices.`,
    pt: `Desenvolvi o frontend da Health Financing Progress Matrix (HFPM), plataforma da Organização Mundial da Saúde (OMS) que apoia países a avaliar e fortalecer sistemas de financiamento em saúde rumo à Cobertura Universal de Saúde (UHC).

Com Nuxt e Tailwind CSS, construí uma experiência responsiva, acessível e de alta performance para apresentar frameworks, avaliações e recursos de política numa interface clara e intuitiva.

A plataforma permite a gestores, investigadores e organizações de saúde aceder a informação estruturada que apoia decisões baseadas em evidência e reformas do sistema de saúde. Foquei em acessibilidade, performance, código sustentável e arquitetura frontend escalável.`,
  },
  inovahc: {
    en: `Developed the frontend for the InovaHC website, the Innovation Hub of Hospital das Clínicas, University of São Paulo (USP), creating a modern digital experience that supports healthcare innovation, digital transformation, and research initiatives.

Using WordPress and Tailwind CSS, I built a responsive, accessible, and high-performance interface designed to showcase innovation programs, research projects, partnerships, and educational initiatives through clear information architecture and intuitive navigation.

The platform helps researchers, healthcare professionals, startups, and institutional partners access reliable information about InovaHC's initiatives. Throughout the project, I focused on usability, accessibility, performance, and maintainable frontend solutions to ensure a consistent experience across devices.`,
    pt: `Desenvolvi o frontend do site do InovaHC, hub de inovação do Hospital das Clínicas da Universidade de São Paulo (USP) — uma experiência digital moderna que apoia inovação em saúde, transformação digital e iniciativas de investigação.

Com WordPress e Tailwind CSS, construí uma interface responsiva, acessível e de alta performance para apresentar programas de inovação, projetos de investigação, parcerias e iniciativas educativas com arquitetura de informação clara e navegação intuitiva.

A plataforma ajuda investigadores, profissionais de saúde, startups e parceiros institucionais a aceder a informação fiável sobre as iniciativas do InovaHC. Foquei em usabilidade, acessibilidade, performance e soluções frontend sustentáveis.`,
  },
  safernet: {
    en: `Developed the frontend for the Digital Citizenship platform, an initiative by SaferNet Brasil that provides educational resources to help schools promote digital citizenship, online safety, and the responsible use of technology.

Using Vue.js and Tailwind CSS, I built a responsive, accessible, and high-performance user experience focused on making educational content easy to navigate for teachers, students, and schools across different devices.

The platform supports educators with structured learning materials aligned with Brazil's educational guidelines, encouraging safer online behavior, digital literacy, and critical thinking. Throughout the development, I focused on accessibility, performance, maintainable code, and a scalable frontend architecture to ensure a seamless learning experience.`,
    pt: `Desenvolvi o frontend da plataforma de Cidadania Digital, iniciativa da SaferNet Brasil que oferece recursos educativos para escolas promoverem cidadania digital, segurança online e uso responsável da tecnologia.

Com Vue.js e Tailwind CSS, construí uma experiência responsiva, acessível e de alta performance, tornando o conteúdo educativo fácil de navegar para professores, estudantes e escolas em diferentes dispositivos.

A plataforma apoia educadores com materiais alinhados às diretrizes educativas brasileiras, incentivando comportamento online mais seguro, literacia digital e pensamento crítico. Foquei em acessibilidade, performance, código sustentável e arquitetura frontend escalável.`,
  },
  'aborto-brasil': {
    en: `Developed the frontend for the Aborto no Brasil platform, an initiative by Instituto AzMina that provides data, research, and educational resources about access to legal abortion services and reproductive healthcare in Brazil.

Using HTML, Tailwind CSS, and JavaScript, I built a responsive, accessible, and user-friendly interface designed to present complex information through clear navigation and an intuitive user experience.

The platform brings together research, interactive content, and public information to support journalists, researchers, healthcare professionals, and the public with reliable, data-driven resources. Throughout the development, I focused on accessibility, performance, maintainable code, and responsive design to ensure a seamless experience across devices.`,
    pt: `Desenvolvi o frontend da plataforma Aborto no Brasil, iniciativa do Instituto AzMina que disponibiliza dados, investigação e recursos educativos sobre acesso a serviços legais de aborto e saúde reprodutiva no Brasil.

Com HTML, Tailwind CSS e JavaScript, construí uma interface responsiva, acessível e amigável para apresentar informação complexa com navegação clara e experiência intuitiva.

A plataforma reúne investigação, conteúdo interativo e informação pública para apoiar jornalistas, investigadores, profissionais de saúde e o público com recursos fiáveis baseados em dados. Foquei em acessibilidade, performance, código sustentável e design responsivo.`,
  },
  'amazon-underworld': {
    en: `Developed the frontend for Amazon Underworld, an interactive platform created in partnership with InfoAmazonia that maps and visualizes organized crime networks operating across the Amazon region through data-driven storytelling and geospatial analysis.

Using PHP, Tailwind CSS, Mapbox, and QGIS, I contributed to building a responsive, accessible, and high-performance experience that transforms complex datasets into intuitive interactive maps and visual narratives.

The platform brings together investigative journalism, geospatial data, and interactive visualizations to help researchers, journalists, policymakers, and the public better understand the environmental and social impacts of organized crime in the Amazon. Throughout the development, I focused on usability, performance, accessibility, and maintainable frontend solutions to deliver a seamless experience across devices.`,
    pt: `Desenvolvi o frontend do Amazon Underworld, plataforma interativa criada em parceria com a InfoAmazonia que mapeia e visualiza redes de crime organizado na Amazónia através de storytelling baseado em dados e análise geoespacial.

Com PHP, Tailwind CSS, Mapbox e QGIS, contribuí para uma experiência responsiva, acessível e de alta performance que transforma conjuntos de dados complexos em mapas interativos e narrativas visuais intuitivas.

A plataforma reúne jornalismo investigativo, dados geoespaciais e visualizações interativas para ajudar investigadores, jornalistas, gestores e o público a compreender os impactos ambientais e sociais do crime organizado na Amazónia. Foquei em usabilidade, performance, acessibilidade e soluções frontend sustentáveis.`,
  },
  cedra: {
    en: `Developed the frontend for CEDRA (Center for Studies and Data on Racial Inequalities), a platform that provides data, research, and interactive content to support discussions on racial equity and public policy in Brazil.

Built with WordPress, Tailwind CSS, and modern frontend practices, the platform was designed to deliver a responsive, accessible, and high-performance experience while making complex information easy to explore across desktop and mobile devices.

Throughout the project, I focused on frontend development, responsive design, accessibility, and performance optimization to create a scalable and maintainable digital platform that helps researchers, policymakers, journalists, and civil society organizations access reliable data and insights.`,
    pt: `Desenvolvi o frontend do CEDRA (Centro de Estudos e Dados sobre Desigualdades Raciais), plataforma que disponibiliza dados, investigação e conteúdo interativo para apoiar debates sobre equidade racial e políticas públicas no Brasil.

Com WordPress, Tailwind CSS e práticas frontend modernas, a plataforma foi desenhada para uma experiência responsiva, acessível e de alta performance, tornando informação complexa fácil de explorar em desktop e mobile.

Foquei em desenvolvimento frontend, design responsivo, acessibilidade e otimização de performance — uma plataforma digital escalável e sustentável que ajuda investigadores, gestores, jornalistas e organizações da sociedade civil a aceder a dados e insights fiáveis.`,
  },
  'golpe-flix': {
    en: `Developed the frontend for Golpe Flix, an interactive digital experience created by Aos Fatos that documents and contextualizes the misinformation ecosystem surrounding Brazil's January 8 attacks on democracy.

Rather than a traditional institutional website, the project recreates the familiar experience of a streaming platform, allowing visitors to explore hundreds of curated videos and investigative content through an intuitive, immersive interface. The challenge was translating a large volume of complex information into a seamless browsing experience that encourages discovery and engagement.

Built with React and Tailwind CSS, I focused on crafting responsive user interfaces, reusable components, smooth interactions, and performance optimizations to ensure the platform remained fast, accessible, and enjoyable across different devices.`,
    pt: `Desenvolvi o frontend do Golpe Flix, experiência digital interativa da Aos Fatos que documenta e contextualiza o ecossistema de desinformação em torno dos ataques de 8 de janeiro à democracia brasileira.

Em vez de um site institucional tradicional, o projeto recria a experiência familiar de uma plataforma de streaming, permitindo explorar centenas de vídeos e conteúdos investigativos numa interface intuitiva e imersiva. O desafio foi traduzir um grande volume de informação complexa numa navegação fluida que incentiva descoberta e engajamento.

Com React e Tailwind CSS, foquei em interfaces responsivas, componentes reutilizáveis, interações suaves e otimizações de performance — uma plataforma rápida, acessível e agradável em diferentes dispositivos.`,
  },
  hri: {
    en: `Developed the frontend for Harm Reduction International (HRI), a global organization that promotes evidence-based public health policies and advocates for harm reduction initiatives in more than 100 countries.

The platform was built to present extensive research, reports, publications, and policy resources through a clean and intuitive interface, making complex information accessible to healthcare professionals, researchers, policymakers, and the public. Balancing readability, navigation, and performance was essential to support users exploring large volumes of content.

Working with PHP and Tailwind CSS, I focused on responsive layouts, component-based frontend development, accessibility, and performance optimization to deliver a fast, scalable, and maintainable web experience across all devices.`,
    pt: `Desenvolvi o frontend da Harm Reduction International (HRI), organização global que promove políticas de saúde pública baseadas em evidência e defende iniciativas de redução de danos em mais de 100 países.

A plataforma apresenta investigação, relatórios, publicações e recursos de política numa interface limpa e intuitiva, tornando informação complexa acessível a profissionais de saúde, investigadores, gestores e ao público. Equilibrar legibilidade, navegação e performance foi essencial para quem explora grandes volumes de conteúdo.

Com PHP e Tailwind CSS, foquei em layouts responsivos, componentes, acessibilidade e otimização de performance — uma experiência web rápida, escalável e sustentável em todos os dispositivos.`,
  },
  okbr: {
    en: `Built the frontend for Open Knowledge Brasil (OKBR), a nonprofit organization that promotes open data, transparency, and civic technology to strengthen public accountability and evidence-based decision-making.

The project centered on creating a fast and intuitive platform that makes research, datasets, and transparency initiatives easily accessible to a broad audience. From public administrators and journalists to researchers and developers, the interface was designed to simplify navigation through large volumes of content while maintaining clarity and usability.

Using PHP and Tailwind CSS, I developed responsive layouts, reusable frontend components, and optimized page performance to deliver a scalable and accessible experience across desktop and mobile devices.`,
    pt: `Construí o frontend da Open Knowledge Brasil (OKBR), organização sem fins lucrativos que promove dados abertos, transparência e civic tech para reforçar a responsabilização pública e decisões baseadas em evidência.

O projeto centrou-se numa plataforma rápida e intuitiva que torna investigação, datasets e iniciativas de transparência facilmente acessíveis a um público amplo. De gestores públicos e jornalistas a investigadores e developers, a interface simplifica a navegação por grandes volumes de conteúdo sem perder clareza nem usabilidade.

Com PHP e Tailwind CSS, desenvolvi layouts responsivos, componentes reutilizáveis e performance otimizada — uma experiência escalável e acessível em desktop e mobile.`,
  },
  'weplan-forests': {
    en: `Contributed to the frontend development of WePlan Forests, a decision-support platform that helps governments, researchers, and environmental organizations plan large-scale forest restoration using spatial data and scientific modeling.

The project transforms complex environmental datasets into intuitive, interactive interfaces, enabling users to evaluate restoration scenarios based on biodiversity, carbon sequestration, and cost-effectiveness. The challenge was delivering a user experience that simplifies data exploration while maintaining performance and usability.

I focused on building responsive interfaces, optimizing frontend performance, and creating reusable components that ensure a consistent experience across devices while supporting a platform designed for real-world environmental decision-making.`,
    pt: `Contribuí para o desenvolvimento frontend do WePlan Forests, plataforma de apoio à decisão que ajuda governos, investigadores e organizações ambientais a planear restauração florestal em larga escala com dados espaciais e modelação científica.

O projeto transforma conjuntos de dados ambientais complexos em interfaces interativas e intuitivas, permitindo avaliar cenários de restauração com base em biodiversidade, sequestro de carbono e custo-efetividade. O desafio foi simplificar a exploração de dados sem comprometer performance nem usabilidade.

Foquei em interfaces responsivas, otimização de performance frontend e componentes reutilizáveis — uma experiência consistente em todos os dispositivos, para decisões ambientais no mundo real.`,
  },
  'narrativas-ancestrais': {
    en: `Developed the frontend for Narrativas Ancestrais, a digital platform created by Amoreira to preserve and share Indigenous and Afro-Brazilian knowledge through storytelling, photography, audiovisual content, and interactive experiences.

The project required translating a rich visual identity into a responsive and immersive web experience, where design supports the stories instead of competing with them. Every interaction was built to encourage exploration while maintaining accessibility, performance, and consistency across devices.

Working with PHP and Tailwind CSS, I focused on responsive layouts, reusable frontend components, and performance optimization, ensuring the platform could deliver a seamless experience while honoring the project's artistic and cultural vision.`,
    pt: `Desenvolvi o frontend de Narrativas Ancestrais, plataforma digital da Amoreira para preservar e partilhar saberes indígenas e afro-brasileiros através de storytelling, fotografia, audiovisual e experiências interativas.

O projeto exigiu traduzir uma identidade visual rica numa experiência web responsiva e imersiva, em que o design apoia as histórias em vez de competir com elas. Cada interação foi pensada para incentivar a exploração, mantendo acessibilidade, performance e consistência entre dispositivos.

Com PHP e Tailwind CSS, foquei em layouts responsivos, componentes reutilizáveis e otimização de performance — uma experiência fluida que honra a visão artística e cultural do projeto.`,
  },
  nsi: {
    en: `Developed the frontend for the New South Institute (NSI), a think tank dedicated to advancing evidence-based public policy, democratic governance, and institutional development across the Global South.

The platform was designed to organize a broad ecosystem of research, publications, policy initiatives, and institutional programs into a clear and accessible digital experience. My focus was on building intuitive navigation, responsive layouts, and reusable frontend components that make complex content easy to discover and consume.

Working with Tailwind CSS and modern frontend practices, I optimized performance, accessibility, and maintainability to deliver a scalable platform that supports policymakers, researchers, journalists, and civil society organizations worldwide.`,
    pt: `Desenvolvi o frontend do New South Institute (NSI), think tank dedicado a políticas públicas baseadas em evidência, governação democrática e desenvolvimento institucional no Sul Global.

A plataforma organiza um ecossistema amplo de investigação, publicações, iniciativas de política e programas institucionais numa experiência digital clara e acessível. Foquei em navegação intuitiva, layouts responsivos e componentes reutilizáveis que tornam conteúdo complexo fácil de descobrir e consumir.

Com Tailwind CSS e práticas frontend modernas, otimizei performance, acessibilidade e manutenção — uma plataforma escalável para gestores, investigadores, jornalistas e organizações da sociedade civil em todo o mundo.`,
  },
  'ccr-rmbh': {
    en: `Visual communication project on mobility modernization in the Belo Horizonte metropolitan region. The work translates complex infrastructure and urban mobility themes into clear narratives and visual systems for public engagement — supporting CCR's communication around modernization across the RMBH.`,
    pt: `Projeto de comunicação visual sobre modernização da mobilidade na região metropolitana de Belo Horizonte. O trabalho traduz temas complexos de infraestrutura e mobilidade urbana em narrativas e sistemas visuais claros para engajamento público — apoiando a comunicação da CCR sobre modernização na RMBH.`,
  },
  tjto: {
    en: `Since 2011, I have been part of the digital transformation of the Court of Justice of the State of Tocantins (TJTO), contributing to the development, maintenance, and continuous evolution of one of the state's largest public web ecosystems.

Working with a custom Joomla architecture, I have been responsible for building institutional portals, campaign websites, internal solutions, and new digital services that support both citizens and court employees. Beyond developing new features, I have modernized legacy systems, improved content management workflows, optimized performance, and helped maintain a reliable platform that serves thousands of users every day.

Over more than a decade, I have participated in projects ranging from accessibility improvements and responsive redesigns to the implementation of new modules, integrations, and user management enhancements. This long-term experience has allowed me to combine technical expertise with a deep understanding of public sector requirements, including security, scalability, usability, and long-term maintainability.

Throughout this journey, I have collaborated with multidisciplinary teams to deliver digital solutions that improve public access to judicial information and strengthen the institution's online presence.`,
    pt: `Desde 2011 faço parte da transformação digital do Tribunal de Justiça do Estado do Tocantins (TJTO), contribuindo para o desenvolvimento, manutenção e evolução contínua de um dos maiores ecossistemas web públicos do estado.

Com arquitetura Joomla customizada, sou responsável por portais institucionais, hotsites de campanha, soluções internas e novos serviços digitais para cidadãos e servidores. Além de novas funcionalidades, modernizei sistemas legados, melhorei fluxos de gestão de conteúdo, otimizei performance e ajudei a manter uma plataforma fiável que serve milhares de utilizadores todos os dias.

Ao longo de mais de uma década, participei em projetos desde melhorias de acessibilidade e redesigns responsivos até novos módulos, integrações e gestão de utilizadores. Esta experiência de longo prazo permitiu unir competência técnica a um entendimento profundo dos requisitos do setor público — segurança, escalabilidade, usabilidade e manutenção a longo prazo.

Nesta jornada, colaborei com equipas multidisciplinares para entregar soluções digitais que melhoram o acesso público à informação judicial e reforçam a presença online da instituição.`,
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
