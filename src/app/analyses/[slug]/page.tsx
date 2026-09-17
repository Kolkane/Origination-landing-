import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Entete from "@/components/Entete";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import RendezVous from "@/components/RendezVous";
import FigureAnalyse from "@/components/analyses/FigureAnalyse";
import { analyses, articleParSlug, autresAnalyses } from "@/config/analyses";
import { brand } from "@/config/brand";
import { copy } from "@/config/copy";
import { articleSchema } from "@/config/schema";
import { grand } from "@/config/typo";

type Props = { params: { slug: string } };

/* l'ancre d'un intertitre se DÉDUIT de son texte : aucun identifiant à
   tenir à jour à côté du contenu, donc aucun lien de sommaire ne peut
   pointer dans le vide. Accents retirés, tout ce qui n'est pas une lettre
   ou un chiffre devient un tiret. */
function ancre(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/* les trois pages sont pré-rendues à la construction, comme le reste du site */
export function generateStaticParams() {
  return analyses.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = articleParSlug(params.slug);
  if (!article) return {};
  const url = `/analyses/${article.slug}`;
  return {
    title: `${article.titre}, ${brand.MARQUE} ${brand.SUFFIXE}`,
    description: article.standfirst,
    alternates: { canonical: url },
    openGraph: {
      title: article.titre,
      description: article.standfirst,
      url,
      type: "article",
      locale: "fr_FR",
    },
    twitter: {
      card: "summary_large_image",
      title: article.titre,
      description: article.standfirst,
    },
  };
}

/* V80 · LA PAGE D'ARTICLE, refondue en v85 (arbitrage Vincent : « trop
   vide, et les paragraphes sont trop similaires, c'est trop plat »).
   TROIS COLONNES au-dessus de 1100 px : un RAIL de gauche qui tient le
   sommaire, la colonne de lecture de 580 px, et une marge de droite dans
   laquelle les FIGURES et les EXERGUES débordent. C'est ce débordement
   qui remplit la page : la mesure de lecture ne bouge pas d'un pixel,
   seuls les blocs qui ne sont pas de la prose prennent la largeur.
   LE RAIL EST UNE EXCEPTION ASSUMÉE à la v61, « un seul bord gauche », et
   l'amendement la prévoyait lui-même : la marginalia « ne tient que si la
   marge porte du contenu RÉCURRENT, des notes, des dates, des
   références ». Un sommaire collant qui suit la lecture en est ; le
   libellé de neuf caractères que la v61 avait retiré n'en était pas.
   Sous 1100 px le rail disparaît, la page redevient une colonne.
   La page se termine par les deux autres analyses, puis la bande
   « Prendre rendez-vous » de l'accueil, puis le pied. */
export default function Analyse({ params }: Props) {
  const article = articleParSlug(params.slug);
  if (!article) notFound();
  const a = copy.analyses;
  const autres = autresAnalyses(article.slug);
  /* le sommaire se DÉDUIT des intertitres, il n'est pas saisi à part :
     un sommaire tenu à la main finit toujours par mentir */
  const sommaire = article.corps.filter((b) => b.forme === "intertitre");

  return (
    <>
      <Entete fixe />
      <main id="contenu" className="page">
        <JsonLd data={articleSchema(article)} />
        <div className="cadre">
          <Link className="lien-vin page-retour" href="/#analyses">
            {a.retour}
          </Link>
          {/* pas de libellé « Analyses » au-dessus du titre : le lien de
              retour, juste au-dessus, porte déjà le mot, et les deux se
              lisaient en doublon (lot 4, à la capture) */}
          <div className="article-grille">
            {sommaire.length > 0 && (
              <nav className="article-rail" aria-label={a.sommaireAria}>
                <p className="article-rail-titre">{a.sommaire}</p>
                <ol className="article-rail-liste">
                  {sommaire.map((b) => (
                    <li key={b.texte}>
                      <a href={`#${ancre(b.texte)}`}>{b.texte}</a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}
            <article className="article-colonne">
              <h1 className="titre-section article-titre">{grand(article.titre)}</h1>
              <p className="article-chapeau">{article.standfirst}</p>
              <div className="article-corps">
                {article.corps.map((bloc) => {
                  if (bloc.forme === "intertitre")
                    return (
                      <h2 key={bloc.texte} id={ancre(bloc.texte)}>
                        {grand(bloc.texte)}
                      </h2>
                    );
                  if (bloc.forme === "exergue")
                    return (
                      <p className="article-exergue" key={bloc.texte}>
                        {grand(bloc.texte)}
                      </p>
                    );
                  if (bloc.forme === "chute")
                    return (
                      <p className="article-chute" key={bloc.texte}>
                        {grand(bloc.texte)}
                      </p>
                    );
                  if (bloc.forme === "figure")
                    return (
                      <FigureAnalyse
                        key={bloc.nom}
                        nom={bloc.nom}
                        reperes={bloc.reperes}
                        legende={bloc.legende}
                      />
                    );
                  return <p key={bloc.texte.slice(0, 48)}>{bloc.texte}</p>;
                })}
              </div>
            </article>
          </div>
          {/* les deux autres analyses : la lecture ne s'arrête pas sur du
              vide, et c'est ce qui ferme le bas de la page */}
          <aside className="article-suite" aria-label={a.aussi}>
            <p className="article-suite-titre">{a.aussi}</p>
            <div className="article-suite-grille">
              {autres.map((autre) => (
                <article className="analyse" key={autre.slug}>
                  <h2 className="analyse-titre">{grand(autre.titre)}</h2>
                  <p className="analyse-chapeau">{autre.standfirst}</p>
                  <Link
                    className="lien-vin"
                    href={`/analyses/${autre.slug}`}
                    aria-label={`${a.lireAria}${autre.titre}`}
                  >
                    {a.lire}
                  </Link>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </main>
      {/* la bande « Prendre rendez-vous » de l'accueil, à l'identique, en
          lieu et place de l'ancien appel de pied d'article ; ni /dirigeants
          ni les pages légales ne la reçoivent */}
      <RendezVous />
      <Footer />
    </>
  );
}
