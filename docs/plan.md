# Portfolio — Dioxus SSG + GitHub Pages

## Escopo desta rodada

**Apenas versionar este plano**, local e remoto, para retomar depois. Nenhuma fase é executada agora — nem a Fase 0.

1. `git init` em `portfolio/` e `.gitignore` para Rust/Dioxus (`target/`, `dist/`, `dx/`).
2. Este plano copiado para `docs/plan.md`, versionado junto com o PDF de requisitos que já está em `docs/`.
3. Commit inicial.
4. Repositório remoto `Tavaressan/Tavaressan.github.io` criado com `gh` (autenticado, versão 2.93.0) **como público** e push da branch `main`.

Sobre a visibilidade: confirmado na documentação oficial do GitHub Pages — *"If the account that owns the repository uses GitHub Free or GitHub Free for organizations, the repository must be public."* Como o repo é justamente o do site, ele nasce público.

Criar repositório é ação de efeito externo na sua conta; acontece só depois da sua aprovação deste plano.

## Contexto

Duas finalidades no mesmo site:

1. **Entrega individual de Laboratório de Desenvolvimento Multiplataforma** (`docs/requisitos_portfolio_fatec.pdf`): página mestra com dados pessoais, formação, trabalho, cursos de extensão e idiomas, mais um card por projeto levando a uma tela dedicada (nome, descrição, tecnologias, link do código, screenshots, participação pessoal). Site hospedado.
2. **Portfólio profissional principal**, linkado do GitHub e do LinkedIn. É esta finalidade que manda no tom, no design e no idioma — a checklist da Fatec é o piso, não o teto.

Consequências diretas: **site inteiramente em inglês**; conteúdo escrito para recrutador, não para professor; projetos pessoais atuais (Vetor, cafey) com o mesmo peso dos acadêmicos; metadados de SEO e Open Graph tratados como requisito real, já que o link será compartilhado.

O diretório `portfolio/` está vazio (só `docs/`) e **não é repositório git** — projeto do zero.

## Decisões tomadas

| Decisão | Escolha |
|---|---|
| Framework | Dioxus 0.7.10 (versão estável máxima no crates.io em 2026-09-05; `0.8.0-alpha.1` é pré-release — **não** usar) |
| Renderização | SSG via `dx bundle --web --ssg` |
| Hospedagem | GitHub Pages em repo de usuário `Tavaressan/Tavaressan.github.io` → raiz do domínio, **sem `base_path`** |
| Idioma | Inglês, todo o site |
| Design | Wireframe do usuário + Claude Design (skill `design`) → **aprovação antes de qualquer código de UI** |
| Conteúdo | Extraído por mim dos repos locais/GitHub; dados pessoais ficam como `TODO` |
| Screenshots | Reaproveitar imagens existentes nos repos; entregar lista dos projetos sem imagem |

Escolha de stack: comparada com Astro, Leptos e Yew via documentação oficial (Context7). Dioxus é a única opção Rust com SSG documentado de ponta a ponta para hospedagem estática, o que evita o shell CSR vazio que Leptos/Yew entregariam no Pages — decisivo para um portfólio que precisa ser indexado e pré-visualizado por LinkedIn e Google.

## Riscos a resolver ANTES de escrever conteúdo (Fase 0 é gate)

1. **SSG de rota dinâmica.** A doc diz que `Route::static_routes()` inclui apenas rotas *sem* segmentos dinâmicos. O plano usa `/projects/:slug`, então a server function `static_routes` precisa acrescentar manualmente `/projects/<slug>` de cada projeto. Isso é leitura minha da doc, **não verificado em execução**. Fallback, se falhar: uma variante de rota por projeto (sem segmento dinâmico), que a doc garante serem incluídas automaticamente.
2. **Toolchain no Windows.** `rustc`/`cargo` 1.96.0 e `rustup` 1.29.0 instalados; **`dx` não está**. Faltam `dioxus-cli 0.7.10` e o target `wasm32-unknown-unknown`.
3. **Caminho de saída do bundle SSG.** A doc cita "pasta `public` dentro do diretório `dx` do projeto" para `--ssg` e um caminho diferente (`--out-dir docs`) no guia antigo de Pages. O caminho real precisa ser observado no primeiro build para configurar o upload do artefato no CI.
4. **Metadados no HTML servido.** `document::Title`/`Meta`/`Link` só ficam visíveis a crawler se renderizarem no chunk inicial — a doc é explícita: o que fica fora dele é aplicado pelo cliente após hidratação e **não é visto por buscadores**. Para um portfólio compartilhado em LinkedIn isso é funcional, não cosmético: precisa ser conferido no HTML bruto de cada página.

