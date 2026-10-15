"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { selectedProjects } from "@/content/projects";
import { useMediaQuery } from "../media/use-media-query";
import { prefersReducedMotion, returnState, setBand } from "../project-transition/navigate";
import { rememberOrigin } from "../project-transition/origin";
import { TransitionLink } from "../project-transition/transition-link";
import { ProjectFigure } from "../project-entry/project-figure";
import { Arrow } from "../typography/icons";
import "./selected-work.css";

// A travessia fixada só vale com movimento permitido e janela alta o bastante para o conteúdo
// (mesma media query de selected-work.css); fora disso a faixa é um scroll horizontal nativo
const PINNED =
  "(min-width: 1280px) and (min-height: 640px) and (prefers-reduced-motion: no-preference), " +
  "(min-width: 1024px) and (min-height: 680px) and (prefers-reduced-motion: no-preference)";
const TOTAL = selectedProjects.length;

/** Percurso total da faixa: termina quando a porta do arquivo chega ao centro da janela, não à borda */
function railTravel(rail: HTMLElement) {
  const slides = rail.querySelectorAll<HTMLElement>(".slide");
  const last = slides[slides.length - 1];
  const edge = Math.max(0, rail.scrollWidth - rail.clientWidth);
  if (!last) return edge;
  const center = last.offsetLeft + last.offsetWidth / 2 - rail.clientWidth / 2;
  return Math.max(edge, Math.round(center));
}

/** Projeto mais próximo da posição atual */
function nearestSlide(rail: HTMLElement, shift: number) {
  const slides = rail.querySelectorAll<HTMLElement>(".slide");
  let best = 0;
  let dist = Infinity;
  slides.forEach((el, i) => {
    const d = Math.abs(el.offsetLeft - slides[0].offsetLeft - shift);
    if (d < dist) {
      dist = d;
      best = i;
    }
  });
  return best;
}

/**
 * Selected Work: jornada horizontal fixada dentro do fluxo vertical. A posição do scroll vertical
 * dentro da seção define o deslocamento da faixa; nenhum evento de wheel é interceptado.
 */
