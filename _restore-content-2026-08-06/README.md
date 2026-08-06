# Conteúdo para reaplicar (2026-08-06)

Backup **somente de conteúdo** gerado/atualizado hoje.
A base do site deve ficar na versão estável de junho (`b37b289`).

## O que está aqui
- `content-portfolio/` → copiar para `content/portfolio/`
- `data/` → ficheiros de projetos + resume
- `locales/` → `en.ts` / `pt.ts`
- `public/projects/` → capas Trampos + EUIPO
- `profile/` + `public/profile/` → CVs atualizados

## O que NÃO reaplicar (causou problemas de deploy/UI)
- `.github/workflows/*`
- `components/ScrollReveal.vue`, `assets/css/main.css`
- `public/.htaccess` (exceto se precisares só do MIME wasm, depois)
- `pages/index.vue` (UI de sort/filtros)
- `composables/usePortfolioCopy.ts`
- `scripts/sync-hostinger-public.mjs`, `package.json` postbuild
- qualquer fix de Hostinger Node / SFTP híbrido

## Como reaplicar (depois do site estável)
1. Confirmar que `main` = base junho e o site abre/interage bem
2. Copiar pastas deste backup para os caminhos do projeto
3. `npm run sync:content`
4. `npm run generate` e deploy estático normal
