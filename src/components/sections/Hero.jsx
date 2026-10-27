import { hero, siteConfig } from "../../data";
import ChatDemo from "./ChatDemo";

export default function Hero() {
  const href = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(hero.whatsappMessage)}`;
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <h1 className="hero-title">{hero.headline}</h1>
          <p className="hero-sub">{hero.subline}</p>
          <a className="btn" href={href} target="_blank" rel="noopener noreferrer">{hero.ctaLabel}</a>
        </div>
        <ChatDemo />
      </div>
    </section>
  );
}