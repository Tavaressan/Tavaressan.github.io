"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { allProjects, kindFilters } from "@/content/projects";
import type { Project, ProjectKind } from "@/content/types";
import { CONTENT_REQUIRED, STATUS_REQUIRED } from "@/content/placeholders";
import { rememberOrigin } from "../project-transition/origin";
import { TransitionLink } from "../project-transition/transition-link";
import { Arrow } from "../typography/icons";
import "./archive.css";

const KINDS = new Set<string>(kindFilters.map((f) => f.value).filter(Boolean) as string[]);

const parseKind = (raw: string | null): ProjectKind | null => {
  const k = (raw ?? "").toUpperCase();
  return KINDS.has(k) ? (k as ProjectKind) : null;
};

// Busca = qualquer metadado estruturado do projeto
const haystack = (p: Project) =>
  [
    p.title,
    p.summary ?? "",
    p.category,
    p.kind ?? "",
    p.stack.join(" "),
    p.meta.join(" "),
    p.caseStudy?.stackLine.join(" ") ?? "",
    (p.repositories ?? []).map((r) => r.label).join(" "),
  ]
    .join(" ")
    .toLowerCase();

const INDEX = allProjects.map((p) => ({ p, text: haystack(p) }));

export function filterProjects(kind: ProjectKind | null, q: string) {
  const needle = q.trim().toLowerCase();
  return INDEX.filter(({ p, text }) => (!kind || p.kind === kind) && (!needle || text.includes(needle))).map(({ p }) => p);
}

const pad = (n: number) => String(n).padStart(2, "0");

function writeUrl(kind: ProjectKind | null, q: string) {
  const params = new URLSearchParams();
  if (kind) params.set("filter", kind.toLowerCase());
  if (q.trim()) params.set("q", q.trim());
  const qs = params.toString();
  window.history.replaceState(window.history.state, "", "/projects" + (qs ? "?" + qs : ""));
}

/** Arquivo com estado na URL (/projects?filter=web&q=react). Filtro e busca combinam. */
export function Archive() {
  const params = useSearchParams();
  const [kind, setKind] = useState<ProjectKind | null>(() => parseKind(params.get("filter")));
  const [q, setQ] = useState(() => params.get("q") ?? "");
  const [updating, setUpdating] = useState(false);
  const raf = useRef(0);

  // MACHINE · o controle responde de imediato e a lista reaparece em short, sem transição de página
  const apply = (nextKind: ProjectKind | null, nextQ: string) => {
    setKind(nextKind);
    setQ(nextQ);
    setUpdating(true);
    writeUrl(nextKind, nextQ);
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      raf.current = requestAnimationFrame(() => setUpdating(false));
    });
  };

  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  return <ArchiveView kind={kind} q={q} updating={updating} onChange={apply} />;
}

type ViewProps = {
  kind: ProjectKind | null;
  q: string;
  updating?: boolean;
  onChange?: (kind: ProjectKind | null, q: string) => void;
};

