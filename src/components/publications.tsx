import { publications } from "@/lib/data";
import { Icon } from "./icons";
import { Reveal } from "./reveal";

export function Publications() {
  return (
    <section id="publications" className="section">
      <div className="shell">
        <Reveal>
          <div className="eyebrow">04 — Publications</div>
          <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="section-title max-w-2xl">
              Peer-reviewed <span className="serif">research</span>.
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Work that goes beyond shipping software — computational methods for extracting
              meaningful signal from complex scientific data.
            </p>
          </div>
        </Reveal>

        <div className="pub-list mt-10">
          {publications.map((publication, index) => (
            <Reveal key={publication.title} delay={index * 80}>
              <a
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="pub-card"
                aria-label={`${publication.title} — read on ScienceDirect`}
              >
                <div className="pub-meta">
                  <span className="pub-index">{String(index + 1).padStart(2, "0")}</span>
                  <span>{publication.publisher}</span>
                  <span aria-hidden="true">·</span>
                  <time dateTime={publication.dateTime}>{publication.date}</time>
                </div>

                <h3 className="pub-title">
                  <span>{publication.title}</span>
                  <Icon name="arrow-up-right" size={20} />
                </h3>

                <p className="pub-summary">{publication.summary}</p>

                <div className="pub-footer">
                  <div className="pub-tags">
                    {publication.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="pub-link">
                    Read paper
                    <Icon name="arrow-up-right" size={14} />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
