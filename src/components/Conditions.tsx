import { copy } from "@/config/copy";
import { grand } from "@/config/typo";

/* V80 · LES CONDITIONS. L'origination sous un filet vert de 3 px, son
   titre à 46 px et quatre grandes valeurs en vert ; le mandat de
   recherche en dessous, sous un filet d'encre fin, titre à 28 px, un
   paragraphe ; une note grise en pied. La structure de la rémunération,
   jamais un nombre : c'est la règle de l'offre v15, et la planche la
   respecte. Sur téléphone, les quatre valeurs s'empilent sur filets. */
export default function Conditions() {
  const c = copy.conditions;
  const o = c.origination;
  const m = c.mandat;
  return (
    <section className="conditions" id="conditions">
      <div className="cadre">
        <h2 className="titre-section">{grand(c.titre)}</h2>
        <p className="intro-section">{c.intro}</p>

        <div className="origination">
          <div className="origination-tete">
            <div>
              <p className="libelle">{o.libelle}</p>
              <h3 className="origination-titre">{grand(o.titre)}</h3>
            </div>
            <p className="origination-texte">{o.texte}</p>
          </div>
          <div className="valeurs">
            {o.valeurs.map((v) => (
              <div className="valeur" key={v.libelle}>
                <p className="libelle">{v.libelle}</p>
                <p className="valeur-grande">{v.valeur}</p>
                <p className="valeur-texte">{v.texte}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mandat">
          <div>
            <p className="libelle">{m.libelle}</p>
            <h3 className="mandat-titre">{grand(m.titre)}</h3>
          </div>
          <p className="mandat-texte">{m.texte}</p>
        </div>

        <p className="conditions-note">{c.note}</p>
      </div>
    </section>
  );
}
