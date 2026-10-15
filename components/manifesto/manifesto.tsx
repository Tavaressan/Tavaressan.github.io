import { manifesto } from "@/content/site";
import "./manifesto.css";

const PETAL = "M1 8C5 1 14 0 21 5c-4 1-5 3-6 6C10 15 4 13 1 8z";

/** Paper: a passagem do cinema para a leitura analítica */
export function Manifesto() {
  return (
    <section id="intro" aria-labelledby="intro-title" className="manifesto pad-x env-paper" data-env="paper">
      <div className="petals" data-reveal="petal" aria-hidden="true">
        {Array.from({ length: 5 }, (_, i) => (
          <svg key={i} className="petal" viewBox="0 0 22 16">
            <path d={PETAL} />
          </svg>
        ))}
      </div>
      <div className="g12 wrap manifesto__grid">
        <div className="g12 manifesto__head" data-reveal="wind">
          <div className="heading manifesto__title">
            <p className="t-overline ink-2">{manifesto.overline}</p>
            <h2 id="intro-title" className="t-display2">
              {manifesto.title}
            </h2>
          </div>
          <p className="t-lead manifesto__lead">{manifesto.lead}</p>
        </div>
        <ol className="steps list-reset" aria-label="How I work">
          {manifesto.steps.map((s) => (
            <li key={s.index} className="step">
              <span className="draw-rule" data-reveal="rule" aria-hidden="true" />
              <p className="t-overline ink-2 step__index">{s.index}</p>
              <h3 className="t-title3">{s.title}</h3>
              <p className="t-bodysm ink-2">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