/** Apresentação pura: também é o fallback sem JS (lista completa, sem filtros aplicados) */
export function ArchiveView({ kind, q, updating = false, onChange }: ViewProps) {
  const rows = useMemo(() => filterProjects(kind, q), [kind, q]);
  const hasFilters = !!kind || !!q.trim();
  const count = rows.length;
  const archiveHref = () => window.location.pathname + window.location.search;

  return (
    <section id="archive" aria-labelledby="page-title" className="archive pad-x env-night" data-env="night">
      <div className="wrap archive__inner">
        <header className="g12 archive__header">
          {/* Dentro de Suspense: a revelação pode marcar data-in antes desta parte hidratar */}
          <div className="heading archive__heading" data-reveal="wind" suppressHydrationWarning>
            <p className="t-overline ink-2">Project archive</p>
            <h1 id="page-title" tabIndex={-1} className="t-display2 page-title">
              Every entry, indexed.
            </h1>
          </div>
          <p className="t-meta ink-2 archive__count" role="status" aria-live="polite">
            {pad(count)} {count === 1 ? "entry" : "entries"}
            {hasFilters ? " match" : ""}
          </p>
        </header>

        <div className="g12 archive__controls">
          <div role="group" aria-label="Filter by kind of system" className="archive__filters">
            {kindFilters.map((f) => (
              <button
                key={f.label}
                className="flt t-overline"
                type="button"
                aria-pressed={kind === f.value}
                onClick={() => onChange?.(f.value, q)}
              >
                <span>{f.label}</span>
              </button>
            ))}
            {hasFilters && (
              <button className="clear t-overline" type="button" onClick={() => onChange?.(null, "")}>
                Clear
              </button>
            )}
          </div>
          <div className="archive__search">
            <label className="t-overline ink-2" htmlFor="archive-q">
              Search the archive
            </label>
            <input
              id="archive-q"
              className="search"
              type="search"
              autoComplete="off"
              placeholder="name, technology, semester…"
              {...(onChange ? { value: q, onChange: (e: React.ChangeEvent<HTMLInputElement>) => onChange(kind, e.target.value) } : { defaultValue: q })}
            />
          </div>
        </div>

        <div className={updating ? "m-results is-updating" : "m-results"}>
          <div className="arow g12 col-heads t-overline ink-2" aria-hidden="true">
            <span className="arow__n">No.</span>
            <span className="arow__title">Title</span>
            <span className="arow__cat">Category</span>
            <span className="arow__stack">Stack</span>
            <span className="arow__state">State</span>
          </div>
          <ol className="list-reset">
            {rows.map((p) => (
              <li key={p.slug} id={`arow-${p.slug}`}>
                <ArchiveRow p={p} onOpen={() => rememberOrigin({ from: "archive", href: archiveHref() })} />
              </li>
            ))}
          </ol>
          {count === 0 && (
            <div className="archive__empty">
              <p className="t-title3">No entry matches this query.</p>
              <p className="t-body ink-2">Nothing in the archive matches that filter and that search together.</p>
              <button className="clear t-label" type="button" onClick={() => onChange?.(null, "")}>
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Cells({ p, stack }: { p: Project; stack?: React.ReactNode }) {
  // Estudos de caso mostram a linha curta da prancha; a lista completa segue pesquisável
  const line = p.caseStudy?.stackLine ?? p.stack;
  return (
    <>
      <span className="t-meta ink-2 arow__n">{p.index}</span>
      <span className="t-title3 arow__title">{p.title}</span>
      <span className="t-meta arow__cat">{p.category}</span>
      {stack ?? <span className="t-meta ink-2 arow__stack">{line.length ? line.join(" · ") : CONTENT_REQUIRED}</span>}
    </>
  );
}

// Os três selecionados abrem o estudo de caso; os demais levam ao repositório
function ArchiveRow({ p, onOpen }: { p: Project; onOpen: () => void }) {
  const state = <span className="t-meta arow__state">{p.status ?? STATUS_REQUIRED}</span>;
  const repos = p.repositories ?? [];

  if (p.caseStudy) {
    return (
      <TransitionLink className="arow g12" href={`/projects/${p.slug}`} focusId="project-title" onBeforeNavigate={onOpen}>
        <Cells p={p} />
        {state}
        <span className="arow__go">
          <Arrow />
        </span>
      </TransitionLink>
    );
  }

  // Um projeto em várias partes (UP Barber): uma linha, um link por repositório
  if (repos.length > 1) {
    return (
      <div className="arow g12">
        <Cells
          p={p}
          stack={
            <span className="t-meta arow__stack arow__refs">
              {repos.map((r) => (
                <a
                  key={r.href}
                  className="ul-link"
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.title} ${r.label}, view repository (opens in a new tab)`}
                >
                  {r.label}
                </a>
              ))}
            </span>
          }
        />
        <span className="t-meta arow__state arow__state--wide">{p.status ?? STATUS_REQUIRED}</span>
      </div>
    );
  }

  const repo = repos[0];
  return (
    <a
      className="arow g12"
      href={repo?.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${p.title}, view repository (opens in a new tab)`}
    >
      <Cells p={p} />
      {state}
      <span className="arow__go">
        <Arrow dir="external" />
      </span>
    </a>
  );
}
