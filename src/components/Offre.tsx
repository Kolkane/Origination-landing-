import { brand } from "@/config/brand";
import { copy } from "@/config/copy";

/* v15 · B5 : un plat principal et un complément. Ce ne sont pas deux offres
   égales, et la structure le dit avant le texte : un bloc massif, puis une
   bande fine. Les deux ne sont donc plus une liste qu'on parcourt. */
export default function Offre() {
  const o = copy.offre;
  const p = o.principal;
  const s = o.complement;
  return (
    <section className="offre" id="offre">
      <div className="wrap">
        <p className="b-kicker kicker mono rev">{o.kicker}</p>
        <h2 className="b-titre mask rev">{o.statement}</h2>

        {/* la définition gouverne les deux offres : elle est en tête, pas
            derrière la seconde où elle passait pour une clause du mandat */}
        <div className="b-def rev">
          <p className="b-def-k mono">{o.definition.k}</p>
          <p className="b-def-t">{o.definition.texte}</p>
        </div>

        {/* ---------- le plat principal ---------- */}
        <div className="primaire rev" id={p.ancre}>
          <h3 className="p-nom mono">{p.nom}</h3>
          <p className="p-lead">{p.lead}</p>

          <div className="p-tarif">
            <p className="p-chiffre">{p.prix}</p>
            <p className="p-meta mono">
              <b>{p.metaFort}</b>
              {p.metaSuite}
              <br />
              {p.metaLigne2}
            </p>
          </div>

          {/* l'arithmétique posée à la place du prospect : le prix mensuel
              ramené à l'année, face à ce qu'il sait déjà valoir chez lui */}
          <p className="p-arith">{p.arithmetique}</p>

          {p.corps.map((para) => (
            <p className="p-corps" key={para}>
              {para}
            </p>
          ))}
        </div>

        {/* ---------- le complément ---------- */}
        <div className="secondaire rev">
          <h3 className="s-nom mono">{s.nom}</h3>
          <p className="s-lead">{s.lead}</p>
          <div className="s-tarif">
            <p className="s-chiffre">{s.prix}</p>
            <p className="s-meta mono">
              {s.metaLigne1}
              <br />
              {s.metaLigne2}
            </p>
          </div>
        </div>

        <div className="b-fin rev">
          <p className="b-pied">
            <b>{o.pied.fort}</b>
            {o.pied.suite}
          </p>
          <a
            className="cta mono"
            href={brand.CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {o.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
