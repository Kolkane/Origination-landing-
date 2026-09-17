import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Entete from "@/components/Entete";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { analyses, articleParSlug } from "@/config/analyses";
import { brand } from "@/config/brand";
import { copy } from "@/config/copy";
import { articleSchema } from "@/config/schema";
import { grand } from "@/config/typo";

type Props = { params: { slug: string } };

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

/* V80 · LA PAGE D'ARTICLE. En-tête fixe et blanc dès le chargement, une
   colonne de lecture d'environ 68 caractères en 18 px, interligne 1,7,
   aucune date affichée (datePublished ne sert qu'au balisage et au
   sitemap). Le contenu ne change pas dans ce chantier : les trois
   articles seront réécrits séparément. */
export default function Analyse({ params }: Props) {
  const article = articleParSlug(params.slug);
  if (!article) notFound();
  const a = copy.analyses;

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
          <article className="colonne-lecture">
            <h1 className="titre-section">{grand(article.titre)}</h1>
            <p className="article-chapeau">{article.standfirst}</p>
            <div className="article-corps">
              {article.corps.map((paragraphe) => (
                <p key={paragraphe.slice(0, 48)}>{paragraphe}</p>
              ))}
            </div>
            <div className="article-pied">
              <p>{a.piedTexte}</p>
              <a
                className="lien-vin"
                href={brand.CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {a.cta}
              </a>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
