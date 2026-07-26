import Section from "@/components/Section";
import { copy } from "@/config/copy";

export default function Engagements() {
  return (
    <Section label={copy.engagements.label}>
      <ul role="list" className="border-b border-hairline">
        {copy.engagements.items.map((item) => (
          <li key={item} className="border-t border-hairline py-5">
            <p className="max-w-[68ch] text-body">{item}</p>
          </li>
        ))}
      </ul>
      <aside className="mt-14 border border-bronze bg-paper p-6 lg:ml-24 lg:max-w-2xl lg:p-8">
        <p className="font-mono text-label uppercase tracking-label text-muted">
          {copy.engagements.garantie.label}
        </p>
        <p className="mt-3 max-w-[58ch] text-body">{copy.engagements.garantie.texte}</p>
      </aside>
    </Section>
  );
}
