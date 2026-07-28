"use client";

import { useEffect } from "react";

/* apparitions .rev au scroll, calquées sur le script de MAQUETTE-V8.html :
   threshold .18, une seule fois ; reduced-motion = tout statique (le CSS
   force déjà l'état visible, on marque .in par cohérence) */
export default function Reveal() {
  useEffect(() => {
    const revs = Array.from(document.querySelectorAll<HTMLElement>(".rev"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revs.forEach((r) => r.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entrees) => {
        entrees.forEach((entree) => {
          if (!entree.isIntersecting) return;
          entree.target.classList.add("in");
          io.unobserve(entree.target);
        });
      },
      { threshold: 0.18 }
    );
    revs.forEach((r) => io.observe(r));
    return () => io.disconnect();
  }, []);

  return null;
}
