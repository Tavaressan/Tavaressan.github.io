import { selectedProjects } from "@/content/projects";
import { workbench, workbenchGroups } from "@/content/workbench";
import { CONTENT_REQUIRED, STATUS_REQUIRED } from "@/content/placeholders";
import "../track-record/track-record.css";
import "./workbench.css";

const usedIn = (slugs: string[] = []) => {
  const idx = slugs.map((s) => selectedProjects.find((p) => p.slug === s)?.index).filter(Boolean);
  if (!idx.length) return CONTENT_REQUIRED;
  return (idx.length > 1 ? "Projects " : "Project ") + idx.join(" · ");
};

/** Bancada: o que é, por que é usado, onde. Só o que é realmente usado. */
export function Workbench() {
  return (
    <section id="lab" aria-labelledby="page-title" className="lab pad-x env-night sheet-grid" data-env="night">
      <div className="wrap lab__inner">
        <header className="g12">
          <div className="heading lab__heading" data-reveal="wind">
            <p className="t-overline ink-2">Workbench</p>
            <h1 id="page-title" tabIndex={-1} className="t-display2 page-title">
              What is on the bench, and what it is there for.
            </h1>
          </div>
        </header>
        <div className="lab__groups">
          <div className="brow g12 col-heads t-overline ink-2" aria-hidden="true">
            <span className="wb__item">Item · what it is</span>
            <span className="wb__why">Why · where</span>
            <span className="wb__used">Related project · status</span>
          </div>
          {workbenchGroups.map((group) => {
            const items = workbench.filter((w) => w.group === group);
            return (
              <section key={group} aria-label={group} className="lab__group">
                <h2 className="t-overline lab__group-title">{group}</h2>
                <div>
                  {items.length === 0 && (
                    <div className="brow g12">
                      <p className="t-bodysm ink-2 wb__item">{CONTENT_REQUIRED}</p>
                    </div>
                  )}
                  {items.map((b) => (
                    <div key={b.name} className="brow g12">
                      <div className="wb__item">
                        <h3 className="t-title3">{b.name}</h3>
                        <p className="t-bodysm ink-2">{b.kind}</p>
                      </div>
                      <dl className="t-bodysm wb__why wb__facts">
                        <dt className="t-overline ink-2">Why</dt>
                        <dd>{b.purpose ?? CONTENT_REQUIRED}</dd>
                        <dt className="t-overline ink-2">Where</dt>
                        <dd>{b.where}</dd>
                      </dl>
                      <dl className="t-meta wb__used">
                        <dt className="t-overline ink-2">Used in</dt>
                        <dd>{usedIn(b.relatedProjects)}</dd>
                        <dt className="t-overline ink-2 wb__status">Status</dt>
                        <dd>{b.status ?? STATUS_REQUIRED}</dd>
                      </dl>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
