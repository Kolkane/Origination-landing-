import { copy } from "@/config/copy";

type BriefSpecimenProps = {
  mode?: "compact" | "complet";
};

function Caviarde({ largeur }: { largeur: number }) {
  return (
    <span className="whitespace-nowrap">
      <span
        aria-hidden="true"
        className="inline-block h-[0.8em] translate-y-[0.08em] bg-ink"
        style={{ width: `${largeur}ch` }}
      />
      <span className="sr-only">{copy.specimen.caviardeSr}</span>
    </span>
  );
}

export default function BriefSpecimen({ mode = "compact" }: BriefSpecimenProps) {
  const s = copy.specimen;
  const compact = mode === "compact";

  return (
    <figure aria-label={s.ariaLabel} className="relative">
      <div
        className={`border border-hairline bg-paper-light ${
          compact ? "relative aspect-[210/297] overflow-hidden" : ""
        }`}
      >
        {/* le fondu est ancré au bord bas de la carte, pas au paragraphe : ce
            qui dépasse du format A4 s'efface quel que soit le viewport */}
        <div
          className={
            compact
              ? "absolute inset-0 overflow-hidden p-6 [mask-image:linear-gradient(to_bottom,black_72%,transparent_97%)] lg:p-7"
              : "p-6 lg:p-7"
          }
        >
          <dl className="grid grid-cols-2 gap-x-4 gap-y-4 border-b border-hairline pb-5">
            {s.identite.map((champ) => (
              <div
                key={champ.label}
                className={champ.pleineLargeur ? "col-span-2" : ""}
              >
                <dt className="font-mono text-label uppercase tracking-label text-muted">
                  {champ.label}
                </dt>
                <dd className="mt-1 text-sm">
                  {champ.valeur}
                  {champ.caviarde ? <Caviarde largeur={champ.caviarde} /> : null}
                  {champ.suffixe}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-5">
            <p className="font-mono text-label uppercase tracking-label text-muted">
              {s.signauxLabel}
            </p>
            <ul className="mt-1">
              {s.signaux.map((signal) => (
                <li
                  key={signal.date}
                  className="flex items-baseline gap-3 border-b border-hairline py-2.5"
                >
                  <span className="shrink-0 font-mono text-label tracking-label text-muted">
                    {signal.date}
                  </span>
                  <span className="text-sm">{signal.texte}</span>
                  <span className="ml-auto shrink-0 font-mono text-label uppercase tracking-label text-bronze">
                    {signal.source}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <p className="font-mono text-label uppercase tracking-label text-muted">
              {s.angle.label}
            </p>
            <p className="mt-2 text-sm">
              {s.angle.texte}
              {compact ? <span className="sr-only"> {s.angle.srTronque}</span> : null}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute -top-3 right-4 rotate-[-6deg] border border-bronze bg-paper-light px-2.5 py-1 font-mono text-label font-medium tracking-label text-bronze">
        {s.tampon}
      </div>
    </figure>
  );
}
