import { LINK_REQUIRED } from "./placeholders";

export const site = {
  name: "Vitor Tavares Chaves",
  role: "Software developer",
  location: "São Paulo, Brazil",
  email: "vitortctavares@gmail.com",
  github: "https://github.com/Tavaressan",
  linkedin: "https://www.linkedin.com/in/vitor-tc-tavares",
  institution: "Fatec Itaquera",
  course: "Technological Degree in Multiplatform Software Development (DSM)",
  coursePeriod: "Feb 2024 – Dec 2026 (expected)",
  description: "Building software systems from embedded and cloud infrastructure to real-time applications.",
};

export const hero = {
  overline: "Software developer",
  title: "Vitor Tavares Chaves",
  lead: "Building software systems from embedded and cloud infrastructure to real-time applications.",
  sceneLabel:
    "Animated scene: a man in a fedora and round glasses reaches toward a branch of a cherry tree in bloom, petals drifting across a park.",
};

export const manifesto = {
  overline: "Manifesto",
  title: "I start where the signal starts — at the board, the wire, the protocol — and follow it all the way to the screen.",
  lead: "Every project here follows the same five moves, and each move leaves a record.",
  steps: [
    { index: "01", title: "Observe", body: "Read the schematic before writing the spec. Hardware assumptions get checked early." },
    { index: "02", title: "Draft", body: "Write the protocol down and version it. Ask the teams you depend on for the smallest change." },
    { index: "03", title: "Build", body: "Build against a synthetic source, so missing hardware never blocks the pipeline." },
    { index: "04", title: "Ship", body: "Ship the core that holds, and name what was deferred as technical debt." },
    { index: "05", title: "Evidence", body: "Publish each claim with the record that backs it, or mark it as not yet measured." },
  ],
};

// Canais de contato com links confirmados e auditados
export const contactLinks: { label: string; href?: string }[] = [
  { label: "Email", href: "mailto:vitortctavares@gmail.com" },
  { label: "GitHub", href: "https://github.com/Tavaressan" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vitor-tc-tavares" },
];

export const contact = {
  overline: "Contact",
  title: "Send the problem. I will start at the wire.",
  missing: LINK_REQUIRED,
};
