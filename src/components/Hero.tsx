import BriefSpecimen from "@/components/BriefSpecimen";
import { brand } from "@/config/brand";
import { copy } from "@/config/copy";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 py-14 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-20">
      <div className="lg:col-span-7">
        <p className="font-mono text-label uppercase tracking-label text-muted">
          {copy.hero.eyebrow}
        </p>
        <h1 className="mt-6 font-display text-h1 font-extrabold">{copy.hero.titre}</h1>
        <p className="mt-7 max-w-[56ch] text-body text-muted">
          {copy.hero.sousTitre}
        </p>
        <div className="mt-9">
          <a
            href={brand.CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full bg-ink px-7 py-4 text-center font-mono text-xs uppercase tracking-label text-paper transition-colors duration-150 hover:bg-outremer sm:w-auto"
          >
            {copy.hero.cta}
          </a>
        </div>
        <p className="mt-5 font-mono text-xs text-muted">{copy.hero.preuve}</p>
      </div>
      <div className="lg:col-span-5">
        <BriefSpecimen mode="compact" anime />
      </div>
    </section>
  );
}
