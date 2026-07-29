import { copy } from "@/config/copy";

export default function Engagements() {
  const e = copy.engagements;
  return (
    <section className="commit" id="engagements">
      <div className="head">
        <p className="kicker mono rev">{e.kicker}</p>
        <h2 className="statement rev">{e.statement}</h2>
      </div>
      <div className="list">
        {e.nots.map((item) => (
          <p className="not rev" key={item.fort}>
            <b>{item.fort}</b>
            {item.suite}
          </p>
        ))}
      </div>
    </section>
  );
}
