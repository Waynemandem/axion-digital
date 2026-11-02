import { useState } from "react";
import { siteConfig } from "../../data";

const fmt = (n) => "₦" + n.toLocaleString("en-NG");

export default function Calculator() {
  const [budget, setBudget] = useState(200000);
  const [cpl, setCpl] = useState(2500);
  const leads = Math.floor(budget / cpl);

  const msg = `Hi Axion, I'm thinking of a ${fmt(budget)} monthly ad budget. What's realistic for my business?`;
  const href = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}`;

  return (
    <section className="calc" id="calculator">
      <div className="wrap">
        <h2>What could your ad budget bring in?</h2>
        <div className="calc-card">
          <label>
            Monthly ad budget: <strong>{fmt(budget)}</strong>
            <input type="range" min="50000" max="2000000" step="25000" value={budget} onChange={(e) => setBudget(Number(e.target.value))} />
          </label>
          <label>
            Cost per lead: <strong>{fmt(cpl)}</strong>
            <input type="range" min="500" max="10000" step="100" value={cpl} onChange={(e) => setCpl(Number(e.target.value))} />
          </label>
          <p className="calc-out"><strong>≈ {leads}</strong> leads a month</p>
          <small>An estimate, not a promise. Cost per lead varies by industry, offer and market, so we set a realistic figure for your business on the first call.</small>
          <a className="btn" href={href} target="_blank" rel="noopener noreferrer">Get my real numbers</a>
        </div>
      </div>
    </section>
  );
}