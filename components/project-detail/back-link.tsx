"use client";

import { useSyncExternalStore, type ReactNode } from "react";
import { returnState } from "../project-transition/navigate";
import { ORIGIN_KEY, type ProjectOrigin } from "../project-transition/origin";
import { TransitionLink } from "../project-transition/transition-link";

const noop = () => () => {};
const readRaw = () => {
  try {
    return window.sessionStorage.getItem(ORIGIN_KEY);
  } catch {
    return null;
  }
};

/**
 * Volta ao lugar de onde o projeto foi aberto: a prancha de Selected Work (retorno compartilhado),
 * a linha do arquivo ou as Capabilities. Sem origem conhecida, volta para Selected Work.
 */
export function BackLink({ slug, className, children }: { slug: string; className: string; children: ReactNode }) {
  const raw = useSyncExternalStore(noop, readRaw, () => null);
  let origin: ProjectOrigin | null = null;
  try {
    origin = raw ? (JSON.parse(raw) as ProjectOrigin) : null;
  } catch {}

  if (origin?.from === "archive") {
    return (
      <TransitionLink
        className={className}
        href={origin.href}
        mode="back"
        scrollTo={{ id: `arow-${slug}`, offset: 160 }}
        focusId={`arow-${slug}`}
      >
        {children}
      </TransitionLink>
    );
  }
  if (origin?.from === "capabilities") {
    return (
      <TransitionLink className={className} href="/#capabilities" mode="back" scrollTo={{ id: "capabilities" }}>
        {children}
      </TransitionLink>
    );
  }
  return (
    <TransitionLink
      className={className}
      href="/#work"
      mode="return"
      scrollTo="none"
      onBeforeNavigate={() => {
        returnState.slug = slug;
      }}
    >
      {children}
    </TransitionLink>
  );
}
