import { skills } from "@/lib/data";
import { Icon } from "./icons";
import type { IconName } from "./icons";
import { Reveal } from "./reveal";

const sizeClass: Record<string, string> = {
  wide: "bento-wide",
  regular: "bento-cell",
  full: "bento-full",
};

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="shell">
        <Reveal>
          <div className="eyebrow">05 — Capabilities</div>
          <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="section-title max-w-2xl">
              The stack behind the <span className="serif">systems</span>.
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Six years of depth across the full lifecycle — from data modelling and API design to
              deployment automation and production observability.
            </p>
          </div>
        </Reveal>

        <div className="bento mt-12">
          {skills.map((skill, index) => (
            <Reveal
              key={skill.title}
              delay={(index % 3) * 70}
              className={sizeClass[skill.size]}
            >
              <article className="bento-card" style={{ height: "100%" }}>
                <div className="bento-icon">
                  <Icon name={skill.icon as IconName} size={20} />
                </div>
                <h3 className="bento-title">{skill.title}</h3>
                <p className="bento-text">{skill.description}</p>
                <div className="bento-tags">
                  {skill.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
