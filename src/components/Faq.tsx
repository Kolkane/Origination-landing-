import { copy } from "@/config/copy";

export default function Faq() {
  const f = copy.faq;
  return (
    <section className="faq-s" id="faq">
      <div className="narrow">
        <p className="kicker mono rev">{f.kicker}</p>
        <h2 className="statement rev">{f.statement}</h2>
        <div className="faq rev">
          {f.items.map((item) => (
            <details key={item.question}>
              <summary>
                {item.question}
                <span className="plus" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="a">{item.reponse}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
