import { copy } from "@/config/copy";

/* bande claire pleine largeur : la respiration entre le constat et la
   méthode. Les chiffres de l'entreprise viennent de brand via copy. */
export default function BandeChiffres() {
  const b = copy.bande;
  return (
    <section className="band" aria-label={b.aria}>
      <div className="row-band">
        {b.cellules.map((cellule) => (
          <div className="cell rev" key={cellule.l}>
            <div className="n serif">{cellule.n}</div>
            <div className="l">{cellule.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
