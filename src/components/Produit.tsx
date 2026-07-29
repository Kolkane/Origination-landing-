import { copy } from "@/config/copy";

export default function Produit() {
  const p = copy.produit;
  const doc = p.doc;
  return (
    <section className="product" id="produit">
      <div className="head">
        <p className="kicker mono rev">{p.kicker}</p>
        <h2 className="statement rev">{p.statement}</h2>
      </div>
      <div className="grid">
        <div>
          <p className="intro rev">{p.lead}</p>
          <div className="annos">
            {p.annos.map((anno) => (
              <div className="anno rev" key={anno.m}>
                <span className="m mono">{anno.m}</span>
                {anno.texte}
              </div>
            ))}
          </div>
        </div>
        <div className="doc rev" aria-label={doc.aria}>
          <div className="doc-head mono">
            <span>{doc.tete1}</span>
            <span>{doc.tete2}</span>
          </div>
          {doc.champs.map((champ) => (
            <div className="doc-field" key={champ.k}>
              <span className="k mono">{champ.k}</span>
              <span className="v">
                {champ.v}
                {/* la mention est portée par la barre elle-même : aucun texte
                    de substitution dans le flux, donc rien d'extractible au
                    copier-coller, tout en restant annoncé aux lecteurs d'écran */}
                {champ.barre ? (
                  <span
                    className="bar"
                    style={{ width: champ.barre }}
                    role="img"
                    aria-label={doc.caviardeSr}
                  />
                ) : null}
                {champ.suffixe}
              </span>
            </div>
          ))}
          <div className="doc-sep" />
          <span className="doc-lbl mono">{doc.signauxLbl}</span>
          {doc.signaux.map((signal) => (
            <div className="sigl" key={signal.d}>
              <span className="d mono">{signal.d}</span>
              <span className="s">{signal.s}</span>
              <span className="src mono">{signal.src}</span>
            </div>
          ))}
          <span className="doc-lbl mono">{doc.angleLbl}</span>
          <p className="doc-angle">{doc.angle}</p>
          <div className="doc-foot mono">{doc.pied}</div>
        </div>
      </div>
    </section>
  );
}
