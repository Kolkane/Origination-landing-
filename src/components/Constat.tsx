import Section from "@/components/Section";
import { copy } from "@/config/copy";

export default function Constat() {
  return (
    <Section label={copy.constat.label}>
      <p className="max-w-[26ch] font-display text-h2 font-bold">{copy.constat.titre}</p>
      <p className="mt-7 max-w-[68ch] text-body text-muted">{copy.constat.corps}</p>
      <blockquote className="mt-10 border-l-2 border-ink pl-6 font-display text-2xl font-bold tracking-display lg:ml-24 lg:max-w-[32ch]">
        {copy.constat.exergue}
      </blockquote>
    </Section>
  );
}
