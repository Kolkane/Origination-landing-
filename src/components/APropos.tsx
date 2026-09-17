import { brand } from "@/config/brand";
import { copy } from "@/config/copy";
import { grand } from "@/config/typo";

/* V80 · À PROPOS. Le portrait à gauche, le titre, les deux paragraphes et
   les coordonnées à droite. v82 (arbitrage Vincent, 17/09/2026) : la
   société et le siège ne sont plus dans les lignes, la section parle du
   fondateur, l'entité est aux mentions légales ; restent téléphone, email
   et LinkedIn, lus dans brand.ts. Le parcours est rendu dès que copy.ts
   le remplit, ce qui est le cas depuis la v82.
   Sur téléphone la planche met le titre AVANT le portrait : les trois
   blocs sont donc des enfants directs de la grille, placés par zones sur
   ordinateur et laissés dans l'ordre du DOM sur téléphone. */
export default function APropos() {
  const a = copy.apropos;

  const m = brand.MEDIAS;
  return (
    <section className="apropos" id="apropos">
      <div className="cadre apropos-grille">
        <h2 className="titre-section">{grand(a.titre)}</h2>
        <figure className="apropos-figure">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={m.portrait}
            alt={a.portraitAlt}
            width={300}
            height={400}
            loading="lazy"
            decoding="async"
          />
          <figcaption>{a.legende}</figcaption>
        </figure>
        <div className="apropos-corps">
          <p className="apropos-texte">{a.texte}</p>
          {a.parcours ? <p className="apropos-texte">{a.parcours}</p> : null}
          <dl className="apropos-identite">
            <div className="apropos-ligne">
              <dt>{a.identite.telephone}</dt>
              <dd>
                <a href={brand.TELEPHONE.lien}>{brand.TELEPHONE.affiche}</a>
              </dd>
            </div>
            <div className="apropos-ligne">
              <dt>{a.identite.email}</dt>
              <dd>
                <a href={`mailto:${brand.CONTACT_EMAIL}`}>{brand.CONTACT_EMAIL}</a>
              </dd>
            </div>
            <div className="apropos-ligne">
              <dt>{a.identite.linkedin}</dt>
              <dd>
                <a href={brand.LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                  {a.identite.linkedinLabel}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
