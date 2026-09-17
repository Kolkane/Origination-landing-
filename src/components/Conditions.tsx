import { copy } from "@/config/copy";
import { grand } from "@/config/typo";

/* V80 · LES CONDITIONS. La structure de la rémunération, jamais un
   nombre : c'est la règle de l'offre v15, et rien ici n'y déroge.
   v82 (arbitrage Vincent, 17/09/2026) : LA FEUILLE DE CONDITIONS
   remplace les quatre grandes valeurs de la planche. Deux offres, la même
   forme, deux poids. L'origination, l'offre principale, sous le filet
   vert de 3 px : à gauche son libellé, son titre à 46 px et son texte ; à
   droite une feuille de six lignes, libellé puis condition, une durée en
   grand et en vert quand il y en a une. Le mandat de recherche, le
   complément, sous un filet d'encre fin, un cran plus petit : titre à
   28 px, deux lignes. Une note grise en pied. Sur téléphone, le libellé
   de chaque ligne passe au-dessus de la condition.
   La feuille est une liste de définitions : le libellé est le terme, la
   condition sa définition, ce que lit un lecteur d'écran. */
type Ligne = { libelle: string; valeur?: string; texte: string };

function Feuille({ lignes }: { lignes: readonly Ligne[] }) {
  return (
    <dl className="feuille">
      {lignes.map((l) => (
        <div className="feuille-ligne" key={l.libelle}>
          <dt>{l.libelle}</dt>
          <dd>
            {l.valeur ? <strong>{grand(l.valeur)}</strong> : null}
            {l.texte}
          </dd>
        </div>
      ))}
    </dl>
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

        <div className="offre origination">
          <div className="offre-tete">
            <p className="libelle">{o.libelle}</p>
            <h3 className="origination-titre">{grand(o.titre)}</h3>
            <p className="offre-texte">{o.texte}</p>
          </div>
          <Feuille lignes={o.lignes} />
        </div>

        <div className="offre mandat">
          <div className="offre-tete">
            <p className="libelle">{m.libelle}</p>
            <h3 className="mandat-titre">{grand(m.titre)}</h3>
            <p className="offre-texte">{m.texte}</p>
          </div>
          <Feuille lignes={m.lignes} />
        </div>

        <p className="conditions-note">{c.note}</p>
      </div>
    </section>
  );
}
