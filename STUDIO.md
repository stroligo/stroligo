# Nuxt Studio — stroligo.dev

Edição visual do conteúdo do portfólio com [Nuxt Studio](https://nuxt.studio/), integrado ao [Nuxt Content](https://content.nuxt.com/).

## Conteúdo editável

Ficheiros em `content/portfolio/` (PT e EN):

| Pasta / ficheiro | Conteúdo |
|------------------|----------|
| `home.json` | Textos da home (SEO, menu, secções) |
| `profile.json` | Tagline, sobre, stack |
| `projects/*.json` | Cada projeto |
| `experiences.json` | Experiências atuais |
| `social.json` | Rótulos das redes |
| `categories.json` | Filtros de projetos |

Metadados técnicos (URLs, destaque, categorias fixas) continuam em `data/projects.meta.ts`.

Textos de **acessibilidade** ficam em `locales/pt.ts` e `locales/en.ts`.

## Desenvolvimento local

```bash
npm install
npm run dev
```

- Site: http://localhost:3000  
- Studio: http://localhost:3000/_studio  
- Botão flutuante no canto inferior esquerdo para editar ficheiros em `content/` (alterações gravadas no disco).

Sincronizar `locales/` → `content/` (se alterou só os TS):

```bash
npm run sync:content
```

## Produção (publicar pelo site)

1. Deploy com **SSR** (`npm run build`), não só ficheiros estáticos — o Studio precisa de rotas de API para OAuth e Git.  
2. Configure OAuth GitHub no `.env` (ver `.env.example`).  
3. No GitHub OAuth App, adicione callback `https://stroligo.dev/api/studio/auth/github/callback`.  
4. Abra https://stroligo.dev/_studio, autentique e publique commits para o repositório `stroligo/stroligo`.

O deploy atual por FTP (`npm run generate`) continua a servir o site estático; para publicar pelo Studio em produção, será preciso evoluir o CI para `nuxt build` + Node ou manter o fluxo Git local (IDE / commit manual).

## Repositório

Configurado em `nuxt.config.ts` → `studio.repository` (`stroligo/stroligo`, branch `main`).
