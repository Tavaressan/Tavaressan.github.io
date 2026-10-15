import type { Capability } from "./types";

// Uma linha só existe com projeto e evidência reais por trás
export const capabilities: Capability[] = [
  {
    index: "01",
    title: "Developer tooling and agent workflows",
    technologies: ["TypeScript", "Deno", "agent runtimes"],
    projectSlugs: ["vetor"],
    evidenceRefs: ["Fig. 01", "E-01.1"],
    details:
      "Skills that carry a development cycle from specification to merge, coordinating agents across isolated worktrees. Vetor is the record: its workflow cycle (Fig. 01) and its repository (E-01.1).",
  },
  {
    index: "02",
    title: "Distributed systems and AI",
    technologies: ["Java", "Spring Boot", "Rust", "Python", "CrewAI", "RabbitMQ", "pgvector"],
    projectSlugs: ["delphos"],
    evidenceRefs: ["Fig. 02", "D2"],
    details:
      "Services in different runtimes joined by a queue: a Java core, Rust processing, Python agent workers on CrewAI, and retrieval over vectors stored in PostgreSQL. Delphos shows the layout (Fig. 02) and the queue decision (D2).",
  },
  {
    index: "03",
    title: "Edge and IoT",
    technologies: ["ESP32", "MQTT", "AWS IoT Core", "KiCad", "FreeCAD"],
    projectSlugs: ["cafey"],
    evidenceRefs: ["Fig. 03", "E-03.1", "E-03.2"],
    details:
      "A physical product as one system: electronics designed in KiCad, a structure modelled in FreeCAD, an ESP32 with its firmware, and MQTT to a managed broker. Cafey carries the architecture (Fig. 03), the electronics (E-03.1) and the mechanical design (E-03.2).",
  },
  {
    index: "04",
    title: "Full-stack development",
    technologies: ["Spring Boot", "Kotlin", "Next.js", "PostgreSQL"],
    projectSlugs: ["delphos", "cafey"],
    evidenceRefs: ["Fig. 02", "Fig. 03"],
    details:
      "The backend and the interface on top of it: a Spring Boot core with a Next.js frontend in Delphos; a Kotlin API with multiplatform clients in Cafey.",
  },
];
