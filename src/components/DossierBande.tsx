"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Embleme from "@/components/Embleme";
import { brand } from "@/config/brand";
import { copy } from "@/config/copy";
import { dossierTexte } from "@/config/dossier-texte";
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
   v87 (arbitrage Vincent, 18/09/2026) : LE POPUP MONTRE LE VRAI DOSSIER,
   pas une représentation. Les deux pages du PDF du spécimen (Vérane
   Ingénierie, 2026-000, fictif) sont des images (brand.MEDIAS
   .specimenPages, 1× et 2×), posées dans un CAHIER : deux feuilles
   empilées, la seconde dépasse de quelques pixels derrière la première,
   et un clic sur la feuille, sur « Tourner la page » ou une flèche du
   clavier tourne la page (la première feuille pivote sur son bord
   gauche, comme une page de livre ; sous prefers-reduced-motion elle
   change sans pivoter). Le cahier se rouvre toujours à la page 1. Les
   images sont dans le HTML : sans JavaScript, le noscript du layout sort
   le dialog de sa boîte et pose les deux feuilles l'une sous l'autre. Le
   PDF lui-même est en lien dans la barre. */
export default function DossierBande({ pdf }: { pdf: string | null }) {
  const d = copy.dossier;
  const c = d.couverture;
  const p = d.popup;
  const feuilles = brand.MEDIAS.specimenPages;
  const dialogue = useRef<HTMLDialogElement>(null);
  const fermerRef = useRef<HTMLButtonElement>(null);
  const corps = useRef<HTMLDivElement>(null);
  const declencheur = useRef<HTMLButtonElement | null>(null);
  const [page, setPage] = useState(0);
  const derniere = feuilles.length - 1;

  /* une page tournée s'ouvre par le haut : si le lecteur a fait défiler
     la première jusqu'aux commandes, la seconde ne doit pas apparaître
     par son pied. Défilement doux, immédiat sous prefers-reduced-motion. */
  useEffect(() => {
    const reduit = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    corps.current?.scrollTo({ top: 0, behavior: reduit ? "auto" : "smooth" });
  }, [page]);

  const ouvrir = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    declencheur.current = e.currentTarget;
    setPage(0);
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

  /* les flèches tournent les pages ; Échap reste au navigateur */
  const surTouche = (e: React.KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === "ArrowRight" && page < derniere) setPage(page + 1);
    if (e.key === "ArrowLeft" && page > 0) setPage(page - 1);
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
          {/* v89 · LE FIL DE LA COMÈTE porte désormais son propre élément, et
              ce n'est pas de la plomberie : le masque en anneau doit rester
              FIXE pendant que le dégradé tourne. Sur un seul pseudo-élément,
              l'angle du conic-gradient s'animait par une propriété
              personnalisée, que le navigateur ne peut pas compositer : il
              recalculait le style et repeignait à chaque image, mesuré à
              360 recalculs et 424 ms de fil principal par 6 s de page au
              repos, et il le faisait même couverture hors champ. Ici le
              masque est sur ce span, la rotation sur son ::before : une
              transformation, donc le compositeur. Aucun texte, aria-hidden,
              le nom accessible du bouton ne bouge pas. */}
          <span className="couverture-fil" aria-hidden="true" />
          <span className="visuellement-cache">{d.bouton}. </span>
          <span className="couverture-tete">
            <Embleme ton="encre" emploi="document" className="couverture-embleme" differe />
            <span>{c.marque}</span>
          </span>
          <span className="couverture-corps">
            <span className="couverture-label">{c.label}</span>
            <span className="couverture-titre">{c.titre}</span>
            <span className="couverture-these">{grand(c.these)}</span>
            <span className="couverture-activite">{c.activite}</span>
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
        onKeyDown={surTouche}
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
          <div className="popup-corps" ref={corps}>
            <div className="cahier" data-page={page}>
              <div className="cahier-feuilles">
                {feuilles.map((f, i) => (
                  <button
                    type="button"
                    className="feuille"
                    key={f.simple}
                    aria-label={p.tourner}
                    aria-hidden={i !== page}
                    tabIndex={i === page ? 0 : -1}
                    onClick={() => setPage(i === derniere ? 0 : i + 1)}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={f.simple}
                      srcSet={`${f.simple} 1x, ${f.double} 2x`}
                      width={794}
                      height={1123}
                      alt={p.pages[i].alt}
                      loading="lazy"
                      decoding="async"
                    />
                  </button>
                ))}
              </div>
              <div className="cahier-commandes">
                <button
                  type="button"
                  className="cahier-bouton"
                  onClick={() => setPage(page - 1)}
                  disabled={page === 0}
                >
                  {p.precedente}
                </button>
                <span className="cahier-compteur" aria-live="polite">
                  {p.compteur[page]}
                </span>
                <button
                  type="button"
                  className="cahier-bouton"
                  onClick={() => setPage(page + 1)}
                  disabled={page === derniere}
                >
                  {p.suivante}
                </button>
              </div>
            </div>
            {/* v89 · L'ALTERNATIVE TEXTE. Les deux pages sont des images : le
                vrai document, c'était l'arbitrage v87, et il ne bouge pas.
                Mais une image n'est pas du texte, et la substance du dossier
                avait quitté le HTML deux commits après la v86, qui ne servait
                qu'à être indexé. La transcription vient de la couche texte du
                PDF lui-même (src/config/dossier-texte.ts, généré), elle ne
                peut donc pas diverger du document.
                Un <details> natif : le contenu est DANS le DOM, donc lu par
                les moteurs et par un lecteur d'écran, sans JavaScript et sans
                texte caché à un visiteur. Et c'est le seul moyen de lire le
                dossier sur un téléphone, où la page A4 s'affiche à 0,44 fois
                sa taille, mesuré à 390 px. */}
            <details className="dossier-texte">
              <summary>{p.texteResume}</summary>
              {dossierTexte.map((bloc, i) => (
                <div className="dossier-texte-page" key={p.compteur[i]}>
                  <p className="dossier-texte-folio">{p.compteur[i]}</p>
                  {bloc.map((b, j) =>
                    b.n === "titre" ? (
                      <h4 key={`${i}-${j}`}>{b.t}</h4>
                    ) : (
                      <p key={`${i}-${j}`} className={b.n === "note" ? "dossier-texte-note" : undefined}>
                        {b.t}
                      </p>
                    ),
                  )}
                </div>
              ))}
            </details>
          </div>
        </div>
      </dialog>
    </section>
  );
}
