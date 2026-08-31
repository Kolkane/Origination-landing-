import { copy } from "@/config/copy";

/* v60 · la bande compacte des refus. Une seule rangée, quatre mentions
   rayées, un pied d'une phrase. Aucun .rev : la v54 a retiré 42 poses de
   la classe et n'en a laissé qu'une, sur la toise, dont le .in pilote un
   tracé. Une bande de quatre lignes n'a rien à faire apparaître.
   Direction validée sur MAQUETTE-V60-NEFAITPAS.html. */
export default function NeFaitPas() {
  const n = copy.neFaitPas;
  return (
    <section className="nfp papier" id="ne-faisons-pas">
      <div className="wrap sect">
        <p className="kicker label">{n.kicker}</p>
        <ul className="nfp-row">
          {n.items.map((item) => (
            <li className="nfp-i" key={item.non}>
              {/* le terme rayé n'est pas un titre : c'est une entrée annulée,
                  il ne prend donc pas de niveau de titre dans le document. */}
              <p className="nfp-non">{item.non}</p>
              <p className="nfp-oui">{item.oui}</p>
            </li>
          ))}
        </ul>
        <p className="nfp-pied">{n.pied}</p>
      </div>
    </section>
  );
}
