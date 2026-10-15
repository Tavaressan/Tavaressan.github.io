"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { prefersReducedMotion, returnState } from "../project-transition/navigate";

const PETAL_KEY = "vt-petal";

const petalSeen = () => {
  try {
    return window.sessionStorage.getItem(PETAL_KEY) === "1";
  } catch {
    return false;
  }
};

/**
 * Wind e Draft entram quando o elemento chega à tela; Petal passa uma única vez por sessão.
 * O atributo html[data-motion="on"] é ligado antes da pintura (script em app/layout.tsx);
 * sem JS ou com movimento reduzido, o conteúdo já nasce visível.
 */
export function MotionController() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      root.removeAttribute("data-motion");
      return;
    }
    root.setAttribute("data-motion", "on");

    const isPetal = (el: Element) => el.getAttribute("data-reveal") === "petal";
    const pending = () => document.querySelectorAll("[data-reveal]:not([data-in]):not([data-done])");

    // Ao voltar de um projeto a lista reaparece já desenhada: a transição de retorno é o único movimento
    if (returnState.slug) {
      pending().forEach((el) => el.setAttribute(isPetal(el) ? "data-done" : "data-in", ""));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const el = en.target;
          io.unobserve(el);
          if (isPetal(el)) {
            if (petalSeen()) {
              el.setAttribute("data-done", "");
              return;
            }
            try {
              window.sessionStorage.setItem(PETAL_KEY, "1");
            } catch {}
          }
          el.setAttribute("data-in", "");
        });
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    const observe = () => pending().forEach((el) => io.observe(el));
    observe();
    // Partes renderizadas depois (ex.: resultados do arquivo) também entram
    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
