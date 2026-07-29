import { copy } from "@/config/copy";

/* Même liste que les engagements, sur fond encre : un intitulé fort,
   la mesure en dessous. Aucun chiffre qui ne soit pas dans copy. */
export default function Mesure() {
  const m = copy.mesure;
  return (
    <section className="mesure" id="mesure">
      <div className="wrap g12">
        <div className="aside">
          <p className="kicker mono rev">{m.kicker}</p>
          <h2 className="statement mask rev">{m.statement}</h2>
        </div>
        <div className="main nots">
          {m.items.map((item) => (
            <p className="not rev" key={item.titre}>
              <b>{item.titre}</b>
              <br />
              {item.texte}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
