import type { EvidenceType } from "@/content/types";

type ArrowDir = "right" | "left" | "down" | "external";

const ARROWS: Record<ArrowDir, string> = {
  right: "M2 8h11M9 4l4 4-4 4",
  left: "M14 8H3M7 4L3 8l4 4",
  down: "M8 2v11M4 9l4 4 4-4",
  external: "M4 12L12 4M5 4h7v7",
};

export function Arrow({ dir = "right", large = false }: { dir?: ArrowDir; large?: boolean }) {
  return (
    <svg className={large ? "arrow arrow--lg" : "arrow"} viewBox="0 0 16 16" aria-hidden="true">
      <path d={ARROWS[dir]} />
    </svg>
  );
}

const GLYPHS: Record<EvidenceType, string> = {
  ARCHITECTURE: "M2 3h5v4H2zM9 9h5v4H9zM7 5h4.5v4",
  CODE: "M6 3H3v10h3M10 3h3v10h-3",
  RUNTIME: "M1 9h3l2-5 3 9 2-6 1 2h3",
  DECISION: "M8 2l6 6-6 6-6-6z",
  MEASUREMENT: "M2 4v8M14 4v8M2 8h12",
  DEPLOYMENT: "M8 2v8M5 7l3 3 3-3M2 13h12",
  LIMITATION: "M2 3h12v10H2zM2 9l6-6M5 13l9-9M10 13l4-4",
};

export function Glyph({ type }: { type: EvidenceType }) {
  return (
    <svg className="glyph" viewBox="0 0 16 16" aria-hidden="true">
      <path d={GLYPHS[type]} />
    </svg>
  );
}
