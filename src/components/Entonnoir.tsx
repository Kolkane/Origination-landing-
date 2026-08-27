"use client";

import { useEffect, useRef, useState } from "react";
import { copy } from "@/config/copy";
import { grand } from "@/config/typo";

/* v50 : LA TOISE (arbitrage Vincent, 27/08 — carte blanche : « plus
   concis, plus sobre, plus différenciant »). La traversée verticale et
   ses cinq paragraphes affichés d'un bloc sont remplacés par une RÈGLE
   GRADUÉE horizontale : cinq crans, cinq labels, et UN SEUL texte
   visible à la fois. C'est l'instrument de celui qui compte, la
   métaphore exacte du métier (« nous les comptons avant que vous
   signiez »). La section perd la moitié de sa hauteur.

   La toise se LIT toute seule : le cran actif avance toutes les 3,2 s,
   une fois, comme la lecture du dossier — mêmes garde-fous : la main de
   l'utilisateur (survol ou clic) éteint la lecture définitivement, un
   seul passage, pause hors du champ, désactivée en reduced-motion. */

const DUREE_CRAN = 3200;

export default function Entonnoir() {
  const e = copy.entonnoir;
  const [actif, setActif] = useState(0);
  const [lecture, setLecture] = useState(true);
  /* v50b : la mesure aboutit — après le cran 05, le remplissage court
     jusqu'à la pointe et y RESTE. L'état est acquis une fois pour
     toutes, même si la main reprend les crans ensuite. */
  const [fin, setFin] = useState(false);
  const [enVue, setEnVue] = useState(false);
  const toiseRef = useRef<HTMLDivElement>(null);
  const nb = e.criteres.length;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLecture(false);
    }
  }, []);

  useEffect(() => {
    const el = toiseRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entrees) => entrees.forEach((en) => setEnVue(en.isIntersecting)),
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!lecture || !enVue) return;
    const t = setTimeout(() => {
      if (actif >= nb - 1) {
        /* la mesure est prise : la lecture s'arrête sur la pointe,
           le dernier texte reste affiché */
        setFin(true);
        setLecture(false);
      } else {
        setActif(actif + 1);
      }
    }, DUREE_CRAN);
    return () => clearTimeout(t);
  }, [lecture, enVue, actif, nb]);

  /* la main prime : survol ou clic, la lecture s'éteint pour de bon */
  function prendre(i: number) {
    setLecture(false);
    setActif(i);
  }

  return (
    <section className="entonnoir" id="filtre">
      <div className="wrap">
        <p className="kicker mono rev">{e.kicker}</p>
        <h2 className="ent-h2 mask rev">
          {grand(e.titreAvant)}
          <em>{grand(e.titreItalique)}</em>.
        </h2>
        <p className="ent-intro rev">{e.intro}</p>

        {/* la seule preuve de marché sourcée à un tiers */}
        <div className="ancrage rev">
          <p className="ancrage-t">{e.ancrage}</p>
          <p className="ancrage-s mono">{e.ancrageSource}</p>
        </div>

        {/* l'état fin vit en data- : un className recalculé effacerait le
            .in posé par Reveal (leçon v44, déjà consignée, déjà mordu) */}
        <div className="toise rev" data-fin={fin ? "" : undefined} ref={toiseRef}>
          <div className="toise-scale" role="group" aria-label={e.ariaCriteres}>
            {/* la règle : un trait qui se trace, une pointe à droite */}
            <svg
              className="toise-ligne"
              aria-hidden="true"
              preserveAspectRatio="none"
              viewBox="0 0 100 2"
            >
              <line x1="0" y1="1" x2="100" y2="1" pathLength="1" />
            </svg>
            {/* v50b : la mesure — le trait se remplit de vin jusqu'au
                cran actif, et jusqu'à la pointe quand elle aboutit */}
            <span
              className="toise-mesure"
              aria-hidden="true"
              style={{
                width: fin ? "100%" : `calc(${(actif * 100) / (nb + 1)}% + 2px)`,
              }}
            />
            {e.criteres.map((c, i) => (
              <button
                type="button"
                key={c.num}
                className={`cran${i === actif ? " actif" : ""}${
                  i < actif || fin ? " passe" : ""
                }`}
                aria-current={i === actif ? "true" : undefined}
                onMouseEnter={() => prendre(i)}
                onClick={() => prendre(i)}
              >
                <span className="cran-n mono">{c.num}</span>
                <span className="cran-l mono">{c.label}</span>
              </button>
            ))}
            {/* le temps terminal : la destination de la mesure */}
            <p className="cran-fin">
              <span className="cran-l mono">{e.finLbl}</span>
            </p>
          </div>

          {/* un seul texte à la fois : les cinq sont empilés dans la même
              cellule, aucun décalage de mise en page au changement */}
          <div className="toise-detail">
            {e.criteres.map((c, i) => (
              <p className={`td${i === actif ? " lit" : ""}`} key={c.num}>
                <span className="td-l mono">{c.label}</span>
                {c.texte}
              </p>
            ))}
          </div>

          <p className="toise-chute">
            {e.bascule1Avant}
            <b>{e.bascule1Fort}</b>
            {e.bascule1Apres}
          </p>
        </div>

        <div className="ent-foot rev">
          <p className="ent-kicker">
            {e.piedAvant}
            <em>{e.piedItalique}</em>
          </p>
          <p className="ent-note">{e.note}</p>
        </div>
      </div>
    </section>
  );
}