export function SelectedWork() {
  const secRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLOListElement>(null);
  const pinned = useMediaQuery(PINNED);
  const [slide, setSlide] = useState(0);
  const [lastSlug, setLastSlug] = useState<string | null>(null);

  const syncRail = useCallback(() => {
    const sec = secRef.current;
    const pin = pinRef.current;
    const rail = railRef.current;
    if (!sec || !pin || !rail) return;
    if (!pinned) {
      sec.style.height = "";
      rail.style.transform = "";
      return;
    }
    const max = railTravel(rail);
    const height = pin.offsetHeight + max + "px";
    if (sec.style.height !== height) sec.style.height = height;
    const shift = Math.max(0, Math.min(max, -sec.getBoundingClientRect().top));
    rail.style.transform = `translate3d(${-shift}px, 0, 0)`;
    setSlide(nearestSlide(rail, shift));
  }, [pinned]);

  // Controles auxiliares (teclado, foco, retorno) pedem um projeto; quem move é o scroll
  const railTo = useCallback(
    (i: number, instant = false) => {
      const sec = secRef.current;
      const rail = railRef.current;
      if (!sec || !rail) return;
      const slides = rail.querySelectorAll<HTMLElement>(".slide");
      const n = Math.max(0, Math.min(slides.length - 1, i));
      if (!slides[n]) return;
      const offset = slides[n].offsetLeft - slides[0].offsetLeft;
      const behavior: ScrollBehavior = instant || prefersReducedMotion() ? "instant" : "smooth";
      if (pinned) {
        syncRail();
        const top = sec.getBoundingClientRect().top + window.scrollY + Math.min(offset, railTravel(rail));
        window.scrollTo({ top, behavior });
        if (instant) syncRail();
        return;
      }
      rail.scrollTo({ left: offset, behavior });
    },
    [pinned, syncRail],
  );

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        syncRail();
      });
    };
    syncRail();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [syncRail]);

  // Retorno de um projeto: a travessia volta à mesma prancha antes do snapshot da transição
  useLayoutEffect(() => {
    const slug = returnState.slug;
    const i = selectedProjects.findIndex((p) => p.slug === slug);
    const sec = secRef.current;
    const pin = pinRef.current;
    const rail = railRef.current;
    if (!slug || i < 0 || !sec || !pin || !rail) return;
    const slides = rail.querySelectorAll<HTMLElement>(".slide");
    const offset = slides[i].offsetLeft - slides[0].offsetLeft;
    const secTop = () => sec.getBoundingClientRect().top + window.scrollY;
    if (window.matchMedia(PINNED).matches) {
      const max = railTravel(rail);
      const shift = Math.min(offset, max);
      sec.style.height = pin.offsetHeight + max + "px";
      window.scrollTo({ top: secTop() + shift, behavior: "instant" });
      rail.style.transform = `translate3d(${-shift}px, 0, 0)`;
    } else {
      window.scrollTo({ top: secTop(), behavior: "instant" });
      rail.scrollTo({ left: offset, behavior: "instant" });
    }
    const entry = document.getElementById(`entry-${slug}`);
    const link = entry?.querySelector<HTMLElement>(".entry");
    link?.setAttribute("data-vt-source", "");
    setBand(entry ?? null);
    link?.focus({ preventScroll: true });
    setLastSlug(slug);
    setSlide(i);
  }, []);

  const index = String(Math.min(slide, TOTAL - 1) + 1).padStart(2, "0");

  return (
    <section
      ref={secRef}
      id="work"
      aria-labelledby="work-title"
      className="work env-night"
      data-env="night"
      data-pinned={pinned ? "" : undefined}
      onKeyDown={(e) => {
        if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
        e.preventDefault();
        railTo(slide + (e.key === "ArrowRight" ? 1 : -1));
      }}
    >
      <div className="ruler" aria-hidden="true" />
      <div ref={pinRef} className="pin">
        <div className="pad-x">
          <header className="g12 wrap work__header">
            <div className="heading work__heading" data-reveal="wind">
              <p className="t-overline ink-2">Selected work</p>
              <h2 id="work-title" className="t-display2">
                Three projects, each drawn in full.
              </h2>
            </div>
            {/* Índice informativo: só os três projetos contam; a porta para o arquivo não é um "04" */}
            <p className="t-meta ink-2 tabular work__index" role="status" aria-live="polite" aria-label={`Project ${Number(index)} of ${TOTAL}`}>
              <span className="work__index-current">{index}</span> / {String(TOTAL).padStart(2, "0")}
            </p>
          </header>
        </div>
        <ol
          ref={railRef}
          className="rail"
          tabIndex={-1}
          aria-label="Selected projects"
          onScroll={(e) => {
            if (!pinned) setSlide(nearestSlide(e.currentTarget, e.currentTarget.scrollLeft));
          }}
        >
          {selectedProjects.map((p, i) => {
            const cs = p.caseStudy!;
            const cls = ["entry", "g12", lastSlug === p.slug && "is-open", slide === i && "is-current"].filter(Boolean).join(" ");
            return (
              <li key={p.slug} id={`entry-${p.slug}`} className="slide">
                <TransitionLink
                  className={cls}
                  href={`/projects/${p.slug}`}
                  mode="open"
                  shareSource
                  focusId="project-title"
                  onBeforeNavigate={() => rememberOrigin({ from: "work", href: "/#work" })}
                  onFocus={() => {
                    if (pinned && slide !== i) railTo(i);
                  }}
                >
                  <p className="t-overline ink-2 entry__index" data-vt-part="index">
                    Project {p.index}
                  </p>
                  <div className="entry__body">
                    <p className="t-overline ink-2 entry__category">{p.category}</p>
                    <h3 className="t-title1" data-vt-part="title">
                      {p.title}
                    </h3>
                    <p className="t-meta ink-2">{cs.stackLine.join(" · ")}</p>
                    <p className="t-body entry__summary">{p.summary}</p>
                    <dl className="entry__facts">
                      <div>
                        <dt className="t-overline ink-2">Status</dt>
                        <dd className="t-meta">{p.status}</dd>
                      </div>
                      <div>
                        <dt className="t-overline ink-2">Evidence</dt>
                        <dd className="t-meta entry__evidence">
                          <span className="mark is-confirmed" aria-hidden="true" />
                          {cs.evidenceMark}
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div className="entry-figure" aria-hidden="true">
                    <span className="tick tl" />
                    <span className="tick tr" />
                    <span className="tick bl" />
                    <span className="tick br" />
                    <div className="entry-sheet sheet-grid" data-vt-part="sheet">
                      <ProjectFigure slug={p.slug} />
                    </div>
                  </div>
                  <div className="entry__foot">
                    <span className="rule-line" data-reveal="rule" aria-hidden="true">
                      <span className="rule-ink" />
                    </span>
                    <span className="entry-cta t-label">
                      <Arrow />
                      Open project
                    </span>
                  </div>
                </TransitionLink>
              </li>
            );
          })}
          {/* A última parada da jornada é uma porta para o arquivo, não um quarto projeto */}
          <li className="slide slide-exit">
            <TransitionLink
              className="exit"
              href="/projects"
              focusId="page-title"
              onFocus={() => {
                if (pinned && slide !== TOTAL) railTo(TOTAL);
              }}
            >
              <span className="exit__body">
                <span className="t-overline ink-2 exit__overline">Project archive</span>
                <span className="t-title1">View all projects</span>
                <span className="t-body ink-2 exit__text">The selection ends here. The archive holds everything else, academic track included.</span>
              </span>
              <span className="entry__foot">
                <span className="rule-line" aria-hidden="true">
                  <span className="rule-ink" />
                </span>
                <span className="entry-cta t-label">
                  <Arrow />
                  Open the archive
                </span>
              </span>
            </TransitionLink>
          </li>
        </ol>
      </div>
    </section>
  );
}
