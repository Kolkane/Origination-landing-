import type { Metadata } from "next";
import { copy } from "@/config/copy";

export const metadata: Metadata = {
  title: copy.legales.mentions.metaTitre,
};

export default function MentionsLegales() {
  const page = copy.legales.mentions;
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
      <article className="max-w-[68ch]">
        <h1 className="text-h2 font-medium">{page.titre}</h1>
        {page.sections.map((section) => (
          <section key={section.titre} className="mt-12">
            <h2 className="font-mono text-label uppercase tracking-label text-muted">
              {section.titre}
            </h2>
            <p className="mt-3 text-body">{section.corps}</p>
            {section.email ? (
              <a
                href={`mailto:${section.email}`}
                className="mt-2 inline-block font-mono text-xs tracking-label underline underline-offset-4 hover:text-bronze"
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
