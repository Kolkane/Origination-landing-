import { brand } from "@/config/brand";
import { copy } from "@/config/copy";

export default function CtaFinal() {
  const f = copy.final;
  return (
    <section className="final" id="appel">
      <div className="wrap">
        <p className="kicker mono rev">{f.kicker}</p>
        <h2 className="mask rev">{f.statement}</h2>
        <p className="lead rev">{f.lead}</p>
        <a
          className="cta mono rev"
          href={brand.CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {f.cta}
        </a>
        <p className="final-tel mono rev">
          {f.telAvant}
          <a href={brand.TELEPHONE.lien}>{brand.TELEPHONE.affiche}</a>
        </p>
      </div>
    </section>
  );
}
