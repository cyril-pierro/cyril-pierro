"use client";

import { useState } from "react";
import { Icon } from "./icons";

type LinkedInEmbedProps = {
  embedUrl: string;
  postUrl: string;
  title: string;
};

export function LinkedInEmbed({ embedUrl, postUrl, title }: LinkedInEmbedProps) {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <div className="linkedin-preview">
        <div>
          <p className="linkedin-preview-title">Want to see the original?</p>
          <p className="linkedin-preview-copy">
            Load the latest post directly from LinkedIn. Nothing is requested until you choose to
            preview it.
          </p>
        </div>
        <button type="button" className="btn btn-ghost btn-sm" onClick={() => setOpen(true)}>
          <Icon name="linkedin" size={15} />
          Preview latest post
        </button>
      </div>
    );
  }

  return (
    <div className="linkedin-embed">
      <div className="linkedin-embed-head">
        <span>Live from LinkedIn</span>
        <a href={postUrl} target="_blank" rel="noopener noreferrer">
          Open post
          <Icon name="arrow-up-right" size={14} />
        </a>
      </div>
      <iframe
        src={embedUrl}
        title={title}
        width="100%"
        height={640}
        loading="lazy"
        allowFullScreen
        className="linkedin-iframe"
      />
    </div>
  );
}
