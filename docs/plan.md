# Portfolio — Next.js SSG + GitHub Pages

## Contexto

Duas finalidades no mesmo site:

1. **Entrega individual de Laboratório de Desenvolvimento Multiplataforma**
   (`docs/requisitos_portfolio_fatec.pdf`): página mestra com dados pessoais,
   formação, trabalho, cursos de extensão e idiomas, mais um card por projeto
   levando a uma tela dedicada (nome, descrição, tecnologias, link do código,
   screenshots, participação pessoal). Site hospedado.
2. **Portfólio profissional principal**, linkado do GitHub e do LinkedIn. É esta
   finalidade que manda no tom, no design e no idioma — a checklist da Fatec é o
   piso, não o teto.

Consequências diretas: **site inteiramente em inglês**; conteúdo escrito para
recrutador, não para professor; projetos pessoais atuais com o mesmo peso dos
acadêmicos; metadados de SEO e Open Graph tratados como requisito real, já que o
link será compartilhado.

## Revisão 2026-09-12 — troca de stack

O plano original (2026-09-05) usava Dioxus 0.7.10 (Rust) com SSG. A stack passou a
ser **Next.js + TypeScript**. O objetivo de demonstrar Rust não caiu: ele aparece
agora como *projeto* no portfólio — o **Enterprise Agent Platform** (nome provisório
do Alfabra Vector) —, não como stack do site.

Nada havia sido executado quando a troca ocorreu: o repo tinha apenas este plano, o
PDF de requisitos e os GIFs de referência visual. `dx` e o target
`wasm32-unknown-unknown` nunca chegaram a ser instalados.

Fatos verificados na data, em fonte oficial:

| Item | Fonte | Resultado |
|---|---|---|
| Next.js estável | `registry.npmjs.org/next/latest` | **16.3.5** |
| Node exigido | `engines` de next@16.3.5 | `>=20.9.0` — local: v22.18.0, npm 11.6.3 |
| Export estático | docs, *How to create a static export* (atualizado 2026-08-25) | `output: 'export'` → pasta `out` |
| Rotas dinâmicas | mesma doc, *Unsupported Features* | exigem `generateStaticParams()`; sem ele, quebram |
| `next/image` | mesma doc | loader padrão **não** funciona em export estático |
| Deploy no Pages | template oficial `nextjs/deploy-github-pages` | `configure-pages@v5` → `upload-pages-artifact@v3` (`path: ./out`) → `deploy-pages@v4` |
| Fonte do Pages | `GET repos/Tavaressan/Tavaressan.github.io/pages` | `build_type: "legacy"`, branch `main` path `/` → o domínio responde **404 hoje** |
| Rust no Enterprise Agent Platform | `GET repos/Tavaressan/Alfabra-Vector/languages` | 259.762 bytes de Rust (3º, atrás de TypeScript e Java) |
| `Tavaressan/cafey` | `gh repo view` | já **público** — pendência antiga resolvida |
| `RafaelBorges22/Iot-Work` | API + busca global | continua **não resolvendo** |

O maior risco do plano antigo — pré-render de rota dinâmica no SSG do Dioxus, lido
na doc mas nunca executado — deixa de existir: `generateStaticParams()` é o caminho
documentado e há template oficial para este deploy exato.

## Decisões

| Decisão | Escolha |
|---|---|
| Framework | Next.js 16.3.5, App Router, TypeScript |
| Renderização | Export estático (`output: 'export'`), saída em `out/` |
| Gerenciador | **npm** (11.6.3) — `pnpm` e `bun` não instalados; o workflow do template usa pnpm e será adaptado |
| Hospedagem | `Tavaressan/Tavaressan.github.io`, raiz do domínio |
| `basePath` | `process.env.PAGES_BASE_PATH` como no template; em repo de usuário o `configure-pages` devolve vazio |
| Jekyll | `.nojekyll` desnecessário — pelo caminho de Actions o artefato é servido sem Jekyll, então `_next/` não é filtrada |
| Idioma | inglês, todo o site |
| Design | wireframe do usuário + Claude Design (skill `design`) → **aprovação antes de qualquer código de UI** |
| Conteúdo | extraído dos repos locais/GitHub; dados pessoais ficam como `TODO` |
| Screenshots | reaproveitar imagens existentes nos repos; entregar lista dos projetos sem imagem |
| Imagens | a decidir na Fase 3: `<img>` simples ou `next/image` com `unoptimized`/loader custom (confirmar na referência do `next/image` antes de usar) |
| CSS | **em aberto até o design** — o `create-next-app` oferece Tailwind por padrão; a escolha é consequência do desenho, não premissa dele |

