import { copy } from "@/config/copy";

/* v15 · B2 : manifeste. Colonne unique, quatre lignes pleine largeur, et le
   statement à l'échelle du hero. C'est le seul autre endroit de la page à
   cette taille, et le seul bloc de principe : c'est ce qui en fait un
   événement au milieu de sections qui, elles, portent des données.
   Aucun rouge ici, la section tient par le blanc et l'échelle. */
export default function Engagements() {
  const e = copy.engagements;
  return (
    <section className="commit" id="engagements">
      <div className="wrap">
        <p className="c-kicker kicker mono rev">{e.kicker}</p>
        <h2 className="c-statement mask rev">{e.statement}</h2>

        <div className="c-lignes">
          {e.nots.map((item) => (
            <div className="c-ligne rev" key={item.fort}>
              <p className="c-p">{item.fort}</p>
              <p className="c-e">{item.suite}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
