"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";
import { navigate, type ArrivalScroll, type TransitionMode } from "./navigate";

type Props = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
  mode?: TransitionMode;
  scrollTo?: ArrivalScroll;
  focusId?: string;
  /** Marca o próprio link como portador dos nomes compartilhados (abrir projeto) */
  shareSource?: boolean;
  /** Executado antes da navegação, ex.: lembrar a origem */
  onBeforeNavigate?: () => void;
};

const isModified = (e: MouseEvent) => e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;

/** Link real (funciona sem JS e em nova aba); com JS, a navegação passa pela transição da família certa */
export function TransitionLink({ href, mode = "forward", scrollTo, focusId, shareSource, onBeforeNavigate, onClick, ...rest }: Props) {
  const router = useRouter();
  return (
    <Link
      href={href}
      {...rest}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented || isModified(e) || rest.target === "_blank") return;
        e.preventDefault();
        onBeforeNavigate?.();
        navigate(router, href, {
          mode,
          scroll: scrollTo,
          focus: focusId,
          source: shareSource ? e.currentTarget : null,
        });
      }}
    />
  );
}
