import { copy } from "@/config/copy";

/* v15 · B3 : asymétrie. Le repère tient les colonnes 1 à 4 et descend, les
   énoncés les colonnes 7 à 12 ; celle du milieu reste vide, c'est elle qui
   fait l'asymétrie. Le chiffre est en encre claire, le vin ne prend que le
   signe d'approximation : ce repère ne doit pas devenir la plus grande tache
   rouge du site. */
export default function Mesure() {
  const m = copy.mesure;
  return (
    <section className="mesure" id="mesure">
      <div className="wrap">
        <p className="mes-kicker kicker mono rev">{m.kicker}</p>
        <h2 className="mes-statement mask rev">{m.statement}</h2>

        <div className="g12">
          <div className="repere rev">
            <p className="repere-n">
              <span className="repere-signe">{m.repereSigne}</span>
              {m.repereValeur}
            </p>
          </div>

          <div className="enonces rev">
            {m.items.map((item) => (
              <div className="en" key={item.titre}>
                <h3 className="en-t">{item.titre}</h3>
                <p className="en-p">{item.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
