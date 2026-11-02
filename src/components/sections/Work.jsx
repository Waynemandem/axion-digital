import { alsoFromAxion } from "../../data";

export default function Work() {
  return (
    <section className="work" id="more">
      <div className="wrap">
        <h2>Also from Axion</h2>
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