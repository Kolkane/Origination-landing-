import type { Metadata } from "next";
import Link from "next/link";
import Entete from "@/components/Entete";
import Footer from "@/components/Footer";
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

/* V80 · la notice, dans la colonne de lecture des pages intérieures :
   en-tête fixe, titre de section, des rubriques titrées en 500, liens
   soulignés de vin. Le contenu ne change pas. */
export default function Confidentialite() {
  const page = copy.legales.confidentialite;
  return (
    <>
      <Entete fixe />
      <main id="contenu" className="page">
        <div className="cadre">
          <article className="colonne-lecture">
            <h1 className="titre-section">{grand(page.titre)}</h1>
            {page.sections.map((section) => (
              <section key={section.titre} className="legale-section">
                <h2 className="legale-titre">{grand(section.titre)}</h2>
                {(Array.isArray(section.corps) ? section.corps : [section.corps]).map(
                  (para) => (
                    <p key={para} className="legale-p">
                      {para}
                    </p>
                  )
                )}
                {section.lien ? (
                  <Link href={section.lien.href} className="lien-vin">
                    {section.lien.label}
                  </Link>
                ) : null}
                {section.email ? (
                  <a href={`mailto:${section.email}`} className="lien-vin">
                    {section.email}
                  </a>
                ) : null}
              </section>
            ))}
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
