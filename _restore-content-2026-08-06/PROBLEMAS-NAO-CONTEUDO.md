# Modificações NÃO-conteúdo (ignoradas / revertidas)

Estas mudanças desde junho (`b37b289`) causaram ou agravaram o site partido:

| Área | Problema |
|------|----------|
| Hostinger Web App Node (`npm run build` + `server/index.mjs`) | HTML sem `/_nuxt` em `public_html` → 404 JS |
| `.github/workflows` (SFTP híbrido / só assets / disable push) | Deploys incompletos ou a falhar |
| `scripts/sync-hostinger-public.mjs` + `postbuild` | Não alcançava `public_html` no jail da Hostinger |
| `ScrollReveal` + CSS `opacity:0` | Ao filtrar, cards remountam invisíveis |
| `pages/index.vue` sort UI | UI extra (não é conteúdo) |
| `public/.htaccess` MIME wasm | Sintoma Hostinger; reaplicar só se preciso depois |
| `package-lock.json` / npm 10 sync | Ruído de CI, não conteúdo |

O site estável de junho usa: **`npm run generate` → SFTP → `public_html`**.
