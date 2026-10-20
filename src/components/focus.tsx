import { focus } from "@/lib/data";
import { Reveal } from "./reveal";

export function Focus() {
  return (
    <section id="focus" className="section">
      <div className="shell">
        <Reveal>
          <div className="eyebrow">07 — Current focus</div>
          <h2 className="section-title mt-5 max-w-2xl">
            What I&rsquo;m building toward <span className="serif">right now</span>.
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="focus-panel mt-12">
            {focus.map((item, index) => (
              <div key={item} className="focus-item">
                <span className="num">{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
