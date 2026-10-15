import Image from "next/image";
import type { Evidence } from "@/content/types";
import { isPlaceholder } from "@/content/placeholders";
import { Glyph } from "../typography/icons";
import "./proof-of-work.css";

const KIND_LABEL: Record<Evidence["type"], string> = {
  ARCHITECTURE: "Architecture",
  CODE: "Code",
  RUNTIME: "Runtime",
  DECISION: "Decision",
  MEASUREMENT: "Measurement",
  DEPLOYMENT: "Deployment",
  LIMITATION: "Limitation",
};

const markClass = (status: string) => "mark is-" + status.toLowerCase().replace(/\s+/g, "-");

/** Registro de evidência: régua em tinta, cabeçalho mono, glifo do tipo. Distinto da narrativa. */
export function EvidenceRecord({ r }: { r: Evidence }) {
  const src = r.source;
  return (
    <article className="rec">
      <div className="rec-head t-overline">
        <Glyph type={r.type} />
        <span>{KIND_LABEL[r.type]}</span>
        <span aria-hidden="true" className="ink-2">
          ·
        </span>
        <span>{r.ref}</span>
        {r.status && (
          <span className="rec-status">
            <span className={markClass(r.status)} aria-hidden="true" />
            {r.status}
          </span>
        )}
      </div>
      <h3 className="t-title3">{r.title}</h3>
      <p className="t-body">{r.description}</p>
      {r.type === "MEASUREMENT" && r.measure && (
        <dl className="rec-facts t-meta">
          <dt className="ink-2">Value</dt>
          <dd>{r.measure.value}</dd>
          <dt className="ink-2">Method</dt>
          <dd>{r.measure.method}</dd>
          <dt className="ink-2">Baseline</dt>
          <dd>{r.measure.baseline}</dd>
        </dl>
      )}
      {r.media && (
        <div style={{ marginTop: "16px", borderRadius: "4px", overflow: "hidden", border: "1px solid var(--rule)" }}>
          <Image src={r.media} alt={r.title} width={800} height={450} style={{ width: "100%", height: "auto", display: "block" }} unoptimized />
        </div>
      )}
      {src && (
        <p className="t-meta rec-source">
          <span className="ink-2">{src.label}</span>
          {src.href && !isPlaceholder(src.value) ? (
            <a className="foot-link rec-link" href={src.href} target="_blank" rel="noopener noreferrer" aria-label={`${src.label}: ${src.value} (opens in a new tab)`}>
              {src.value}
            </a>
          ) : (
            <span>{src.value}</span>
          )}
        </p>
      )}
    </article>
  );
}
