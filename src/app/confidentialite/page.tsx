import type { Metadata } from "next";
import Link from "next/link";
import { copy } from "@/config/copy";
import { grand } from "@/config/typo";

/* v69 : LE CANONIQUE EST DÉCLARÉ ICI. Le layout pose
   alternates.canonical = « / » pour tout le site, et cette valeur est
   HÉRITÉE par toute page qui ne la redéclare pas : cette page
   s'annonçait donc aux moteurs comme une copie de l'accueil, c'est-à-dire
   comme une page à ne pas indexer. Or c'est l'une des deux qu'un
   dirigeant doit pouvoir trouver. Les pages d'analyses déclaraient déjà
   le leur, elles n'étaient pas touchées. */
export const metadata: Metadata = {
  title: copy.legales.confidentialite.metaTitre,
  alternates: { canonical: "/confidentialite" },
};

export default function Confidentialite() {
  const page = copy.legales.confidentialite;
  return (
    <main className="wrap py-[110px]">
      <article className="max-w-[640px]">
        <h1 className="statement">{grand(page.titre)}</h1>
        {page.sections.map((section) => (
          <section key={section.titre} className="mt-12 first-of-type:mt-0">
            <h2 className="kicker label">{section.titre}</h2>
            {(Array.isArray(section.corps) ? section.corps : [section.corps]).map(
              (para) => (
                <p
                  key={para}
                  className="mt-4 text-[15px] leading-[1.7] text-txt-2 first-of-type:mt-0"
                >
                  {para}
                </p>
              )
            )}
            {section.lien ? (
              <Link href={section.lien.href} className="cta label">
                {section.lien.label}
              </Link>
            ) : null}
            {section.email ? (
              <a href={`mailto:${section.email}`} className="cta label">
                {section.email}
              </a>
            ) : null}
          </section>
        ))}
      </article>
    </main>
  );
}
