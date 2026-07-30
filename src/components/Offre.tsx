import { copy } from "@/config/copy";

/* v15 · C2 : une offre occupe une ligne entière. Empilées dans une colonne
   étroite, elles laissaient 40 % de noir à gauche ; côte à côte (C1), la
   plus courte se lisait comme un trou. En pleine largeur, ni l'un ni
   l'autre ne peut se produire. */
export default function Offre() {
  const o = copy.offre;
  return (
    <section className="offre" id="offre">
      <div className="wrap">
        <div className="o-head">
          <p className="o-kicker kicker mono rev">{o.kicker}</p>
          <h2 className="o-statement mask rev">{o.statement}</h2>
        </div>

        {o.paliers.map((palier) => (
          <div className="ligne rev" id={palier.ancre} key={palier.nom}>
            <div className="l-haut">
              <div>
                <h3 className="l-nom">{palier.nom}</h3>
                <p className="l-lead">{palier.lead}</p>
              </div>
              <div className="l-prix">
                <p className="l-lbl mono">{palier.prixLbl}</p>
                <p className="l-chiffre">{palier.prix}</p>
                <p className="l-suffixe">{palier.prixSuffixe}</p>
                <p className="l-cond mono">{palier.prixCond}</p>
              </div>
            </div>

            {palier.corps && <p className="l-corps">{palier.corps}</p>}
            {palier.points && (
              <ul className="l-liste">
                {palier.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* la définition et l'engagement portent sur les deux offres :
            pleine largeur, pas indentés sous l'une d'elles */}
        <div className="o-def rev">
          <p className="o-def-k mono">{o.definition.k}</p>
          <p className="o-def-t">{o.definition.texte}</p>
        </div>

        <p className="o-pied rev">
          <b>{o.pied.fort}</b>
          {o.pied.suite}
        </p>
      </div>
    </section>
  );
}
