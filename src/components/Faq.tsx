import Diamond from "@/components/Diamond";
import Section from "@/components/Section";
import { copy } from "@/config/copy";

export default function Faq() {
  return (
    <Section label={copy.faq.label}>
      <div className="border-b border-hairline">
        {copy.faq.items.map((item) => (
          <details key={item.question} className="group border-t border-hairline">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 font-medium [&::-webkit-details-marker]:hidden">
              {item.question}
              {/* état actif en outremer, pivot 45° à l'ouverture */}
              <span
                aria-hidden="true"
                className="shrink-0 transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
              >
                <Diamond taille={9} className="fill-ink group-open:fill-outremer" />
              </span>
            </summary>
            <p className="max-w-[68ch] pb-5 text-body text-muted">{item.reponse}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
