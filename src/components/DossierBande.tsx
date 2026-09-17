"use client";

import { useCallback, useEffect, useRef } from "react";
import Embleme from "@/components/Embleme";
import { copy, type RubriqueDossier } from "@/config/copy";
import { grand } from "@/config/typo";

/* V80 · LA BANDE DU DOSSIER et son popup.
   Le popup est un <dialog> natif ouvert par showModal() : le navigateur
   pose l'élément dans la couche supérieure, rend le reste de la page
   inerte, piège la tabulation et ferme sur Échap sans qu'une ligne de
   JavaScript ait à le faire. Ce qui est ajouté ici, et qui n'est pas
   natif : le corps ne défile plus pendant l'ouverture, le clic sur le
   voile ferme, et le focus revient sur CELUI des deux déclencheurs qui a
   ouvert (la couverture ou le bouton).
   L'entrée est celle de la planche, voile en fondu 0,28 s et page qui
   monte de 22 px en 0,4 s, coupée sous prefers-reduced-motion (CSS).
   L'ombre portée de la planche n'est PAS reprise : arbitrage Vincent du
   17/09, elle contredisait l'interdit « shadow-md et au-delà ».
   Le contenu du dossier est rendu par le serveur : il est dans le HTML,
   donc dans le DOM, sans JavaScript. Le noscript du layout le sort de sa
   boîte pour qu'il reste lisible quand les scripts ne s'exécutent pas. */

function Rubrique({ r }: { r: RubriqueDossier }) {
  return (
    <div className="specimen-rubrique">
      <h3>{r.titre}</h3>
      {r.forme === "definitions" && (
        <dl className="specimen-dl">
          {r.lignes.map((l) => (
            <div className="specimen-ligne" key={l.k}>
              <dt>{l.k}</dt>
              <dd>{l.v}</dd>
            </div>
          ))}
        </dl>
      )}
      {r.forme === "comptes" && (
        <table className="specimen-table">
          <thead>
            <tr>
              {r.colonnes.map((c, i) => (
                <th key={c} scope="col" className={i > 0 ? "nombre" : undefined}>
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {r.lignes.map((l) => (
              <tr key={l.k}>
                <th scope="row">{l.k}</th>
                {/* une valeur unique court sous les trois exercices : elle
                    ne porte pas sur un exercice, elle porte sur la ligne */}
                {l.valeurs.map((v) => (
                  <td
                    key={v}
                    className={`nombre${l.gris ? " gris" : ""}`}
                    colSpan={l.valeurs.length === 1 ? r.colonnes.length - 1 : undefined}
                  >
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {r.forme === "chronologie" && (
        <table className="specimen-table">
          <tbody>
            {r.lignes.map((l) => (
              <tr key={l.date}>
                <td className="date">{l.date}</td>
                <td>{l.ev}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {r.forme === "statuts" && (
        <>
          <table className="specimen-table">
            <tbody>
              {r.lignes.map((l) => (
                <tr key={l.k}>
                  <td className="date">{l.k}</td>
                  <td>{l.v}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="specimen-note">{r.note}</p>
        </>
      )}
      {r.forme === "prose" && (
        <>
          {r.paragraphes.map((p) => (
            <p className="specimen-p" key={p.slice(0, 32)}>
              {p}
            </p>
          ))}
          {r.note ? <p className="specimen-note">{r.note}</p> : null}
        </>
      )}
    </div>
  );
}

export default function DossierBande({ pdf }: { pdf: string | null }) {
  const d = copy.dossier;
  const c = d.couverture;
  const p = d.popup;
  const dialogue = useRef<HTMLDialogElement>(null);
  const fermerRef = useRef<HTMLButtonElement>(null);
  const declencheur = useRef<HTMLButtonElement | null>(null);

  const ouvrir = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    declencheur.current = e.currentTarget;
    dialogue.current?.showModal();
    document.body.style.overflow = "hidden";
    /* la planche ouvre sur « Fermer » : c'est la sortie, et elle doit
       être la première chose atteinte au clavier */
    fermerRef.current?.focus();
  }, []);

  /* un seul endroit pour défaire ce que l'ouverture a fait, quelle que
     soit la façon dont le dossier s'est fermé : bouton, Échap ou voile */
  useEffect(() => {
    const boite = dialogue.current;
    if (!boite) return;
    const surFermeture = () => {
      document.body.style.overflow = "";
      declencheur.current?.focus({ preventScroll: true });
    };
    boite.addEventListener("close", surFermeture);
    return () => boite.removeEventListener("close", surFermeture);
  }, []);

  /* le voile EST le dialog : tout clic qui ne touche pas le papier a le
     dialog pour cible, y compris un clic sur le ::backdrop */
  const surClic = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogue.current) dialogue.current?.close();
  };

  return (
    <section className="dossier" id="dossier">
      <div className="cadre dossier-grille">
        <div className="dossier-bloc">
          <h2 className="titre-section">{grand(d.titre)}</h2>
          <p className="dossier-texte">{d.texte}</p>
          <p className="dossier-sous">{d.sous}</p>
          <button type="button" className="bouton-clair" onClick={ouvrir}>
            {d.bouton}
          </button>
        </div>
        {/* le nom accessible de la couverture commence par l'action, puis
            porte son texte visible : un aria-label seul (planche) donnait
            un nom qui ne contenait pas le texte du bouton, audit
            label-content-name-mismatch en échec au lot 3 */}
        <button type="button" className="couverture" onClick={ouvrir}>
          <span className="visuellement-cache">{d.bouton}. </span>
          <span className="couverture-tete">
            <Embleme ton="encre" emploi="document" className="couverture-embleme" differe />
            <span>{c.marque}</span>
          </span>
          <span className="couverture-corps">
            <span className="couverture-label">{c.label}</span>
            <span className="couverture-titre">{c.titre}</span>
            <span className="couverture-activite">
              {c.activite}
              <br />
              {c.region}
            </span>
          </span>
          <span className="couverture-pied">
            <span>{c.specimen}</span>
            <span className="confidentiel">{c.confidentiel}</span>
          </span>
        </button>
      </div>

      <dialog
        ref={dialogue}
        className="popup"
        aria-labelledby="popup-titre"
        onClick={surClic}
      >
        <div className="popup-papier">
          <div className="popup-barre">
            <span className="popup-titre" id="popup-titre">
              {p.titre}
            </span>
            <div className="popup-actions">
              {pdf ? (
                <a className="popup-pdf" href={pdf} target="_blank" rel="noopener noreferrer">
                  {p.pdf}
                </a>
              ) : null}
              <button
                ref={fermerRef}
                type="button"
                className="popup-fermer"
                onClick={() => dialogue.current?.close()}
              >
                {p.fermer}
              </button>
            </div>
          </div>
          <div className="popup-corps">
            <div className="specimen">
              <div className="specimen-tete">
                <div className="specimen-marque">
                  <Embleme ton="encre" emploi="document" differe />
                  <span>{p.marque}</span>
                </div>
                <div className="specimen-meta">
                  {p.metaLigne1}
                  <br />
                  {p.metaLigne2}
                </div>
              </div>
              <div className="specimen-societe">
                <div className="specimen-nom">{p.societe}</div>
                <div className="specimen-region">{p.region}</div>
              </div>
              <p className="specimen-sous">{p.sousTitre}</p>
              {p.rubriques.map((r) => (
                <Rubrique key={r.titre} r={r} />
              ))}
              <div className="specimen-pied">
                <span>{p.pied.specimen}</span>
                <span className="confidentiel">{p.pied.confidentiel}</span>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </section>
  );
}
