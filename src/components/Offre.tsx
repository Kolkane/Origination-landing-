import Section from "@/components/Section";
import { brand } from "@/config/brand";
import { copy } from "@/config/copy";

export default function Offre() {
  const t = copy.offre.tarifs;
  return (
    <Section label={copy.offre.label}>
      <div className="grid gap-10 sm:grid-cols-2 sm:gap-8">
        {copy.offre.colonnes.map((colonne) => (
          <div key={colonne.titre}>
            <h3 className="font-serif text-xl font-medium">{colonne.titre}</h3>
            <p className="mt-3 max-w-[48ch] text-body text-muted">{colonne.texte}</p>
          </div>
        ))}
      </div>

      {brand.SHOW_PRICING ? (
        <div className="mt-14 lg:ml-24">
          <dl>
            {t.lignes.map((ligne) => (
              <div
                key={ligne.offre}
                className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-hairline py-4"
              >
                <dt className="font-serif">{ligne.offre}</dt>
                <dd className="font-mono text-xs tracking-label">{ligne.valeur}</dd>
              </div>
            ))}
          </dl>
          <div className="border-b border-t border-hairline py-4">
            <p className="font-mono text-label tracking-label text-muted">{t.conditions}</p>
          </div>
          <p className="mt-4 font-mono text-label tracking-label text-muted">{t.note}</p>
        </div>
      ) : null}
    </Section>
  );
}
