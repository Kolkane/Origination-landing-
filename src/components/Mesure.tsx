import { copy } from "@/config/copy";
import { grand } from "@/config/typo";

/* Le grand repère (« ≈ 1/3 » puis « 0 ») est mort : un grand zéro se lit
   comme du vide, pas comme une preuve (arbitrage Vincent, 26/08/2026).
   La section reprend la grammaire des entrées sur filets : titre à
   gauche, énoncé à droite, un filet par entrée. */
export default function Mesure() {
  const m = copy.mesure;
  return (
    <section className="mesure" id="mesure">
      <div className="wrap">
        <p className="mes-kicker kicker mono rev">{m.kicker}</p>
        <h2 className="statement mes-statement mask rev">{grand(m.statement)}</h2>
        <div className="mes-liste rev">
          {m.items.map((item) => (
            <div className="mes-item" key={item.titre}>
              <h3 className="mes-t">{grand(item.titre)}</h3>
              <p className="mes-p">{item.texte}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
