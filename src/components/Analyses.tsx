import Link from "next/link";
import { analyses } from "@/config/analyses";
import { copy } from "@/config/copy";
import { grand } from "@/config/typo";

/* Index des analyses. Généré depuis src/config/analyses.ts : ajouter un
   article n'exige aucune modification ici. Onzième gabarit de la page, des
   lignes sur filets, et le rouge n'apparaît qu'au survol. */
export default function Analyses() {
  const a = copy.analyses;
  return (
    <section className="analyses" id="analyses">
      <div className="wrap">
        <p className="a-kicker kicker mono rev">{a.kicker}</p>
        <h2 className="a-titre mask rev">{grand(a.titre)}</h2>
        <p className="a-intro rev">{a.intro}</p>

        <div className="a-list rev">
          {analyses.map((article) => (
            <Link
              className="a-row"
              href={`/analyses/${article.slug}`}
              key={article.slug}
            >
              <span className="a-row-main">
                <span className="a-row-t">{grand(article.titre)}</span>
                <span className="a-row-s">{article.standfirst}</span>
              </span>
              <span className="a-row-cta mono">
                {a.lire}
                <span className="arw" aria-hidden="true">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
