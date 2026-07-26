import Section from "@/components/Section";
import { copy } from "@/config/copy";

export default function Methode() {
  return (
    <Section label={copy.methode.label}>
      <p className="max-w-[32ch] text-h2 font-medium">{copy.methode.intro}</p>
      <ol role="list" className="mt-12">
        {copy.methode.etapes.map((etape) => (
          <li
            key={etape.num}
            className="grid grid-cols-[3.5rem,1fr] gap-x-6 border-t border-hairline py-8 lg:grid-cols-[5rem,1fr]"
          >
            <span aria-hidden="true" className="font-mono text-3xl text-bronze">
              {etape.num}
            </span>
            <div>
              <h3 className="font-serif text-xl font-medium">{etape.titre}</h3>
              <p className="mt-2 max-w-[68ch] text-body text-muted">{etape.texte}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
