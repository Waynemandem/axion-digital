import { useEffect, useRef, useState } from "react";
import { showcase } from "../../data";

const INTERVAL = 3800;
const TINT = "rgba(255,77,0,0.12)";
const DOT = { fill: "#FF4D00", stroke: "none" };
const STAR = "M100 78L105.3 92.7L120.9 93.2L108.6 102.8L112.9 117.8L100 109L87.1 117.8L91.4 102.8L79.1 93.2L94.7 92.7Z";
const PAGE_R = "M100 62C120 52 150 52 166 60V146C150 138 120 138 100 148Z";

const ScrewIcon = () => (
  <>
    <rect x="44" y="128" width="112" height="44" rx="6" fill={TINT} />
    <g className="sd a">
      <rect x="86" y="8" width="28" height="36" rx="12" fill={TINT} />
      <g className="ridge a"><path d="M93 16V36M100 16V36M107 16V36" strokeWidth="4" /></g>
      <path d="M100 44V66" />
    </g>
    <g className="sw a">
      <rect x="76" y="66" width="48" height="14" rx="6" fill={TINT} />
      <path d="M88 80V116L100 134L112 116V80" fill={TINT} />
      <path d="M88 92L112 98M88 104L112 110" strokeWidth="4" />
    </g>
  </>
);

const DrillIcon = () => (
  <>
    <path d="M178 56V124" />
    <rect x="26" y="72" width="88" height="40" rx="14" fill={TINT} />
    <path d="M52 112L46 160Q46 168 54 168H76Q84 168 84 160L88 112" fill={TINT} />
    <rect x="114" y="80" width="20" height="24" rx="5" fill={TINT} />
    <path className="bit a" d="M134 88H174" strokeWidth="4" strokeDasharray="8 8" />
    <path className="bit b2 a" d="M134 96H174" strokeWidth="4" strokeDasharray="8 8" />
    <path className="mo a" d="M140 74H160M140 110H160" strokeWidth="4" />
    <circle className="chip a" cx="176" cy="92" r="3" style={{ "--x": "16px", "--y": "-24px" }} {...DOT} />
    <circle className="chip ch2 a" cx="176" cy="92" r="3" style={{ "--x": "18px", "--y": "4px" }} {...DOT} />
    <circle className="chip ch3 a" cx="176" cy="92" r="3" style={{ "--x": "12px", "--y": "26px" }} {...DOT} />
  </>
);

const ShieldIcon = () => (
  <>
    <circle className="pulse a" cx="100" cy="100" r="72" fill={TINT} />
    <circle className="pulse p2 a" cx="100" cy="100" r="52" />
    <circle className="pulse p3 a" cx="100" cy="100" r="34" />
    <path className="star a" d={STAR} {...DOT} />
  </>
);

const CoreIcon = () => (
  <>
    <circle className="glow a" cx="100" cy="100" r="46" fill="rgba(255,77,0,.28)" stroke="none" />
    <circle cx="100" cy="100" r="70" />
    <circle cx="100" cy="100" r="50" fill={TINT} />
    <path d="M100 72L124.2 114H75.8Z" />
    <circle cx="100" cy="100" r="5" {...DOT} />
  </>
);

const HammerIcon = () => (
  <>
    <rect x="168" y="64" width="18" height="44" rx="4" fill={TINT} />
    <g className="hm a" style={{ transformOrigin: "100px 172px" }}>
      <path d="M100 172V86" />
      <rect x="62" y="52" width="76" height="34" rx="8" fill={TINT} />
      <path d="M80 60V78M80 64L90 58M80 70L90 64" strokeWidth="4" />
      <path d="M112 60L122 69L112 78" strokeWidth="4" />
    </g>
    <g className="spark a">
      <path d="M164 56V63M164 85V92M146 74H153M175 74H182M151 61L156 66M177 87L172 82" strokeWidth="4" />
    </g>
  </>
);

const BookIcon = () => (
  <>
    <path d="M100 62C80 52 50 52 34 60V146C50 138 80 138 100 148Z" fill={TINT} />
    <path d={PAGE_R} fill={TINT} />
    <path d="M48 80H84M48 94H84M48 108H84M116 80H152M116 94H152" strokeWidth="4" />
    <path className="pg a" d={PAGE_R} fill={TINT} />
    <path className="pg pg2 a" d={PAGE_R} fill={TINT} />
    <path d="M100 62V148" />
  </>
);

const ICONS = [ScrewIcon, DrillIcon, ShieldIcon, CoreIcon, HammerIcon, BookIcon];

export default function ServicesShowcase() {
  const stageRef = useRef(null);
  const [i, setI] = useState(0);
  const [visible, setVisible] = useState(false);
  const [hold, setHold] = useState(false);
  const [reduce] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const n = showcase.length;
  const playing = visible && !hold && !reduce;
  const item = showcase[i];

  useEffect(() => {
    const el = stageRef.current;
    if (!el || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => setI((x) => (x + 1) % n), INTERVAL);
    return () => clearTimeout(t);
  }, [playing, i, n]);

  const enter = (e) => e.pointerType === "mouse" && setHold(true);
  const press = (e) => e.pointerType !== "mouse" && setHold(true);
  const release = () => setHold(false);

  return (
    <div className={`sc${playing ? " live" : ""}`}>
      <div className="sc-grid">
        <div
          className="sc-stage"
          ref={stageRef}
          onPointerEnter={enter}
          onPointerLeave={release}
          onPointerDown={press}
          onPointerUp={release}
          onPointerCancel={release}
        >
          <svg
            className="sc-svg"
            viewBox="0 0 200 200"
            width="280"
            height="280"
            role="img"
            aria-label={`${item.title} illustration`}
            fill="none"
            stroke="#FF4D00"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {ICONS.map((Icon, k) => (
              <g key={k} className={k === i ? "ico on" : "ico"} aria-hidden={k !== i}>
                <Icon />
              </g>
            ))}
          </svg>
          <div className="sc-dots">
            {showcase.map((s, k) => (
              <button
                key={s.title}
                className={k === i ? "sc-dot on" : "sc-dot"}
                onClick={() => setI(k)}
                aria-label={`Show ${s.title}`}
                aria-current={k === i}
              >
                <span />
              </button>
            ))}
          </div>
        </div>

        <div className="sc-text">
          <h3 key={i}>{item.title}</h3>
          <p key={`p${i}`}>{item.line}</p>
          <a className="btn" href="#contact">Get a free quote</a>
        </div>
      </div>
    </div>
  );
}