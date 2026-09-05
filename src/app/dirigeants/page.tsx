import type { Metadata } from "next";
import Link from "next/link";
import LogoImbrin from "@/components/LogoImbrin";
import { brand } from "@/config/brand";
import { copy } from "@/config/copy";
import { grand } from "@/config/typo";

const page = copy.dirigeants;

export const metadata: Metadata = {
  title: page.metaTitre,
  description: page.chapo,
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
   PAS DE NAVIGATION non plus : le seul chrome est la marque en tête.
   La nav du site vit dans le hero et ne sort pas de l'accueil, donc
   rien à retirer ; le pied de page standard reste, porté par le layout.
   ============================================================ */
export default function Dirigeants() {
  return (
    <main className="dir">
      <div className="wrap">
        {/* la marque, et rien d'autre : celui qui arrive ici vient
            vérifier qui lui a écrit, le nom doit donc être lisible et
            pas seulement le médaillon */}
        <p className="dir-marque label">
          <LogoImbrin taille={18} />
          <span>
            {brand.MARQUE} {brand.SUFFIXE}
          </span>
        </p>

        <article className="dir-col">
          <p className="dir-kicker label">{page.kicker}</p>
          {/* PAS de classe .mask ici : elle masque son élément par clip-path
              jusqu'à ce que Reveal lui pose « in », et Reveal n'est monté que
              sur l'accueil. Le titre serait resté invisible sur cette page. */}
          <h1 className="dir-h1">{grand(page.titre)}</h1>
          <p className="dir-chapo">{page.chapo}</p>

          {page.blocs.map((bloc) => (
            <section className="dir-bloc" key={bloc.titre}>
              <h2 className="dir-bloc-t label">{bloc.titre}</h2>
              {bloc.corps.map((para) => (
                <p className="dir-p" key={para}>
                  {para}
                </p>
              ))}
              {bloc.choix ? (
                /* les trois possibilités : une liste sur filets, pas des
                   puces. Le « · » de puce du brief est réservé par la
                   charte aux lignes de labels, le filet est l'idiome du
                   site. Chaque entrée ouvre sur sa décision en clair. */
                <ul className="dir-choix">
                  {bloc.choix.map((c) => (
                    <li key={c.fort}>
                      <b>{c.fort}</b> {c.suite}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          <footer className="dir-pied">
            <p className="dir-p">{page.pied.intro}</p>
            <p className="dir-contact label">
              <a href={`mailto:${brand.CONTACT_EMAIL}`}>{brand.CONTACT_EMAIL}</a>
              <span aria-hidden="true"> · </span>
              <a href={brand.TELEPHONE.lien}>{brand.TELEPHONE.affiche}</a>
            </p>
            <p className="dir-entite label">{page.pied.entite}</p>
            <Link className="dir-notice label" href={page.pied.lien.href}>
              {page.pied.lien.label}
            </Link>
          </footer>
        </article>
      </div>
    </main>
  );
}
