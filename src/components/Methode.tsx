import { copy } from "@/config/copy";
import { grand } from "@/config/typo";

/* v38 : la méthode se tait. L'en-tête en bande (kicker à gauche,
   statement à droite) et les trois colonnes de la v15-B1 sont remplacés
   par un empilement : statement à l'échelle display, puis trois entrées
   sur filets, numéro mono, titre, texte. La page ne porte plus qu'une
   seule voix, l'objet papier du dossier fait le reste.
   Direction validée sur MAQUETTE-V38-OBJET.html. */
export default function Methode() {
  const m = copy.methode;
  return (
    <section className="method" id="methode">
      <div className="wrap">
        <p className="kicker mono rev">{m.kicker}</p>
        <h2 className="m-statement mask rev">{grand(m.statement)}</h2>
        <p className="m-sous rev">{m.sousTitre}</p>
        <div className="m-entrees rev">
          {m.lignes.map((ligne) => (
            <div className="m-entree" key={ligne.num}>
              <span className="me-n mono">{ligne.num}</span>
              <h3 className="me-t">{grand(ligne.titre)}</h3>
              <p className="me-p">{ligne.texte}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
