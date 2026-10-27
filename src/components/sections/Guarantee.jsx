import { guarantee } from "../../data";

export default function Guarantee() {
  return (
    <section className="guarantee" id="guarantee">
      <div className="wrap">
        <h2>What you can count on.</h2>
        <div className="cards">
          {guarantee.map((g) => (
            <article className="card" key={g.title}>
              <h3>{g.title}</h3>
              <p>{g.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}