import { academicProjects } from "@/content/projects";
import { TransitionLink } from "../project-transition/transition-link";
import { Arrow } from "../typography/icons";
import "./academic-track.css";

/**
 * Seção de Projetos Acadêmicos na Página Principal (Requisito 9.a da Fatec)
 * Cards dedicados para os 5 primeiros semestres de Desenvolvimento de Software Multiplataforma
 */
export function AcademicTrack() {
  return (
    <section id="academic-track" aria-labelledby="academic-title" className="academic-track pad-x env-paper" data-env="paper">
      <div className="wrap">
        <header className="academic-track__header" data-reveal="wind">
          <p className="t-overline ink-2">Academic Track · Fatec Itaquera</p>
          <h2 id="academic-title" className="t-display2">
            Five semesters, five engineered systems.
          </h2>
          <p className="t-body ink-2" style={{ maxWidth: "60ch", marginTop: "12px" }}>
            Individual project deliverables for Multiplatform Software Development (DSM). Each card links to a full case study with architecture, stack, source code, and personal contribution.
          </p>
        </header>

        <div className="academic-track__grid">
          {academicProjects.map((p) => (
            <TransitionLink
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="academic-card"
              focusId="project-title"
            >
              <div className="academic-card__top">
                <span className="t-overline ink-2">{p.category}</span>
                <h3 className="academic-card__title t-title2">{p.title}</h3>
                <p className="academic-card__summary">{p.summary}</p>
                <div className="academic-card__stack">
                  {p.stack.slice(0, 4).map((tech) => (
                    <span key={tech} className="chip t-meta">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="academic-card__foot">
                <span className="t-meta ink-2">{p.status}</span>
                <span className="entry-cta t-label">
                  View study
                  <Arrow />
                </span>
              </div>
            </TransitionLink>
          ))}
        </div>
      </div>
    </section>
  );
}
