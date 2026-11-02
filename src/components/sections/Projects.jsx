import { products } from "../../data";

export default function Projects() {
  return (
    <section className="projects" id="work">
      <div className="wrap">
        <h2>Projects we've built.</h2>
        <p className="hint">Swipe through. Tap any project to open it.</p>
      </div>
      <div className="rail">
        {products.map((p) => {
          const Card = p.link ? "a" : "div";
          const props = p.link
            ? { href: p.link, target: "_blank", rel: "noopener noreferrer" }
            : {};
          return (
            <Card key={p.name} className="proj" {...props}>
              <div className="proj-img">
                {p.image ? (
                  <img src={p.image} alt={`${p.name} screenshot`} loading="lazy" />
                ) : (
                  <span>{p.name[0]}</span>
                )}
              </div>
              <small>{p.tag}</small>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              {p.link && <span className="proj-open">Visit site</span>}
            </Card>
          );
        })}
      </div>
    </section>
  );
}