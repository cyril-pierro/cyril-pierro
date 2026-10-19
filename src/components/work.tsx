"use client";

import { useState } from "react";
import type { MouseEvent } from "react";
import type { CSSProperties } from "react";
import { categories, projects } from "@/lib/data";
import type { Category, Project } from "@/lib/data";
import { Icon } from "./icons";
import { Reveal } from "./reveal";

type Filter = "All" | Category;

function Wave() {
  return (
    <div className="wave" aria-hidden="true">
      {Array.from({ length: 32 }).map((_, index) => (
        <span
          key={index}
          style={{
            animationDelay: `${(index % 16) * 0.08}s`,
            height: `${20 + Math.abs(Math.sin(index * 0.7)) * 60}%`,
          }}
        />
      ))}
    </div>
  );
}

function Agents() {
  return (
    <div className="nodes" aria-hidden="true">
      <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice">
        <path className="edge" d="M70 70 L160 40 L250 90" />
        <path className="edge" d="M160 40 L150 150 L70 70" />
        <path className="edge" d="M150 150 L250 90 L160 40" />
        <path className="edge" d="M70 70 L150 150" />
        <circle className="node" cx="70" cy="70" r="11" />
        <circle className="node" cx="160" cy="40" r="11" />
        <circle className="node" cx="250" cy="90" r="11" />
        <circle className="node" cx="150" cy="150" r="11" />
        <circle className="node-core" cx="160" cy="40" r="4" />
        <circle className="pulse" cx="150" cy="150" r="4" />
      </svg>
      <div className="art-caption">orchestrator · 4 agents online</div>
    </div>
  );
}

function Chat() {
  return (
    <div className="art-stack" aria-hidden="true">
      <div className="bubble">connection open</div>
      <div className="bubble bubble-alt">
        broadcasting<span className="dots"><i /><i /><i /></span>
      </div>
      <div className="art-caption">websocket · 0 dropped messages</div>
    </div>
  );
}

function Cli() {
  return (
    <div className="cli" aria-hidden="true">
      <p><span className="c">$</span> sea analyze --config run.yaml</p>
      <p><span className="k">✓</span> loaded 4 simulations</p>
      <p><span className="k">✓</span> entropy curves computed</p>
      <p className="muted">→ report.md written</p>
    </div>
  );
}

function Docker() {
  return (
    <div className="art-stack" aria-hidden="true">
      <div className="layer-stack">
        <span className="layer" />
        <span className="layer" />
        <span className="layer" />
        <span className="layer-arrow">
          <Icon name="arrow-down" size={16} />
        </span>
      </div>
      <div className="art-caption">image → registry → env</div>
    </div>
  );
}

function Cloud() {
  return (
    <div className="cloud-grid" aria-hidden="true">
      {["VPC", "EC2", "S3", "IAM", "RDS", "ECS"].map((label) => (
        <span key={label} className="cloud-tile">
          {label}
        </span>
      ))}
    </div>
  );
}

function Api() {
  return (
    <div className="api-list" aria-hidden="true">
      <p><b className="m-get">GET</b> /books</p>
      <p><b className="m-post">POST</b> /books</p>
      <p><b className="m-put">PUT</b> /books/:id</p>
      <p><b className="m-del">DEL</b> /books/:id</p>
    </div>
  );
}

function ProjectArt({ art }: { art: Project["art"] }) {
  switch (art) {
    case "voice":
      return (
        <div className="project-art">
          <Wave />
          <div className="art-caption">
            <span className="status-dot" /> streaming · grounded answer ready
          </div>
        </div>
      );
    case "agents":
      return (
        <div className="project-art">
          <Agents />
        </div>
      );
    case "chat":
      return (
        <div className="project-art">
          <Chat />
        </div>
      );
    case "cli":
      return (
        <div className="project-art">
          <Cli />
        </div>
      );
    case "docker":
      return (
        <div className="project-art">
          <Docker />
        </div>
      );
    case "cloud":
      return (
        <div className="project-art">
          <Cloud />
        </div>
      );
    case "api":
      return (
        <div className="project-art">
          <Api />
        </div>
      );
  }
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const handleMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  const body = (
    <div className="project-body">
      <h3 className="project-title">
        <span>{project.name}</span>
        <Icon name="arrow-up-right" size={20} />
      </h3>
      <p className="project-desc">{project.description}</p>
      <ul className="project-highlights">
        {project.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="chip">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <Reveal delay={delay} className={project.size === "wide" ? "work-cell-wide" : "work-cell"}>
      <a
        href={project.repo}
        target="_blank"
        rel="noopener noreferrer"
        onMouseMove={handleMove}
        className={`project ${project.size === "wide" ? "project--wide" : ""}`}
        aria-label={`${project.name} — open repository on GitHub`}
        style={{ height: "100%" } as CSSProperties}
      >
        {project.size === "wide" ? (
          <>
            <div className="project-head">
              <span className="project-index">{project.index}</span>
              <span>{project.category}</span>
            </div>
            <div className="project-inner">
              <div>{body}</div>
              <ProjectArt art={project.art} />
            </div>
          </>
        ) : (
          <>
            <div className="project-head">
              <span className="project-index">{project.index}</span>
              <span>{project.category}</span>
            </div>
            {body}
          </>
        )}
      </a>
    </Reveal>
  );
}

export function Work() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = projects.filter((project) => filter === "All" || project.category === filter);

  return (
    <section id="work" className="section">
      <div className="shell">
        <Reveal>
          <div className="eyebrow">02 — Selected work</div>
          <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="section-title max-w-2xl">
              Systems I&rsquo;ve designed, built, and <span className="serif">shipped</span>.
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              A selection of open-source builds spanning AI pipelines, distributed backends, and
              cloud automation. Each one solves a real problem end to end.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="filter-bar mt-10" aria-label="Filter projects by discipline">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={filter === category}
                data-active={filter === category}
                className="filter-btn"
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="work-grid mt-6">
          {visible.map((project, index) => (
            <ProjectCard key={project.slug} project={project} delay={(index % 2) * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
