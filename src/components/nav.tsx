"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Icon } from "./icons";

const sections = [
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "focus", label: "Focus" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = useCallback(() => {
    const next = document.documentElement.classList.contains("light") ? "dark" : "light";
    document.documentElement.classList.toggle("light", next === "light");
    document.documentElement.style.colorScheme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <header className="nav" data-scrolled={scrolled}>
      <div className="shell nav-inner">
        <Link href="/" className="brand" aria-label="Per Badasu — home">
          <span className="brand-mark">PB</span>
          <span className="hidden sm:inline">Per Badasu</span>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {sections.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className="nav-link" data-active={active === id}>
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="icon-btn"
            aria-label="Toggle color theme"
          >
            <Icon name="sun" size={17} className="theme-when-dark" />
            <Icon name="moon" size={17} className="theme-when-light" />
          </button>

          <span className="hidden sm:block">
            <a href="#contact" className="btn btn-primary btn-sm">
              Get in touch
            </a>
          </span>

          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="icon-btn"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <Icon name={open ? "close" : "menu"} size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="mobile-menu lg:hidden" id="mobile-menu" data-open={open}>
        <div className="shell pb-5">
          <div className="rule mb-3" />
          <nav className="flex flex-col" aria-label="Mobile">
            {sections.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="nav-link"
                data-active={active === id}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
