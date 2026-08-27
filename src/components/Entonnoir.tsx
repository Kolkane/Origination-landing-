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

        {/* v48 : LE DIPTYQUE DU FILTRE (arbitrage Vincent, 27/08) — la
            traversée à gauche, et à droite le panneau sombre : le grand
            énoncé du décompte au devis, la note du taux d'écart, et
            l'ancrage Bpifrance en trois compteurs, les seuls grands
            chiffres du site, sourcés. */}
        <div className="fdipt rev">
          <div className="fd-trav trav" role="group" aria-label={e.ariaCriteres}>
          <p className="trav-entree mono">{e.entree}</p>
          {/* v46b : l'amorce dit la règle du dispositif avant les marches */}
          <p className="trav-amorce">{e.amorce}</p>
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
                {/* v46b : la note de sortie se rattache à la marche de la
                    détention (03, index 2) : c'est là que sortent les
                    filiales et les contrôles déjà basculés */}
                {i === 2 && <li className="trav-sortie">{e.sortie}</li>}
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

          {/* le panneau : l'énoncé, la note, et les compteurs sourcés */}
          <div className="fd-pan">
            <p className="fd-statement">
              {e.piedAvant}
              <em>{e.piedItalique}</em>
            </p>
            <p className="fd-note">{e.note}</p>
            <div className="fd-anc">
              {e.ancrageItems.map((a) => (
                <div className="fd-a" key={a.n}>
                  <p className="fd-a-n">{a.n}</p>
                  <p className="fd-a-l">{a.l}</p>
                </div>
              ))}
              <p className="ancrage-s mono">{e.ancrageSource}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
