import { useEffect, useState, type ReactNode } from "react";


/* ============ EDIT THESE (search "TODO" before you deploy) ============ */
const WHATSAPP_NUMBER = "2349078740445"; // TODO: confirm. International format, no "+"
const WHATSAPP_MESSAGE =
  "Hi Axion Digital, I'd like a free ad check for my solar business.";
const FEE = "₦50,000"; // TODO: your monthly management fee
const MIN_BUDGET = "₦3,000"; // TODO: minimum daily ad spend
const LAUNCH_DAYS = "7 - 14 days"; // TODO: days to launch after approval (only promise what you can keep)
const FOUNDING_SLOTS = "3"; // TODO: only keep the founding-rate line if you really cap it
/* ====================================================================== */

const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const problems = [
  {
    title: "The wrong audience",
    body: "Boosted posts reach people who like solar content and people ready to buy a solar system for homes, office and .",
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

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
      {children}
    </p>
  );
}

function Cta({
  children,
  variant = "primary",
}: {
  children: ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors";
  const styles =
    variant === "primary"
      ? "bg-orange-500 text-black hover:bg-orange-400"
      : "border border-white/15 text-zinc-100 hover:bg-white/5";
  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles}`}
    >
      {children}
    </a>
  );
}

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
    <div className="min-h-screen bg-[#08080a] text-zinc-100 antialiased">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08080a]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="/" className="text-sm font-bold tracking-[0.2em]">
            AXION <span className="text-orange-500">DIGITAL</span>
          </a>
          <Cta>Book a free ad check</Cta>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:pt-24">
        <Eyebrow>For solar installers and suppliers in Nigeria</Eyebrow>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          Get solar quote requests on WhatsApp from Facebook and Instagram ads.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-400">
          We run Facebook and Instagram ads for solar companies, and send the
          enquiries straight to your WhatsApp.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Cta>Book a free ad check</Cta>
          <a
            href="#how"
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold hover:bg-white/5"
          >
            See how it works
          </a>
        </div>
        <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-500">
          <li>Facebook and Instagram ads</li>
          <li>WhatsApp quote flow</li>
          <li>Weekly reports</li>
        </ul>
      </section>

      {/* PROBLEM */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Eyebrow>The problem</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Likes aren't quotes.
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-400">
            Many solar companies boost a post and get likes, a few "how much?"
            messages, then silence. Usually it comes down to three things.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {problems.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE SET UP */}
      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2">
          <div>
            <Eyebrow>What we set up for you</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Everything between the ad and the quote.
            </h2>
          </div>
          <ul className="space-y-3">
            {setup.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm"
              >
                <span className="mt-0.5 text-orange-500">✓</span>
                <span className="text-zinc-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="scroll-mt-20 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Four steps, no guesswork.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <span className="text-sm font-semibold text-orange-500">
                  {s.n}
                </span>
                <h3 className="mt-3 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Eyebrow>Proof</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Our own test campaign for solar business owners.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { v: "19", l: "WhatsApp conversations" },
              { v: "₦443", l: "average cost per conversation" },
              { v: "1,872", l: "people reached" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="text-4xl font-semibold text-orange-500">{s.v}</p>
                <p className="mt-2 text-sm text-zinc-400">{s.l}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-zinc-500">
            Axion's own campaign aimed at solar business owners in Nigeria.
            Results vary by business, offer and budget.
          </p>
          <div className="mt-6 rounded-2xl border border-dashed border-white/15 p-6 text-sm text-zinc-400">
            Founding client results will appear here.
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-3xl px-5 py-20">
          <Eyebrow>Pricing</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Simple, month to month.
          </h2>
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm text-zinc-400">Ad management</p>
            <p className="mt-1 text-4xl font-semibold">
              {FEE}
              <span className="text-base font-normal text-zinc-500">
                {" "}
                / month
              </span>
            </p>
            <ul className="mt-6 space-y-2 text-sm text-zinc-300">
              <li>✓ Everything in "What we set up for you"</li>
              <li>
                ✓ Ad spend paid directly to Meta, from {MIN_BUDGET} a day
              </li>
              <li>✓ No contract. Cancel anytime</li>
            </ul>
            <p className="mt-6 text-sm text-orange-500">
              Founding rate for our first {FOUNDING_SLOTS} solar clients.
            </p>
            <div className="mt-6">
              <Cta>Book a free ad check</Cta>
            </div>
          </div>
        </div>
      </section>

      {/* PROMISE */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-3xl px-5 py-20">
          <Eyebrow>Our promise</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            We promise what we control.
          </h2>
          <ul className="mt-6 space-y-2 text-zinc-300">
            <li>• Ads live within {LAUNCH_DAYS} days of your approval</li>
            <li>• A report every week, in plain language</li>
            <li>• Month to month, cancel anytime</li>
          </ul>
          <p className="mt-4 text-sm text-zinc-500">
            We don't promise sales. Nobody can honestly promise that.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-3xl px-5 py-20">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Questions solar owners ask.
          </h2>
          <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
            {faqs.map((f, i) => (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between py-5 text-left font-medium"
                  aria-expanded={open === i}
                >
                  {f.q}
                  <span className="ml-4 text-orange-500">
                    {open === i ? "−" : "+"}
                  </span>
                </button>
                {open === i && (
                  <p className="pb-5 text-sm text-zinc-400">{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            Ready to get solar enquiries on WhatsApp?
          </h2>
          <p className="mt-4 text-zinc-400">
            Book a free ad check. We'll look at your offer and your area and
            tell you honestly what we'd do.
          </p>
          <div className="mt-8">
            <Cta>Book a free ad check</Cta>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-8 text-sm text-zinc-500">
          <span>© Axion Digital · Lagos, Nigeria</span>
          <a href="/" className="hover:text-zinc-300">
            axiondigital home
          </a>
        </div>
      </footer>
    </div>
  );
}