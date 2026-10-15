# Motion System

## Vitor Tavares Portfolio

## Filosofia

O movimento representa vento, desenho, voo e construção. Não deve
parecer demonstração de biblioteca de animação.

  Família   Função         Uso
  --------- -------------- -------------------------------
  Wind      transição      seções, hero, navegação
  Draft     revelação      projetos, arquitetura, linhas
  Petal     atmosfera      momentos raros
  Flight    profundidade   hero, imagens

## Wind

Movimento predominantemente horizontal. Usar em saída do hero,
transições entre seções e underline de navegação. Amplitude pequena.

## Draft

Representa desenho técnico sendo revelado. Usar `clip-path`, máscaras,
width/scale de camadas e reveals no eixo X. A informação principal
permanece legível.

## Petal

Movimento orgânico e raro. Nunca criar chuva permanente de pétalas.

## Flight

Profundidade cinematográfica. No hero, escala aproximada `1 → .94`.
Parallax deve ser pequeno o suficiente para parecer profundidade, não
efeito.

## Timing

``` text
micro       160ms
short       280ms
medium      520ms
cinematic   900–1400ms
```

Sem bounce ou elasticidade.

## Scroll

Não usar scroll-jacking. O scroll pode controlar escala, opacidade,
posição relativa e progresso de máscara.

## Shared transition

Ao abrir projeto:

``` text
PROJECT ENTRY
     ↓
expansão
     ↓
PROJECT DETAIL
```

Preservar título, índice, imagem ou outro elemento visual. Evitar fade
para página branca.

## Reduced motion

Com `prefers-reduced-motion: reduce`, remover parallax, escala ligada ao
scroll, pétalas e transições cinematográficas. Manter mudanças de estado
essenciais.
