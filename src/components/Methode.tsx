import Diamond from "@/components/Diamond";
import Section from "@/components/Section";
import { copy } from "@/config/copy";

export default function Methode() {
  return (
    <Section label={copy.methode.label}>
      <p className="max-w-[32ch] font-display text-h2 font-bold">{copy.methode.intro}</p>
      <ol role="list" className="mt-10">
        {copy.methode.etapes.map((etape) => (
          <li
            key={etape.num}
            className="grid grid-cols-[3rem,1fr] gap-x-6 border-t border-hairline py-6 lg:grid-cols-[4rem,1fr]"
          >
            <span aria-hidden="true" className="font-mono text-lg text-ink">
              {etape.num}
            </span>
            <div>
              <h3 className="flex items-center gap-2.5 font-display text-lg font-bold tracking-display">
                <Diamond taille={8} />
                {etape.titre}
              </h3>
              <p className="mt-2 max-w-[68ch] text-body text-muted">{etape.texte}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
