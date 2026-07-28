import { copy } from "@/config/copy";

export default function Methode() {
  const m = copy.methode;
  return (
    <section className="block" id="methode">
      <div className="wrap">
        <p className="kicker mono rev">{m.kicker}</p>
        <h2 className="statement rev">{m.statement}</h2>
        <div className="rows">
          {m.lignes.map((ligne) => (
            <div className="row rev" key={ligne.num}>
              <span className="n mono">{ligne.num}</span>
              <h3>{ligne.titre}</h3>
              <p>{ligne.texte}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
