import BriefSpecimen from "@/components/BriefSpecimen";
import { brand } from "@/config/brand";
import { copy } from "@/config/copy";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 py-16 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-24">
      <div className="lg:col-span-7">
        <p className="font-mono text-label uppercase tracking-label text-muted">
          {copy.hero.eyebrow}
        </p>
        <h1 className="mt-6 text-h1 font-medium">{copy.hero.titre}</h1>
        <p className="mt-8 max-w-[56ch] text-body text-muted">
          {copy.hero.sousTitre}
        </p>
        <div className="mt-10">
          <a
            href={brand.CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full rounded-[2px] bg-ink px-7 py-4 text-center font-mono text-xs uppercase tracking-label text-paper transition-colors duration-150 hover:bg-bronze hover:text-paper-light sm:w-auto"
          >
            {copy.hero.cta}
          </a>
        </div>
        <p className="mt-5 font-mono text-xs text-muted">{copy.hero.preuve}</p>
      </div>
      <div className="lg:col-span-5">
        <BriefSpecimen mode="compact" />
      </div>
    </section>
  );
}
