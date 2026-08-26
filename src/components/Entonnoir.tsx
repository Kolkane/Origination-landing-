import { copy } from "@/config/copy";
import { grand } from "@/config/typo";

/* Refonte 2026-08, second temps : la grammaire « entonnoir » supposait des
   quantités, il n'y en a plus par décision, la forme suit. La cascade des
   quatre critères reprend la grammaire du dossier A4 : filets fins, label
   en petites capitales espacées, une phrase en serif par marche. Plus
   d'animation propre à la section : les barres et leur déploiement sont
   morts ensemble, la cascade entre par le vocabulaire .rev commun. Le
   composant redevient donc un composant serveur. */
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

        <ol className="criteres" aria-label={e.ariaCriteres}>
          {e.criteres.map((c) => (
            <li className="crit rev" key={c.num}>
              <p className="crit-l mono">
                <span className="crit-n">{c.num}</span>
                {c.label}
              </p>
              <p className="crit-p">{c.texte}</p>
            </li>
          ))}
        </ol>

        {/* le stock et le flux. Sans cette distinction, un prospect divise
            le stock par le rythme mensuel et conclut que trois mois lui
            suffisent. */}
        <div className="bascule rev">
          <p className="bascule-t">
            {e.bascule1Avant}
            <b>{e.bascule1Fort}</b>
            {e.bascule1Apres}
          </p>
          <p className="bascule-t bascule-flux">{e.bascule2}</p>
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
