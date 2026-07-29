import { copy } from "@/config/copy";

export default function Offre() {
  const o = copy.offre;
  return (
    <section className="offer" id="offre">
      <div className="wrap">
        <div className="cols">
          {/* le titre reste au regard pendant que les paliers défilent */}
          <div className="sticky">
            <p className="kicker mono rev">{o.kicker}</p>
            <h2 className="statement rev">{o.statement}</h2>
          </div>
          <div className="items">
            {o.paliers.map((palier) => (
              <div className="oitem rev" id={palier.ancre} key={palier.nom}>
                <div className="t">
                  <h3>{palier.nom}</h3>
                </div>
                <p className="prix mono">{palier.prix}</p>
                {palier.prix2 && <p className="prix-2 mono">{palier.prix2}</p>}
                <p className="tier-lead">{palier.lead}</p>
                <ul className="tier-list">
                  {palier.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <p className="tier-note mono">{palier.note}</p>
              </div>
            ))}
            {/* ce que « cellule » veut dire, sans quoi l'exclusivité ne se
                vérifie pas : même encadré que les blocs distingués du site */}
            <div className="guar rev">
              <span className="k mono">{o.definition.k}</span>
              <p>{o.definition.texte}</p>
            </div>
            <div className="price rev">
              <p className="not">
                <b>{o.pied.fort}</b>
                {o.pied.suite}
              </p>
              <p className="price-note mono">{o.pied.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
