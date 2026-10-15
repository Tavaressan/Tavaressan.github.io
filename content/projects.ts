import type { Project, ProjectKind } from "./types";

// Selected Work: Projetos em destaque
const selected: Project[] = [
  {
    slug: "vetor",
    index: "01",
    title: "Vetor",
    category: "Developer tooling",
    kind: "AI",
    summary:
      "A tool for creating and organising workflows for agent runtimes, focused on automation, agent-assisted development and integration with different execution environments.",
    stack: ["TypeScript", "Deno", "Agent runtimes", "Workflow automation", "GitHub CLI", "Git worktrees"],
    status: "Active open-source",
    meta: ["Selected", "Open source", "Developer tools", "Skills", "MCP", "CLI", "Hooks"],
    repositories: [
      { label: "View repository", value: "github.com/Tavaressan/Vetor", href: "https://github.com/Tavaressan/Vetor" },
    ],
    caseStudy: {
      stackLine: ["TypeScript", "Deno", "Agent runtimes"],
      evidenceMark: "Architecture · Code · Decision",
      figure: {
        caption: "Fig. 01 — The development cycle Vetor covers, as stated in the repository README.",
        alt: "Workflow cycle in six steps: ideation, backlog, isolated worktree, autonomous fix loop, ship, guard.",
      },
      spec: [
        { label: "Role", value: "Creator & Lead Developer" },
        { label: "Context", value: "Open source developer tooling" },
        { label: "Period", value: "2026" },
        { label: "Status", value: "Active open-source" },
      ],
      problem:
        "AI agent runtimes lack disciplined developer workflows, causing uncoordinated changes, endless repair loops, and unmanaged git histories.",
      context:
        "Vetor is a skills plugin that coordinates agents across isolated development flows. It runs natively in agent runtimes with structured permissions.",
      objective: "Cover a whole development cycle: ideation, backlog, isolated worktree, autonomous fix, ship and guard.",
      architecture:
        "The repository is organised by role: agents for coordinated dispatch, skills for each step of the workflow, MCP integrations, a command-line interface, hooks and templates. The scripts are TypeScript, run on Deno.",
      decisions: [
        { ref: "D1", title: "Merges are serialised", rationale: "Issues are dispatched to agents in parallel; their merges go in one at a time." },
        { ref: "D2", title: "The fix loop is bounded", rationale: "The autonomous reproduce, fix, rebuild and test loop stops at five iterations." },
        { ref: "D3", title: "Architecture review stays manual", rationale: "The architecture-review skill is always run by hand, never on a schedule." },
      ],
      implementation:
        "Authored six core workflow skills in TypeScript: spec, issue-coordinator, fix-loop-agent, worktree-ship, guardian and architecture-review, complete with automated hook bindings.",
      results: [
        { text: "Automated worktree creation, headless execution, and bounded self-healing loops." },
      ],
      limitations: [
        { text: "Headless issue coordination needs autonomous permissions to be configured first.", ref: "L-01.1" },
        { text: "Compatibility with other agent runtimes is partial.", ref: "L-01.1" },
      ],
      evidence: [
        { type: "ARCHITECTURE", ref: "Fig. 01", title: "Workflow cycle", description: "The six steps the plugin covers, and the skills that carry them." },
        {
          type: "CODE",
          ref: "E-01.1",
          title: "Skills, agents, hooks and scripts",
          description: "The published repository is the record: TypeScript on Deno, organised by role.",
          source: { label: "View repository", value: "github.com/Tavaressan/Vetor", href: "https://github.com/Tavaressan/Vetor" },
        },
        {
          type: "DECISION",
          ref: "D2",
          title: "The fix loop is bounded",
          description: "Five iterations at most, stated in the skill itself.",
          source: { label: "Source", value: "README" },
        },
        {
          type: "LIMITATION",
          ref: "L-01.1",
          title: "Known limits",
          description: "Headless coordination depends on permission setup; other runtimes are only partly supported.",
          source: { label: "Source", value: "README" },
        },
      ],
      links: [{ label: "View repository", value: "github.com/Tavaressan/Vetor", href: "https://github.com/Tavaressan/Vetor" }],
    },
  },
  {
    slug: "delphos",
    index: "02",
    title: "Delphos",
    category: "AI / distributed systems",
    kind: "AI",
    summary:
      "A distributed architecture that combines application processing, RAG, messaging and specialised workers, connecting Java, Rust and Python components in a service-oriented infrastructure.",
    stack: ["Java 21", "Spring Boot", "Rust", "Python", "CrewAI", "RabbitMQ", "PostgreSQL", "pgvector", "Next.js", "Vertex AI / Gemini", "MinIO / S3", "Docker"],
    status: "Active development",
    meta: ["Selected", "AI", "RAG", "Full-stack", "Java 21", "Distributed systems"],
    repositories: [
      { label: "View repository", value: "github.com/Tavaressan/delphos", href: "https://github.com/Tavaressan/delphos" },
    ],
    caseStudy: {
      stackLine: ["Java 21", "Spring Boot", "Rust", "Python", "RabbitMQ", "PostgreSQL", "pgvector", "Next.js"],
      evidenceMark: "Architecture · Code · Decision",
      figure: {
        caption: "Fig. 02 — Delphos services: Next.js frontend, Java 21 core, RabbitMQ queues, and Rust/Python workers.",
        alt: "Delphos services: a Next.js frontend calls a Java and Spring Boot core, which enqueues jobs on RabbitMQ for ingestion, RAG and agent-crew workers; the core stores embeddings in PostgreSQL with pgvector; Rust services handle parallel data processing.",
      },
      spec: [
        { label: "Role", value: "Systems Architect & Full-Stack Developer" },
        { label: "Context", value: "Enterprise Agent Platform" },
        { label: "Period", value: "2025 – 2026" },
        { label: "Status", value: "Active development" },
      ],
      problem:
        "Enterprise document ingestion and LLM retrieval pipelines suffer from high latency and tight coupling when processing unstructured data across multiple language runtimes.",
      context: "Delphos is a modular platform for orchestrating AI agents with retrieval-augmented generation.",
      objective: "Unify high-throughput document processing in Rust with enterprise business policies in Java and autonomous multi-agent crews in Python.",
      architecture:
        "A Next.js frontend talks to a Java and Spring Boot core. The core enqueues jobs on RabbitMQ, and specialised workers for ingestion, RAG and agent crews process them asynchronously. Rust services handle parallel data processing, a Python worker runs the agent crews with CrewAI, and embeddings are stored in PostgreSQL with pgvector. Documents go to MinIO or S3 object storage, generation runs on Vertex AI with Gemini, and the services are packaged with Docker.",
      decisions: [
        { ref: "D1", title: "Low coupling between modules", rationale: "Modules follow a clean architecture so that a later move to separate services stays open." },
        { ref: "D2", title: "Work leaves the core through a queue", rationale: "The core enqueues jobs on RabbitMQ; workers process them asynchronously." },
        { ref: "D3", title: "More than one model provider", rationale: "Vertex AI with Gemini is the provider, with a hosted and a local fallback." },
      ],
      implementation:
        "Designed the reactive RabbitMQ message schema, wrote the Java 21 Spring Boot core REST API with Spring Security and pgvector persistence, and integrated high-performance document parsing workers in Rust.",
      results: [{ text: "Distributed multi-runtime architecture running asynchronously with persistent vector search." }],
      limitations: [{ text: "Production cloud scaling requires managed Kubernetes clustering." }],
      evidence: [
        {
          type: "ARCHITECTURE",
          ref: "Fig. 02",
          title: "Services and the queue between them",
          description: "Frontend, core, queue, workers and vector storage, drawn from the README.",
        },
        {
          type: "DECISION",
          ref: "D1",
          title: "Low coupling between modules",
          description: "The repository keeps architectural decision records.",
          source: { label: "Source", value: "ADRs in the repository" },
        },
        {
          type: "CODE",
          ref: "E-02.1",
          title: "Java, Rust and Python in one repository",
          description: "The published repository is the record of how the three runtimes are joined.",
          source: { label: "View repository", value: "github.com/Tavaressan/delphos", href: "https://github.com/Tavaressan/delphos" },
        },
      ],
      links: [{ label: "View repository", value: "github.com/Tavaressan/delphos", href: "https://github.com/Tavaressan/delphos" }],
    },
  },
  {
    slug: "cafey",
    index: "03",
    title: "Cafey",
    category: "IoT / edge systems",
    kind: "IOT",
    summary:
      "A physical IoT system, end to end: mechanical design, electronics, firmware, cloud, backend and applications for a product designed to be built.",
    stack: ["KiCad", "FreeCAD", "ESP32", "Firmware", "MQTT/TLS", "AWS IoT Core", "BLE", "Kotlin", "Spring Boot", "PostgreSQL", "Kotlin Multiplatform"],
    status: "Phase 1 · schematic validated",
    meta: ["Selected", "Academic", "6th semester", "Integrator project", "Fatec Itaquera", "IoT", "Full-stack", "Hardware"],
    repositories: [
      { label: "View repository", value: "github.com/Tavaressan/cafey", href: "https://github.com/Tavaressan/cafey" },
    ],
    caseStudy: {
      stackLine: ["ESP32", "MQTT/TLS", "AWS IoT Core", "Kotlin Multiplatform", "Spring Boot", "PostgreSQL", "KiCad", "FreeCAD"],
      evidenceMark: "Architecture · Hardware · Mechanical design",
      figure: {
        caption: "Fig. 03 — Cafey system outline.",
        alt: "Cafey outline: an ESP32 module, with electronics designed in KiCad and a structure modelled in FreeCAD, switches a coffee maker through a relay and publishes over MQTT to AWS IoT Core, which feeds a Kotlin and Spring Boot API backed by PostgreSQL; Kotlin Multiplatform clients reach the module over BLE.",
      },
      spec: [
        { label: "Role", value: "IoT & Systems Engineer" },
        { label: "Context", value: "Sixth-semester integrator project · Fatec Itaquera" },
        { label: "Period", value: "Aug 2026 – Dec 2026" },
        { label: "Status", value: "Phase 1 · schematic validated" },
      ],
      problem: "Make a coffee maker with a mechanical switch a connected appliance, without opening or altering it internally.",
      context:
        "Cafey is an external IoT module that turns a mechanical-switch coffee maker into a connected appliance with no internal modification. It is also the sixth-semester integrator project.",
      objective:
        "A physical product designed for fabrication, connecting mechanical engineering, electronics, firmware, software and cloud.",
      architecture:
        "The work runs in four layers. Physical hardware: the mechanical structure is modelled in FreeCAD and the circuits are designed in KiCad. Edge: an ESP32, its firmware and MQTT. Cloud: AWS IoT Core, a backend and PostgreSQL. Applications: Kotlin Multiplatform clients over a Kotlin and Spring Boot API. In detail, an ESP32 drives a relay that cuts mains power to the coffee maker. The firmware, C++ on ESP-IDF and structured as active objects over FreeRTOS, speaks MQTT over TLS with X.509 certificates to AWS IoT Core. A Kotlin and Spring Boot backend with PostgreSQL consumes MQTT and exposes a REST API for devices, commands and scheduling. Kotlin Multiplatform clients cover web, mobile and desktop.",
      decisions: [
        { ref: "D1", title: "A relay outside, nothing inside", rationale: "Control is a relay on the mains line, so the coffee maker is never opened or modified." },
        { ref: "D2", title: "AWS IoT Core as the broker", rationale: "MQTT runs over TLS with X.509 certificates against a managed broker." },
        {
          ref: "D3",
          title: "Mains and low voltage on opposite sides",
          rationale: "The housing keeps the mains section and the low-voltage section apart, as electrical safety requires.",
        },
      ],
      implementation:
        "Phase 1 validated the complete KiCad electrical schematic. Authored the active object C++ firmware architecture for ESP-IDF, designed the physical 3D enclosure in FreeCAD, and developed the Kotlin Spring Boot backend for MQTT message consumption.",
      results: [{ text: "Electrical schematic validated.", ref: "E-03.1" }, { text: "Backend service logic and unit test suite passing." }],
      limitations: [
        { text: "Component procurement is blocking physical board validation and mains electrical load testing.", ref: "L-03.1" },
        {
          text: "The hardware handles mains voltage: assembly needs validation by an electrician before first use under load.",
          ref: "L-03.2",
        },
      ],
      evidence: [
        {
          type: "ARCHITECTURE",
          ref: "Fig. 03",
          title: "Architecture · hardware, edge, cloud and applications",
          description: "How the physical module, the edge device, the cloud and the applications relate, in one drawing.",
        },
        {
          type: "CODE",
          ref: "E-03.1",
          title: "Hardware · electronics in KiCad",
          description:
            "The circuit around the ESP32: the validated electrical schematic, kept in the repository with the board and component libraries.",
          source: { label: "View repository", value: "github.com/Tavaressan/cafey", href: "https://github.com/Tavaressan/cafey" },
        },
        {
          type: "DECISION",
          ref: "D1",
          title: "A relay outside, nothing inside",
          description: "The module is external; the appliance stays as it was built.",
          source: { label: "Source", value: "README" },
        },
      ],
      links: [{ label: "View repository", value: "github.com/Tavaressan/cafey", href: "https://github.com/Tavaressan/cafey" }],
    },
  },
];

