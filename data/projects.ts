export type Project = {
  slug: string;
  name: string;
  summary: string;
};

// Dados provisorios do smoke test do export estatico.
// A lista real dos projetos e montada na Fase 3 do docs/plan.md.
export const projects: Project[] = [
  {
    slug: "smoke-test-one",
    name: "Smoke Test One",
    summary: "Placeholder project used to verify static export of dynamic routes.",
  },
  {
    slug: "smoke-test-two",
    name: "Smoke Test Two",
    summary: "Second placeholder project, same purpose as the first.",
  },
];
