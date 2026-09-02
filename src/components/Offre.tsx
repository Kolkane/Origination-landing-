import { brand } from "@/config/brand";
import { copy } from "@/config/copy";
import { grand } from "@/config/typo";

/* v47 : L'OFFRE EN DIPTYQUE (arbitrage Vincent, 27/08). À gauche LA FICHE
   du devis, sur papier : le nom, le lead, puis les clauses tabulées sur
   filets (périmètre, exclusivité, engagement, plancher, veille) et le
   livrable en pied — la tenue d'un devis, pas d'un pricing de SaaS. À
   droite LE PANNEAU sombre : le prix, l'arithmétique, et le grand énoncé
   « pas de commission » à l'échelle display — notre contrepartie honnête
   à la citation client des gabarits d'études de cas. Le mandat de
   recherche reste une bande fine dessous. */
export default function Offre() {
  const o = copy.offre;
  const p = o.principal;
  const s = o.complement;
  return (
    <section className="offre" id="offre">
      <div className="wrap">
        <p className="b-kicker kicker label">{o.kicker}</p>
        <h2 className="b-titre mask">{grand(o.statement)}</h2>

        {/* la définition gouverne les deux offres : elle est en tête, pas
            derrière la seconde où elle passait pour une clause du mandat */}
        <div className="b-def">
          <p className="b-def-k label">{o.definition.k}</p>
          <p className="b-def-t">{o.definition.texte}</p>
        </div>

        {/* ---------- le diptyque ---------- */}
        <div className="dipt" id={p.ancre}>
          <div className="fiche-o">
            <h3 className="fo-nom label">{p.nom}</h3>
            <p className="fo-lead">{p.lead}</p>
            <ul className="fo-rows">
              {p.fiche.rows.map((r) => (
                <li key={r.k}>
                  <span className="fo-k label">{r.k}</span>
                  <span className="fo-v">{r.v}</span>
                </li>
              ))}
            </ul>
            <p className="fo-livrable">
              <span className="fo-k label">{p.fiche.livrableLbl}</span>
              <span className="fo-v">
                <b>{p.fiche.livrable}</b>
              </span>
            </p>
            <p className="fo-note">{p.fiche.note}</p>
          </div>

          <div className="panneau">
            <p className="pan-chiffre">{p.prix}</p>
            <p className="pan-meta label">
              <b>{p.metaFort}</b>
              {p.metaSuite}
            </p>
            {/* l'arithmétique posée à la place du prospect : le prix
                mensuel ramené à l'année, face à ce qu'il sait déjà
                valoir chez lui */}
            <p className="pan-arith">{p.arithmetique}</p>
            <p className="pan-statement">{grand(o.pied.fort)}</p>
            <p className="pan-suite">{o.pied.suite}</p>
            <a
              className="cta label"
              href={brand.CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {o.cta}
            </a>
          </div>
        </div>

        {/* ---------- le complément ---------- */}
        <div className="secondaire">
          <h3 className="s-nom label">{s.nom}</h3>
          <p className="s-lead">{s.lead}</p>
          <div className="s-tarif">
            <p className="s-chiffre">{s.prix}</p>
            <p className="s-meta label">
              {s.metaLigne1}
              <br />
              {s.metaLigne2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
