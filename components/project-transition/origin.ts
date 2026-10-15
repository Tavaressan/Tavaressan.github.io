"use client";

// De onde o projeto foi aberto (work, archive, capabilities), para o retorno voltar ao mesmo lugar
export type ProjectOrigin = { from: "work" | "archive" | "capabilities"; href: string };

export const ORIGIN_KEY = "vt-origin";

export function rememberOrigin(origin: ProjectOrigin) {
  try {
    window.sessionStorage.setItem(ORIGIN_KEY, JSON.stringify(origin));
  } catch {}
}
