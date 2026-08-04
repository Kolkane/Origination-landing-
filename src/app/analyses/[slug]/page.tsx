import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { analyses, articleParSlug } from "@/config/analyses";
import { brand } from "@/config/brand";
import { copy } from "@/config/copy";
import { articleSchema } from "@/config/schema";

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

export default function Analyse({ params }: Props) {
  const article = articleParSlug(params.slug);
  if (!article) notFound();
  const a = copy.analyses;

  return (
    <main className="article-page">
      <JsonLd data={articleSchema(article)} />
      <div className="wrap">
        <Link className="ap-back mono" href="/#analyses">
          <span aria-hidden="true">←</span>
          {a.retour}
        </Link>

        <article className="ap-col">
          <p className="ap-eyebrow mono">{a.kicker}</p>
          <h1 className="ap-h1">{article.titre}</h1>
          <p className="ap-standfirst">{article.standfirst}</p>

          <div className="ap-body">
            {article.corps.map((paragraphe) => (
              <p key={paragraphe.slice(0, 48)}>{paragraphe}</p>
            ))}
          </div>

          <div className="ap-foot">
            <p className="ap-foot-t">{a.piedTexte}</p>
            <a
              className="cta mono"
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
  );
}
