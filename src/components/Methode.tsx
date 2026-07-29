import { copy } from "@/config/copy";

export default function Methode() {
  const m = copy.methode;
  return (
    <section className="method" id="methode">
      <div className="narrow">
        <p className="kicker mono rev">{m.kicker}</p>
        <h2 className="statement rev">{m.statement}</h2>
        <div className="steps">
          {m.lignes.map((ligne) => (
            <div className="step rev" key={ligne.num}>
              <span className="n serif">{ligne.num}</span>
              <div>
                <h3>{ligne.titre}</h3>
                <p>{ligne.texte}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
