import { contact, contactLinks, site } from "@/content/site";
import { LiveClock } from "../live-clock/live-clock";
import { Arrow } from "../typography/icons";
import "./horizon.css";

/** Horizon: um fim calmo. Em /contact é o conteúdo principal da página; nas demais, o rodapé. */
export function Horizon({ standalone = false }: { standalone?: boolean }) {
  const Root = standalone ? "section" : "footer";
  const Title = standalone ? "h1" : "h2";
  return (
    <Root
      id="contact"
      className="horizon pad-x env-night horizon-sky"
      data-env="night"
      aria-labelledby={standalone ? "page-title" : undefined}
    >
      <div className="wrap horizon__inner">
        <div className="g12 horizon__top">
          <div className="heading horizon__heading" data-reveal="wind">
            <p className="t-overline ink-2">{contact.overline}</p>
            <Title id={standalone ? "page-title" : undefined} tabIndex={standalone ? -1 : undefined} className="t-display2 page-title">
              {contact.title}
            </Title>
          </div>
          <ul className="list-reset horizon__links">
            {contactLinks.map((l) => (
              <li key={l.label}>
                {l.href ? (
                  <a className="foot-link t-title3" href={l.href} target="_blank" rel="noopener noreferrer" aria-label={`${l.label} (opens in a new tab)`}>
                    {l.label}
                    <Arrow dir="external" />
                  </a>
                ) : (
                  <span className="foot-link t-title3 horizon__missing">
                    {l.label} {contact.missing}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="horizon__base">
          <span className="horizon-line" data-reveal="rule" aria-hidden="true" />
          <div className="horizon__meta">
            <p className="t-overline ink-2">
              {site.name} · {site.location}
            </p>
            <LiveClock />
          </div>
        </div>
      </div>
    </Root>
  );
}
