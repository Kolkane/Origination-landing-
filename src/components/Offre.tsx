import { copy } from "@/config/copy";

/* v15 · C1 : les deux offres se lisent côte à côte. Empilées, on ne les
   comparait jamais, alors que c'est tout le travail d'une section de prix. */
export default function Offre() {
  const o = copy.offre;
  return (
    <section className="offre" id="offre">
      <div className="wrap">
        <div className="o-head">
          <p className="o-kicker kicker mono rev">{o.kicker}</p>
          <h2 className="o-statement mask rev">{o.statement}</h2>
        </div>

        <div className="paires rev">
          {o.paliers.map((palier) => (
            <div className="pan" id={palier.ancre} key={palier.nom}>
              <h3 className="p-nom">{palier.nom}</h3>
              <p className="p-lead">{palier.lead}</p>

              <p className="p-lbl mono">{palier.prixLbl}</p>
              <p className="p-prix">{palier.prix}</p>
              <p className="p-suffixe">{palier.prixSuffixe}</p>
              <p className="p-cond mono">{palier.prixCond}</p>

              {palier.corps && <p className="p-corps">{palier.corps}</p>}
              {palier.points && (
                <ul className="p-liste">
                  {palier.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

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
