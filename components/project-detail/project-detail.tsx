import type { Project, Note } from "@/content/types";
import { allProjects } from "@/content/projects";
import { CONTENT_REQUIRED } from "@/content/placeholders";
import { EvidenceRecord } from "../proof-of-work/evidence-record";
import { ProjectFigure } from "../project-entry/project-figure";
import { TransitionLink } from "../project-transition/transition-link";
import { Arrow, Glyph } from "../typography/icons";
import { BackLink } from "./back-link";
import "./project-detail.css";

function Row({ n, label, wide = false, children }: { n: string; label: string; wide?: boolean; children: React.ReactNode }) {
  return (
    <section className="sec-row g12" data-reveal="rule-top" aria-label={label}>
      <p className="t-overline ink-2 sec-row__n" aria-hidden="true">
        {n}
      </p>
      <div className={wide ? "sec-row__body sec-row__body--wide" : "sec-row__body"}>{children}</div>
    </section>
  );
}

function Notes({ items }: { items: Note[] }) {
  return (
    <ul className="list-reset notes">
      {items.map((r, i) => (
        <li key={i} className="t-body">
          <span>{r.text}</span>
          {r.ref && <span className="t-meta ref">{r.ref}</span>}
        </li>
      ))}
    </ul>
  );
}

/** Máquina: problema, contexto, decisões e o registro que sustenta cada afirmação */
export function ProjectDetail({ project }: { project: Project }) {
  const cs = project.caseStudy!;
  const caseStudies = allProjects.filter((p) => p.caseStudy);
  const i = Math.max(0, caseStudies.findIndex((p) => p.slug === project.slug));
  const next = caseStudies[(i + 1) % caseStudies.length];
  const total = String(caseStudies.length).padStart(2, "0");

  return (
    <main id="main" className="detail page-main env-night" data-env="night">
      <article id={`project-${project.slug}`} aria-labelledby="project-title" className="pad-x detail__article">
        <div className="wrap detail__inner">
          <div className="detail__bar">
            <BackLink slug={project.slug} className="back t-label">
              <Arrow dir="left" />
              Back to work
            </BackLink>
            <p className="t-overline ink-2">
              Project {project.index} of {total}
            </p>
          </div>

          <header className="g12 detail__header">
            <p className="t-overline ink-2 detail__index" data-vt-part="index">
              Project {project.index}
            </p>
            <div className="detail__titles">
              <h1 id="project-title" tabIndex={-1} className="t-display1 caps page-title" data-vt-part="title">
                {project.title}
              </h1>
              <p className="t-meta ink-2">{cs.stackLine.join(" · ")}</p>
              <p className="t-lead detail__summary">{project.summary}</p>
            </div>
          </header>

          <figure className="detail__figure">
            <div className="sheet-grid is-elevated detail__sheet" role="img" aria-label={cs.figure.alt} data-vt-part="sheet">
              <ProjectFigure slug={project.slug} />
            </div>
            <figcaption className="t-meta ink-2">{cs.figure.caption}</figcaption>
          </figure>

          <dl className="spec">
            {cs.spec.map((s) => (
              <div key={s.label}>
                <dt className="t-overline ink-2">{s.label}</dt>
                <dd className="t-body">{s.value}</dd>
              </div>
            ))}
          </dl>

          <div className="g12 detail__problem">
            <p className="t-overline ink-2 sec-row__n">Problem</p>
            <blockquote className="t-quote">{cs.problem}</blockquote>
          </div>

          <Row n="01" label="Context">
            <h2 className="t-title2">Context</h2>
            <p className="t-body measure">{cs.context}</p>
          </Row>

          <Row n="02" label="Objective">
            <h2 className="t-title2">Objective</h2>
            <p className="t-lead measure-lead">{cs.objective}</p>
          </Row>

          <Row n="03" label="Architecture">
            <h2 className="t-title2">Architecture</h2>
            <p className="t-body measure">{cs.architecture ?? CONTENT_REQUIRED}</p>
          </Row>

          <Row n="04" label="Stack" wide>
            <h2 className="t-title2">Stack</h2>
            <ul className="list-reset chips">
              {project.stack.map((t) => (
                <li key={t} className="chip t-meta">
                  {t}
                </li>
              ))}
            </ul>
          </Row>

          <Row n="05" label="Decisions" wide>
            <h2 className="t-title2">Decisions</h2>
            <ol className="list-reset decisions">
              {cs.decisions.map((d) => (
                <li key={d.ref} className="g12 decision">
                  <span className="t-meta ink-2 decision__ref">
                    <Glyph type="DECISION" />
                    {d.ref}
                  </span>
                  <h3 className="t-title3 decision__title">{d.title}</h3>
                  <p className="t-body decision__body">{d.rationale}</p>
                </li>
              ))}
            </ol>
          </Row>

          <Row n="06" label="Implementation">
            <h2 className="t-title2">Implementation</h2>
            <p className="t-body measure">{cs.implementation ?? CONTENT_REQUIRED}</p>
          </Row>

          <Row n="07" label="Results">
            <h2 className="t-title2 sec-row__h">Results</h2>
            <Notes items={cs.results ?? [{ text: CONTENT_REQUIRED }]} />
          </Row>

          <Row n="08" label="Limitations">
            <h2 className="t-title2 sec-row__h">Limitations</h2>
            <Notes items={cs.limitations ?? [{ text: CONTENT_REQUIRED }]} />
          </Row>

          <Row n="09" label="Evidence" wide>
            <div className="evidence-intro">
              <h2 className="t-title2">Evidence</h2>
              <p className="t-bodysm ink-2">
                Each record backs a claim made above; the reference beside a result, a limitation or a decision points here.
              </p>
            </div>
            <div className="evidence-grid">
              {cs.evidence.map((r) => (
                <EvidenceRecord key={r.ref + r.title} r={r} />
              ))}
            </div>
          </Row>

          <Row n="10" label="Links">
            <h2 className="t-title2">Links</h2>
            <ul className="list-reset links">
              {(cs.links ?? []).map((l) => (
                <li key={l.href}>
                  <span className="t-body">{l.label}</span>
                  <a
                    className="foot-link t-meta"
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${l.label}: ${l.value ?? l.href} (opens in a new tab)`}
                  >
                    {l.value ?? l.href}
                    <Arrow dir="external" />
                  </a>
                </li>
              ))}
            </ul>
          </Row>

          <nav className="ret-grid" aria-label="Project navigation">
            <BackLink slug={project.slug} className="ret ret-back">
              <span className="t-overline ink-2">Return</span>
              <span className="ret-title t-display2">
                <Arrow dir="left" large />
                Back to work
              </span>
            </BackLink>
            <TransitionLink className="ret ret-next" href={`/projects/${next.slug}`} focusId="project-title">
              <span className="t-overline ink-2">Next · Project {next.index}</span>
              <span className="ret-title t-title1">
                {next.title}
                <Arrow large />
              </span>
            </TransitionLink>
          </nav>
        </div>
      </article>
    </main>
  );
}
