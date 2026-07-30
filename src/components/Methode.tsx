import { copy } from "@/config/copy";

/* v15 · B1 : bande horizontale sur filet continu. L'en-tête tient sur une
   ligne au lieu d'occuper une colonne de gauche restée aux trois quarts
   vide, et la lecture devient horizontale, seul endroit de la page. */
export default function Methode() {
  const m = copy.methode;
  return (
    <section className="method" id="methode">
      <div className="wrap">
        <div className="m-head">
          <p className="m-kicker kicker mono rev">{m.kicker}</p>
          <h2 className="m-statement mask rev">{m.statement}</h2>
        </div>

        <div className="rail rev">
          <div className="steps-h">
            {m.lignes.map((ligne) => (
              <div className="st" key={ligne.num}>
                <span className="st-n mono">{ligne.num}</span>
                <h3 className="st-t">{ligne.titre}</h3>
                <p className="st-p">{ligne.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
