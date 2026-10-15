📋 Dossiê de Análise: Portfólio de Anuvab Das (anuv.tech)
  ──────
  ## 1. Visão Geral e Posicionamento

  • Proposta de Valor / Tagline Central:
  │ "I design and engineer digital experiences that behave like systems, not screens."

  • Perfil do Autor: Engenheiro de software full-stack e hardware/IoT (da interface ao
  silício). O portfólio transmite maturidade técnica aliada a um senso estético apurado
  (estética craftsman engineer / industrial software design).
  ──────
  ## 2. Decisões de Design (UI/UX & Direção de Arte)

  ### 2.1 Paleta de Cores & Contraste Rítmico (Dark / Light Alternado)

  • Dark Mode Primário: Preto profundo/grafite (#090a0f / #0b0d0e) aplicado na Hero,
  Carrossel de Projetos, Capabilities, Guestbook e Contact.
  • Cor de Acento (Signature Color): Ciano elétrico / Mint Teal (#00e5ff / #22d3ee), usado
  estrategicamente para enfatizar palavras-chave no texto, botões de ação primários, tags
  e indicadores de hover.
  • Alternância Dramática de Contraste (Section Theming):
      • O site não adota um tema estático: ele alterna deliberadamente entre blocos
      escuros e blocos claros em Off-White/Creme (#f5f5f7 / #ffffff) — especificamente na
      seção de manifesto ("From the interface to the edge.") e na seção de experiência
      profissional ("Track Record & Roles.").
      • Efeito psicológico: Quebra o cansaço visual comum a portfólios 100% dark mode,
      criando ritmo de leitura e destacando blocos mais densos em texto.


  ### 2.2 Tipografia Hipercalibrada

  • Display / Títulos (Headings): Sans-serif neo-grotesk ou geométrica em peso pesado
  (Black/Bold), kerning negativo sutil e pontuação proposital (ex: "Everything I've built.
  ", "Things in motion.").
  • Metadados & Badges: Monospace técnica (ex: Geist Mono, JetBrains Mono ou SF Mono) para
  datas, localizações, slugs e tags de tecnologia, reforçando o rigor de engenharia.
  • Textos Corridos: Sans-serif neutra com entrelinha arejada para leitura confortável.

  ### 2.3 Micro-interações e Elementos Visuais 3D

  • Hero 3D Orbe: Esfera com gradiente ciano e iluminação dinâmica suave no canto superior
  direito da Hero (WebGL/Three.js ou Shader).
  • Scroll Hint Orbital: No canto inferior esquerdo, uma esfera escura menor acompanhada
  de texto circular giratório em órbita: "SCROLL TO ENTER ↘".
  • Hover States Dinâmicos:
      • Na lista de Capabilities, o hover ilumina toda a linha com a cor ciano e faz a
      seta ↗ reagir.
      • Nos cards de tecnologias e projetos, há elevação sutil e contorno ciano
      translúcido.

  ──────
  ## 3. Estrutura de Páginas e Seções (Página a Página)

  │ Diagram exceeds terminal width (540 > 92 cols)
  │ Displayed as code block. Widen terminal to view inline.

    flowchart TD
        Home["Home (/)"]
        Work["Projects (/projects)"]
        Uses["Uses (/uses)"]

        Home --> SectionHero["1. Hero (3D + Bio + Socials)"]
        Home --> SectionManifesto["2. Manifesto Light (Interface to Edge)"]
        Home --> SectionSelectedWork["3. Selected Work (Carrossel Horizontal)"]
        Home --> SectionCapabilities["4. Capabilities (Lista Interativa)"]
        Home --> SectionExperience["5. Track Record & Roles (Light Timeline)"]
        Home --> SectionGuestbook["6. The Guest Wall (Mural Interativo)"]
        Home --> SectionContact["7. Contact Form + Footer com Clock"]

        Work --> WorkFilters["Filtros por Categoria (Pills)"]
        Work --> WorkSearch["Busca em Tempo Real"]
        Work --> WorkGrid["Grid de Projetos + Badges de Tech"]

        Uses --> UsesStack["Technical Primitives (Grid de Tecnologias)"]
        Uses --> UsesHardware["Hardware & Silicon / Audio / Lab Equipment"]
  ──────
  ### 3.1 Página Inicial (/)

  #### 1. Header / Barra de Navegação Global

  • Monograma: anv. fixado à esquerda.
  • Links Centrais: About, Work, Uses.
  • CTA à Direita: Botão em destaque com seta externa Start a project ↗.
  • Comportamento: Sticky com efeito de blur/transparência ao rolar a página.

  #### 2. Hero Section

  • Nome em escala display gigante: "Anuvab" (branco) e "Das" (ciano).
  • Localização e status: Independent developer / based in Kolkata, India.
  • Botões de ação direta:
      • Download Resume ↗ (pill preenchida em ciano).
      • LinkedIn e GitHub (ghost pills com ícones).


  #### 3. Manifesto & Estatísticas (Light Mode)

  • Título com ícones integrados inline:
  │ "From the interface 🖥️ to the edge. 🔲"
  │ (Ícones vetoriais pixel-perfect de browser e microchip embutidos diretamente na
  │ tipografia).

  • Métricas públicas do GitHub em grid de 3 colunas:
      1. 35+ Public Repositories
      2. 833+ Commits (atividade anual)
      3. @Stewy0506 ↗ (perfil do GitHub em ciano).


  #### 4. Seção "Things in motion." (Selected Work)

  • Carrossel deslizante horizontal: Não requer paginação tradicional, permitindo
  scroll/swipe horizontal fluido.
  • Cards de Projeto:
      • Indicador numérico sequencial (01, 02, 03...).
      • Mockup com tratamento escuro e sombras refinadas.
      • Tag de tipo de aplicação (Mobile App, Website, Embedded Systems).
      • Título, descrição resumida e botão de expandir ↗.
      • Card Final de Convite: Card com contorno ciano "Explore all projects. COMPLETE
      ARCHIVE & CASE STUDIES ↗".


  #### 5. Seção "Capabilities"

  • Frase de impacto à esquerda: "A generalist with a sharp point of view."
  • Lista de competências numerada com setas ↗ e efeito hover glow em ciano:
      • 01 Cross-Platform & Native App Development
      • 02 IoT & Embedded Systems Engineering
      • 03 Backend & Database Engineering
      • 04 Full-Stack Web Development
      • 05 Developer Tools & Systems
      • 06 AI/ML Engineering
      • 07 Edge AI & TinyML


  #### 6. Seção "Track Record & Roles." (Light Mode)

  • Apresentação da trajetória profissional no formato de linha do tempo corporativa
  limpa:
      • Cargo, Empresa (com link @empresa) e Período.
      • Resumos detalhados focados em impacto de engenharia (mencionando explicitamente
      tecnologias como React, Flask, PostgreSQL, IoT time-synchronization, RLS policies).


  #### 7. The Guest Wall ("Leave a mark.")

  • Feature Interativa Diferenciada (Guestbook):
      • Permite que visitantes deixem mensagens públicas diretamente no site.
      • Formulário: Campos minimalistas com linhas underline (Name, Write a short note) e
      botão Sign the wall ↗.
      • Feed RECENT REMARKS: Exibição em tempo real de mensagens aprovadas/assinadas
      deixadas pela comunidade de visitantes.


  #### 8. Contato ("Make the first move.") & Footer

  • Formulário de contato estruturado em grid: Name, Email, Subject, Message.
  • Banner de fechamento de alta energia: Faixa horizontal em ciano fluorescente com texto
  preto em caixa alta: "HAVE A DEFINITE IDEA? Let's make it real. ↗".
  • Footer Informativo:
      • Copyright e ano.
      • Live Clock com fuso horário local: ● KOLKATA (IST) 08:52:38 PM (UTC+5:30)
      atualizado a cada segundo com ponto verde/ativo.
      • Links sociais.

  ──────
  ### 3.2 Página de Projetos (/projects) — "Everything I've built."

  • Breadcrumb: ← Back to index.
  • Barra de Controle & Filtros Dinâmicos:
      • Filtros por categoria em formato de pílulas: ALL, EMBEDDED SYSTEMS, WEBSITE,
      MOBILE APP.
      • Ao ativar um filtro, surge a opção de reset filters.
      • Barra de pesquisa em tempo real: Input com ícone de lupa: "Search by name, tech,
      or concept".
  • Grid de Cards de Projetos:
      • Layout responsivo de 3 colunas.
      • Tags individuais com a stack exata utilizada em cada projeto (ex.: React Native,
      Expo, Firebase, Tailwind CSS, Solidity, Ethers.js, C++, ESP32, FreeRTOS).

  ──────
  ### 3.3 Página de Setup & Equipamentos (/uses) — "What I use to engineer."

  • Seção "Technical Primitives":
      • Grid com os badges de todas as tecnologias que domina, cada um com seu ícone SVG
      oficial e nome:
          • React, TypeScript, PostgreSQL, AWS, C++, React Native, Docker, Python,
          WebSockets, GraphQL, Next.js, Tailwind CSS, MongoDB, Kubernetes, Rust, Flutter,
          PyTorch, gRPC, Embedded C, Framer Motion, Redis, Expo, Swift, Kotlin, OpenAI API,
          LangChain, RTOS, ESP32.

  • Studio & Hardware Inventory:
      • Lista tabular com especificações detalhadas, finalidade de uso e badges funcionais
      à direita:
          • Workstations & Silicon: MacBook Pro 16", LG UltraFine 5K, Custom RTX AI
          Workstation, CalDigit TS4 Dock.
          • Tactile Surfaces: Keychron Q1 Pro (mecânico), Logitech MX Master 3S, Herman
          Miller Aeron.
          • Electronics & Lab: ESP32-S3 / STM32, Saleae Logic 8 Analyzer, Ferro de solda
          Pinecil, Multímetro & Osciloscópio digital.
          • Editor & Terminal: VS Code & Cursor AI, Warp & Ghostty Terminal, Figma,
          Postman & Wireshark.

  • Banner de Filosofia Final:
      • "ENGINEERING PHILOSOPHY: Built for friction-free feedback loops." com botão Get in
      Touch ↗.

  ──────
  ## 4. Principais Insights e Ideias para Replicar

   Recurso / Decisão          │ Como é aplicado no vídeo    │ Benefício / Por que adotar
  ────────────────────────────┼─────────────────────────────┼─────────────────────────────
   Alternância Dark ↔ Light   │ Hero e Projetos em Dark;    │ Elimina a monotonia visual
                              │ Manifesto e Experiência em  │ e dá destaque a seções
                              │ Off-White.                  │ analíticas.
   Micro-interatividade       │ Mural público onde qualquer │ Torna o portfólio memorável
   (Guest Wall)               │ usuário assina uma          │ e converte visitantes
                              │ mensagem.                   │ passivos em ativos.
   Live Timezone Clock        │ Relógio no footer com fuso  │ Dá sensação de produto vivo
                              │ horário e cidade atual do   │ e facilita contato para
                              │ desenvolvedor.              │ recrutadores globais.
   Filtro + Busca no          │ Filtro instantâneo por      │ UX impecável para quem quer
   /projects                  │ pílulas de categoria e      │ avaliar apenas mobile, web
                              │ busca textual.              │ ou firmware.
   Página /uses com Hardware  │ Exibição de bancada         │ Reforça a autenticidade e o
   & Bench                    │ eletrônica, osciloscópios e │ perfil técnico
                              │ periféricos.                │ multidisciplinar.
   Ícones Inline na           │ Pequenos vetores embutidos  │ Sofisticação editorial que
   Tipografia                 │ ao lado das palavras de     │ conecta design e
                              │ destaque.                   │ engenharia.
────────────────────────────────────────────────────────────