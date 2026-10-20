import { links } from "@/lib/data";
import { Icon } from "./icons";
import { Reveal } from "./reveal";

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="shell">
        <Reveal>
          <div className="eyebrow">07 — Contact</div>
        </Reveal>

        <Reveal delay={60}>
          <h2 className="contact-headline mt-6 max-w-3xl">
            Let&rsquo;s build something that <span className="serif gradient-text">holds up</span>.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted">
            I&rsquo;m open to senior engineering roles where backend systems, AI, and cloud
            infrastructure intersect. If that sounds like your team, I&rsquo;d love to hear from
            you.
          </p>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href={`mailto:${links.email}`} className="btn btn-primary">
              <Icon name="mail" size={16} />
              Email me
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <Icon name="linkedin" size={16} />
              LinkedIn
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <Icon name="github" size={16} />
              GitHub
            </a>
          </div>
        </Reveal>

        <Reveal delay={220}>
          <a href={`mailto:${links.email}`} className="marquee-cta mt-12">
            <span className="status-dot" />
            {links.email}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
