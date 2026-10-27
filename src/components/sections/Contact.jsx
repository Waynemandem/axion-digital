import { useState } from "react";
import { siteConfig } from "../../data";

const budgets = ["Under ₦100k", "₦100k – ₦300k", "₦300k – ₦1M", "₦1M+", "Not sure yet"];

export default function Contact() {
  const [step, setStep] = useState(0);
  const [business, setBusiness] = useState("");
  const [budget, setBudget] = useState("");

  const message = `Hi Axion, I run ${business}. My monthly ad budget is ${budget}. I'd like to talk about getting more leads.`;
  const href = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <h2>Let's talk about your business.</h2>
        {step === 0 && (
          <div className="form">
            <label htmlFor="biz">What does your business sell?</label>
            <input id="biz" value={business} onChange={(e) => setBusiness(e.target.value)} placeholder="e.g. wigs, solar panels, apartments" />
            <button className="btn" disabled={!business.trim()} onClick={() => setStep(1)}>Next</button>
          </div>
        )}
        {step === 1 && (
          <div className="form">
            <p className="label">What's your monthly ad budget?</p>
            <div className="chips">
              {budgets.map((b) => (
                <button key={b} className={b === budget ? "chip on" : "chip"} onClick={() => setBudget(b)}>{b}</button>
              ))}
            </div>
            <div className="row">
              <button className="back" onClick={() => setStep(0)}>Back</button>
              <a className={budget ? "btn" : "btn off"} href={budget ? href : undefined} target="_blank" rel="noopener noreferrer">
                Send on WhatsApp
              </a>
            </div>
          </div>
        )}
        <p className="alt">Prefer email? <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
      </div>
    </section>
  );
}