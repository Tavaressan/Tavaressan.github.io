# Implementation Specification

## Next.js Portfolio

## Architecture

``` text
app/
  layout.tsx
  page.tsx
  work/page.tsx
  work/[slug]/page.tsx
  about/page.tsx
  contact/page.tsx

components/
  navigation/
  hero/
  project-index/
  project-entry/
  project-transition/
  section-transition/
  media/
  typography/

content/projects.ts
styles/tokens.css
styles/globals.css
styles/motion.css

public/media/
  hero-poster.webp
  hero.mp4
  hero.webm
```

## Hero contract

``` tsx
<video
  className="hero__media"
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  poster="/media/hero-poster.webp"
>
  <source src="/media/hero.webm" type="video/webm" />
  <source src="/media/hero.mp4" type="video/mp4" />
</video>
```

O texto essencial deve estar fora do vídeo como HTML semântico.

## Media

-   gerar poster WebP/AVIF;
-   manter MP4 como fallback;
-   considerar WebM;
-   comprimir vídeo;
-   não incluir áudio;
-   lazy-load de mídia secundária;
-   evitar carregar GIFs pesados no primeiro viewport.

## Motion

Usar biblioteca somente para shared transitions e motion ligado ao
scroll quando CSS não for suficiente. Hover simples deve ser CSS.

## Project data

``` ts
export const projects = [{
  slug: "enterprise-agent-platform",
  index: "01",
  title: "Enterprise Agent Platform",
  category: "Featured Project",
  description: "...",
  stack: ["Rust", "TypeScript", "MQTT", "AWS"],
  image: "/media/projects/enterprise-agent-platform.webp",
}]
```

## Performance

Poster imediato, hero sem bloquear texto, imagens abaixo da dobra lazy,
fontes controladas e nenhuma animação causando layout shift.

## Accessibility

Semantic HTML, teclado, `:focus-visible`, reduced motion, links reais,
alt text e conteúdo essencial funcionando sem JavaScript.

## Prototype sequence

``` text
Hero
  ↓
Introduction
  ↓
Selected Work
  ↓
Project Entry hover/focus
  ↓
Project Detail
  ↓
Back to Work
```

Somente depois implementar About, Contact, 404 e mídia extra.

## Definition of done

### Visual

-   hero cinematográfico;
-   sem card sobre o vídeo;
-   sistema tipográfico consistente;
-   projetos com linguagem editorial.

### Motion

-   Wind, Draft, Petal e Flight coerentes;
-   shared transition;
-   sem scroll-jacking;
-   reduced motion.

### Engineering

-   mídia otimizada;
-   tokens centralizados;
-   componentes reutilizáveis;
-   conteúdo separado;
-   acessibilidade coberta.
