import type { Metadata } from "next";
import { copy } from "@/config/copy";

export const metadata: Metadata = {
  title: copy.legales.confidentialite.metaTitre,
};

export default function Confidentialite() {
  const page = copy.legales.confidentialite;
  return (
    <main className="wrap py-[110px]">
      <article className="max-w-[640px]">
        <h1 className="statement">{page.titre}</h1>
        {page.sections.map((section) => (
          <section key={section.titre} className="mt-12 first-of-type:mt-0">
            <h2 className="kicker mono">{section.titre}</h2>
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
            {section.email ? (
              <a href={`mailto:${section.email}`} className="cta mono">
                {section.email}
              </a>
            ) : null}
          </section>
        ))}
      </article>
    </main>
  );
}
