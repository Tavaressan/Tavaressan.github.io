# Vitor Tavares Portfolio

## Design Direction para Claude Design

> A well-organized drafting table: precise, warm, purposeful.

### Objetivo

Criar um portfólio que combine engenharia de software, sensibilidade
editorial, atmosfera cinematográfica, sakura e a referência narrativa de
*Kaze Tachinu / The Wind Rises*. A referência ao filme é atmosfera, não
tema.

### Narrativa

**Observe → Draft → Build → Ship**

O site deve sugerir alguém que observa um problema, transforma
observações em projeto, constrói o sistema e entrega algo real.

### Princípios

1.  Atmosfera antes de ornamento.
2.  Engenharia visível.
3.  Movimento com propósito.
4.  Moderno, não temático.
5.  Espaço vazio é parte da composição.
6.  Conteúdo técnico tem prioridade sobre decoração.

## Hero cinematográfico

Usar `mp4_vitor_ghibli_sakura_soundless.mp4` como elemento principal do
hero. O vídeo é horizontal, 1280×720, aproximadamente 10s, 24fps e sem
áudio.

A composição possui personagem/pessoa à esquerda, grande sakura à
direita, céu/parque no centro e movimento de pétalas. Usar a cena
inteira, nunca como miniatura.

### Estrutura

``` text
VITOR TAVARES                 WORK   ABOUT   CONTACT

SOFTWARE DEVELOPER
Vitor Tavares

Building software systems from embedded and cloud
infrastructure to real-time applications.

VIEW WORK

                                  figure ← → sakura tree
```

Não colocar card sobre o vídeo. Não usar overlay preto pesado. Se
necessário, usar apenas um gradiente direcional sutil atrás do texto.

### Motion do hero

-   poster primeiro;
-   `autoplay muted loop playsInline`;
-   scroll reduz escala aproximadamente de `1` para `.94`;
-   próxima seção sobe enquanto o hero recua;
-   saída pela família **Wind**;
-   `prefers-reduced-motion` remove parallax, escala e transições
    cinematográficas.

## Arquitetura

1.  Cinema / Hero
2.  Paper / Introduction
3.  Drafting Table / Selected Work
4.  Machine / Project Detail
5.  Human / About
6.  Horizon / Contact

O primeiro protótipo deve validar uma jornada completa:

**Hero → Introduction → Selected Work → Project Reveal → Project Detail
→ Return**

## Selected Work

A direção anterior de cards continua válida como componente, mas o
showcase principal deve ser editorial.

Cada projeto é uma entrada de catálogo técnico:

``` text
PROJECT 01
ENTERPRISE AGENT PLATFORM
Rust · TypeScript · MQTT · AWS

Multi-agent orchestration for elevator fleet management.
───────────────────────────────────────────────→ OPEN PROJECT
```

No hover/focus, revelar preview visual por máscara horizontal, como uma
folha técnica sendo desenrolada. Não mover o card inteiro.

Ao clicar, expandir usando continuidade visual. Título, índice, imagem
ou bloco visual deve funcionar como elemento compartilhado.

## Project Detail

Cada projeto deve comunicar:

-   problema;
-   contexto;
-   objetivo;
-   arquitetura;
-   stack;
-   decisões;
-   resultados;
-   evidências visuais;
-   links.

A página é a prancha aberta em escala maior.

## Assets

O vídeo tem prioridade narrativa na home.

Os GIFs e o chibi da direção original continuam como assets secundários.
O chibi deve aparecer no máximo uma vez por página e nunca competir com
o vídeo.

### Regra de ouro

Se uma animação, cor, ilustração ou componente não ajuda a comunicar
identidade, explicar uma decisão, orientar navegação, revelar conteúdo
ou criar continuidade narrativa, não adicionar.
