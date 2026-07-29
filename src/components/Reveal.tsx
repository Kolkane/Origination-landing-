"use client";

import { useEffect } from "react";

/* Apparitions au scroll : fade des blocs .rev, dévoilement par masque des
   grands titres .mask, tracé des filets .rule. Une seule fois.

   Un élément masqué par clip-path a une aire d'intersection nulle : le
   navigateur ne le considère jamais comme visible et il ne se révélerait
   jamais. On observe donc son parent, qui n'est pas masqué, et on révèle
   l'enfant. */
export default function Reveal() {
  useEffect(() => {
    const masques = Array.from(document.querySelectorAll<HTMLElement>(".mask"));
    const simples = Array.from(
      document.querySelectorAll<HTMLElement>(".rev, .rule")
    ).filter((e) => !e.classList.contains("mask"));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      [...masques, ...simples].forEach((e) => e.classList.add("in"));
      return;
    }

    /* un parent peut porter plusieurs titres masqués */
    const parDeclencheur = new Map<Element, HTMLElement[]>();
    const inscrire = (declencheur: Element, cible: HTMLElement) => {
      const liste = parDeclencheur.get(declencheur) ?? [];
      liste.push(cible);
      parDeclencheur.set(declencheur, liste);
    };

    masques.forEach((m) => inscrire(m.parentElement ?? m, m));
    simples.forEach((s) => inscrire(s, s));

    const io = new IntersectionObserver(
      (entrees) => {
        entrees.forEach((entree) => {
          if (!entree.isIntersecting) return;
          (parDeclencheur.get(entree.target) ?? []).forEach((cible) =>
            cible.classList.add("in")
          );
          io.unobserve(entree.target);
        });
      },
      { threshold: 0.16 }
    );

    parDeclencheur.forEach((_, declencheur) => io.observe(declencheur));
    return () => io.disconnect();
  }, []);

  return null;
}
