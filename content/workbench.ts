import type { WorkbenchItem } from "./types";

// Cada item responde o que é, por que é usado e onde; o que não foi dito fica marcado.
// Status (CURRENT / OCCASIONAL / EXPERIMENTAL) ainda não foi confirmado para nenhum item.
export const workbenchGroups = [
  "Languages & Runtime",
  "Systems",
  "Edge",
  "AI / Agents",
  "Physical Workbench",
] as const;

export const workbench: WorkbenchItem[] = [
  { group: "Languages & Runtime", name: "TypeScript on Deno", kind: "Language and runtime", where: "The scripts of Vetor.", relatedProjects: ["vetor"] },
  {
    group: "Languages & Runtime",
    name: "Spring Boot",
    kind: "Backend framework, in Java and in Kotlin",
    where: "The Delphos core and the Cafey API.",
    relatedProjects: ["delphos", "cafey"],
  },
  { group: "Languages & Runtime", name: "Next.js", kind: "Web frontend framework", where: "The Delphos frontend.", relatedProjects: ["delphos"] },
  {
    group: "Systems",
    name: "RabbitMQ",
    kind: "Message broker",
    purpose: "Jobs leave the core through a queue and workers process them asynchronously.",
    where: "Between the Delphos core and its workers.",
    relatedProjects: ["delphos"],
  },
  {
    group: "Systems",
    name: "PostgreSQL and pgvector",
    kind: "Relational database with vector storage",
    where: "Embeddings in Delphos; application data in Cafey.",
    relatedProjects: ["delphos", "cafey"],
  },
  {
    group: "Systems",
    name: "MQTT and AWS IoT Core",
    kind: "Device messaging and a managed broker",
    where: "Between the Cafey module and the cloud, over TLS with X.509 certificates.",
    relatedProjects: ["cafey"],
  },
  {
    group: "Edge",
    name: "ESP32",
    kind: "Microcontroller",
    where: "The Cafey module, with firmware in C++ on ESP-IDF; also the ESP32 IoT App in the archive.",
    relatedProjects: ["cafey"],
  },
  {
    group: "AI / Agents",
    name: "Agent runtimes",
    kind: "Environments that execute coding agents",
    where: "Vetor runs natively in one runtime, with partial compatibility in others.",
    relatedProjects: ["vetor"],
  },
  {
    group: "AI / Agents",
    name: "Retrieval-augmented generation",
    kind: "Retrieval over stored embeddings before generation",
    where: "The RAG workers of Delphos.",
    relatedProjects: ["delphos"],
  },
  // O protótipo agrupava estas ferramentas como "Hardware"; equipamentos físicos ainda não foram confirmados
  {
    group: "Physical Workbench",
    name: "KiCad",
    kind: "Electronics design tool",
    where: "The schematic, board and component libraries of Cafey.",
    relatedProjects: ["cafey"],
  },
  {
    group: "Physical Workbench",
    name: "FreeCAD",
    kind: "Mechanical modelling tool",
    where: "The physical structure of the Cafey module, modelled for production.",
    relatedProjects: ["cafey"],
  },
];
