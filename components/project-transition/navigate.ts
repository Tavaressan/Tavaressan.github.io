"use client";

import type { useRouter } from "next/navigation";

type Router = ReturnType<typeof useRouter>;

/**
 * open/return: Draft + Flight com índice, título e prancha compartilhados;
 * forward/back: Wind. Com movimento reduzido, tudo vira um cross-fade curto (fade).
 */
export type TransitionMode = "forward" | "back" | "open" | "return";

export type ArrivalScroll = { id: string; offset?: number } | "top" | "none";

export type NavigateOptions = {
  mode: TransitionMode;
  /** Elemento que leva os nomes compartilhados no estado antigo (a entrada aberta) */
  source?: HTMLElement | null;
  scroll?: ArrivalScroll;
  /** id do elemento a focar ao chegar */
  focus?: string;
};

const REDUCED = "(prefers-reduced-motion: reduce)";
const SETTLE_TIMEOUT = 2500;

let pending: (() => void) | null = null;
let arrival: (() => void) | null = null;

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && !!window.matchMedia && window.matchMedia(REDUCED).matches;

/** Estado do retorno à Home: a travessia de Selected Work se posiciona antes do snapshot novo */
export const returnState: { slug: string | null } = { slug: null };

/** Faixa da entrada na tela: a prancha do detalhe desenrola sobre ela antes de abrir na altura toda */
export function setBand(el: Element | null) {
  if (!el) return;
  const r = el.getBoundingClientRect();
  const st = document.documentElement.style;
  st.setProperty("--vt-top", Math.max(0, Math.round(r.top)) + "px");
  st.setProperty("--vt-bottom", Math.max(0, Math.round(window.innerHeight - r.bottom)) + "px");
}

function focusById(id?: string) {
  if (!id) return;
  const el = document.getElementById(id);
  if (!el) return;
  const target = el.matches("a, button, [tabindex]") ? el : (el.querySelector<HTMLElement>("a, button") ?? el);
  target.focus({ preventScroll: true });
}

function scrollOnArrival(scroll: ArrivalScroll) {
  if (scroll === "none") return;
  if (scroll === "top") {
    window.scrollTo({ top: 0, behavior: "instant" });
    return;
  }
  const el = document.getElementById(scroll.id);
  const top = el ? el.getBoundingClientRect().top + window.scrollY - (scroll.offset ?? 0) : 0;
  window.scrollTo({ top: Math.max(0, top), behavior: "instant" });
}

/** Chamado pelo layout depois que a nova rota foi montada */
export function settleNavigation() {
  const a = arrival;
  arrival = null;
  a?.();
  const p = pending;
  pending = null;
  p?.();
  returnState.slug = null;
}

function pathOf(href: string) {
  return new URL(href, window.location.href);
}

export function navigate(router: Router, href: string, opts: NavigateOptions) {
  const url = pathOf(href);
  const hashId = url.hash ? decodeURIComponent(url.hash.slice(1)) : "";
  const scroll: ArrivalScroll = opts.scroll ?? (hashId ? { id: hashId } : "top");
  const samePage = url.pathname === window.location.pathname && url.search === window.location.search;

  // Mesma página: só desloca; nenhuma transição de rota
  if (samePage) {
    if (hashId) document.getElementById(hashId)?.scrollIntoView({ behavior: prefersReducedMotion() ? "instant" : "smooth" });
    else window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "instant" : "smooth" });
    if (hashId) history.replaceState(history.state, "", url.pathname + url.search + url.hash);
    return;
  }

  const onArrive = () => {
    scrollOnArrival(scroll);
    focusById(opts.focus);
  };

  const doc = document as Document & {
    startViewTransition?: (cb: () => Promise<void>) => { finished: Promise<void> };
  };
  const push = () => router.push(url.pathname + url.search + url.hash, { scroll: false });

  if (!doc.startViewTransition) {
    arrival = onArrive;
    push();
    return;
  }

  const mode = prefersReducedMotion() ? "fade" : opts.mode;
  const root = document.documentElement;
  const source = opts.source ?? null;
  if (source && opts.mode === "open") setBand(source);
  if (source) source.setAttribute("data-vt-source", "");
  root.setAttribute("data-vt", mode);

  const update = () =>
    new Promise<void>((resolve) => {
      let done = false;
      const finish = () => {
        if (done) return;
        done = true;
        resolve();
      };
      pending = finish;
      arrival = onArrive;
      push();
      // A transição nunca fica presa se a rota demorar
      setTimeout(() => {
        if (done) return;
        settleNavigation();
      }, SETTLE_TIMEOUT);
    });

  try {
    const t = doc.startViewTransition(update);
    t.finished.finally(() => {
      root.removeAttribute("data-vt");
      source?.removeAttribute("data-vt-source");
      document.querySelectorAll("[data-vt-source]").forEach((el) => el.removeAttribute("data-vt-source"));
    });
  } catch {
    root.removeAttribute("data-vt");
    source?.removeAttribute("data-vt-source");
    arrival = onArrive;
    push();
  }
}
