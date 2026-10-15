"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { TransitionLink } from "../project-transition/transition-link";
import "./site-nav.css";

const LINKS = [
  { href: "/projects", label: "Work" },
  { href: "/lab", label: "Lab" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

type Env = "night" | "paper";

// Ambiente inicial por rota, para a barra não piscar antes da primeira medição
const initialEnv = (pathname: string): Env => (pathname.startsWith("/about") ? "paper" : "night");

/** A navegação assume o ambiente (Paper ou Night) da seção que está sob ela */
export function SiteNav() {
  const pathname = usePathname();
  const [env, setEnv] = useState<Env>(() => initialEnv(pathname));
  const [menu, setMenu] = useState(false);
  const [menuFor, setMenuFor] = useState(pathname);

  // O menu fecha ao trocar de rota
  if (menuFor !== pathname) {
    setMenuFor(pathname);
    setMenu(false);
  }

  const sync = useCallback(() => {
    let next: Env = "night";
    document.querySelectorAll("[data-env]").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top <= 36 && r.bottom > 36) next = el.getAttribute("data-env") as Env;
    });
    setEnv(next);
  }, []);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        sync();
      });
    };
    // Primeira medição no próximo quadro, com a rota nova já pintada
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [pathname, sync]);

  const isCurrent = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <nav
      className={`nav env-${env}`}
      aria-label="Primary"
      onKeyDown={(e) => {
        if (e.key === "Escape" && menu) setMenu(false);
      }}
    >
      <TransitionLink className="nav-brand" href="/" mode="back">
        Vitor Tavares
      </TransitionLink>
      <button
        className="nav-menu t-label"
        type="button"
        aria-expanded={menu}
        aria-controls="nav-list"
        onClick={() => setMenu((m) => !m)}
      >
        Menu
      </button>
      <ul id="nav-list" className={menu ? "nav-list is-open" : "nav-list"}>
        {LINKS.map((l) => {
          const current = isCurrent(l.href);
          return (
            <li key={l.href}>
              <TransitionLink
                className={current ? "nav-link t-label is-current" : "nav-link t-label"}
                href={l.href}
                aria-current={current ? "page" : undefined}
                focusId="page-title"
                onClick={() => setMenu(false)}
              >
                {l.label}
              </TransitionLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
