import { navLinks } from "../../data";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="logo">Axion Digital</a>
        <nav className="nav-links">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <a href="#contact" className="btn btn-sm">Get a quote</a>
      </div>
    </header>
  );
}