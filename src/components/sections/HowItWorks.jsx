import { useState } from "react";
import { funnelSteps, beforeAfter } from "../../data";
import RocketLaunch from "../ui/RocketLaunch";

export default function HowItWorks() {
  const [mode, setMode] = useState("before");
  return (
    <section className="how" id="how-it-works">
      <div className="wrap">
        <div className="how-top">
          <RocketLaunch />
          <div>
            <h2>From stranger to loyal customer.</h2>
            <p className="how-lead">
              Most Nigerian businesses don't have a customer problem. They have a catching problem.
            </p>
            <p>
              People see you, message at 10pm, get no reply, and buy from someone else. We fix every
              leak between the first ad and the repeat customer, so the money you spend on attention
              turns into sales.
            </p>
            <div className="ba-tabs" role="tablist">
              <button role="tab" aria-selected={mode === "before"} className={mode === "before" ? "ba-tab on" : "ba-tab"} onClick={() => setMode("before")}>
                Without a system
              </button>
              <button role="tab" aria-selected={mode === "after"} className={mode === "after" ? "ba-tab on" : "ba-tab"} onClick={() => setMode("after")}>
                With Axion
              </button>
            </div>
            <ul className={`ba ${mode}`}>
              {beforeAfter[mode].map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>

        <ol className="chapters">
          {funnelSteps.map((s) => (
            <li className="chapter" key={s.number}>
              <span className="ch-num">{s.number}</span>
              <h3>{s.title}</h3>
              <p className="ch-desc">{s.description}</p>
              <ul>
                {s.does.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              <p className="ch-get"><strong>You get:</strong> {s.youGet}</p>
              <details>
                <summary>See an example</summary>
                <p>{s.example}</p>
              </details>
            </li>
          ))}
        </ol>

        <div className="how-cta">
          <p>Four steps, one system. Each step feeds the next, so growth compounds instead of stalling.</p>
          <a className="btn" href="#contact">Start with a free chat</a>
        </div>
      </div>
    </section>
  );
}