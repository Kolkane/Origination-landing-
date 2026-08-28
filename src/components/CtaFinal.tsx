import { brand } from "@/config/brand";
import { copy } from "@/config/copy";
import { grand } from "@/config/typo";

export default function CtaFinal() {
  const f = copy.final;
  return (
    <section className="final" id="appel">
      <div className="wrap">
        <p className="kicker mono">{f.kicker}</p>
        <h2 className="mask">{grand(f.statement)}</h2>
        <p className="lead">{f.lead}</p>
        <a
          className="cta mono"
          href={brand.CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {f.cta}
        </a>
        <p className="final-tel mono">
          {f.telAvant}
          <a href={brand.TELEPHONE.lien}>{brand.TELEPHONE.affiche}</a>
        </p>
      </div>
    </section>
  );
}
