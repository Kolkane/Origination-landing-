import Section from "@/components/Section";
import { brand } from "@/config/brand";
import { copy } from "@/config/copy";

export default function Fondateur() {
  return (
    <Section label={copy.fondateur.label}>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <p className="max-w-[68ch] text-body">{copy.fondateur.corps}</p>
          <p className="mt-8 font-mono text-label tracking-label text-muted">
            {copy.fondateur.entite}
          </p>
          <a
            href={brand.LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block font-mono text-label uppercase tracking-label text-muted underline underline-offset-4 hover:text-ink"
          >
            {copy.fondateur.linkedin}
          </a>
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <div className="flex aspect-[4/5] max-w-xs items-center justify-center border border-hairline bg-paper-light">
            <p className="font-mono text-label uppercase tracking-label text-muted">
              {copy.fondateur.photoLegende}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
