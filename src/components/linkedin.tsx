import { links, linkedinPosts, withCampaign } from "@/lib/data";
import { Icon } from "./icons";
import { LinkedInEmbed } from "./linkedin-embed";
import { Reveal } from "./reveal";

export function LinkedIn() {
  const featured = linkedinPosts[0];

  return (
    <section id="linkedin" className="section">
      <div className="shell">
        <Reveal>
          <div className="eyebrow">03 — Featured on LinkedIn</div>
          <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="section-title max-w-2xl">
              Building in public, <span className="serif">in depth</span>.
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              I write up the engineering behind each build on LinkedIn — the architecture,
              trade-offs, and what actually shipped.
            </p>
          </div>
        </Reveal>

        <div className="linkedin-grid mt-10">
          {linkedinPosts.map((post, index) => (
            <Reveal key={post.url} delay={(index % 3) * 70}>
              <a
                href={withCampaign(post.url)}
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-card"
                aria-label={`${post.title} — read the post on LinkedIn`}
              >
                <div className="linkedin-meta">
                  <span className="linkedin-index">{String(index + 1).padStart(2, "0")}</span>
                  <time dateTime={post.dateTime}>{post.date}</time>
                </div>

                <h3 className="linkedin-title">
                  <span>{post.title}</span>
                  <Icon name="arrow-up-right" size={18} />
                </h3>

                <p className="linkedin-summary">{post.summary}</p>

                <div className="linkedin-tags">
                  {post.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="linkedin-cta">
                  Read post
                  <Icon name="arrow-up-right" size={14} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        {featured.embedUrl ? (
          <Reveal delay={80}>
            <div className="mt-10">
              <LinkedInEmbed
                embedUrl={featured.embedUrl}
                postUrl={withCampaign(featured.url)}
                title={featured.title}
              />
            </div>
          </Reveal>
        ) : null}

        <Reveal delay={120}>
          <div className="linkedin-follow mt-10">
            <div>
              <h3>More of this on LinkedIn.</h3>
              <p>
                Follow along for engineering deep-dives, launches, and lessons from production.
              </p>
            </div>
            <a
              href={withCampaign(links.linkedin)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Icon name="linkedin" size={16} />
              Follow on LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
