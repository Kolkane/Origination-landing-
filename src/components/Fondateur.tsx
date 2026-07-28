import { brand } from "@/config/brand";
import { copy } from "@/config/copy";

/* TODO : LINKEDIN_URL est encore un placeholder dans brand.ts : le lien ne
   se rend pas tant que l'URL réelle n'est pas renseignée. */
const linkedinRenseigne = !brand.LINKEDIN_URL.includes("A-REMPLACER");

export default function Fondateur() {
  const f = copy.fondateur;
  return (
    <section className="block" id="fondateur">
      <div className="wrap">
        <p className="kicker mono rev">{f.kicker}</p>
        <h2 className="statement rev">{f.statement}</h2>
        <div className="founder">
          <div className="ph mono rev">{f.portrait}</div>
          <div className="rev">
            <p>{f.corps}</p>
            <p className="id mono">
              {f.id}
              {linkedinRenseigne ? (
                <>
                  <br />
                  <a href={brand.LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                    {f.linkedin}
                  </a>
                </>
              ) : null}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
