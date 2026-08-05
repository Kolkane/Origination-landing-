"use client";

import { useEffect, useRef, useState } from "react";
import { copy } from "@/config/copy";

/* v15 · B2 : manifeste. Grille 2×2, filets en croix, l'explication posée
   directement sous son principe : le grand vide horizontal de la version en
   lignes pleine largeur séparait l'énoncé de sa justification, on lisait deux
   colonnes au lieu de quatre engagements. Le titre est réduit et la bande
   d'en-tête porte l'intro à sa droite.
   Aucun rouge ici, la section tient par le blanc et les filets.

   Les quatre cellules se révèlent en cascade à l'entrée de la section, une
   seule fois. Même mécanisme que l'entonnoir : la section est sous la ligne
   de flottaison, une animation CSS au chargement serait terminée avant que
   le lecteur n'arrive dessus. Le texte, lui, est dans le DOM dès le rendu
   serveur : l'animation ne retarde que son apparition. */
export default function Engagements() {
  const e = copy.engagements;
  const ref = useRef<HTMLDivElement>(null);
  const [revele, setRevele] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevele(true);
      return;
    }
    const cible = ref.current;
    if (!cible) return;
    const io = new IntersectionObserver(
      (entrees) => {
        entrees.forEach((entree) => {
          if (!entree.isIntersecting) return;
          setRevele(true);
          io.disconnect();
        });
      },
      { threshold: 0.25 }
    );
    io.observe(cible);
    return () => io.disconnect();
  }, []);

  return (
    <section className="commit" id="engagements">
      <div className="wrap">
        <div className="c-tete">
          <div className="c-tete-titre">
            <p className="c-kicker kicker mono rev">{e.kicker}</p>
            <h2 className="c-statement mask rev">{e.statement}</h2>
          </div>
          <p className="c-intro rev">{e.intro}</p>
        </div>

        <div className={`c-grille${revele ? " revelee" : ""}`} ref={ref}>
          {e.nots.map((item) => (
            <div className="c-cell" key={item.fort}>
              <p className="c-p">{item.fort}</p>
              <p className="c-e">{item.suite}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