// Trilha acadêmica completa dos primeiros 5 semestres da Fatec Itaquera (com estudos de caso individuais)
const academic: Project[] = [
  {
    slug: "rosary-store",
    index: "04",
    title: "Rosary Store",
    category: "Academic · 1st semester",
    kind: "WEB",
    summary:
      "A lightweight e-commerce storefront and devotional product catalog built with semantic HTML5, modern CSS3 and vanilla JavaScript.",
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Web Standards"],
    status: "Completed · 1st Semester",
    meta: ["Academic", "1st semester", "Fatec Itaquera", "Web", "Frontend"],
    repositories: [{ label: "View repository", href: "https://github.com/Tavaressan/rosary-store/tree/main" }],
    caseStudy: {
      stackLine: ["HTML5", "CSS3", "JavaScript"],
      evidenceMark: "Architecture · Interface · Catalog",
      figure: {
        caption: "Fig. 04 — Rosary Store layout structure and modular catalog components.",
        alt: "Rosary Store catalog interface diagram showing grid layout and client-side cart logic.",
      },
      spec: [
        { label: "Role", value: "Frontend Developer & UI Designer" },
        { label: "Context", value: "1st semester academic project · Fatec Itaquera" },
        { label: "Period", value: "Feb 2024 – Jun 2024" },
        { label: "Status", value: "Completed" },
      ],
      problem: "Build an accessible, high-performance web storefront for devotional products without heavy third-party framework overhead.",
      context:
        "First-semester software development project focused on core web technologies: DOM manipulation, responsive CSS layouts, and semantic HTML structure.",
      objective: "Deliver a fluid, mobile-responsive product catalog with cart simulation, item filtering, and clean semantic markup.",
      architecture:
        "Componentized vanilla frontend leveraging modern CSS grid/flexbox layouts and modular JavaScript modules for stateful catalog management.",
      decisions: [
        { ref: "D1", title: "Pure web standards", rationale: "Zero framework dependencies to ensure minimal load footprint and deep mastery of DOM APIs." },
        { ref: "D2", title: "Mobile-first responsive grid", rationale: "Fluid layout adjusting dynamically from 320px mobile screens to desktop viewports." },
      ],
      implementation:
        "Structured semantic HTML5 landmarks, styled with custom CSS variables, and animated with CSS keyframes and vanilla event delegates.",
      results: [{ text: "Lightweight storefront with zero dependency overhead and sub-second load times." }],
      limitations: [{ text: "Checkout flow is simulated client-side without a persistent payment gateway." }],
      evidence: [
        {
          type: "CODE",
          ref: "E-04.1",
          title: "Semantic Frontend Codebase",
          description: "Clean HTML5, CSS3, and JavaScript catalog codebase.",
          source: { label: "View repository", value: "github.com/Tavaressan/rosary-store", href: "https://github.com/Tavaressan/rosary-store/tree/main" },
        },
      ],
      links: [{ label: "View repository", value: "github.com/Tavaressan/rosary-store", href: "https://github.com/Tavaressan/rosary-store/tree/main" }],
    },
  },
  {
    slug: "fluxora-maternal",
    index: "05",
    title: "Fluxora Maternal",
    category: "Academic · 2nd semester",
    kind: "WEB",
    summary:
      "A clinical management web platform for maternal health and nutritionists, featuring patient scheduling, nutrition tracking, and consultation workflows.",
    stack: ["React", "PHP", "MySQL", "CSS3", "Scrum", "MVC"],
    status: "Completed · 2nd Semester",
    meta: ["Academic", "2nd semester", "Fatec Itaquera", "Full-stack", "React", "PHP", "MySQL"],
    repositories: [{ label: "View repository", href: "https://github.com/Tavaressan/fluxora-maternal" }],
    caseStudy: {
      stackLine: ["React", "PHP", "MySQL", "Scrum"],
      evidenceMark: "Architecture · Full-stack · Database",
      figure: {
        caption: "Fig. 05 — Fluxora Maternal system architecture: React frontend with PHP REST controllers and MySQL database.",
        alt: "Fluxora Maternal architecture diagram showing client SPA, PHP MVC backend, and relational MySQL persistence.",
      },
      spec: [
        { label: "Role", value: "Full-Stack Developer" },
        { label: "Context", value: "2nd semester interdisciplinary project (PI) · Fatec Itaquera" },
        { label: "Period", value: "Aug 2024 – Dec 2024" },
        { label: "Status", value: "Completed" },
      ],
      problem: "Streamline patient scheduling, clinical intake records, and specialized maternal nutrition plans in a unified clinical portal.",
      context:
        "Interdisciplinary project developed within an agile Scrum team for a maternal healthcare and nutritional advisory domain.",
      objective: "Create an intuitive clinical dashboard enabling nutritionists to register pregnant and postpartum patients, schedule visits, and track diets.",
      architecture:
        "Three-tier architecture: React SPA frontend communicating via REST endpoints with a PHP backend structured under the MVC pattern, backed by a relational MySQL database.",
      decisions: [
        { ref: "D1", title: "React SPA for reactive patient intake", rationale: "Instant client-side validation and responsive appointment calendar." },
        { ref: "D2", title: "Relational data integrity in MySQL", rationale: "Foreign key constraints ensuring patient medical history and dietary records are strictly isolated and referentially valid." },
      ],
      implementation:
        "Personal participation in relational database modeling, PHP REST API endpoints for appointment CRUD, and React components for client scheduling and authentication.",
      results: [{ text: "Working clinical management prototype validated in academic sprint review." }],
      limitations: [{ text: "Production deployment depends on PHP server configuration (Vercel deployment served as static frontend demo)." }],
      evidence: [
        {
          type: "CODE",
          ref: "E-05.1",
          title: "Full-Stack Repository & Visual Identity",
          description: "React frontend and PHP backend modules.",
          source: { label: "View repository", value: "github.com/Tavaressan/fluxora-maternal", href: "https://github.com/Tavaressan/fluxora-maternal" },
          media: "/media/projects/fluxora-logo.png",
        },
      ],
      links: [{ label: "View repository", value: "github.com/Tavaressan/fluxora-maternal", href: "https://github.com/Tavaressan/fluxora-maternal" }],
    },
  },
  {
    slug: "gt-solar",
    index: "06",
    title: "GT Solar",
    category: "Academic · 3rd semester",
    kind: "WEB",
    summary:
      "A robust backend service for photovoltaic solar plant telemetry, energy generation metrics, and inverter performance monitoring.",
    stack: ["Java 21", "Spring Boot", "PostgreSQL", "Docker", "Swagger/OpenAPI", "Maven"],
    status: "Completed · 3rd Semester",
    meta: ["Academic", "3rd semester", "Fatec Itaquera", "Backend", "Java 21", "Spring Boot", "PostgreSQL"],
    repositories: [{ label: "View repository", href: "https://github.com/Tavaressan/GT-Solar-Backend" }],
    caseStudy: {
      stackLine: ["Java 21", "Spring Boot", "PostgreSQL", "Docker"],
      evidenceMark: "Architecture · API Spec · Telemetry",
      figure: {
        caption: "Fig. 06 — GT Solar backend architecture: Spring Boot layered services, PostgreSQL persistence, and OpenAPI contract.",
        alt: "GT Solar architecture diagram showing REST controllers, domain services, PostgreSQL database, and OpenAPI specification.",
      },
      spec: [
        { label: "Role", value: "Backend Engineer" },
        { label: "Context", value: "3rd semester interdisciplinary project · Fatec Itaquera" },
        { label: "Period", value: "Feb 2025 – Jun 2025" },
        { label: "Status", value: "Completed" },
      ],
      problem: "Ingest, normalize, and monitor real-time telemetry from distributed solar inverters to detect generation anomalies and track power output.",
      context: "Focus on industrial backend engineering, layered architecture, typed domain models, and containerized deployment.",
      objective: "Provide high-throughput REST endpoints for telemetry ingestion, energy calculation algorithms, and equipment status tracking.",
      architecture:
        "Layered Spring Boot architecture (Controllers, Services, Repositories) running in Docker containers, with PostgreSQL for structured time-series metrics and OpenAPI for interactive documentation.",
      decisions: [
        { ref: "D1", title: "Layered domain-driven design", rationale: "Strict separation between ingestion DTOs, domain models, and persistence entities." },
        { ref: "D2", title: "Containerization with Docker", rationale: "Consistent reproducible runtime environment for database and API." },
      ],
      implementation:
        "Authored Java 21 Spring Boot REST controllers, data persistence with Spring Data JPA, validation rules for energy generation anomalies, and Swagger UI integration.",
      results: [{ text: "Complete RESTful API with automated schema migration and interactive Swagger/OpenAPI documentation." }],
      limitations: [{ text: "Physical hardware inverters were simulated via synthetic JSON payloads." }],
      evidence: [
        {
          type: "CODE",
          ref: "E-06.1",
          title: "Spring Boot Backend Codebase",
          description: "Java 21, Spring Boot REST controllers, and PostgreSQL JPA repositories.",
          source: { label: "View repository", value: "github.com/Tavaressan/GT-Solar-Backend", href: "https://github.com/Tavaressan/GT-Solar-Backend" },
        },
      ],
      links: [{ label: "View repository", value: "github.com/Tavaressan/GT-Solar-Backend", href: "https://github.com/Tavaressan/GT-Solar-Backend" }],
    },
  },
  {
    slug: "kazu-tattoo",
    index: "07",
    title: "Kazu Tattoo (Project-LDW)",
    category: "Academic · 4th semester",
    kind: "WEB",
    summary:
      "A multi-tier web platform for custom tattoo studio scheduling, artist portfolio curation, and budget estimation with polyglot persistence.",
    stack: ["Java 21", "Spring Boot", "Vue.js", "MySQL", "MongoDB", "REST API", "Docker"],
    status: "Completed · 4th Semester",
    meta: ["Academic", "4th semester", "Fatec Itaquera", "Full-stack", "Vue.js", "Spring Boot", "MySQL", "MongoDB"],
    repositories: [{ label: "View repository", href: "https://github.com/Tavaressan/Project-LDW" }],
    caseStudy: {
      stackLine: ["Java 21", "Spring Boot", "Vue.js", "MySQL", "MongoDB"],
      evidenceMark: "Architecture · Polyglot Persistence · UI",
      figure: {
        caption: "Fig. 07 — Kazu Tattoo system outline: Vue.js frontend with Spring Boot backend connecting to dual MySQL and MongoDB storage.",
        alt: "Kazu Tattoo architecture diagram illustrating Vue frontend, Spring Boot backend, and polyglot persistence across MySQL and MongoDB.",
      },
      spec: [
        { label: "Role", value: "Full-Stack Engineer & Database Architect" },
        { label: "Context", value: "4th semester interdisciplinary project · Fatec Itaquera" },
        { label: "Period", value: "Aug 2025 – Dec 2025" },
        { label: "Status", value: "Completed" },
      ],
      problem: "Manage high-resolution artist media portfolios alongside transactional calendar reservations and multi-stage client budget negotiations.",
      context: "Polyglot persistence architecture exploring the complementary strengths of relational and document databases in web engineering.",
      objective: "Deliver a fluid studio experience for clients to discover tattoo styles, request personalized quotes, and confirm studio appointments.",
      architecture:
        "Vue.js reactive frontend coupled with a Spring Boot REST API that routes transactional data (users, bookings, payments) to MySQL and unconstrained media/portfolio metadata to MongoDB.",
      decisions: [
        { ref: "D1", title: "Polyglot persistence", rationale: "Relational MySQL for strict financial/booking consistency + NoSQL MongoDB for flexible tattoo artwork and metadata." },
        { ref: "D2", title: "Vue.js single page application", rationale: "Interactive visual gallery with real-time quote calculator and calendar selection." },
      ],
      implementation:
        "Configured dual Spring Data persistence repositories (MySQL and MongoDB), implemented appointment collision detection, and designed Vue components with responsive styling.",
      results: [{ text: "Polyglot persistence verified with seamless booking workflow and media browsing." }],
      limitations: [{ text: "Image upload storage uses local file system buffers rather than external S3 buckets in development." }],
      evidence: [
        {
          type: "CODE",
          ref: "E-07.1",
          title: "Project-LDW Repository & UI",
          description: "Full-stack Java Spring Boot backend and Vue.js web storefront screenshot.",
          source: { label: "View repository", value: "github.com/Tavaressan/Project-LDW", href: "https://github.com/Tavaressan/Project-LDW" },
          media: "/media/projects/kazu-tattoo-home.png",
        },
      ],
      links: [{ label: "View repository", value: "github.com/Tavaressan/Project-LDW", href: "https://github.com/Tavaressan/Project-LDW" }],
    },
  },
  {
    slug: "up-barber",
    index: "08",
    title: "UP Barber",
    category: "Academic · 5th semester",
    kind: "MOBILE",
    summary:
      "An integrated commercial platform for barbershops featuring mobile client booking, instant PIX payment integration, and administrative dashboard.",
    stack: ["Java 21", "Spring Boot", "Next.js", "React Native", "PostgreSQL", "Docker Compose", "EFI Pay SDK"],
    status: "Completed · 5th Semester",
    meta: ["Academic", "5th semester", "Fatec Itaquera", "Mobile", "Full-stack", "React Native", "Spring Boot", "PIX"],
    repositories: [
      { label: "Mobile App", href: "https://github.com/Tavaressan/PI-5SM-FRONT" },
      { label: "Backend API", href: "https://github.com/RafaelBorges22/PI-5SM-BACK" },
      { label: "Dashboard", href: "https://github.com/Tavaressan/PI-5SM-DASHBOARD" },
    ],
    caseStudy: {
      stackLine: ["Java 21", "Spring Boot", "React Native", "PostgreSQL", "PIX EFI Pay"],
      evidenceMark: "Architecture · Mobile · Instant Payment · Microservices",
      figure: {
        caption: "Fig. 08 — UP Barber multi-tier architecture: React Native client, Spring Boot core with EFI Pay PIX gateway, and PostgreSQL.",
        alt: "UP Barber architecture diagram showing React Native client, Spring Boot backend with instant PIX integration, Next.js admin dashboard, and PostgreSQL.",
      },
      spec: [
        { label: "Role", value: "Full-Stack Mobile & Backend Developer" },
        { label: "Context", value: "5th semester interdisciplinary project · Fatec Itaquera" },
        { label: "Period", value: "Feb 2026 – Jun 2026" },
        { label: "Status", value: "Completed" },
      ],
      problem: "Eliminate appointment no-shows and streamline salon operations through upfront instant PIX payments and automated slot reservation.",
      context: "Comprehensive commercial platform spanning mobile customer app, administrative desktop dashboard, and cloud-ready REST API.",
      objective: "Enable clients to select barbers, book time slots, generate dynamic PIX QR codes via EFI Pay SDK, and automatically confirm reservations upon payment webhook.",
      architecture:
        "Three modular repositories: Mobile application built in React Native, administrative dashboard in Next.js, and backend core in Java 21 / Spring Boot with PostgreSQL, orchestrated with Docker Compose.",
      decisions: [
        { ref: "D1", title: "Instant PIX Gateway with webhook confirmation", rationale: "Uses EFI Pay SDK for dynamic QR code generation and real-time payment reconciliation." },
        { ref: "D2", title: "Unified Docker Compose orchestration", rationale: "All backend services, database, and admin dashboard spin up with a single command." },
      ],
      implementation:
        "Implemented PIX payment gateway integration in Spring Boot, configured webhook handlers, created React Native booking screens, and managed Docker Compose multi-container setup.",
      results: [{ text: "End-to-end booking and payment cycle successfully demonstrated with instant PIX generation." }],
      limitations: [{ text: "Production deployment requires active bank API production certificates." }],
      evidence: [
        {
          type: "ARCHITECTURE",
          ref: "Fig. 08",
          title: "Architecture & Microservices Diagram",
          description: "Full system diagram linking React Native client, Spring Boot, EFI Pay PIX gateway, and PostgreSQL.",
          media: "/media/projects/up-barber-diagram.png",
        },
        {
          type: "CODE",
          ref: "E-08.1",
          title: "Repositories: Mobile, Backend & Dashboard",
          description: "Multi-repository architecture for mobile app, API, and administration.",
          source: { label: "View mobile repository", value: "github.com/Tavaressan/PI-5SM-FRONT", href: "https://github.com/Tavaressan/PI-5SM-FRONT" },
        },
      ],
      links: [
        { label: "Mobile App Repository", href: "https://github.com/Tavaressan/PI-5SM-FRONT" },
        { label: "Backend API Repository", href: "https://github.com/RafaelBorges22/PI-5SM-BACK" },
        { label: "Dashboard Repository", href: "https://github.com/Tavaressan/PI-5SM-DASHBOARD" },
      ],
    },
  },
];

