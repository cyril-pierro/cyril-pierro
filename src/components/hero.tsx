import Image from "next/image";
import { links, stats } from "@/lib/data";
import { Icon } from "./icons";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="shell hero-grid">
        <div>
          <Reveal>
            <span className="availability">
              <span className="status-dot" />
              Open to senior engineering roles
            </span>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="hero-title">
              Software that <span className="serif">thinks</span>, scales, and{" "}
              <span className="gradient-text">ships</span>.
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="hero-lede">
              I&rsquo;m Per Badasu — a senior software engineer with 6+ years across backend,
              frontend, and AI. I turn complex problems into production-grade systems: scalable
              APIs, modern web applications, and LLM-powered products that hold up under
              real-world load.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#work" className="btn btn-primary">
                View selected work
                <Icon name="arrow-down" size={16} />
              </a>
              <a href="#contact" className="btn btn-ghost">
                Get in touch
              </a>
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
                aria-label="Per Badasu on GitHub"
              >
                <Icon name="github" size={17} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="stat-row">
              {stats.map((stat) => (
                <div key={stat.label} className="stat">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="hero-visual">
          <div className="profile-stage">
            <div className="orbit" aria-hidden="true" />
            <div className="orbit orbit-2" aria-hidden="true" />

            <div className="profile-card">
              <div className="profile-top">
                <span>Engineer profile</span>
                <span>v2026</span>
              </div>
              <div className="profile-photo">
                <Image
                  src="/avatar.jpg"
                  alt="Portrait of Per Badasu"
                  fill
                  priority
                  sizes="300px"
                  className="object-cover"
                />
              </div>
              <div className="profile-meta">
                <div>
                  <strong>Per Badasu</strong>
                  <span>Senior Software Engineer</span>
                </div>
                <span className="chip chip-accent">Available</span>
              </div>
            </div>

            <span className="float-chip float-chip-1">FastAPI</span>
            <span className="float-chip float-chip-2">LangChain</span>
            <span className="float-chip float-chip-3">Kubernetes</span>

            <div className="terminal-card" aria-hidden="true">
              <div className="terminal-head">
                <i />
                <i />
                <i />
                <span>~/per-badasu</span>
              </div>
              <div className="terminal-body">
                <div>
                  <span className="c">$</span> whoami
                </div>
                <div>per_badasu</div>
                <div>
                  <span className="c">$</span> cat profile.yaml
                </div>
                <div>
                  role: <span className="s">Senior Software Engineer</span>
                </div>
                <div>
                  focus: [<span className="k">ai</span>, distributed-systems]
                </div>
                <div>stack: [python, ts, go, aws]</div>
                <div>
                  status: <span className="k">shipping ▍</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
