"use client";

import { useState } from "react";
import { capabilities } from "@/content/capabilities";
import { selectedProjects } from "@/content/projects";
import { rememberOrigin } from "../project-transition/origin";
import { TransitionLink } from "../project-transition/transition-link";
import { Arrow } from "../typography/icons";
import "./capabilities.css";

const indexOf = (slug: string) => selectedProjects.find((p) => p.slug === slug)?.index ?? "";

/** Linhas de sumário técnico, abertas no lugar (MACHINE): cada uma aponta para projeto e evidência reais */
export function Capabilities() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="capabilities" aria-labelledby="cap-title" className="capabilities pad-x env-paper" data-env="paper">
      <div className="wrap capabilities__inner">
        <header className="g12">
          <div className="heading capabilities__heading" data-reveal="wind">
            <p className="t-overline ink-2">Capabilities</p>
            <h2 id="cap-title" className="t-display2">
              What I build, and where it is backed.
            </h2>
          </div>
        </header>
        <ol className="list-reset cap-list">
          {capabilities.map((c) => {
            const expanded = open === c.index;
            const panelId = `cap-panel-${c.index}`;
            return (
              <li key={c.index} className="cap-item">
                <button
                  className="cap g12"
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  onClick={() => setOpen(expanded ? null : c.index)}
                >
                  <span className="t-meta ink-2 cap__n">{c.index}</span>
                  <span className="cap__title">
                    <span className="t-title2 caps">{c.title}</span>
                    <span className="t-meta ink-2">{c.technologies.join(" · ")}</span>
                  </span>
                  <span className="t-meta cap__projects">Projects {c.projectSlugs.map(indexOf).join(" · ")}</span>
                  <span className="t-meta cap__evidence">Evidence {c.evidenceRefs.join(" · ")}</span>
                  <span className="cap__arrow">
                    <Arrow />
                  </span>
                </button>
                <div id={panelId} className={expanded ? "m-disclosure is-open" : "m-disclosure"}>
                  <div>
                    <div className="g12 cap__panel">
                      <p className="t-body cap__details">{c.details}</p>
                      <ul className="list-reset cap__links">
                        {c.projectSlugs.map((slug) => (
                          <li key={slug}>
                            <TransitionLink
                              className="ul-link t-label"
                              href={`/projects/${slug}`}
                              focusId="project-title"
                              onBeforeNavigate={() => rememberOrigin({ from: "capabilities", href: "/#capabilities" })}
                            >
                              Open project {indexOf(slug)}
                              <Arrow />
                            </TransitionLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
