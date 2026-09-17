import { copy } from "@/config/copy";
import { grand } from "@/config/typo";

/* V80 · LES CONDITIONS. La structure de la rémunération, jamais un
   nombre : c'est la règle de l'offre v15, et rien ici n'y déroge.
   v82 (arbitrage Vincent, 17/09/2026), troisième passage : L'OFFRE. La
   section fait écho à une section de prix, et une section de prix a un
   code que tout le monde lit sans effort : le titre, le prix, ce que
   vous obtenez, les conditions. L'origination est donc un seul panneau,
   filet vert de 3 px en tête et filet fin autour : à gauche le libellé,
   le titre à 46 px et, à la place du prix, « Au devis » en vert avec sa
   phrase et le lien vers la bande de rendez-vous ; à droite « Ce que
   vous recevez », six gains cochés ; en pied du panneau, « Les
   conditions », six termes sur trois colonnes. LA COCHE est un SVG
   inline de 18 px, au trait, dans le vert : c'est un marqueur de liste,
   pas une icône décorative ; elle est aria-hidden, la liste est déjà une
   liste pour qui l'écoute. Le mandat de recherche reste en tableau
   réglé (case de tête, deux cases avec leur clé), un cran plus petit,
   sous un filet d'encre fin. Une note grise en pied. Sous 1000 px le
   panneau empile ses deux colonnes et les termes vont par deux ; sous
   761 px tout est sur une colonne. */
function Coche() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 18 18"
      className="gain-coche"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9.5l4 4 8-8" />
    </svg>
  );
}

type Ligne = { libelle: string; cle?: string; texte: string };

function Case({ l }: { l: Ligne }) {
  return (
    <div className="case">
      <p className="libelle">{l.libelle}</p>
      {l.cle ? <p className="case-cle">{grand(l.cle)}</p> : null}
      <p className={l.cle ? "case-petit" : "case-seul"}>{l.texte}</p>
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

        <div className="offre">
          <div className="offre-haut">
            <div className="offre-tete">
              <p className="libelle">{o.libelle}</p>
              <h3 className="offre-titre">{grand(o.titre)}</h3>
              <div className="offre-prix">
                <p className="libelle">{o.montants.libelle}</p>
                <p className="offre-prix-valeur">{grand(o.montants.valeur)}</p>
                <p className="offre-prix-texte">{o.montants.texte}</p>
                <a className="lien-vin" href={o.lien.href}>
                  {o.lien.label}
                </a>
              </div>
            </div>
            <div className="offre-gains">
              <p className="libelle offre-sous-titre">{o.gainsTitre}</p>
              <ul className="gains">
                {o.gains.map((g) => (
                  <li className="gain" key={g}>
                    <Coche />
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="offre-bas">
            <p className="libelle offre-sous-titre">{o.termesTitre}</p>
            <dl className="termes">
              {o.termes.map((t) => (
                <div className="terme" key={t.libelle}>
                  <dt>{t.libelle}</dt>
                  <dd>{t.texte}</dd>
                </div>
              ))}
            </dl>
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
