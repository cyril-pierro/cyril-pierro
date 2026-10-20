import { principles } from "@/lib/data";
import { Reveal } from "./reveal";

export function About() {
  return (
    <section id="about" className="section">
      <div className="shell">
        <Reveal>
          <div className="eyebrow">06 — About</div>
        </Reveal>

        <div className="about-grid mt-8">
          <Reveal className="about-sticky">
            <p className="about-lede">
              I like software that stays <span className="serif">boring</span> in production —
              predictable, observable, and easy to change.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              <span className="chip">6+ years experience</span>
              <span className="chip">Full-stack</span>
              <span className="chip">AI systems</span>
              <span className="chip">DevSecOps</span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="about-copy space-y-5">
              <p>
                I&rsquo;ve spent over six years designing and delivering scalable applications,
                backend services, APIs, distributed systems, and AI-powered products across a range
                of industries. I work across the whole lifecycle — from requirements and system
                architecture through implementation, testing, automated deployment, and production
                support.
              </p>
              <p>
                My strengths sit where backend engineering, applied AI, and cloud infrastructure
                meet. I care about reliability and security as much as velocity, so I invest in the
                pipelines, tests, and telemetry that let a team ship confidently and often.
              </p>
            </div>

            <div className="mt-9">
              {principles.map((principle) => (
                <div key={principle.num} className="principle">
                  <span className="principle-num">{principle.num}</span>
                  <div>
                    <h4>{principle.title}</h4>
                    <p>{principle.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
