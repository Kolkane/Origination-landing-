import { brand } from "@/config/brand";
import { copy } from "@/config/copy";

export default function CtaFinal() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-[1200px] px-6 py-14 lg:px-10 lg:py-20">
        <h2 className="font-display text-h2 font-bold">{copy.ctaFinal.titre}</h2>
        <a
          href={brand.CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-block w-full bg-paper px-7 py-4 text-center font-mono text-xs uppercase tracking-label text-ink transition-colors duration-150 hover:bg-outremer hover:text-paper sm:w-auto"
        >
          {copy.ctaFinal.bouton}
        </a>
      </div>
    </section>
  );
}
