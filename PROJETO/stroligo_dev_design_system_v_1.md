# stroligo.dev — Design System v1

## Visão da Marca

**stroligo.dev** representa código, clareza, minimalismo e engenharia moderna.
A identidade visual é inspirada em sintaxe de programação, interfaces de terminal e produtos digitais escaláveis.

### Keywords
- Minimalismo
- Código
- Performance
- Clareza
- Engenharia
- Sistemas modernos
- Dark UI
- Developer-first

---

# Logo

## Logo Principal

```txt
<stroligo.dev>
```

### Conceito
As tags `< >` representam:
- Estrutura
- HTML
- Componentização
- Entrada/Saída
- Engenharia de software

A tipografia monoespaçada reforça:
- Código limpo
- Organização
- Legibilidade

---

# Paleta de Cores

## Primárias

| Nome | HEX | Uso |
|---|---|---|
| Void | #0B1020 | Fundo principal |
| Surface | #111827 | Cards / superfícies |
| Border | #1F2937 | Bordas |
| Text Primary | #F3F4F6 | Texto principal |
| Text Secondary | #94A3B8 | Texto secundário |

---

## Accent Gradient

| Nome | HEX |
|---|---|
| Neon Purple | #8B5CF6 |
| Electric Blue | #3B82F6 |
| Cyan | #06B6D4 |
| Emerald | #10B981 |

### Gradiente Principal

```css
background: linear-gradient(
  90deg,
  #8B5CF6 0%,
  #3B82F6 50%,
  #06B6D4 100%
);
```

---

# Tipografia

## Primária

### JetBrains Mono

Usada para:
- Logo
- Headings técnicos
- Destaques
- Código

```css
font-family: 'JetBrains Mono', monospace;
```

---

## Secundária

### Inter

Usada para:
- Interface
- Textos
- UI
- Componentes

```css
font-family: 'Inter', sans-serif;
```

---

# Escala Tipográfica

| Elemento | Tamanho | Peso |
|---|---|---|
| Hero | 72px | 700 |
| H1 | 48px | 700 |
| H2 | 36px | 600 |
| H3 | 28px | 600 |
| Body Large | 18px | 400 |
| Body | 16px | 400 |
| Small | 14px | 400 |
| Caption | 12px | 400 |

---

# Espaçamento

## Grid Base

```txt
4px
```

## Scale

| Token | Valor |
|---|---|
| xs | 4px |
| sm | 8px |
| md | 16px |
| lg | 24px |
| xl | 32px |
| 2xl | 48px |
| 3xl | 64px |

---

# Border Radius

| Token | Valor |
|---|---|
| sm | 6px |
| md | 10px |
| lg | 16px |
| xl | 24px |
| full | 999px |

---

# Shadows

## Soft Glow

```css
box-shadow:
0 0 0 1px rgba(255,255,255,0.04),
0 8px 32px rgba(0,0,0,0.35);
```

## Neon Accent

```css
box-shadow:
0 0 24px rgba(59,130,246,0.35);
```

---

# Componentes

# Buttons

## Primary

```css
background: linear-gradient(
  90deg,
  #8B5CF6,
  #3B82F6
);

color: white;
border-radius: 12px;
padding: 12px 20px;
font-weight: 600;
```

---

## Secondary

```css
background: rgba(255,255,255,0.03);
border: 1px solid rgba(255,255,255,0.08);
backdrop-filter: blur(10px);
```

---

# Cards

```css
background: #111827;
border: 1px solid #1F2937;
border-radius: 24px;
padding: 24px;
```

---

# Inputs

```css
background: #0F172A;
border: 1px solid #1E293B;
color: #F3F4F6;
height: 48px;
border-radius: 12px;
padding-inline: 16px;
```

---

# Motion

## Duração

| Tipo | Valor |
|---|---|
| Fast | 150ms |
| Normal | 250ms |
| Slow | 400ms |

---

## Easing

```css
cubic-bezier(0.4, 0, 0.2, 1)
```

---

# Tokens CSS

```css
:root {
  --bg: #0B1020;
  --surface: #111827;
  --border: #1F2937;

  --text-primary: #F3F4F6;
  --text-secondary: #94A3B8;

  --purple: #8B5CF6;
  --blue: #3B82F6;
  --cyan: #06B6D4;
  --green: #10B981;

  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-xl: 24px;

  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;

  --shadow-soft:
    0 0 0 1px rgba(255,255,255,0.04),
    0 8px 32px rgba(0,0,0,0.35);
}
```

---

# Tailwind Preset

```js
export const theme = {
  extend: {
    colors: {
      bg: '#0B1020',
      surface: '#111827',
      border: '#1F2937',

      primary: '#3B82F6',
      purple: '#8B5CF6',
      cyan: '#06B6D4',
      green: '#10B981'
    },

    borderRadius: {
      sm: '6px',
      md: '10px',
      lg: '16px',
      xl: '24px'
    },

    fontFamily: {
      mono: ['JetBrains Mono'],
      sans: ['Inter']
    }
  }
}
```

---

# Direção Visual

## Interface

A interface deve transmitir:
- sofisticação técnica
- clareza visual
- organização
- velocidade
- sensação premium

---

## Referências Estéticas

- Vercel
- Linear
- Raycast
- GitHub
- Stripe
- Supabase
- Clerk
- Railway

---

# Guidelines

## Faça

✅ Muito espaço em branco
✅ Hierarquia forte
✅ Gradientes sutis
✅ Motion suave
✅ Interfaces limpas
✅ Componentes consistentes

---

## Evite

❌ Excessos visuais
❌ Muitos elementos coloridos
❌ Bordas pesadas
❌ Sombras exageradas
❌ Saturação excessiva
❌ Poluição visual

---

# Estrutura Recomendada do Projeto

```txt
src/
 ├── components/
 ├── layouts/
 ├── pages/
 ├── hooks/
 ├── services/
 ├── styles/
 ├── lib/
 ├── utils/
 └── design-system/
```

---

# Stack Recomendada

## Front-end
- Next.js
- TypeScript
- TailwindCSS
- Framer Motion
- shadcn/ui
- Lucide Icons

## Deploy
- Vercel

## CMS opcional
- Sanity
- Contentlayer
- Notion API

---

# Assinatura

```txt
<stroligo.dev>
```

### Tagline opcional

```txt
building digital systems
```

ou

```txt
minimal code. real impact.
```

