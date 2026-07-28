import { copy } from "@/config/copy";

export default function Offre() {
  const o = copy.offre;
  return (
    <section className="block" id="offre">
      <div className="wrap">
        <p className="kicker mono rev">{o.kicker}</p>
        <h2 className="statement rev">{o.statement}</h2>
        <div className="rows">
          {o.lignes.map((ligne) => (
            <div className="row rev" key={ligne.num}>
              <span className="n mono">{ligne.num}</span>
              <h3>{ligne.titre}</h3>
              <p>{ligne.texte}</p>
            </div>
          ))}
        </div>
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
    </section>
  );
}
