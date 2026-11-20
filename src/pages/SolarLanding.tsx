import { useEffect, useState } from "react";

/* ============ EDIT THESE (search "TODO" before you deploy) ============ */
const WHATSAPP_NUMBER = "2349078740445"; // TODO: confirm. International format, no "+"
const WHATSAPP_MESSAGE =
  "Hi Axion Digital, I'd like a free ad check for my solar business.";
const FEE = "₦50,000"; // TODO: your monthly management fee
const MIN_BUDGET = "₦2,000"; // TODO: minimum daily ad spend
const LAUNCH_DAYS = "1 - 3 Days"; // TODO: days to launch after approval (only promise what you can keep)
const FOUNDING_SLOTS = "5"; // TODO: only keep the founding-rate line if you really cap it
/* ====================================================================== */

const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const problems = [
  {
    title: "The wrong audience",
    body: "Boosted posts reach people who like solar content, not people ready to buy a system.",
  },
  {
    title: "Slow, messy replies",
    body: "Enquiries land in DMs and calls with no quote flow, so good leads go cold.",
  },
  {
    title: "No tracking",
    body: "Without a cost per enquiry, you can't tell which ads work and which just burn money.",
  },
];

const setup = [
  "Targeting by city and buyer type: home, business and commercial",
  "Ad creative and copy written specifically for solar",
  "A WhatsApp quote flow with a greeting and quick replies",
  "Tracking, so you see your cost per enquiry",
  "A plain-language report every week",
];

const steps = [
  {
    n: "01",
    title: "Free ad check",
    body: "A 15-minute look at your offer, your area and your current marketing.",
  },
  {
    n: "02",
    title: "We build and launch",
    body: `Your ads go live within ${LAUNCH_DAYS} days of your approval.`,
  },
  {
    n: "03",
    title: "Enquiries reach WhatsApp",
    body: "People tap the ad and start a chat with you, ready for a quote.",
  },
  {
    n: "04",
    title: "Weekly report, then improve",
    body: "We keep what works, cut what doesn't, and show you the numbers.",
  },
];

const faqs = [
  {
    q: "Do I need a website?",
    a: "Not to start. The ads send people to WhatsApp. A website helps later, and we can build one if you need it.",
  },
  {
    q: "How fast will I see enquiries?",
    a: "Once your ads are approved and running. Results vary by city, offer and budget, so we don't promise numbers.",
  },
  {
    q: "Will I get sales?",
    a: "We bring you enquiries. Closing depends on your quote and follow-up, and we give you a follow-up script to help.",
  },
  {
    q: "Is there a contract?",
    a: "No. It's month to month and you can cancel anytime.",
  },
  {
    q: "Who pays for the ads?",
    a: "You do, directly to Meta from your own card. Our fee is separate and only covers the management.",
  },
];

