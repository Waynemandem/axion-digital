import { useState } from "react";
import { funnelSteps } from "../../data";

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const step = funnelSteps[active];
  return (
    <section className="how" id="how-it-works">
      <div className="wrap">
        <h2>From scroll to sale, in four steps.</h2>
        <div className="steps">
          {funnelSteps.map((s, i) => (
            <button key={s.number} className={i === active ? "step on" : "step"} onClick={() => setActive(i)}>
              <span>{s.number}</span>{s.title}
            </button>
          ))}
        </div>
        <p className="step-copy">{step.description}</p>
      </div>
    </section>
  );
}