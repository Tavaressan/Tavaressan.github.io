"use client";

import { useEffect, useRef } from "react";

const format = () => {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      timeZone: "America/Sao_Paulo",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).format(new Date());
  } catch {
    return "";
  }
};

/**
 * Assinatura editorial: hora local de São Paulo. Troca só o texto do próprio nó, sem redesenhar a
 * página a cada segundo. Sem JS, fica só a localização e o fuso.
 */
export function LiveClock() {
  const ref = useRef<HTMLTimeElement>(null);
  useEffect(() => {
    const tick = () => {
      if (ref.current) ref.current.textContent = format();
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div role="group" aria-label="Local time in São Paulo" className="t-overline clock">
      <span>São Paulo · UTC−03</span>
      <time ref={ref} className="tabular" aria-hidden="true" suppressHydrationWarning />
    </div>
  );
}
