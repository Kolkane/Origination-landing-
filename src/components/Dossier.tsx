import { brand } from "@/config/brand";
import { copy } from "@/config/copy";
import { grand } from "@/config/typo";

/* v38 : L'OBJET. Le viseur sombre et ses sept zones (v14-v35) sont
   remplacés par le dossier EN PAPIER, composé comme le gabarit A4 réel :
   rail à gauche, rubriques au corps, chronologie datée, pied ancré en bas
   de feuille. La profondeur est un second feuillet décalé, sans ombre ni
   dégradé. Plus aucune interactivité : le document se lit en entier, le
   composant redevient un composant serveur et l'entrée passe par le .rev
   commun. Direction validée sur MAQUETTE-V38-OBJET.html. */
export default function Dossier() {
  const d = copy.dossier;
  const f = d.feuille;

  return (
    <section className="recu" id="dossier">
      <div className="wrap">
        <div className="recu-grid">
          <div className="recu-col">
            <p className="kicker mono rev">{d.kicker}</p>
            <h2 className="statement mask rev">{grand(d.titre)}</h2>
            <p className="recu-chapo rev">{d.chapo}</p>
            <p className="recu-note rev">{d.note}</p>
            {/* la première des trois mentions de fiction */}
            <p className="recu-meta mono rev">
              {d.meta.map((ligne) => (
                <span key={ligne}>
                  {ligne}
                  <br />
                </span>
              ))}
            </p>
          </div>

          <div className="feuillets rev">
            <div className="feuille-2" aria-hidden="true" />
            <article className="feuille" aria-label={f.aria}>
              <header className="f-tete">
                <div>
                  <p className="f-marque mono">{`${brand.MARQUE} ${brand.SUFFIXE} · ${f.meta}`}</p>
                  <h3 className="f-titre">{grand(f.titre)}</h3>
                  <p className="f-sous mono">{f.sous}</p>
                </div>
                {/* la deuxième mention de fiction : le tampon, autorisé
                    dans le spécimen (rectangulaire, jamais arrondi) */}
                <span className="tampon-sp mono">{f.tampon}</span>
              </header>

              <div className="f-corps">
                <div className="rail-l">
                  {f.rail.map((r) => (
                    <div className="rl" key={r.k}>
                      <span className="k mono">{r.k}</span>
                      <span className="v">
                        {r.v}
                        {r.s ? <small> · {r.s}</small> : null}
                      </span>
                    </div>
                  ))}
                </div>

                <div>
                  <div className="rub">
                    <p className="r-lbl mono">{f.detentionLbl}</p>
                    <p className="r-p">
                      {f.detentionAvant}
                      <b>{f.detentionFort}</b>
                      {f.detentionApres}
                    </p>
                  </div>
                  <div className="rub">
                    <p className="r-lbl mono">{f.faitLbl}</p>
                    <ul className="chrono">
                      {f.chrono.map((c) => (
                        <li className={c.cle ? "cle" : undefined} key={c.an}>
                          <span className="d mono">{c.an}</span>
                          <span>{c.ev}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rub">
                    <p className="r-lbl mono">{f.angleLbl}</p>
                    <p className="r-p">
                      <b>{f.angleFort}</b> {f.angleSuite}
                    </p>
                  </div>
                  <div className="rub">
                    <p className="r-lbl mono">{f.inconnuLbl}</p>
                    <p className="r-p">
                      {f.inconnuAvant}
                      <b>{f.inconnuFort}</b>
                      {f.inconnuApres}
                    </p>
                  </div>
                </div>
              </div>

              {/* la troisième mention de fiction, ancrée en bas de feuille */}
              <p className="f-pied">
                <span className="ficti">{f.piedFicti}</span>
                {f.pied}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
