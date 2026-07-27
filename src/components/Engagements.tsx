import Diamond from "@/components/Diamond";
import Section from "@/components/Section";
import { copy } from "@/config/copy";

export default function Engagements() {
  return (
    <Section label={copy.engagements.label}>
      <ul role="list" className="space-y-4">
        {copy.engagements.items.map((item) => (
          <li key={item} className="flex gap-3">
            <Diamond taille={8} className="mt-[7px] fill-ink" />
            <p className="max-w-[68ch] text-body leading-[1.5]">{item}</p>
          </li>
        ))}
      </ul>
      <aside className="mt-12 border-2 border-ink bg-paper p-6 lg:ml-24 lg:max-w-2xl lg:p-8">
        <p className="font-mono text-label uppercase tracking-label text-ink">
          {copy.engagements.garantie.label}
        </p>
        <p className="mt-3 max-w-[58ch] text-body">{copy.engagements.garantie.texte}</p>
      </aside>
    </Section>
  );
}
