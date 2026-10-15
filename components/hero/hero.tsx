"use client";

import { useEffect, useRef, useState } from "react";
import { hero } from "@/content/site";
import { useReducedMotion } from "../media/use-media-query";
import { Arrow } from "../typography/icons";
import "./hero.css";

const POSTER = "/media/hero-poster.webp";

export function Hero() {
  const video = useRef<HTMLVideoElement>(null);
  const header = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  // null: o usuário ainda não escolheu; o padrão segue prefers-reduced-motion
  const [choice, setChoice] = useState<boolean | null>(null);
  const paused = choice ?? reduced;

  useEffect(() => {
    const v = video.current;
    const h = header.current;
    if (!v || !h) return;
    v.muted = true;
    // A cena fica fixa atrás da página; fora de vista ela para, sem mudar a escolha do usuário
    const update = () => {
      const visible = window.scrollY < h.offsetHeight * 1.2;
      if (!paused && visible) v.play().catch(() => {});
      else v.pause();
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [paused]);

  return (
    <header id="top" ref={header} className="hero env-night" data-env="night">
      <div className="hero-stage" role="img" aria-label={hero.sceneLabel}>
        <video
          ref={video}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={POSTER}
          aria-hidden="true"
        >
          <source src="/media/hero.webm" type="video/webm" />
          <source src="/media/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-scrim" aria-hidden="true" />
      </div>
      <div className="hero-copy">
        <p className="t-overline">{hero.overline}</p>
        <h1 className="t-display1">{hero.title}</h1>
        <p className="t-lead hero-lead">{hero.lead}</p>
        <div className="hero-actions">
          <a className="cta t-label" href="#work">
            View work
            <Arrow />
          </a>
          <button className="scene-btn t-overline" type="button" onClick={() => setChoice(!paused)}>
            <svg viewBox="0 0 12 12" aria-hidden="true">
              <path d={paused ? "M2 1l9 5-9 5z" : "M2 1h3v10H2zM7 1h3v10H7z"} />
            </svg>
            <span>{paused ? "Play scene" : "Pause scene"}</span>
          </button>
          <a className="cue t-overline" href="#intro" aria-label="Scroll to the manifesto">
            Scroll
            <Arrow dir="down" />
          </a>
        </div>
      </div>
    </header>
  );
}
