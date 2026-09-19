"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { analyses } from "@/config/analyses";
import { copy } from "@/config/copy";
import { grand } from "@/config/typo";

/* V80 · LES ANALYSES. Colonnes sur filets d'encre, sans date : titre,
   chapeau, « Lire ». Titres et chapeaux viennent de
   src/config/analyses.ts, la même source que les pages d'article, et
   chaque « Lire » ouvre la page de son article. Ajouter un article, c'est
   ajouter une entrée là-bas ; ici rien ne change.
   Le lien « Toutes les analyses » de la planche n'est pas repris : les
   analyses sont déjà affichées, il pointait sur sa propre section
   (arbitrage Vincent, 17/09/2026).

   v90 (arbitrage Vincent, 19/09/2026) : UNE SEULE LIGNE, QUI DÉFILE. La
   grille de trois colonnes laissait tomber la quatrième analyse seule en
   deuxième rangée, où son filet de tête se lisait comme un séparateur
   interne de la première carte. La rangée devient une bande horizontale :
   une seule ligne à toutes les largeurs, deux flèches sur ordinateur, le
   doigt sur téléphone. Le nombre d'analyses n'a plus d'effet sur le
   gabarit.

   LES FLÈCHES N'EXISTENT QU'APRÈS LE MONTAGE, et c'est la règle de ce
   site : un contrôle inerte est un lien mort (même raison que le lien
   « Version PDF » du dossier, qui n'existe que si le fichier est sur le
   disque). Sans JavaScript, la bande reste une bande qui défile au doigt
   et au trackpad, et rien n'annonce une commande qui ne répondrait pas.
   Elles disparaissent aussi quand tout tient à l'écran.

   Aucune animation d'entrée : la règle v54 tient, rien n'apparaît au
   scroll. Le seul mouvement est celui que la main du visiteur demande
   (v20, v84), et il suit prefers-reduced-motion. */
function Chevron({ sens }: { sens: -1 | 1 }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d={sens === -1 ? "M11.5 3.5 6 9l5.5 5.5" : "M6.5 3.5 12 9l-5.5 5.5"}
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function Analyses() {
  const a = copy.analyses;
  const rail = useRef<HTMLDivElement>(null);
  const [etat, setEtat] = useState({ fleches: false, debut: true, fin: false });

  const mesurer = useCallback(() => {
    const el = rail.current;
    if (!el) return;
    const reste = el.scrollWidth - el.clientWidth;
    setEtat({
      fleches: reste > 1,
      debut: el.scrollLeft <= 1,
      fin: el.scrollLeft >= reste - 1,
    });
  }, []);

  useEffect(() => {
    const el = rail.current;
    if (!el) return;
    mesurer();
    el.addEventListener("scroll", mesurer, { passive: true });
    /* la largeur des cartes est en pourcentage : le débordement change
       avec celle du conteneur, pas seulement avec celle de la fenêtre */
    const ro = new ResizeObserver(mesurer);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", mesurer);
      ro.disconnect();
    };
  }, [mesurer]);

  function pousser(sens: -1 | 1) {
    const el = rail.current;
    if (!el) return;
    /* le pas est UNE carte, mesuré au rendu : la largeur et la gouttière
       changent à chaque palier, les écrire ici les ferait diverger du CSS */
    const carte = el.firstElementChild;
    const pas = carte
      ? carte.getBoundingClientRect().width +
        parseFloat(getComputedStyle(el).columnGap || "0")
      : el.clientWidth;
    el.scrollBy({
      left: sens * pas,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  }

  return (
    <section className="analyses" id="analyses">
      <div className="cadre">
        <div className="analyses-tete">
          <h2 className="titre-section">{grand(a.titre)}</h2>
          {etat.fleches ? (
            <div className="analyses-fleches">
              <button
                type="button"
                className="analyses-fleche"
                aria-label={a.avantAria}
                aria-controls="analyses-rail"
                disabled={etat.debut}
                onClick={() => pousser(-1)}
              >
                <Chevron sens={-1} />
              </button>
              <button
                type="button"
                className="analyses-fleche"
                aria-label={a.apresAria}
                aria-controls="analyses-rail"
                disabled={etat.fin}
                onClick={() => pousser(1)}
              >
                <Chevron sens={1} />
              </button>
            </div>
          ) : null}
        </div>
        <div
          className="analyses-rail"
          id="analyses-rail"
          ref={rail}
          role="group"
          aria-label={a.railAria}
        >
          {analyses.map((article) => (
            <article className="analyse" key={article.slug}>
              <h3 className="analyse-titre">{grand(article.titre)}</h3>
              <p className="analyse-chapeau">{article.standfirst}</p>
              <Link
                className="lien-vin"
                href={`/analyses/${article.slug}`}
                aria-label={`${a.lireAria}${article.titre}`}
              >
                {a.lire}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
