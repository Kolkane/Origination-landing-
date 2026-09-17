import { brand } from "@/config/brand";
import { copy } from "@/config/copy";
import { grand } from "@/config/typo";

/* V80 · PRENDRE RENDEZ-VOUS. La bande verte, en fin de page : le titre,
   deux phrases, et « Choisir un créneau », le SEUL bouton commercial du
   site, qui ouvre le Calendly de brand.ts. À droite, les deux voies
   directes, téléphone et email, soulignées de blanc. */
export default function RendezVous() {
  const r = copy.rendezVous;
  return (
    <section className="rendez-vous" id="contact">
      <div className="cadre rendez-vous-grille">
        <div>
          <h2 className="titre-section">{grand(r.titre)}</h2>
          <p className="rendez-vous-texte">{r.texte}</p>
          <a
            className="bouton-clair"
            href={brand.CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {r.bouton}
          </a>
        </div>
        <div className="rendez-vous-coord">
          <div>
            <p>{r.telLibelle}</p>
            <a href={brand.TELEPHONE.lien}>{brand.TELEPHONE.affiche}</a>
          </div>
          <div>
            <p>{r.mailLibelle}</p>
            <a href={`mailto:${brand.CONTACT_EMAIL}`}>{brand.CONTACT_EMAIL}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
