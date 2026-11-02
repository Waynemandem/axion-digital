import { useEffect, useId, useRef, useState } from "react";

const CLOUD = "M140 350 A18 18 0 0 1 150 334 A24 24 0 0 1 192 318 A26 26 0 0 1 238 322 A20 20 0 0 1 262 350 Z";
const ARC = "M226 112 C290 112 340 84 372 28";
const TINT = "rgba(255,77,0,0.12)";
const DOT = { fill: "#FF4D00", stroke: "none" };

export default function RocketLaunch({ className = "" }) {
  const ref = useRef(null);
  const [live, setLive] = useState(false);
  const mid = useId().replace(/\W/g, "") + "m";

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setLive(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => setLive(e.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      className={`rk ${live ? "live" : ""} ${className}`}
      viewBox="0 0 400 380"
      width="400"
      height="380"
      role="img"
      aria-label="A space shuttle launching, linked to a laptop and a lightbulb, with a growth arrow"
      fill="none"
      stroke="#FF4D00"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <defs>
        <mask id={mid} maskUnits="userSpaceOnUse" x="0" y="0" width="400" height="380">
          <path className="arc-reveal anim" d={ARC} pathLength="1" stroke="#fff" strokeWidth="14" />
        </mask>
      </defs>

      <path d="M36 350 H364" />

      <g transform="translate(-60 0) translate(200 350) scale(.7) translate(-200 -350)">
        <path className="cloud c2 anim" d={CLOUD} fill={TINT} />
      </g>
      <g transform="translate(60 0) translate(200 350) scale(.7) translate(-200 -350)">
        <path className="cloud c3 anim" d={CLOUD} fill={TINT} />
      </g>
      <g transform="translate(-26 0) translate(200 350) scale(.5) translate(-200 -350)">
        <path className="cloud c4 anim" d={CLOUD} fill={TINT} />
      </g>
      <path className="cloud c1 anim" d={CLOUD} fill={TINT} />

      <path d="M106 170 H176 M294 170 H224" strokeDasharray="9 10" />

      <circle cx="66" cy="170" r="36" fill={TINT} />
      <circle className="halo anim" cx="66" cy="170" r="36" />
      <g strokeWidth="4">
        <rect x="50" y="156" width="32" height="22" rx="3" />
        <path d="M44 186 H88" />
      </g>
      <g className="orbit anim" style={{ transformOrigin: "66px 170px" }}>
        <circle cx="66" cy="134" r="5" {...DOT} />
      </g>

      <circle cx="334" cy="170" r="36" fill={TINT} />
      <circle className="halo h2 anim" cx="334" cy="170" r="36" />
      <g strokeWidth="4">
        <path d="M334 152 a14 14 0 0 1 8 25 v6 h-16 v-6 a14 14 0 0 1 8 -25 Z" />
        <path d="M328 189 H340 M331 194 H337" />
      </g>
      <g className="orbit rev anim" style={{ transformOrigin: "334px 170px" }}>
        <circle cx="334" cy="206" r="5" {...DOT} />
      </g>

      <g className="ship anim">
        <path d="M180 188 L141 258 Q134 272 148 273 L180 256 Z" fill={TINT} />
        <path d="M220 188 L259 258 Q266 272 252 273 L220 256 Z" fill={TINT} />
        <path d="M180 132 V262 H220 V132 Z" fill={TINT} />
        <path d="M200 52 C188 74 180 104 180 132 H220 C220 104 212 74 200 52 Z" fill={TINT} />
        <circle cx="200" cy="98" r="9" fill={TINT} />
        <path d="M191 118 H209 M193 124 H207" />
        <path d="M180 160 H220 M180 215 H220 M180 240 H220" />
        <circle cx="200" cy="187" r="7" />
        <rect x="184" y="262" width="32" height="22" rx="4" fill={TINT} />
        <path d="M189 284 L184 300 H216 L211 284" />
        <circle cx="190" cy="146" r="3" {...DOT} />
        <circle cx="210" cy="146" r="3" {...DOT} />
        <circle cx="200" cy="228" r="3" {...DOT} />
      </g>

      <path d={ARC} strokeDasharray="10 12" mask={`url(#${mid})`} />
      <path className="arrow anim" d="M356.5 37.1 L372 28 L370.9 46" />
    </svg>
  );
}