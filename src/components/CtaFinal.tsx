import { brand } from "@/config/brand";
import { copy } from "@/config/copy";

export default function CtaFinal() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
        <h2 className="font-serif text-h2 font-medium">{copy.ctaFinal.titre}</h2>
        <a
          href={brand.CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block w-full rounded-[2px] bg-paper px-7 py-4 text-center font-mono text-xs uppercase tracking-label text-ink transition-colors duration-150 hover:bg-bronze hover:text-paper-light sm:w-auto"
        >
          {copy.ctaFinal.bouton}
        </a>
      </div>
    </section>
  );
}
