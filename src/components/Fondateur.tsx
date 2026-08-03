import { brand } from "@/config/brand";
import { copy } from "@/config/copy";

/* v15 : composition centrée. C'est le seul endroit centré d'une page alignée
   à gauche de bout en bout, et c'est ce qui la distingue de ses voisines
   autant que ce qui la réchauffe. Aucun rouge ici. */
export default function Fondateur() {
  const f = copy.fondateur;
  return (
    <section className="founder-s" id="fondateur">
      <div className="wrap">
        <p className="kicker mono rev f-kicker">{f.kicker}</p>

        <div className="f-portrait rev">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/portrait-vincent-fournier.webp"
            alt={f.portraitAlt}
            width={300}
            height={375}
          />
        </div>

        <blockquote className="f-citation mask rev">{f.citation}</blockquote>

        <p className="f-corps rev">{f.corps}</p>

        <p className="f-nom rev">{f.nom}</p>
        <p className="f-lieu mono rev">{f.lieu}</p>

        <div className="f-filet rev" aria-hidden="true" />

        <p className="f-id mono rev">
          {f.id}
          <br />
          <a href={brand.LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            {f.linkedin}
          </a>
        </p>
      </div>
    </section>
  );
}
