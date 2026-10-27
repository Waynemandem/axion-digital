import { siteConfig } from "../../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot">
        <span>© {new Date().getFullYear()} Axion Digital, Lagos</span>
        <span className="socials">
          {Object.entries(siteConfig.socials).map(([name, url]) => (
            <a key={name} href={url} target="_blank" rel="noopener noreferrer">{name}</a>
          ))}
        </span>
      </div>
    </footer>
  );
}