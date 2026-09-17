import Embleme from "@/components/Embleme";
import { brand } from "@/config/brand";
import { copy } from "@/config/copy";

/* V80 · LE PIED DE PAGE, la planche au pixel : bande encre, l'emblème
   clair en 132 px, le nom et la baseline, puis trois colonnes, « Le site »
   (les six entrées de la navigation, la même source que l'en-tête),
   « Informations » et « Contact », et la ligne de bas de page. Sur
   téléphone l'emblème passe en 104 px et les colonnes en grille de deux.
   Rendu par chaque page et non par le layout (lot 4) : /dirigeants le
   demande SANS la colonne « Le site », dont les entrées mènent à la
   section de l'offre que sa charte (v68) lui interdit de lier.
   L'identité juridique (raison sociale, SIREN) ne s'y affiche pas : la
   planche ne l'a pas, elle vit aux mentions légales et dans À propos. */
export default function Footer({ sansSite = false }: { sansSite?: boolean }) {
  const p = copy.pied;
  const nav = copy.nav;
  return (
    <footer className="pied">
      <div className="cadre">
        <div className={`pied-grille${sansSite ? " pied-grille-court" : ""}`}>
          <div className="pied-marque">
            <Embleme ton="clair" emploi="pied" alt={p.emblemeAlt} differe />
            <p className="pied-nom">
              {brand.MARQUE} {brand.SUFFIXE}
            </p>
            <p className="pied-baseline">{brand.BASELINE}</p>
          </div>
          {sansSite ? null : (
            <nav aria-label={p.site.aria} className="pied-col">
              <p className="pied-titre">{p.site.titre}</p>
              {nav.liens.map((l) => (
                <a key={l.href} href={l.href}>
                  {l.label}
                </a>
              ))}
            </nav>
          )}
          <div className="pied-col">
            <p className="pied-titre">{p.informations.titre}</p>
            {p.informations.liens.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
          <div className="pied-col">
            <p className="pied-titre">{p.contact.titre}</p>
            <a href={brand.TELEPHONE.lien}>{brand.TELEPHONE.affiche}</a>
            <a href={`mailto:${brand.CONTACT_EMAIL}`}>{brand.CONTACT_EMAIL}</a>
            <a href={brand.LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              {p.contact.linkedin}
            </a>
          </div>
        </div>
        <div className="pied-bas">
          <span>{p.copyright}</span>
          <span>{p.note}</span>
        </div>
      </div>
    </footer>
  );
}
