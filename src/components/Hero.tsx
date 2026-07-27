import BriefSpecimen from "@/components/BriefSpecimen";
import FacettedDiamond from "@/components/FacettedDiamond";
import { brand } from "@/config/brand";
import { copy } from "@/config/copy";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      {/* le Losange Facetté occupe la moitié droite en arrière-plan,
          débordant légèrement du cadre ; le spécimen passe devant */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-[-6%] hidden w-1/2 items-center justify-end lg:flex"
      >
        <FacettedDiamond className="aspect-square h-[115%]" />
      </div>

      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 py-14 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-20">
        {/* mobile : losange réduit en tête, jamais sous le H1 */}
        <div aria-hidden="true" className="flex justify-center lg:hidden">
          <FacettedDiamond className="h-36 w-36" />
        </div>

        <div className="relative lg:col-span-7">
          <p className="font-mono text-label uppercase tracking-label text-paper/55">
            {copy.hero.eyebrow}
          </p>
          <h1 className="mt-6 font-display text-h1 font-extrabold">{copy.hero.titre}</h1>
          <p className="mt-7 max-w-[56ch] text-body text-paper/70">
            {copy.hero.sousTitre}
          </p>
          <div className="mt-9">
            <a
              href={brand.CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full bg-paper px-7 py-4 text-center font-mono text-xs uppercase tracking-label text-ink transition-colors duration-150 hover:bg-outremer hover:text-paper focus-visible:outline-paper sm:w-auto"
            >
              {copy.hero.cta}
            </a>
          </div>
          <p className="mt-5 font-mono text-xs text-paper/55">{copy.hero.preuve}</p>
        </div>

        <div className="relative lg:col-span-5">
          <BriefSpecimen mode="compact" anime />
        </div>
      </div>
    </section>
  );
}