// Projetos complementares de arquivo
const archiveOnly: Project[] = [
  {
    slug: "esp32-iot-app",
    index: "09",
    title: "ESP32 IoT App",
    category: "IoT",
    kind: "IOT",
    stack: ["ESP32", "ESP-IDF", "C", "MQTT", "AWS IoT Core"],
    meta: ["Embedded", "Firmware", "IoT"],
    repositories: [{ label: "View repository", href: "https://github.com/Tavaressan/esp32-iot-app" }],
  },
  {
    slug: "arara-carioca",
    index: "10",
    title: "Arara Carioca",
    category: "Mobile",
    kind: "MOBILE",
    stack: ["React Native", "TypeScript", "Expo", "Reanimated"],
    meta: ["Mobile", "Game", "React Native"],
    repositories: [{ label: "View repository", href: "https://github.com/Tavaressan/arara-carioca-react-native" }],
  },
];

export const selectedProjects = selected;
export const academicProjects = academic;

export const allProjects: Project[] = [
  ...selected,
  ...academic,
  ...archiveOnly,
];

export const getCaseStudy = (slug: string) => allProjects.find((p) => p.slug === slug && p.caseStudy);

export const kindFilters: { value: ProjectKind | null; label: string }[] = [
  { value: null, label: "All" },
  { value: "WEB", label: "Web" },
  { value: "MOBILE", label: "Mobile" },
  { value: "IOT", label: "IoT" },
  { value: "AI", label: "AI" },
];
