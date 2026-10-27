// components/sections/PracticeRow.jsx
export default function PracticeRow({ practice }) {
  // practice has: index, id, title, body, list?, disclaimer?, cta, reverse, visual
     practice: { index, id, title, body, list?, disclaimer, CTA, reverse, Visual }

  return (
    <section className={`practice ${practice.reverse ? "reverse" : ""}`} id={practice.id}>
      <div className="wrap practice-grid">
        <div className="practice-text">
          {/* render index.num, title, body */}
          {/* if practice.list exists, render it as a <ul> */}
          {/* if practice.disclaimer exists, render it in a div.disclaimer */}
          {/* render the CTA link using practice.cta.label and practice.cta.href */}
        </div>
        <div className="practice-visual">
          {/* this is the trickiest part — different practices show different visuals */}
          {/* (bars / signal-grid / avatar-row) — think about how you'd branch on practice.visual */}
        </div>
      </div>
    </section>
  );
}