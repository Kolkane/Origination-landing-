import type { Metadata } from "next";
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

export default function MentionsLegales() {
  const page = copy.legales.mentions;
  return (
    <main className="wrap py-[110px]">
      <article className="max-w-[640px]">
        <h1 className="statement">{grand(page.titre)}</h1>
        {page.sections.map((section) => (
          <section key={section.titre} className="mt-12 first-of-type:mt-0">
            <h2 className="kicker label">{section.titre}</h2>
            <p className="text-[15px] leading-[1.7] text-txt-2">{section.corps}</p>
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
