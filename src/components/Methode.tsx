import { copy } from "@/config/copy";
import { grand } from "@/config/typo";

/* V80 · LA MÉTHODE. Trois étapes numérotées, chacune sous un filet
   d'encre, le numéro en vin : c'est l'un des quatre emplois du vin de la
   V80. Puis la note. Le lien « La méthode en détail » de la planche
   n'est pas repris, il pointait sur la section elle-même (arbitrage
   Vincent, 17/09/2026). Les numéros sont aria-hidden, une liste
   ordonnée est déjà numérotée pour qui l'écoute.
   La planche au pixel : trois colonnes sur ordinateur, une pile sur
   téléphone. */
export default function Methode() {
  const m = copy.methode;
  return (
    <section className="methode" id="methode">
      <div className="cadre">
        <h2 className="titre-section">{grand(m.titre)}</h2>
        <ol className="methode-etapes">
          {m.etapes.map((etape, i) => (
            <li className="methode-etape" key={etape.titre}>
              <span aria-hidden="true" className="methode-num">
                {i + 1}
              </span>
              <h3 className="methode-titre">{grand(etape.titre)}</h3>
              <p className="methode-texte">{etape.texte}</p>
            </li>
          ))}
        </ol>
        <p className="methode-note">{m.note}</p>
      </div>
    </section>
  );
}
