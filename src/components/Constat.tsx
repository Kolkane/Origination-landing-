import { copy } from "@/config/copy";

export default function Constat() {
  const c = copy.constat;
  return (
    <section className="block" id="constat">
      <div className="wrap">
        <p className="kicker mono rev">{c.kicker}</p>
        <h2 className="statement rev">{c.statement}</h2>
        <p className="lead rev">{c.lead}</p>
        <p className="exergue rev">{c.exergue}</p>
      </div>
    </section>
  );
}
