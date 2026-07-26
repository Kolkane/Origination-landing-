import Section from "@/components/Section";
import { copy } from "@/config/copy";

export default function Faq() {
  return (
    <Section label={copy.faq.label}>
      <div className="border-b border-hairline">
        {copy.faq.items.map((item) => (
          <details key={item.question} className="group border-t border-hairline">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 py-5 font-serif text-lg [&::-webkit-details-marker]:hidden">
              {item.question}
              <span aria-hidden="true" className="shrink-0 font-mono text-bronze">
                <span className="group-open:hidden">+</span>
                <span className="hidden group-open:inline">−</span>
              </span>
            </summary>
            <p className="max-w-[68ch] pb-6 text-body text-muted">{item.reponse}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
