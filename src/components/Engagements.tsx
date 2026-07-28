import { copy } from "@/config/copy";

export default function Engagements() {
  const e = copy.engagements;
  return (
    <section className="block" id="engagements">
      <div className="wrap">
        <p className="kicker mono rev">{e.kicker}</p>
        <h2 className="statement rev">{e.statement}</h2>
        <div className="nots">
          {e.nots.map((item) => (
            <p className="not rev" key={item.fort}>
              <b>{item.fort}</b>
              {item.suite}
            </p>
          ))}
        </div>
        <div className="guar rev">
          <span className="k mono">{e.garantie.k}</span>
          <p>
            {e.garantie.avant}
            <b>{e.garantie.fort1}</b>
            {e.garantie.milieu}
            <b>{e.garantie.fort2}</b>
            {e.garantie.apres}
          </p>
        </div>
      </div>
    </section>
  );
}
