import Section from "@/components/Section";
import { copy } from "@/config/copy";

export default function Constat() {
  return (
    <Section label={copy.constat.label}>
      <p className="max-w-[24ch] text-h2 font-medium">{copy.constat.titre}</p>
      <p className="mt-8 max-w-[68ch] text-body text-muted">{copy.constat.corps}</p>
      <blockquote className="mt-12 border-l border-bronze pl-6 font-serif text-2xl italic lg:ml-24 lg:max-w-[32ch]">
        {copy.constat.exergue}
      </blockquote>
    </Section>
  );
}
