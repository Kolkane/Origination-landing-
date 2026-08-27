import { Fragment } from "react";
import { copy } from "@/config/copy";
import { grand } from "@/config/typo";

/* v46 : LA TRAVERSÉE (arbitrage Vincent, 27/08). La liste de critères sur
   filets disait une énumération ; le filtre est un PASSAGE. La trajectoire
   d'UNE société du registre descend à travers les quatre critères, posés
   en portes qu'elle franchit. La ligne se trace à l'entrée dans le champ
   (classe .in posée par Reveal sur le bloc .trav), la sortie latérale
   montre ce qui n'arrive PAS sur le bureau (la raison de ne pas appeler),
   et la chute du dispositif est la première livraison. Aucune quantité
   dessinée : une trajectoire qualitative, le décompte reste au devis. */
export default function Entonnoir() {
  const e = copy.entonnoir;

  return (
    <section className="entonnoir" id="filtre">
      <div className="wrap">
        <p className="kicker mono rev">{e.kicker}</p>
        <h2 className="ent-h2 mask rev">
          {grand(e.titreAvant)}
          <em>{grand(e.titreItalique)}</em>.
        </h2>
        <p className="ent-intro rev">{e.intro}</p>

        {/* la seule preuve de marché sourcée à un tiers : elle précède
            les critères, qui sont notre méthode */}
        <div className="ancrage rev">
          <p className="ancrage-t">{e.ancrage}</p>
          <p className="ancrage-s mono">{e.ancrageSource}</p>
        </div>

        <div className="trav rev" role="group" aria-label={e.ariaCriteres}>
          <p className="trav-entree mono">{e.entree}</p>
          <ol className="portes">
            {/* la trajectoire : une ligne qui se trace du haut vers la
                pointe, à travers les portes */}
            <svg
              className="trav-ligne"
              aria-hidden="true"
              preserveAspectRatio="none"
              viewBox="0 0 2 100"
            >
              <line x1="1" y1="0" x2="1" y2="100" pathLength="1" />
            </svg>
            {e.criteres.map((c, i) => (
              <Fragment key={c.num}>
                <li className="porte">
                  <p className="crit-l mono">
                    <span className="crit-n">{c.num}</span>
                    {c.label}
                  </p>
                  <p className="crit-p">{c.texte}</p>
                </li>
                {/* la sortie latérale, entre deux portes : ce qui est
                    arrêté ne disparaît pas, c'est une information livrée */}
                {i === 1 && <li className="trav-sortie mono">{e.sortie}</li>}
              </Fragment>
            ))}
          </ol>
          {/* la chute du dispositif : ce qui arrive au bout de la ligne.
              Le stock et le flux restent distincts — sans cette
              distinction, un prospect divise le stock par le rythme
              mensuel et conclut que trois mois lui suffisent. */}
          <div className="trav-chute">
            <p className="bascule-t">
              {e.bascule1Avant}
              <b>{e.bascule1Fort}</b>
              {e.bascule1Apres}
            </p>
            <p className="bascule-t bascule-flux">{e.bascule2}</p>
          </div>
        </div>

        {/* la chute pleine largeur, puis la note en corps normal : les deux
            sont ancrées à gauche sur le filet de section */}
        <div className="ent-foot rev">
          <p className="ent-kicker">
            {e.piedAvant}
            <em>{e.piedItalique}</em>
          </p>
          <p className="ent-note">{e.note}</p>
        </div>
      </div>
    </section>
  );
}
