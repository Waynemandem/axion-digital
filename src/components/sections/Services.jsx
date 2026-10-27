import { useState } from "react";
import { services, siteConfig } from "../../data";

export default function Services() {
  const [active, setActive] = useState(0);
  const s = services[active];
  const msg = `Hi, I'd like to know more about ${s.title}.`;
  const href = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}`;
  return (
    <section className="services" id="services">
      <div className="wrap">
        <h2>What we do</h2>
        <div className="tabs" role="tablist">
          {services.map((x, i) => (
            <button key={x.title} role="tab" aria-selected={i === active} className={i === active ? "tab on" : "tab"} onClick={() => setActive(i)}>
              {x.title}
            </button>
          ))}
        </div>
        <div className="panel">
          <p>{s.description}</p>
          <a className="btn" href={href} target="_blank" rel="noopener noreferrer">Ask about {s.title}</a>
        </div>
      </div>
    </section>
  );
}