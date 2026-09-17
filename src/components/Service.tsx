import Icone from "@/components/Icones";
import { copy } from "@/config/copy";
import { grand } from "@/config/typo";

/* V80 · CE QUE FAIT IMBRIN RESEARCH. Un titre, une intro, et une rangée
   de quatre entrées à icône, sans cadre ni fond : la planche au pixel.
   Sur téléphone la rangée passe en pile et l'icône vient se poser à
   gauche du titre, en 44 px. */
export default function Service() {
  const s = copy.service;
  return (
    <section className="service" id="service">
      <div className="cadre">
        <h2 className="titre-section">{grand(s.titre)}</h2>
        <p className="service-intro">{s.intro}</p>
        <div className="service-rangee">
          {s.entrees.map((entree) => (
            <div className="service-entree" key={entree.icone}>
              <Icone nom={entree.icone} />
              <div>
                <h3 className="service-titre">{grand(entree.titre)}</h3>
                <p className="service-texte">{entree.texte}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
