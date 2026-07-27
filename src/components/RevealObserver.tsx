"use client";

import { useEffect } from "react";

/* pose l'état masqué uniquement sur les blocs [data-reveal] encore sous la
   ligne de flottaison, puis les révèle une fois à leur entrée dans le
   viewport — fade 200ms, conforme prefers-reduced-motion */
export default function RevealObserver() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const blocs = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    ).filter((bloc) => bloc.getBoundingClientRect().top > window.innerHeight);
    if (blocs.length === 0) return;

    const observateur = new IntersectionObserver(
      (entrees) => {
        for (const entree of entrees) {
          if (!entree.isIntersecting) continue;
          entree.target.classList.remove("pre-reveal");
          entree.target.classList.add("revele");
          observateur.unobserve(entree.target);
        }
      },
      { rootMargin: "0px 0px -40px 0px" }
    );

    for (const bloc of blocs) {
      bloc.classList.add("pre-reveal");
      observateur.observe(bloc);
    }
    return () => observateur.disconnect();
  }, []);

  return null;
}
