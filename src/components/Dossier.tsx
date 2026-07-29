import { copy } from "@/config/copy";

/* Même gabarit que Methode : libellé en marge, liste sur filets à droite.
   Aucun motif visuel nouveau, seul le dernier item porte l'accent. */
export default function Dossier() {
  const d = copy.dossier;
  return (
    <section className="dossier" id="dossier">
      <div className="wrap g12">
        <div className="aside">
          <p className="kicker mono rev">{d.kicker}</p>
          <h2 className="statement mask rev">{d.statement}</h2>
          <p className="note rev">{d.chapo}</p>
        </div>
        <div className="main steps">
          {d.lignes.map((ligne) => (
            <div
              className={`step rev${ligne.marque ? " mark" : ""}`}
              key={ligne.num}
            >
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
