"use client";

import { useRef, useState } from "react";
import LogoImbrin from "@/components/LogoImbrin";
import { brand } from "@/config/brand";
import { copy } from "@/config/copy";

/* v14 : la description du livrable et l'exemple de dossier vivent dans la
   même section. Le document ne se remplace jamais, il se surligne. */
export default function Dossier() {
  const d = copy.dossier;
  const doc = d.doc;
  const [actif, setActif] = useState(d.defaut);
  const viseurRef = useRef<HTMLDivElement>(null);

  /* sur desktop le document défile dans son viseur ; sous 920px le viseur
     n'a plus de hauteur max, c'est la page qui défile jusqu'à la zone */
  function choisir(cible: string) {
    setActif(cible);
    const viseur = viseurRef.current;
    const zone = document.getElementById(cible);
    if (!viseur || !zone) return;

    const doux = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const comportement: ScrollBehavior = doux ? "smooth" : "auto";

    if (viseur.scrollHeight > viseur.clientHeight + 4) {
      const haut =
        zone.offsetTop - viseur.clientHeight / 2 + zone.clientHeight / 2;
      viseur.scrollTo({ top: Math.max(0, haut), behavior: comportement });
    } else {
      zone.scrollIntoView({ behavior: comportement, block: "center" });
    }
  }

  const zone = (cible: string) => `zone${actif === cible ? " lit" : ""}`;
  const marque = (cible: string) =>
    actif === cible ? ({ "aria-current": "true" } as const) : {};

  return (
    <section className="recu" id="dossier">
      <div className="wrap">
        <p className="kicker mono rev">{d.kicker}</p>
        <h2 className="statement mask rev">{d.titre}</h2>
        <p className="recu-chapo rev">{d.chapo}</p>

        <div className="recu-grid">
          {/* ---------- nav des éléments ---------- */}
          <nav className="recu-nav rev" aria-label={d.kicker}>
            {d.elements.map((el) => (
              <button
                type="button"
                key={el.cible}
                className={`recu-item${actif === el.cible ? " active" : ""}`}
                aria-current={actif === el.cible ? "true" : undefined}
                onClick={() => choisir(el.cible)}
              >
                <span className="recu-item-top">
                  <span className="recu-idx mono">{el.idx}</span>
                  <span className="recu-t">{el.titre}</span>
                </span>
                <span className="recu-d">{el.texte}</span>
              </button>
            ))}
          </nav>

          {/* ---------- document ---------- */}
          <div className="viseur rev">
            <div className="viseur-bar mono">
              <span>{d.viewer.titre}</span>
              <span className="warn">{d.viewer.mention}</span>
            </div>

            <div className="doc-scroll" ref={viseurRef}>
              <article className="doc" aria-label={doc.aria}>
                <header className="d-head">
                  <span className="d-brand">
                    <LogoImbrin taille={20} ton="sombre" />
                    <span className="d-word serif">{brand.MARQUE}</span>
                  </span>
                  <span className="d-meta mono">
                    {doc.metaAvant}
                    <b>{doc.metaFort}</b>
                    {doc.metaApres}
                    <br />
                    {doc.metaLigne2}
                  </span>
                </header>

                <div className="d-ref">
                  <span className="d-ficti mono">{doc.ficti}</span>
                  <span className="d-badge mono">{doc.badge}</span>
                </div>

                <h3 className="d-title">{doc.titre}</h3>
                <p className="d-desc mono">{doc.desc}</p>
                <p className="d-interlo mono">
                  <b>{doc.interloLbl}</b>
                  {doc.interlo}
                </p>

                <div className="d-body">
                  <div className="d-rail">
                    <div className={zone("z-fin")} id="z-fin" {...marque("z-fin")}>
                      <p className="lbl mono">{doc.finLbl}</p>
                      {doc.figures.map((f) => (
                        <div className="fig" key={f.k}>
                          <span className="fig-n serif">{f.n}</span>
                          <span className="fig-k mono">{f.k}</span>
                        </div>
                      ))}
                      <div className="trend">
                        {doc.tendance.map((t) => (
                          <div className="trend-row mono" key={t.a}>
                            <span>{t.a}</span>
                            <span>{t.v}</span>
                          </div>
                        ))}
                      </div>
                      <p className="trend-tag mono">{doc.tendanceTag}</p>
                    </div>

                    <div
                      className={zone("z-parcours")}
                      id="z-parcours"
                      {...marque("z-parcours")}
                    >
                      <p className="lbl mono">{doc.parcoursLbl}</p>
                      <ul className="tl">
                        {doc.parcours.map((p) => (
                          <li className={p.cle ? "key" : undefined} key={p.an}>
                            <span className={`yr mono${p.cle ? " key" : ""}`}>
                              {p.an}
                            </span>
                            <span className="ev">{p.ev}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className={zone("z-coord")}
                      id="z-coord"
                      {...marque("z-coord")}
                    >
                      <p className="lbl mono">{doc.coordLbl}</p>
                      <p className="coord-s mono">{doc.coordS}</p>
                      <p className="coord-d">{doc.coordD}</p>
                    </div>
                  </div>

                  <div className="d-main">
                    <div
                      className={zone("z-signal")}
                      id="z-signal"
                      {...marque("z-signal")}
                    >
                      <p className="lbl mono">{doc.signalLbl}</p>
                      <p className="signal">
                        {doc.signalAvant}
                        <b>{doc.signalFort}</b>
                        {doc.signalApres}
                      </p>
                    </div>

                    <div
                      className={zone("z-angle")}
                      id="z-angle"
                      {...marque("z-angle")}
                    >
                      <p className="lbl mono">{doc.angleLbl}</p>
                      <h4 className="angle-t">{doc.angleTitre}</h4>
                      <p className="angle-p">{doc.angleP1}</p>
                      <p className="angle-p">
                        {doc.angleP2Avant}
                        <b>{doc.angleP2Fort}</b>
                      </p>
                      <div className="chips">
                        {doc.chips.map((c) => (
                          <span className="chip mono" key={c}>
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div
                      className={zone("z-unknown")}
                      id="z-unknown"
                      {...marque("z-unknown")}
                    >
                      <p className="lbl mono">{doc.inconnuLbl}</p>
                      <p className="unknown">
                        {doc.inconnuAvant}
                        <b>{doc.inconnuFort}</b>
                        {doc.inconnuApres}
                      </p>
                    </div>
                  </div>
                </div>

                <footer className="d-foot">
                  <p className="d-legal mono">
                    <span className="ficti">{doc.legalFicti}</span>
                    {doc.legal}
                  </p>
                </footer>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
