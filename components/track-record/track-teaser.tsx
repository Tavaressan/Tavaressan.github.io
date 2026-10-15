import { trackTeaser } from "@/content/experience";
import { TransitionLink } from "../project-transition/transition-link";
import { Arrow } from "../typography/icons";
import "./track-record.css";

/** Home: só o resumo que aponta para /about */
export function TrackTeaser() {
  return (
    <section id="track" aria-labelledby="track-title" className="track pad-x env-paper" data-env="paper">
      <div className="g12 wrap track__grid">
        <div className="heading track__heading" data-reveal="wind">
          <p className="t-overline ink-2">Track record</p>
          <h2 id="track-title" className="t-display2">
            Where the work happened.
          </h2>
        </div>
        <ol className="list-reset track__list">
          {trackTeaser.map((t) => (
            <li key={t.organization} className="g12 track__row">
              <span className="t-title3 track__org">{t.organization}</span>
              <span className="t-body track__summary">{t.summary}</span>
            </li>
          ))}
        </ol>
        <p className="track__more">
          <TransitionLink className="cta t-label" href="/about" focusId="page-title">
            About
            <Arrow />
          </TransitionLink>
        </p>
      </div>
    </section>
  );
}
