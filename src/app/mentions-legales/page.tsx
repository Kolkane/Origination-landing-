import type { Metadata } from "next";
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
  title: copy.legales.mentions.metaTitre,
  alternates: { canonical: "/mentions-legales" },
};

/* V80 · même gabarit que la notice de confidentialité. Le contenu ne
   change pas. */
export default function MentionsLegales() {
  const page = copy.legales.mentions;
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
                <p className="legale-p">{section.corps}</p>
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
