import { brand } from "@/config/brand";
import { copy } from "@/config/copy";
import { grand } from "@/config/typo";

/* v53 : DEUX COLONNES (arbitrage Vincent, 27/08, référence externe
   adaptée à la charte : filets, pas de boîtes arrondies). La liste
   pleine largeur rendait la section monotone et énorme. À gauche
   l'en-tête, la note et l'appel ; à droite l'accordéon, inchangé dans
   sa mécanique. */
export default function Faq() {
  const f = copy.faq;
  return (
    <section className="faq-s" id="faq">
      <div className="wrap">
        <div className="faq-grid">
          <div className="faq-head">
            <p className="kicker mono rev">{f.kicker}</p>
            <h2 className="statement mask rev">{grand(f.statement)}</h2>
            <p className="faq-note rev">{f.note}</p>
            <a
              className="cta mono rev"
              href={brand.CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {f.cta}
            </a>
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
      </div>
    </section>
  );
}
