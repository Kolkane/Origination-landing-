import { copy } from "@/config/copy";

export default function Constat() {
  const c = copy.constat;
  return (
    <section className="constat" id="constat">
      <div className="wrap">
        <p className="kicker mono rev">{c.kicker}</p>
        <h2 className="big rev">
          {c.titreAvant}
          <em>{c.titreItalique}</em>.
        </h2>
        <div className="sub">
          <p className="rev">{c.lead}</p>
          <p className="mono rev">
            {c.sourcesLigne1}
            <br />
            {c.sourcesLigne2}
            <br />
            <br />
            {c.citation1}
            <br />
            {c.citation2}
          </p>
        </div>
      </div>
    </section>
  );
}
