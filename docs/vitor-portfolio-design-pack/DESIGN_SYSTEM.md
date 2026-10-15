# Design System

## Vitor Tavares Portfolio

## Foundations

### Light

``` css
--bg:#EFE9DD;
--bg-surface:#F7F3EB;
--bg-elevated:#FDFBF7;
--ink:#2A2420;
--ink-2:#6B6055;
--ink-3:#9A9183;
--terracotta:#B86B4A;
--terra-deep:#9C5A3D;
--terra-wash:rgba(184,107,74,.10);
--horizon:#6F8D9E;
--hz-wash:rgba(111,141,158,.10);
--rule:#D9D1C5;
--rule-sub:#E5DED3;
```

### Dark

``` css
--bg:#1C1F25;
--bg-surface:#242830;
--bg-elevated:#2C3139;
--ink:#E6E0D6;
--ink-2:#9A9088;
--ink-3:#6B6258;
--terracotta:#D0845E;
--terra-deep:#C07750;
--horizon:#8AAABB;
--rule:#333840;
--rule-sub:#2A2F36;
```

### Typography

-   Display: EB Garamond
-   Body: Source Sans 3
-   Technical: JetBrains Mono

Type scale:
`0.6875 / 0.875 / 1 / 1.25 / 1.563 / 1.953 / 2.441 / 3.052rem`.

### Shape

-   radius máximo: 3px;
-   bordas finas;
-   superfícies planas;
-   sombras discretas;
-   evitar glassmorphism e cards excessivamente arredondados.

## Components

### Navigation

Sticky/fixa, backdrop blur discreto, nome em EB Garamond, links em
Source Sans 3, underline terracota.

### Hero

Vídeo full-bleed, texto editorial, gradiente direcional de legibilidade
e CTA simples.

### Project Entry

Estados: idle, hover/focus, reveal, active/open e reduced-motion.

Idle: linha fina e conteúdo estável. Hover: linha em terracotta e
preview revelado. Tags: JetBrains Mono pequeno, tratadas como metadados.

### Responsive

Desktop: cena horizontal. Tablet: preservar composição. Mobile: crop
próprio, navegação compacta, coluna única e motion reduzido.

## Accessibility

Focus visível, contraste suficiente, teclado, reduced motion, alt text e
nenhum estado dependente somente de cor ou hover.
