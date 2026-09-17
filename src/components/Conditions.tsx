import { copy } from "@/config/copy";
import { grand } from "@/config/typo";

/* V80 · LES CONDITIONS. La structure de la rémunération, jamais un
   nombre : c'est la règle de l'offre v15, et rien ici n'y déroge.
   v82 (arbitrage Vincent, 17/09/2026) : LE TABLEAU remplace les quatre
   grandes valeurs de la planche. Une grille réglée de douze colonnes,
   dessinée par des filets et rien d'autre : le fond de la rangée est de
   la couleur du filet, les cases sont blanches et espacées d'un pixel,
   c'est cet interstice qui trace les lignes. L'origination, l'offre
   principale, sous le filet vert de 3 px : une case de tête sur six
   colonnes (libellé, titre à 46 px, texte) et les deux durées en grand,
   en vert, sur trois colonnes chacune ; puis une rangée de quatre cases
   égales. Le mandat de recherche, le complément, reprend la grille sous
   un filet d'encre fin, un cran plus petit : case de tête à 28 px et
   deux cases. Une note grise en pied. Sous 1000 px la case de tête prend
   toute la largeur et les cases vont par deux ; sous 761 px tout
   s'empile, une case par ligne. */
type Ligne = { libelle: string; valeur?: string; texte: string };

function Case({ l }: { l: Ligne }) {
  return (
    <div className="case">
      <p className="libelle">{l.libelle}</p>
      {l.valeur ? (
        <>
          <p className="case-valeur">{grand(l.valeur)}</p>
          <p className="case-petit">{l.texte}</p>
        </>
      ) : (
        <p className="case-seul">{l.texte}</p>
      )}
    </div>
  );
}

export default function Conditions() {
  const c = copy.conditions;
  const o = c.origination;
  const m = c.mandat;
  return (
    <section className="conditions" id="conditions">
      <div className="cadre">
        <h2 className="titre-section">{grand(c.titre)}</h2>
        <p className="intro-section">{c.intro}</p>

        <div className="tableau origination">
          <div className="rangee rangee-tete">
            <div className="case case-tete">
              <p className="libelle">{o.libelle}</p>
              <h3 className="origination-titre">{grand(o.titre)}</h3>
              <p className="case-texte">{o.texte}</p>
            </div>
            {o.durees.map((l) => (
              <Case l={l} key={l.libelle} />
            ))}
          </div>
          <div className="rangee rangee-suite">
            {o.lignes.map((l) => (
              <Case l={l} key={l.libelle} />
            ))}
          </div>
        </div>

        <div className="tableau mandat">
          <div className="rangee rangee-tete">
            <div className="case case-tete">
              <p className="libelle">{m.libelle}</p>
              <h3 className="mandat-titre">{grand(m.titre)}</h3>
              <p className="case-texte">{m.texte}</p>
            </div>
            {m.lignes.map((l) => (
              <Case l={l} key={l.libelle} />
            ))}
          </div>
        </div>

        <p className="conditions-note">{c.note}</p>
      </div>
    </section>
  );
}
