"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { settleNavigation } from "./navigate";

/** No layout: os efeitos dos filhos (a página nova) rodam antes deste, então a rota já está montada */
export function RouteSettled() {
  const pathname = usePathname();
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    settleNavigation();
  }, [pathname]);
  return null;
}
