// Contratos de conteúdo: os componentes só apresentam; tudo o que é afirmado vive em content/

export type EpistemicStatus = "CONFIRMED" | "INFERRED" | "ASSUMED" | "OPEN QUESTION";

export type ProjectKind = "WEB" | "MOBILE" | "IOT" | "AI";

export type Link = {
  label: string;
  href: string;
  /** Texto visível do destino, ex.: github.com/Tavaressan/Vetor */
  value?: string;
};

export type Decision = {
  ref: string;
  title: string;
  rationale: string;
  status?: EpistemicStatus;
};

export type EvidenceType =
  | "ARCHITECTURE"
  | "CODE"
  | "RUNTIME"
  | "DECISION"
  | "MEASUREMENT"
  | "DEPLOYMENT"
  | "LIMITATION";

export type Evidence = {
  type: EvidenceType;
  ref: string;
  title: string;
  description: string;
  status?: EpistemicStatus;
  /** Onde o registro pode ser conferido; sem href, o valor é mostrado como texto */
  source?: { label: string; value: string; href?: string };
  /** Só para MEASUREMENT */
  measure?: { value: string; method: string; baseline: string };
  media?: string;
};

/** Uma afirmação curta que aponta para o registro que a sustenta */
export type Note = { text: string; ref?: string };

export type Figure = {
  caption: string;
  alt: string;
};

export type CaseStudy = {
  /** Lista curta mostrada na prancha; `stack` do projeto é a lista completa */
  stackLine: string[];
  evidenceMark: string;
  figure: Figure;
  spec: { label: string; value: string }[];
  problem: string;
  context: string;
  objective: string;
  architecture?: string;
  decisions: Decision[];
  implementation?: string;
  results?: Note[];
  limitations?: Note[];
  evidence: Evidence[];
  links?: Link[];
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  /** Rótulo editorial mostrado nas listas */
  category: string;
  /** Tipo de sistema usado pelos filtros do arquivo; ausente quando não confirmado */
  kind?: ProjectKind;
  summary?: string;
  stack: string[];
  status?: string;
  /** Metadados pesquisáveis que não ocupam a barra de filtros (contexto, semestre, tipo) */
  meta: string[];
  /** Repositório único ou partes de um mesmo projeto */
  repositories?: Link[];
  caseStudy?: CaseStudy;
};

export type Capability = {
  index: string;
  title: string;
  technologies: string[];
  projectSlugs: string[];
  /** Referências de evidência citadas na linha, ex.: Fig. 01 · E-01.1 */
  evidenceRefs: string[];
  details: string;
};

export type WorkbenchStatus = "CURRENT" | "OCCASIONAL" | "EXPERIMENTAL";

export type WorkbenchItem = {
  group: string;
  name: string;
  /** O que é */
  kind: string;
  /** Por que é usado */
  purpose?: string;
  /** Onde é usado */
  where: string;
  relatedProjects?: string[];
  status?: WorkbenchStatus;
};

export type Experience = {
  period: string;
  role: string;
  organization: string;
  /** Nome do projeto, quando a linha é um projeto acadêmico */
  project?: string;
  context: string;
  systems: string[];
  contribution: string;
  links?: Link[];
};

export type ExtensionCourse = {
  name: string;
  institution: string;
  workload: string;
  period: string;
  location?: string;
  details?: string;
};

export type LanguageSkill = {
  language: string;
  level: string;
  details?: string;
};

export type AcademicEducation = {
  institution: string;
  degree: string;
  course: string;
  period: string;
  status: string;
};

