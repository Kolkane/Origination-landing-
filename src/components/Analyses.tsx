import Link from "next/link";
import { analyses } from "@/config/analyses";
import { copy } from "@/config/copy";
import { grand } from "@/config/typo";

/* V80 · LES ANALYSES. Trois colonnes sur filets d'encre, sans date :
   titre, chapeau, « Lire ». Titres et chapeaux viennent de
   src/config/analyses.ts, la même source que les pages d'article, et
   chaque « Lire » ouvre la page de son article. Ajouter un article, c'est
   ajouter une entrée là-bas ; ici rien ne change.
   Le lien « Toutes les analyses » de la planche n'est pas repris : les
   trois analyses sont déjà affichées, il pointait sur sa propre section
   (arbitrage Vincent, 17/09/2026). */
export default function Analyses() {
  const a = copy.analyses;
  return (
    <section className="analyses" id="analyses">
      <div className="cadre">
        <h2 className="titre-section">{grand(a.titre)}</h2>
        <div className="analyses-grille">
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