## Arquitetura

```
portfolio/
  Cargo.toml           dioxus = { version = "0.7.10", features = ["router", "fullstack"] }
  Dioxus.toml          [web.app] sem base_path (repo de usuário serve na raiz)
  src/
    main.rs            LaunchBuilder + ServeConfig(incremental, static_dir=public, clear_cache=false)
                       enum Route (Routable) + server fn static_routes (endpoint="static_routes")
    data.rs            struct Project + fn projects() -> Vec<Project>   (fonte única de verdade)
    profile.rs         struct Profile: bio, education, work, courses, languages, links
    seo.rs             helper de <title>/description/OG por página
    components/        definidos pelo design aprovado na Fase 1
    pages/
      home.rs          página mestra (requisitos 1–8) + cards de projeto (9.a)
      project.rs       página de projeto (9.b.i–v)
  assets/
    main.css           identidade visual própria (requisito 1)
    img/               foto + screenshots + imagem Open Graph
  .github/workflows/deploy.yml
```

Confirmado na documentação oficial:

- Rotas: `#[derive(Routable)]` + `#[route("/projects/:slug")]` com prop `slug: String`; navegação com `Link { to: Route::... }`.
- Assets: `static PHOTO: Asset = asset!("/assets/img/photo.png");` e `document::Stylesheet { href: MAIN_CSS }` — o `dx` coleta, otimiza e versiona.
- `static_routes` exige `#[server(endpoint = "static_routes", output = server_fn::codec::Json)]`; o endpoint **não** pode ser o gerado aleatoriamente.
- `ServeConfig` com `IncrementalRendererConfig::new().static_dir(<exe>/../public).clear_cache(false)` sob `server_only!`.
- Head: `document::Title`, `document::Meta`, `document::Link` no nível raiz de cada página.

## Conteúdo — mapa dos projetos (9 cards)

Levantado dos repos locais em `C:\Projetos\Fatec` e da API do GitHub (`Tavaressan`). Nomes e textos serão reescritos em inglês e em tom profissional; a coluna abaixo é a origem, não a copy final.

| Card | Origem local | Link | Imagens |
|---|---|---|---|
| Fluxora Maternal (PI 2º sem) | `_2_Semestre/inklings-og-main` | `Tavaressan/fluxora-maternal` | 7 |
| Project-LDW (PI 4º sem) | `_4_Semestre/Project-LDW` | `RafaelBorges22/Project-LDW` | 65 |
| PI 5º sem — back Java + front TS + dashboard Kotlin | `_5_Semestre/PI-5SM-{BACK,FRONT,DASHBOARD}` | 3 repos públicos, um card só | 81 |
| IoT — posture tracking ESP32 | `IoT/postura-esp32-wokwi/Iot-Work` | ⚠️ `RafaelBorges22/Iot-Work` não resolve na API | 5 |
| Cloud — static site on S3 | `cloud/site_cloud_computing` | `Tavaressan/site_cloud_computing` | 1 |
| Software Quality & Testing | `Qualidade e Testes de Software/testes-ir` | `Tavaressan/testes-ir-qualidade-testes-software` | 0 |
| Mobile React Native (7 atividades agrupadas) | `Desenvolvimento_Mobile_React_Native/*` | 6 repos públicos (`atv_02` sem remote) | — |
| **Vetor** | plugin em uso nesta máquina | `Tavaressan/Vetor` (público) | — |
| **cafey** | — | `Tavaressan/cafey` ⚠️ privado hoje; usuário vai tornar público | — |

Vetor e cafey são os projetos abertos atuais e entram em destaque no topo do grid, não misturados ao bloco acadêmico. As contagens de imagem são de arquivos de imagem no repo, não necessariamente screenshots — a triagem é da Fase 5.

## Fases

**Fase 0 — Spike técnico (gate, independe do design). Próxima rodada.**

