import { links } from "@/lib/data";
import { Icon } from "./icons";

const year = 2026;

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <span>© {year} Per Badasu — Senior Software Engineer</span>

        <span className="font-mono text-[0.72rem] tracking-[0.14em] uppercase">
          Built with Next.js · TypeScript · Tailwind
        </span>

        <div className="flex items-center gap-2">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="GitHub"
          >
            <Icon name="github" size={16} />
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="LinkedIn"
          >
            <Icon name="linkedin" size={16} />
          </a>
          <a href={`mailto:${links.email}`} className="icon-btn" aria-label="Email">
            <Icon name="mail" size={16} />
          </a>
          <a href="#top" className="icon-btn" aria-label="Back to top">
            <Icon name="arrow-down" size={16} style={{ transform: "rotate(180deg)" }} />
          </a>
        </div>
      </div>
    </footer>
  );
}
