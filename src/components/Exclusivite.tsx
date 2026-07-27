import CarteFrance from "@/components/CarteFrance";
import Section from "@/components/Section";
import { brand } from "@/config/brand";
import { copy } from "@/config/copy";

export default function Exclusivite() {
  return (
    <Section id="zones" label={copy.exclusivite.label}>
      <p className="max-w-[24ch] font-display text-h2 font-bold">{copy.exclusivite.titre}</p>
      <p className="mt-8 max-w-[68ch] text-body text-muted">{copy.exclusivite.corps}</p>
      <div className="mt-12">
        <CarteFrance />
      </div>
      <div className="mt-10">
        <a
          href={brand.CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full bg-ink px-7 py-4 text-center font-mono text-xs uppercase tracking-label text-paper transition-colors duration-150 hover:bg-outremer sm:w-auto sm:max-w-[64ch] sm:text-left"
        >
          {copy.exclusivite.cta}
        </a>
      </div>
    </Section>
  );
}