/* ---------- Styles live here, so the page never depends on Tailwind ---------- */
const css = `
.sl{--bg:#07070a;--line:rgba(255,255,255,.09);--text:#f4f4f5;--muted:#a1a1aa;--dim:#71717a;--accent:#ff7a1a;--accent2:#ffb347;
background:var(--bg);color:var(--text);min-height:100vh;position:relative;overflow-x:hidden;line-height:1.55;
font-family:ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased}
.sl *,.sl *::before,.sl *::after{box-sizing:border-box}
.sl h1,.sl h2,.sl h3,.sl p,.sl ul,.sl li{margin:0;padding:0}
.sl ul{list-style:none}
.sl a{color:inherit;text-decoration:none}
.sl button{font:inherit;color:inherit;background:none;border:0;cursor:pointer;text-align:left}
.sl .wrap{max-width:1120px;margin:0 auto;padding:0 20px}

.sl .nav{position:sticky;top:0;z-index:50;background:rgba(7,7,10,.72);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-bottom:1px solid var(--line)}
.sl .nav-in{display:flex;align-items:center;justify-content:space-between;height:64px}
.sl .logo{font-weight:800;letter-spacing:.22em;font-size:13px}
.sl .logo span{color:var(--accent)}

.sl .btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;border-radius:999px;padding:13px 24px;font-size:14px;font-weight:700;transition:transform .2s,box-shadow .2s,background .2s;white-space:nowrap}
.sl .btn-primary{background:linear-gradient(180deg,#ff8f33,#ff6a00);color:#1a0b00;box-shadow:0 8px 30px -6px rgba(255,106,0,.55),inset 0 1px 0 rgba(255,255,255,.3)}
.sl .btn-primary:hover{transform:translateY(-1px);box-shadow:0 12px 36px -6px rgba(255,106,0,.7),inset 0 1px 0 rgba(255,255,255,.3)}
.sl .btn-ghost{border:1px solid rgba(255,255,255,.18);color:var(--text)}
.sl .btn-ghost:hover{background:rgba(255,255,255,.06)}
.sl .btn-sm{padding:10px 18px;font-size:13px}

.sl .hero{position:relative;padding:64px 0 88px;overflow:hidden}
.sl .hero::before{content:"";position:absolute;inset:0;background-image:linear-gradient(var(--line) 1px,transparent 1px),linear-gradient(90deg,var(--line) 1px,transparent 1px);background-size:56px 56px;-webkit-mask-image:radial-gradient(ellipse at 50% 0%,#000 15%,transparent 70%);mask-image:radial-gradient(ellipse at 50% 0%,#000 15%,transparent 70%);opacity:.7}
.sl .hero::after{content:"";position:absolute;left:50%;top:-220px;width:900px;height:620px;transform:translateX(-50%);background:radial-gradient(closest-side,rgba(255,122,26,.28),transparent);pointer-events:none}
.sl .hero-grid{position:relative;z-index:1;display:grid;grid-template-columns:1fr;gap:48px;align-items:center}
.sl .pill{display:inline-flex;align-items:center;gap:8px;border:1px solid rgba(255,122,26,.35);background:rgba(255,122,26,.08);color:#ffb780;border-radius:999px;padding:7px 14px;font-size:12px;font-weight:600;letter-spacing:.02em}
.sl .pill i{width:6px;height:6px;border-radius:50%;background:var(--accent);box-shadow:0 0 10px var(--accent)}
.sl h1{margin-top:22px;font-size:clamp(36px,7vw,62px);line-height:1.04;letter-spacing:-.035em;font-weight:700}
.sl .grad{background:linear-gradient(90deg,var(--accent),var(--accent2));-webkit-background-clip:text;background-clip:text;color:transparent}
.sl .lead{margin-top:22px;max-width:540px;font-size:18px;color:var(--muted)}
.sl .actions{margin-top:32px;display:flex;flex-wrap:wrap;gap:12px}
.sl .chips{margin-top:34px;display:flex;flex-wrap:wrap;gap:10px}
.sl .chip{border:1px solid var(--line);background:rgba(255,255,255,.03);border-radius:999px;padding:7px 14px;font-size:12.5px;color:var(--muted)}

.sl .phone{position:relative;max-width:380px;width:100%;margin:0 auto;border:1px solid rgba(255,255,255,.12);border-radius:28px;background:linear-gradient(180deg,#111116,#0b0b0f);padding:16px;box-shadow:0 40px 90px -30px rgba(255,106,0,.35),0 0 0 6px rgba(255,255,255,.02)}
.sl .phone-top{display:flex;align-items:center;gap:10px;padding:4px 4px 14px;border-bottom:1px solid var(--line)}
.sl .avatar{width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,#ff8f33,#ff6a00);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;color:#1a0b00}
.sl .phone-top b{font-size:14px;display:block;line-height:1.2}
.sl .phone-top small{font-size:11px;color:#25d366}
.sl .bubbles{display:flex;flex-direction:column;gap:10px;padding:16px 2px 6px}
.sl .bub{max-width:82%;padding:10px 13px;border-radius:14px;font-size:13.5px;line-height:1.4}
.sl .bub.in{background:#1c1c22;border-top-left-radius:4px;align-self:flex-start}
.sl .bub.out{background:#0b5d4b;border-top-right-radius:4px;align-self:flex-end}
.sl .ex{margin-top:10px;text-align:center;font-size:11px;color:var(--dim);letter-spacing:.08em;text-transform:uppercase}

.sl .section{border-top:1px solid var(--line);padding:84px 0}
.sl .eyebrow{font-size:12px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--accent)}
.sl h2{margin-top:14px;font-size:clamp(28px,4.4vw,42px);line-height:1.1;letter-spacing:-.025em;font-weight:700;max-width:680px}
.sl .sub{margin-top:16px;max-width:620px;color:var(--muted);font-size:17px}
.sl .grid3,.sl .grid4,.sl .split{display:grid;grid-template-columns:1fr;gap:16px;margin-top:40px}
.sl .card{border:1px solid var(--line);border-radius:18px;padding:26px;background:linear-gradient(180deg,rgba(255,255,255,.045),rgba(255,255,255,.015));transition:transform .25s,border-color .25s}
.sl .card:hover{transform:translateY(-3px);border-color:rgba(255,122,26,.4)}
.sl .card h3{font-size:17px;font-weight:650;letter-spacing:-.01em}
.sl .card p{margin-top:8px;font-size:14.5px;color:var(--muted)}
.sl .num{font-size:13px;font-weight:800;color:var(--accent);letter-spacing:.08em}

.sl .checks{display:flex;flex-direction:column;gap:12px}
.sl .check{display:flex;gap:14px;align-items:flex-start;border:1px solid var(--line);border-radius:14px;padding:16px 18px;background:rgba(255,255,255,.03);font-size:14.5px;color:#d4d4d8}
.sl .tick{flex:none;width:22px;height:22px;border-radius:50%;background:rgba(255,122,26,.15);color:var(--accent);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800}

.sl .stat{font-size:clamp(38px,6vw,52px);font-weight:700;letter-spacing:-.03em;background:linear-gradient(90deg,var(--accent),var(--accent2));-webkit-background-clip:text;background-clip:text;color:transparent;line-height:1}
.sl .note{margin-top:16px;font-size:12.5px;color:var(--dim)}
.sl .dashed{margin-top:20px;border:1px dashed rgba(255,255,255,.18);border-radius:16px;padding:22px;font-size:14px;color:var(--muted)}

.sl .price{margin:40px auto 0;max-width:620px;border-radius:22px;padding:34px;background:linear-gradient(180deg,rgba(255,255,255,.05),rgba(255,255,255,.015));box-shadow:0 0 0 1px rgba(255,122,26,.3),0 40px 100px -40px rgba(255,106,0,.45)}
.sl .price small{font-size:13px;color:var(--muted)}
.sl .amount{font-size:clamp(36px,7vw,48px);font-weight:700;letter-spacing:-.03em;margin-top:4px}
.sl .amount span{font-size:15px;font-weight:500;color:var(--dim);letter-spacing:0}
.sl .price ul{margin-top:22px;display:flex;flex-direction:column;gap:10px;font-size:14.5px;color:#d4d4d8}
.sl .founding{margin-top:20px;font-size:13.5px;color:#ffb780}

.sl .center{margin-left:auto;margin-right:auto}
.sl .promise li{padding:14px 0;border-bottom:1px solid var(--line);font-size:16px;color:#e4e4e7;display:flex;gap:12px}
.sl .promise li::before{content:"✓";color:var(--accent);font-weight:800}

.sl .faq{margin-top:34px;border-top:1px solid var(--line)}
.sl .faq-item{border-bottom:1px solid var(--line)}
.sl .faq-q{width:100%;display:flex;justify-content:space-between;align-items:center;gap:16px;padding:22px 0;font-size:16.5px;font-weight:600}
.sl .faq-q span{color:var(--accent);font-size:22px;line-height:1}
.sl .faq-a{padding:0 0 22px;color:var(--muted);font-size:15px;max-width:640px}

.sl .final{position:relative;text-align:center;padding:96px 0;overflow:hidden}
.sl .final::before{content:"";position:absolute;left:50%;bottom:-260px;width:800px;height:520px;transform:translateX(-50%);background:radial-gradient(closest-side,rgba(255,122,26,.25),transparent)}
.sl .final .wrap{position:relative}
.sl .final h2{margin-left:auto;margin-right:auto;font-size:clamp(30px,5.4vw,54px)}
.sl .final p{margin:18px auto 0;max-width:520px;color:var(--muted)}
.sl .final .btn{margin-top:32px}

.sl .foot{border-top:1px solid var(--line);padding:30px 0 96px;font-size:13px;color:var(--dim)}
.sl .foot-in{display:flex;flex-wrap:wrap;justify-content:space-between;gap:10px}
.sl .foot a:hover{color:var(--text)}

.sl .sticky{position:fixed;left:16px;right:16px;bottom:16px;z-index:60}
.sl .sticky .btn{width:100%;padding:16px}

@keyframes slUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
.sl .up{animation:slUp .7s ease both}
.sl .up2{animation:slUp .7s .12s ease both}
@media (prefers-reduced-motion:reduce){.sl .up,.sl .up2{animation:none}}

@media (min-width:700px){
  .sl .grid3{grid-template-columns:repeat(3,1fr)}
  .sl .grid4{grid-template-columns:repeat(2,1fr)}
  .sl .sticky{display:none}
  .sl .foot{padding-bottom:30px}
}
@media (min-width:900px){
  .sl .hero{padding:96px 0 112px}
  .sl .hero-grid{grid-template-columns:1.1fr .9fr}
  .sl .split{grid-template-columns:1fr 1fr;gap:56px;align-items:start}
}
@media (min-width:1000px){
  .sl .grid4{grid-template-columns:repeat(4,1fr)}
}
`;

