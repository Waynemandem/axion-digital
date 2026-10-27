import { products, alsoFromAxion } from "../../data";

export default function Work() {
  return (
    <section className="work" id="work">
      <div className="wrap">
        <h2>Built and shipped.</h2>
        <div className="cards">
          {products.map((p) => (
            <a className="card" key={p.name} href={p.link} target="_blank" rel="noopener noreferrer">
              <h3>{p.name}</h3>
              <p>{p.description}</p>
            </a>
          ))}
        </div>
        <h2 className="sub">Also from Axion</h2>
        <div className="cards">
          {alsoFromAxion.map((a) => (
            <a className="card" key={a.name} href={a.link} target="_blank" rel="noopener noreferrer">
              <small>{a.category}</small>
              <h3>{a.name}</h3>
              <p>{a.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}