1. Instalar `dioxus-cli 0.7.10` (`cargo install dioxus-cli --locked --version 0.7.10`) e `rustup target add wasm32-unknown-unknown`.
2. Esqueleto mínimo: `Cargo.toml` com `dioxus 0.7.10` (features `router`, `fullstack`), `Dioxus.toml` sem `base_path`, `main.rs` com duas rotas — `/` e `/projects/:slug` — dois slugs de teste, um `document::Title`/`Meta` por página, e a server fn `static_routes` devolvendo `Route::static_routes()` **mais** os dois caminhos dinâmicos.
3. `dx bundle --web --ssg`.
4. **Verificações que decidem o gate:** existe um HTML por rota? `grep` acha o texto da página dinâmica e as tags de head **no HTML bruto**, não só no `.wasm`? Em que diretório o bundle foi gravado?
5. Registrar o resultado neste `docs/plan.md`. Se o pré-render de rota dinâmica falhar, aplicar o fallback (uma variante de rota por projeto) e registrar a mudança.

**Fase 1 — Design (gate, antes de qualquer UI).** Usuário fornece o wireframe. A partir dele, canvas de design no Claude Design (skill `design`) com as artboards de home e de página de projeto, direção visual, tipografia, paleta e estados responsivos. Discussão e ajuste no canvas até o aceite. O design aprovado é que define a lista de seções da home e os componentes de `src/components/`. **Nenhum componente Dioxus de UI é escrito antes do aceite.**

**Fase 2 — Dados.** `data.rs` e `profile.rs` em inglês, preenchidos a partir dos READMEs e metadados dos repos, com `TODO` explícito nos campos pessoais. Descrições de participação individual eu rascunho e marco como *"revisar"* — só o usuário sabe o que fez em cada projeto.

**Fase 3 — Home.** Hero + perfil (requisitos 2–8) + grid de cards (9.a), fiel ao design aprovado.

**Fase 4 — Páginas de projeto.** Requisito 9.b completo, com aviso visual quando o link do repositório estiver indisponível.

**Fase 5 — Identidade visual e SEO.** `main.css` implementando o design aprovado (tokens próprios, tema claro/escuro, responsivo, sem framework CSS) + título/description/OG por página e imagem de Open Graph.

**Fase 6 — Screenshots.** Triagem das imagens existentes, cópia para `assets/img/<slug>/`, e lista dos projetos sem screenshot para o usuário printar.

**Fase 7 — Deploy.** Criar `Tavaressan.github.io`; workflow: checkout → toolchain Rust + `wasm32-unknown-unknown` → `cargo-binstall dioxus-cli@0.7.10` → `dx bundle --web --ssg` → `actions/upload-pages-artifact` (caminho definido na Fase 0) → `actions/deploy-pages`. Push e conferência da URL pública.

## Verificação

1. `dx serve --web` — navegação manual entre home e as 9 páginas de projeto.
2. `dx bundle --web --ssg` e, no diretório de saída: um HTML por rota, e `grep` do nome de cada projeto **encontrando o texto no HTML** (não apenas no `.wasm`) — é isso que separa SSG real de shell CSR. Mesmo teste para `<title>`, `description` e tags OG.
3. Servir a saída estática (`python -m http.server`) e abrir com o MCP do Chrome DevTools: sem erro de console, sem 404 de asset, screenshots carregando, layout conferido contra as artboards aprovadas em desktop e mobile.
4. Lighthouse pelo mesmo MCP (performance e acessibilidade) antes do deploy.
5. Checklist item a item contra os requisitos 1–10 do PDF, verificando que a versão em inglês cobre cada um — incluindo o requisito 10 (site no ar).

## Pendências do usuário

**Bloqueiam a Fase 1:** wireframe de referência.

**Bloqueiam a entrega final:** foto; nome completo; curso (faculdade, nome do curso, início e previsão de conclusão); trabalho/estágio (empresa, datas, cargo, atividades — atual e anteriores); cursos de extensão (nome, local, instituição, carga horária, datas); idiomas e nível; tornar `Tavaressan/cafey` público; confirmar o link do projeto de IoT; revisar os textos de participação que eu rascunhar; decidir se quer domínio próprio (muda a config e exige `public/CNAME`).