export default function SolarLanding() {
  const [open, setOpen] = useState<number | null>(0);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Solar Lead Generation Ads in Nigeria | Axion Digital";
    let meta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]'
    );
    const prevDesc = meta ? meta.getAttribute("content") : null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      "content",
      "Facebook and Instagram ads for solar installers and suppliers in Nigeria. Quote requests sent straight to your WhatsApp."
    );
    return () => {
      document.title = prevTitle;
      if (meta && prevDesc !== null) meta.setAttribute("content", prevDesc);
    };
  }, []);

  return (
    <div className="sl">
      <style>{css}</style>

      {/* NAV */}
      <header className="nav">
        <div className="wrap nav-in">
          <a href="/" className="logo">
            AXION <span>DIGITAL</span>
          </a>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            Book a free ad check
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="pill up">
              <i /> For solar installers and suppliers in Nigeria
            </span>
            <h1 className="up">
              Get solar quote requests on{" "}
              <span className="grad">WhatsApp</span> from Facebook and Instagram
              ads.
            </h1>
            <p className="lead up2">
              We run Facebook and Instagram ads for solar companies, and send
              the enquiries straight to your WhatsApp.
            </p>
            <div className="actions up2">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Book a free ad check
              </a>
              <a href="#how" className="btn btn-ghost">
                See how it works
              </a>
            </div>
            <div className="chips up2">
              <span className="chip">Facebook and Instagram ads</span>
              <span className="chip">WhatsApp quote flow</span>
              <span className="chip">Weekly reports</span>
            </div>
          </div>

          <div className="up2">
            <div className="phone">
              <div className="phone-top">
                <div className="avatar">AX</div>
                <div>
                  <b>New quote request</b>
                  <small>WhatsApp</small>
                </div>
              </div>
              <div className="bubbles">
                <div className="bub in">
                  Hi, I saw your ad. I need a quote for a 5kVA solar system.
                </div>
                <div className="bub out">
                  Thanks for reaching out. Is it for a home or a business, and
                  where are you located?
                </div>
                <div className="bub in">Home, in Lagos.</div>
              </div>
              <p className="ex">Example enquiry</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">The problem</p>
          <h2>Likes aren't quotes.</h2>
          <p className="sub">
            Many solar companies boost a post and get likes, a few "how much?"
            messages, then silence. Usually it comes down to three things.
          </p>
          <div className="grid3">
            {problems.map((p) => (
              <div className="card" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE SET UP */}
      <section className="section">
        <div className="wrap split" style={{ marginTop: 0 }}>
          <div>
            <p className="eyebrow">What we set up for you</p>
            <h2>Everything between the ad and the quote.</h2>
          </div>
          <div className="checks">
            {setup.map((item) => (
              <div className="check" key={item}>
                <span className="tick">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section" id="how">
        <div className="wrap">
          <p className="eyebrow">How it works</p>
          <h2>Four steps, no guesswork.</h2>
          <div className="grid4">
            {steps.map((s) => (
              <div className="card" key={s.n}>
                <span className="num">{s.n}</span>
                <h3 style={{ marginTop: 12 }}>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">Proof</p>
          <h2>Our own test campaign for solar business owners.</h2>
          <div className="grid3">
            {[
              { v: "19", l: "WhatsApp conversations" },
              { v: "₦443", l: "average cost per conversation" },
              { v: "1,872", l: "people reached" },
            ].map((s) => (
              <div className="card" key={s.l}>
                <div className="stat">{s.v}</div>
                <p>{s.l}</p>
              </div>
            ))}
          </div>
          <p className="note">
            Axion's own campaign aimed at solar business owners in Nigeria.
            Results vary by business, offer and budget.
          </p>
          <div className="dashed">Founding client results will appear here.</div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section">
        <div className="wrap" style={{ textAlign: "center" }}>
          <p className="eyebrow">Pricing</p>
          <h2 className="center">Simple, month to month.</h2>
          <div className="price" style={{ textAlign: "left" }}>
            <small>Ad management</small>
            <div className="amount">
              {FEE} <span>/ month</span>
            </div>
            <ul>
              <li>✓ Everything in "What we set up for you"</li>
              <li>✓ Ad spend paid directly to Meta, from {MIN_BUDGET} a day</li>
              <li>✓ No contract. Cancel anytime</li>
            </ul>
            <p className="founding">
              Founding rate for our first {FOUNDING_SLOTS} solar clients.
            </p>
            <div style={{ marginTop: 24 }}>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Book a free ad check
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROMISE */}
      <section className="section">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <p className="eyebrow">Our promise</p>
          <h2>We promise what we control.</h2>
          <ul className="promise" style={{ marginTop: 28 }}>
            <li>Ads live within {LAUNCH_DAYS} days of your approval</li>
            <li>A report every week, in plain language</li>
            <li>Month to month, cancel anytime</li>
          </ul>
          <p className="note">
            We don't promise sales. Nobody can honestly promise that.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <p className="eyebrow">FAQ</p>
          <h2>Questions solar owners ask.</h2>
          <div className="faq">
            {faqs.map((f, i) => (
              <div className="faq-item" key={f.q}>
                <button
                  type="button"
                  className="faq-q"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  {f.q}
                  <span>{open === i ? "−" : "+"}</span>
                </button>
                {open === i && <p className="faq-a">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section final">
        <div className="wrap">
          <h2>Ready to get solar enquiries on WhatsApp?</h2>
          <p>
            Book a free ad check. We'll look at your offer and your area and
            tell you honestly what we'd do.
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Book a free ad check
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="foot">
        <div className="wrap foot-in">
          <span>© Axion Digital · Lagos, Nigeria</span>
          <a href="/">axiondigital home</a>
        </div>
      </footer>

      {/* MOBILE STICKY CTA */}
      <div className="sticky">
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Book a free ad check
        </a>
      </div>
    </div>
  );
}