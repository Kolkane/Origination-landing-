import Section from "@/components/Section";
import { brand } from "@/config/brand";
import { copy } from "@/config/copy";

export default function Offre() {
  const t = copy.offre.tarifs;
  return (
    <Section label={copy.offre.label}>
      <div className="grid gap-8 sm:grid-cols-2">
        {copy.offre.colonnes.map((colonne) => (
          <div key={colonne.titre}>
            <h3 className="font-display text-lg font-bold tracking-display">
              {colonne.titre}
            </h3>
            <p className="mt-2 max-w-[48ch] text-body text-muted">{colonne.texte}</p>
          </div>
        ))}
      </div>

      {brand.SHOW_PRICING ? (
        <div className="mt-10 max-w-[68ch]">
          <dl>
            {t.lignes.map((ligne, i) => (
              <div
                key={ligne.offre}
                className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-hairline py-3"
              >
                <dt className="font-medium">{ligne.offre}</dt>
                {/* le prix boutique est l'un des 2-3 emplois autorisés de l'outremer */}
                <dd
                  className={`font-mono text-xs tracking-label ${
                    i === 0 ? "text-outremer" : ""
                  }`}
                >
                  {ligne.valeur}
                </dd>
              </div>
            ))}
          </dl>
          <div className="border-b border-t border-hairline py-3">
            <p className="font-mono text-label tracking-label text-muted">{t.conditions}</p>
          </div>
          <p className="mt-4 font-mono text-label tracking-label text-muted">{t.note}</p>
        </div>
      ) : null}
    </Section>
  );
}
