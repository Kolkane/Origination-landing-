import { brand } from "@/config/brand";
import { copy } from "@/config/copy";
import { grand } from "@/config/typo";

/* v15 : composition centrée. C'est le seul endroit centré d'une page alignée
   à gauche de bout en bout, et c'est ce qui la distingue de ses voisines
   autant que ce qui la réchauffe.

   v57 (arbitrage Vincent, 29/08/2026) : refonte de la HIÉRARCHIE VERTICALE.
   Le centrage est conservé, aucune colonne n'est introduite, aucun texte
   n'est réécrit : seul l'ORDRE change, et avec lui les poids.
   Le portrait était posé entre le kicker et la citation, donc il coupait la
   lecture en deux avant qu'elle ait commencé. La citation passe devant, le
   portrait descend illustrer la signature qui le suit, et le NUMÉRO termine
   la section au lieu d'être une ligne perdue au-dessus d'un filet : c'est la
   conversion de la page, il doit se voir.
   Le « aucun rouge dans cette section » de la v15 TOMBE, sur décision
   explicite : l'eyebrow passe au vin. */
export default function Fondateur() {
  const f = copy.fondateur;
  return (
    <section className="founder-s papier" id="fondateur">
      <div className="wrap">
        {/* 1 · le kicker porte une phrase et non une étiquette depuis la
            v15 : c'est l'énoncé de la section, donc son h2. */}
        <h2 className="f-kicker label">{f.kicker}</h2>

        {/* 2 · la citation d'abord : c'est elle qu'on doit lire en premier */}
        <blockquote className="f-citation mask">{grand(f.citation)}</blockquote>

        {/* 3 · l'aparté, entre deux filets : une respiration assumée, plus
            une légende perdue sous une image */}
        <p className="f-corps">{f.corps}</p>

        {/* 4 · le portrait, qui illustre la signature au lieu de couper la
            citation. Rectangulaire : la page est à angles vifs, un cercle y
            serait le seul arrondi de tout le site. */}
        <div className="f-portrait">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/portrait-vincent-fournier.webp"
            alt={f.portraitAlt}
            width={300}
            height={375}
          />
        </div>

        {/* 5 · la signature */}
        <p className="f-nom">{f.nom}</p>
        <p className="f-lieu label">{f.lieu}</p>

        {/* 6 · le numéro, terme de la section */}
        <p className="f-appel-l label">{f.appelLbl}</p>
        <p className="f-tel">
          <a href={brand.TELEPHONE.lien}>{brand.TELEPHONE.affiche}</a>
        </p>
        {/* v56 : l'adresse de contact accompagne le numéro partout où il
            vit. L'ordre de la v57 ne la nommait pas ; elle reste sous lui,
            à l'échelle d'un libellé, pour ne pas lui disputer la place
            qu'il vient de gagner. */}
        <p className="f-mail label">
          <a href={`mailto:${brand.CONTACT_EMAIL}`}>{brand.CONTACT_EMAIL}</a>
        </p>
      </div>
    </section>
  );
}