## Arquitetura

```
portfolio/
  package.json
  next.config.ts       output: 'export', basePath: process.env.PAGES_BASE_PATH
  tsconfig.json
  app/
    layout.tsx         metadata raiz (title template, OG default)
    page.tsx           página mestra (requisitos 1–8) + cards de projeto (9.a)
    projects/[slug]/
      page.tsx         página de projeto (9.b.i–v)
                       generateStaticParams() + generateMetadata()
    components/        definidos pelo design aprovado na Fase 2
  data/
    projects.ts        type Project + projects[]   (fonte única de verdade)
    profile.ts         bio, education, work, courses, languages, links
  public/
    img/               foto + screenshots + imagem Open Graph
  .github/workflows/deploy.yml
```

## Fases

**Fase 1 — Scaffold e smoke test do deploy (gate curto).**

1. `npx create-next-app@16.3.5` com TypeScript e App Router.
2. `next.config.ts` com `output: 'export'` e `basePath: process.env.PAGES_BASE_PATH`.
3. Duas rotas: `/` e `/projects/[slug]` com `generateStaticParams()` e dois slugs de
   teste; `metadata` com title e description em cada uma.
4. `npm run build` e **verificação que decide o gate**: existe um HTML por rota em
   `out/`? O texto da página dinâmica e as tags de head aparecem no **HTML bruto**?
5. Trocar a fonte do Pages para GitHub Actions
   (`gh api -X PUT repos/Tavaressan/Tavaressan.github.io/pages -f build_type=workflow`
   ou Settings → Pages → Source) e adicionar `deploy.yml` adaptado para npm.
6. Meta da fase: `https://tavaressan.github.io/` sair do 404 com uma página mínima
   no ar, antes de existir conteúdo.

**Fase 2 — Design (gate, antes de qualquer UI).** Usuário fornece o wireframe. A
partir dele, canvas no Claude Design com as artboards de home e de página de projeto,
direção visual, tipografia, paleta e estados responsivos. Discussão e ajuste até o
aceite. O design aprovado define a lista de seções da home, os componentes de
`app/components/` e a decisão de CSS. **Nenhum componente de UI é escrito antes do aceite.**

**Fase 3 — Dados.** `data/projects.ts` e `data/profile.ts` tipados, em inglês,
preenchidos a partir dos READMEs e metadados dos repos, com `TODO` explícito nos
campos pessoais. Descrições de participação individual rascunhadas e marcadas como
*"revisar"* — só o usuário sabe o que fez em cada projeto.

**Fase 4 — Home.** Hero + perfil (requisitos 2–8) + grid de cards (9.a), fiel ao
design aprovado.

**Fase 5 — Páginas de projeto.** Requisito 9.b completo, com aviso visual quando o
link do repositório estiver indisponível.

**Fase 6 — Identidade visual e SEO.** Implementação do design aprovado (tema claro/escuro,
responsivo) + `metadata` por rota com title, description e Open Graph, e imagem OG.

**Fase 7 — Screenshots.** Triagem das imagens existentes, cópia para
`public/img/<slug>/`, e lista dos projetos sem screenshot para o usuário printar.

**Fase 8 — Conferência final.** Checklist item a item contra os requisitos 1–10 do
PDF, incluindo o requisito 10 (site no ar).

## Conteúdo — mapa dos projetos

Levantado dos repos locais em `C:\Projetos\Fatec` e da API do GitHub (`Tavaressan`).
Nomes e textos serão reescritos em inglês e em tom profissional; a coluna abaixo é a
origem, não a copy final. **Esta lista não é fechada** — ver pendência de curadoria.

