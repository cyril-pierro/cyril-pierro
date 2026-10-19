import type { ReactNode, SVGProps } from "react";

export type IconName =
  | "server"
  | "spark"
  | "layout"
  | "cloud"
  | "shield"
  | "database"
  | "arrow-up-right"
  | "arrow-down"
  | "github"
  | "linkedin"
  | "mail"
  | "sun"
  | "moon"
  | "menu"
  | "close"
  | "terminal"
  | "mic"
  | "nodes"
  | "chat"
  | "cube"
  | "route"
  | "code"
  | "download"
  | "check";

const paths: Record<IconName, ReactNode> = {
  server: (
    <>
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 7.5h.01M7 16.5h.01" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="M12 8a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4Z" />
    </>
  ),
  layout: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </>
  ),
  cloud: (
    <>
      <path d="M17.5 17.5a4 4 0 0 0 0-8 6 6 0 0 0-11.6 1.5A3.5 3.5 0 0 0 6.5 17.5Z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6Z" />
      <path d="m9.5 12 1.8 1.8 3.5-3.6" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="7.5" ry="3" />
      <path d="M4.5 6v12c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3V6" />
      <path d="M4.5 12c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3" />
    </>
  ),
  "arrow-up-right": <path d="M7 17 17 7M8 7h9v9" />,
  "arrow-down": <path d="M12 5v14M6 13l6 6 6-6" />,
  github: (
    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.48l-.01-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9l-.01 2.82c0 .27.18.59.69.48A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
  ),
  linkedin: (
    <>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" />
      <path d="M3 9h4v12H3zM10 9h3.8v1.7h.05c.53-.96 1.83-1.97 3.77-1.97 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.6c0-1.34-.02-3.06-1.9-3.06-1.9 0-2.2 1.46-2.2 2.96V21h-4Z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
    </>
  ),
  moon: <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  terminal: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="m7 9 2.5 3L7 15M13 15h4" />
    </>
  ),
  mic: (
    <>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
    </>
  ),
  nodes: (
    <>
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="8" r="2" />
      <circle cx="10" cy="18" r="2" />
      <path d="M8 6.6 16 7.4M7 8l2.6 8M16.5 9.7 11.6 16.4" />
    </>
  ),
  chat: (
    <>
      <path d="M21 12a8 8 0 0 1-8 8H7l-4 3v-7a8 8 0 0 1 8-8h2a8 8 0 0 1 8 4Z" />
      <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />
    </>
  ),
  cube: (
    <>
      <path d="M12 2 3 7v10l9 5 9-5V7Z" />
      <path d="M3 7l9 5 9-5M12 12v10" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="19" r="2" />
      <circle cx="18" cy="5" r="2" />
      <path d="M6 17V9a4 4 0 0 1 4-4h4" />
    </>
  ),
  code: <path d="m8 6-6 6 6 6M16 6l6 6-6 6" />,
  download: <path d="M12 3v12M7 10l5 5 5-5M4 21h16" />,
  check: <path d="m5 13 4 4L19 7" />,
};

export function Icon({
  name,
  size = 20,
  ...props
}: { name: IconName; size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
