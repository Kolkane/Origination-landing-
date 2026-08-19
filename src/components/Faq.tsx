import { copy } from "@/config/copy";
import { grand } from "@/config/typo";

/* v15 : nouvelle enveloppe, accordéon inchangé. Le titre tenait une colonne
   collante à gauche, cinquième emploi du même moule sur la page ; il passe
   pleine largeur au-dessus, les questions occupent toute la mesure. */
export default function Faq() {
  const f = copy.faq;
  return (
    <section className="faq-s" id="faq">
      <div className="wrap">
        <div className="faq-head">
          <p className="kicker mono rev">{f.kicker}</p>
          <h2 className="statement mask rev">{grand(f.statement)}</h2>
        </div>

        <div className="faq rev">
          {f.items.map((item) => (
            <details key={item.question}>
              <summary>
                {grand(item.question)}
                <span className="plus" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="a">{item.reponse}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
