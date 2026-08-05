"use client";

import { useState } from "react";
import LogoImbrin from "@/components/LogoImbrin";
import { brand } from "@/config/brand";
import { copy } from "@/config/copy";

/* v19 : le viseur devient une LOUPE. Avant, le document entier était posé
   dans un cadre qui défilait et la nav ne faisait qu'y surligner une zone :
   sur desktop il fallait scroller pour voir la zone active, sur mobile le
   document se réduisait à une taille où plus rien ne se lisait.

   Désormais le cadre ne défile plus et ne montre qu'UNE zone à la fois,
   cadrée de près et agrandie. L'en-tête du dossier (marque, mentions de
   fiction, société, interlocuteur) et le pied légal restent en permanence :
   c'est ce qui maintient l'effet « c'est un vrai document », et c'est aussi
   ce qui garde deux des trois mentions de fiction imposées par CLAUDE.md.

   Les six zones restent toutes dans le DOM, empilées dans la même cellule
   de grille : la scène prend donc la hauteur de la plus haute et ne bouge
   plus d'une zone à l'autre, sans jamais rien rogner. Les zones inactives
   sont à opacité nulle mais ne sont ni display:none ni aria-hidden : un
   lecteur d'écran les parcourt toutes. Sans JavaScript, le noscript du
   layout remet la scène en flux normal et le dossier se lit en entier. */
export default function Dossier() {
  const d = copy.dossier;
  const doc = d.doc;
  const [actif, setActif] = useState(d.defaut);

  const zone = (cible: string) => `zone${actif === cible ? " lit" : ""}`;
  const marque = (cible: string) =>
    actif === cible ? ({ "aria-current": "true" } as const) : {};

  return (
    <section className="recu" id="dossier">
      <div className="wrap">
        <div className="recu-grid">
          {/* le titre vit dans la colonne de gauche : sinon le document
              démarre sous lui et pend très bas par rapport au texte */}
          <div className="recu-col">
            <p className="kicker mono rev">{d.kicker}</p>
            <h2 className="statement mask rev">{d.titre}</h2>
            <p className="recu-chapo rev">{d.chapo}</p>

            {/* ---------- nav des éléments ---------- */}
            <nav className="recu-nav rev" aria-label={d.kicker}>
              {d.elements.map((el) => (
                <button
                  type="button"
                  key={el.cible}
                  className={`recu-item${actif === el.cible ? " active" : ""}`}
                  aria-current={actif === el.cible ? "true" : undefined}
                  onClick={() => setActif(el.cible)}
                >
                  <span className="recu-item-top">
                    <span className="recu-idx mono">{el.idx}</span>
                    <span className="recu-t">{el.titre}</span>
                  </span>
                  <span className="recu-d">{el.texte}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* ---------- document ---------- */}
          <div className="viseur rev">
            <div className="viseur-bar mono">
              <span>{d.viewer.titre}</span>
              <span className="warn">{d.viewer.mention}</span>
            </div>
            {/* l'objection « montrez-m'en un vrai » se retourne ici, juste
                sous la mention de fiction, plutôt que d'être laissée en l'air */}
            <p className="viseur-note mono">{d.viewerNote}</p>

            <div className="doc-cadre">
              <article className="doc" aria-label={doc.aria}>
                {/* en-tête permanent : il ne change jamais de zone */}
                <header className="d-head">
                  <span className="d-brand">
                    <LogoImbrin taille={20} ton="sombre" />
                    <span className="d-word display">{brand.MARQUE}</span>
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

                {/* la scène : les six zones dans la même cellule, une seule
                    visible. L'ordre du DOM suit celui de la nav. */}
                <div className="d-scene">
                  <div className={zone("z-fin")} id="z-fin" {...marque("z-fin")}>
                    <p className="lbl mono">{doc.finLbl}</p>
                    <div className="figs">
                      {doc.figures.map((f) => (
                        <div className="fig" key={f.k}>
                          <span className="fig-n display">{f.n}</span>
                          <span className="fig-k mono">{f.k}</span>
                        </div>
                      ))}
                    </div>
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
