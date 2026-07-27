import type { Metadata } from "next";
import { copy } from "@/config/copy";

export const metadata: Metadata = {
  title: copy.legales.confidentialite.metaTitre,
};

export default function Confidentialite() {
  const page = copy.legales.confidentialite;
  return (
    <main className="mx-auto max-w-[1200px] px-6 py-16 lg:px-10 lg:py-24">
      <article className="max-w-[68ch]">
        <h1 className="font-display text-h2 font-bold">{page.titre}</h1>
        {page.sections.map((section) => (
          <section key={section.titre} className="mt-12">
            <h2 className="font-mono text-label uppercase tracking-label text-muted">
              {section.titre}
            </h2>
            <p className="mt-3 text-body">{section.corps}</p>
            {section.email ? (
              <a
                href={`mailto:${section.email}`}
                className="mt-2 inline-block font-mono text-xs tracking-label text-outremer underline underline-offset-4 hover:text-ink"
              >
                {section.email}
              </a>
            ) : null}
          </section>
        ))}
      </article>
    </main>
  );
}
