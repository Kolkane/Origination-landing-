"use client";

import { useEffect, useRef } from "react";

/* Le Losange Facetté — objet signature du hero (3e emploi de l'outremer).
   18 facettes triangulaires : couronne de 12 entre le losange extérieur
   (sommets + milieux d'arêtes décalés) et un quadrilatère intérieur
   irrégulier, + 6 facettes internes. Triangulation géométrique, pas
   organique. `lueur` ordonne le parcours de la lumière ; `opacite` est
   l'état statique (et prefers-reduced-motion). */
const FACETTES: { points: string; lueur?: number; opacite?: number }[] = [
  { points: "50,0 72,22 50,22" },
  { points: "72,22 78,52 50,22", lueur: 0, opacite: 0.18 },
  { points: "72,22 100,50 78,52" },
  { points: "100,50 76,73 78,52", lueur: 1, opacite: 0.25 },
  { points: "76,73 48,78 78,52" },
  { points: "76,73 50,100 48,78" },
  { points: "50,100 27,76 48,78" },
  { points: "27,76 24,48 48,78", lueur: 3, opacite: 0.15 },
  { points: "27,76 0,50 24,48" },
  { points: "0,50 22,28 24,48" },
  { points: "22,28 50,22 24,48" },
  { points: "22,28 50,0 50,22" },
  { points: "50,22 64,37 52,49" },
  { points: "64,37 78,52 52,49" },
  { points: "78,52 48,78 52,49", lueur: 2, opacite: 0.7 },
  { points: "48,78 36,63 52,49" },
  { points: "36,63 24,48 52,49" },
  { points: "24,48 50,22 52,49", lueur: 4, opacite: 0.22 },
];

/* période de la boucle (12s) répartie sur les 5 facettes lumineuses */
const CADENCE_S = 2.4;

type FacettedDiamondProps = {
  className?: string;
};

export default function FacettedDiamond({ className = "" }: FacettedDiamondProps) {
  const racine = useRef<SVGSVGElement>(null);

  /* démarrage après idle : l'animation ne concurrence jamais le rendu
     initial ; rien ne démarre en prefers-reduced-motion */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const demarrer = () => racine.current?.classList.add("losange-anime");
    if (typeof window.requestIdleCallback === "function") {
      window.requestIdleCallback(demarrer);
    } else {
      window.setTimeout(demarrer, 200);
    }
  }, []);

  return (
    <svg
      ref={racine}
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={className}
    >
      {FACETTES.map((facette) => (
        <polygon
          key={facette.points}
          points={facette.points}
          strokeWidth={1}
          strokeOpacity={0.35}
          vectorEffect="non-scaling-stroke"
          strokeLinejoin="round"
          fillOpacity={facette.opacite ?? 0}
          style={
            facette.lueur !== undefined
              ? { animationDelay: `${-facette.lueur * CADENCE_S}s` }
              : undefined
          }
          className={`stroke-paper ${
            facette.lueur !== undefined ? "fill-outremer facette-lueur" : "fill-outremer"
          }`}
        />
      ))}
    </svg>
  );
}