| Card | Origem local | Link | Imagens |
|---|---|---|---|
| Fluxora Maternal (PI 2º sem) | `_2_Semestre/inklings-og-main` | `Tavaressan/fluxora-maternal` | 7 |
| Project-LDW (PI 4º sem) | `_4_Semestre/Project-LDW` | `RafaelBorges22/Project-LDW` | 65 |
| PI 5º sem — back Java + front TS + dashboard Kotlin | `_5_Semestre/PI-5SM-{BACK,FRONT,DASHBOARD}` | 3 repos públicos, um card só | 81 |
| IoT — posture tracking ESP32 | `IoT/postura-esp32-wokwi/Iot-Work` | ⚠️ `RafaelBorges22/Iot-Work` não resolve na API | 5 |
| Cloud — static site on S3 | `cloud/site_cloud_computing` | `Tavaressan/site_cloud_computing` | 1 |
| Software Quality & Testing | `Qualidade e Testes de Software/testes-ir` | `Tavaressan/testes-ir-qualidade-testes-software` | 0 |
| Mobile React Native (7 atividades agrupadas) | `Desenvolvimento_Mobile_React_Native/*` | 6 repos públicos (`atv_02` sem remote) | — |
| **Enterprise Agent Platform** | `C:\Projetos\Alfabra` | `Tavaressan/Alfabra-Vector` ⚠️ privado | — |
| **Vetor** | plugin em uso nesta máquina | `Tavaressan/Vetor` (público) | — |
| **cafey** | — | `Tavaressan/cafey` (público) | — |

Enterprise Agent Platform, Vetor e cafey são os projetos atuais e entram em destaque
no topo do grid, não misturados ao bloco acadêmico. As contagens de imagem são de
arquivos de imagem no repo, não necessariamente screenshots — a triagem é da Fase 7.

## Decisões pendentes

1. **CSS** — decidir depois do design (Fase 2).
2. **Enterprise Agent Platform** — `Tavaressan/Alfabra-Vector` é privado, então o card
   não terá link de código. É trabalho ligado ao estágio na Alfabra: confirmar com
   eles o que pode ser mostrado antes de descrever arquitetura ou publicar
   screenshots. Decidir entre card sem link, repo público sanitizado, ou só menção no
   texto de experiência. O nome "Enterprise Agent Platform" é provisório.
3. **Link do projeto de IoT** — segue sem repo público. Hipótese a confirmar:
   `Tavaressan/udemy-esp32` (público) seria o mesmo trabalho da pasta local.
4. **Curadoria dos cards** — os cards saíram das pastas locais da Fatec. Há repos
   públicos fora desse recorte que podem pesar mais para recrutador:
   `task-management-system`, `pokeapi-restful-api-consumption`, `jdbc-mysql-flyway`,
   `hindle-history-book-app`, `DESAFIOGFT-VitorTavares-Java`.
5. **`docs/requisitos_portfolio_fatec.pdf` é público** neste repo, que é o portfólio
   profissional. Manter ou tirar do versionado.

## Pendências do usuário

**Bloqueiam a Fase 2:** wireframe de referência.

**Bloqueiam a entrega final:** foto; nome completo; curso (faculdade, nome do curso,
início e previsão de conclusão); trabalho/estágio (empresa, datas, cargo, atividades
— atual e anteriores); cursos de extensão (nome, local, instituição, carga horária,
datas); idiomas e nível; confirmar o link do projeto de IoT; revisar os textos de
participação rascunhados; decidir se quer domínio próprio (exigiria `public/CNAME`).

## Verificação

1. `npm run dev` — navegação manual entre home e as páginas de projeto.
2. `npm run build` e, em `out/`: um HTML por rota, e `grep` do nome de cada projeto
   **encontrando o texto no HTML** — é isso que separa SSG real de shell CSR. Mesmo
   teste para `<title>`, `description` e tags OG.
3. Servir `out/` (`npx serve out`) e abrir com o MCP do Chrome DevTools: sem erro de
   console, sem 404 de asset, screenshots carregando, layout conferido contra as
   artboards aprovadas em desktop e mobile.
4. Lighthouse pelo mesmo MCP (performance e acessibilidade) antes do deploy.
5. Após o deploy: `https://tavaressan.github.io/` respondendo 200 e o HTML servido
   contendo o conteúdo, não só o shell.
6. Checklist item a item contra os requisitos 1–10 do PDF.
