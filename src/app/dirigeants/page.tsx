import type { Metadata } from "next";
import Link from "next/link";
import Entete from "@/components/Entete";
import Footer from "@/components/Footer";
import { brand } from "@/config/brand";
import { copy } from "@/config/copy";
import { grand } from "@/config/typo";

const page = copy.dirigeants;

export const metadata: Metadata = {
  title: page.metaTitre,
  description: page.chapo,
  /* V80, lot 4 bis : la page porte SES textes OpenGraph et Twitter. Elle
     héritait de ceux du layout, c'est-à-dire de la description commerciale
     du site, sur la seule page qui ne vend rien. */
  openGraph: {
    title: page.metaTitre,
    description: page.chapo,
    url: "/dirigeants",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: page.metaTitre,
    description: page.chapo,
  },
  /* v68 : LE CANONIQUE EST DÉCLARÉ ICI, ET C'EST INDISPENSABLE. Le layout
     pose alternates.canonical = "/" pour tout le site ; sans cette ligne,
     cette page se déclarerait comme une copie de l'accueil et un moteur
     n'aurait aucune raison de l'indexer. Or elle DOIT être trouvée : c'est
     là que tombe le dirigeant qui cherche « Imbrin Research » après avoir
     reçu un courrier. (Les deux pages légales héritent encore du défaut,
     voir BACKLOG.md.) */
  alternates: { canonical: "/dirigeants" },
};

/* ============================================================
   v68 · LA PAGE DES DIRIGEANTS.
   Une seule colonne, pas de vidéo, pas d'image, pas de chiffre, et
   surtout AUCUN élément commercial : ni prix, ni offre, ni appel à
   réserver un échange, ni lien vers la section Offre. La page ne vend
   rien, elle permet de vérifier.
   V80, lot 4 : l'en-tête est celui du site, fixe et blanc, mais SANS
   navigation ni menu, ses six entrées mèneraient à la section des
   conditions, qui est l'offre. Le pied est celui du site SANS la colonne
   « Le site », pour la même raison. La marque en tête de page, qui
   tenait lieu d'en-tête, est donc portée par l'en-tête lui-même.
   Le contenu ne change pas. Les deux liens du pied de page se lisent
   sur deux lignes, le séparateur médian n'est plus posé dans le JSX.
   ============================================================ */
export default function Dirigeants() {
  return (
    <>
      <Entete fixe sansNav />
      <main id="contenu" className="page">
        <div className="cadre">
          <article className="colonne-lecture">
            <p className="libelle">{page.kicker}</p>
            <h1 className="titre-section">{grand(page.titre)}</h1>
            <p className="dirigeants-chapo">{page.chapo}</p>

            {page.blocs.map((bloc) => (
              <section className="legale-section" key={bloc.titre}>
                <h2 className="legale-titre">{grand(bloc.titre)}</h2>
                {bloc.corps.map((para) => (
                  <p className="legale-p" key={para}>
                    {para}
                  </p>
                ))}
                {bloc.choix ? (
                  /* les trois possibilités : une liste sur filets, pas des
                     puces. Chaque entrée ouvre sur sa décision en clair. */
                  <ul className="dirigeants-choix">
                    {bloc.choix.map((c) => (
                      <li key={c.fort}>
                        <b>{c.fort}</b> {c.suite}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <footer className="dirigeants-pied">
              <p className="legale-p">{page.pied.intro}</p>
              <p className="dirigeants-contact">
                <a className="lien-vin" href={`mailto:${brand.CONTACT_EMAIL}`}>
                  {brand.CONTACT_EMAIL}
                </a>
                <br />
                <a className="lien-vin" href={brand.TELEPHONE.lien}>
                  {brand.TELEPHONE.affiche}
                </a>
              </p>
              <p className="dirigeants-entite">{page.pied.entite}</p>
              <Link className="lien-vin" href={page.pied.lien.href}>
                {page.pied.lien.label}
              </Link>
            </footer>
          </article>
        </div>
      </main>
      <Footer sansSite />
    </>
  );
}
