"use client";

import { useEffect, useRef, useState } from "react";
import { copy } from "@/config/copy";

/* v15 : « Le constat » et la bande de chiffres en un seul geste.
   Les barres se déploient quand la section entre dans le champ, pas au
   chargement de la page : une animation CSS pure serait terminée avant
   que le lecteur n'arrive dessus, la section est sous la ligne de flottaison. */
export default function Entonnoir() {
  const e = copy.entonnoir;
  const ref = useRef<HTMLDivElement>(null);
  const [deploye, setDeploye] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDeploye(true);
      return;
    }
    const cible = ref.current;
    if (!cible) return;
    const io = new IntersectionObserver(
      (entrees) => {
        entrees.forEach((entree) => {
          if (!entree.isIntersecting) return;
          setDeploye(true);
          io.disconnect();
        });
      },
      { threshold: 0.25 }
    );
    io.observe(cible);
    return () => io.disconnect();
  }, []);

  return (
    <section className="entonnoir" id="filtre">
      <div className="wrap">
        <p className="kicker mono rev">{e.kicker}</p>
        <h2 className="ent-h2 mask rev">
          {e.titreAvant}
          <em>{e.titreItalique}</em>.
        </h2>
        <p className="ent-intro rev">{e.intro}</p>

        {/* la seule preuve de marché sourcée à un tiers : elle précède
            l'ordre de grandeur régional, qui est le nôtre */}
        <div className="ancrage rev">
          <p className="ancrage-t">{e.ancrage}</p>
          <p className="ancrage-s mono">{e.ancrageSource}</p>
        </div>

        <div
          className={`funnel${deploye ? " deploye" : ""}`}
          ref={ref}
          role="list"
          aria-label={e.ariaPaliers}
        >
          {e.paliers.map((p, i) => (
            <div
              className={`step s${i + 1}${p.prise ? " catch" : ""}`}
              key={p.n}
              role="listitem"
            >
              <span className="step-n serif">{p.n}</span>
              <span className="step-l">
                <b>{p.fort}</b>
                {p.suite}
              </span>
            </div>
          ))}
        </div>

        {/* le stock et le flux. Sans cette distinction, un prospect divise 45
            par le rythme mensuel et conclut que trois mois lui suffisent. */}
        <div className="bascule rev">
          <p className="bascule-t">
            {e.bascule1Avant}
            <b>{e.bascule1Fort}</b>
            {e.bascule1Apres}
          </p>
          <p className="bascule-t bascule-flux">{e.bascule2}</p>
        </div>

        <div className="ent-foot rev">
          <p className="ent-kicker">
            {e.piedAvant}
            <em>{e.piedItalique}</em>
          </p>
          <p className="ent-note mono">
            {e.noteAvant}
            <b>{e.noteFort}</b>
            {e.noteApres}
            <br />
            {e.noteLigne2}
          </p>
        </div>
      </div>
    </section>
  );
}
