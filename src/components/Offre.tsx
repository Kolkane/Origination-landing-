"use client";

import { useEffect, useRef } from "react";
import { brand } from "@/config/brand";
import { copy } from "@/config/copy";

export default function Offre() {
  const racine = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lignes = Array.from(
      racine.current?.querySelectorAll<HTMLElement>(".row") ?? []
    );
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      lignes.forEach((ligne) => ligne.classList.add("in"));
      return;
    }
    const observateur = new IntersectionObserver(
      (entrees) => {
        entrees.forEach((entree) => {
          if (!entree.isIntersecting) return;
          const cible = entree.target as HTMLElement;
          cible.style.transitionDelay = `${lignes.indexOf(cible) * 120}ms`;
          cible.classList.add("in");
          observateur.unobserve(cible);
        });
      },
      { threshold: 0.3 }
    );
    lignes.forEach((ligne) => observateur.observe(ligne));
    return () => observateur.disconnect();
  }, []);

  const o = copy.offre;
  return (
    <section className="below" id={o.ancre}>
      <div className="wrap">
        <p className="kicker mono">{o.kicker}</p>
        <h2 className="statement">{o.statement}</h2>

        <div className="rows" ref={racine}>
          {o.lignes.map((ligne) => (
            <div className="row" key={ligne.num}>
              <span className="n mono">{ligne.num}</span>
              <h3>{ligne.titre}</h3>
              <p>{ligne.texte}</p>
            </div>
          ))}
        </div>

        <p className="facts mono">
          {o.faitsAvant}
          <b>{o.faitsFort}</b>
          {o.faitsApres}
        </p>

        <a
          className="cta mono"
          href={brand.CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {o.cta}
        </a>
      </div>
    </section>
  );
}
