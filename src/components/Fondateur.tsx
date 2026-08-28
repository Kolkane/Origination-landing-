import { brand } from "@/config/brand";
import { copy } from "@/config/copy";
import { grand } from "@/config/typo";

/* v15 : composition centrée. C'est le seul endroit centré d'une page alignée
   à gauche de bout en bout, et c'est ce qui la distingue de ses voisines
   autant que ce qui la réchauffe. Aucun rouge ici. */
export default function Fondateur() {
  const f = copy.fondateur;
  return (
    <section className="founder-s papier" id="fondateur">
      <div className="wrap">
        {/* le kicker porte une phrase et non une étiquette depuis la v15 :
            c'est l'énoncé de la section, donc son h2. Rendu inchangé. */}
        <h2 className="kicker label f-kicker">{f.kicker}</h2>

        <div className="f-portrait">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/portrait-vincent-fournier.webp"
            alt={f.portraitAlt}
            width={300}
            height={375}
          />
        </div>

        <blockquote className="f-citation mask">{grand(f.citation)}</blockquote>

        <p className="f-corps">{f.corps}</p>

        <p className="f-nom">{f.nom}</p>
        <p className="f-lieu label">{f.lieu}</p>
        <p className="f-tel label">
          <a href={brand.TELEPHONE.lien}>{brand.TELEPHONE.affiche}</a>
        </p>

        <div className="f-filet" aria-hidden="true" />

        <p className="f-id label">
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
