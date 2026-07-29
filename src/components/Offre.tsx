import { copy } from "@/config/copy";

export default function Offre() {
  const o = copy.offre;
  return (
    <section className="offer" id="offre">
      <div className="wrap">
        <div className="cols">
          {/* le titre reste au regard pendant que les postes défilent */}
          <div className="sticky">
            <p className="kicker mono rev">{o.kicker}</p>
            <h2 className="statement rev">{o.statement}</h2>
            <p className="note rev">{o.note}</p>
          </div>
          <div className="items">
            {o.lignes.map((ligne) => (
              <div className="oitem rev" key={ligne.num}>
                <div className="t">
                  <span className="n serif">{ligne.num}</span>
                  <h3>{ligne.titre}</h3>
                </div>
                <p>{ligne.texte}</p>
              </div>
            ))}
            <div className="price rev">
              {o.grille.lignes.map((ligne) => (
                <div className="price-row" key={ligne.titre}>
                  <h4>{ligne.titre}</h4>
                  <span className="p mono">{ligne.prix}</span>
                </div>
              ))}
              <p className="price-note mono">
                {o.grille.noteAvant}
                <b>{o.grille.noteFort}</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
