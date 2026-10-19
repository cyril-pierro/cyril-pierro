import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CursorGlow } from "@/components/cursor-glow";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://per-badasu.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Per Badasu — Senior Software Engineer",
    template: "%s · Per Badasu",
  },
  description:
    "Senior software engineer with 6+ years building scalable backends, modern web apps, and production-grade AI systems. Backend, frontend, AI, DevSecOps, and cloud infrastructure.",
  keywords: [
    "Per Badasu",
    "Senior Software Engineer",
    "Full-Stack Developer",
    "AI Engineer",
    "Backend Engineer",
    "FastAPI",
    "Next.js",
    "TypeScript",
    "LangChain",
    "RAG",
    "AWS",
    "Kubernetes",
    "DevSecOps",
  ],
  authors: [{ name: "Per Badasu", url: "https://github.com/cyril-pierro" }],
  creator: "Per Badasu",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Per Badasu — Senior Software Engineer",
    description:
      "Backend, frontend, and AI engineering. I build software that thinks, scales, and ships.",
    siteName: "Per Badasu",
    images: [{ url: "/avatar.jpg", width: 900, height: 900, alt: "Per Badasu" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Per Badasu — Senior Software Engineer",
    description:
      "Backend, frontend, and AI engineering. I build software that thinks, scales, and ships.",
    images: ["/avatar.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#07080c" },
    { media: "(prefers-color-scheme: light)", color: "#f5f5f1" },
  ],
  colorScheme: "dark light",
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.add('light');}document.documentElement.style.colorScheme=t==='light'?'light':'dark';}catch(e){}})();`;

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Per Badasu",
  jobTitle: "Senior Software Engineer",
  description:
    "Senior software engineer specialising in backend systems, full-stack web applications, and AI-powered products.",
  url: siteUrl,
  image: `${siteUrl}/avatar.jpg`,
  email: "mailto:peter.badasu10@gmail.com",
  sameAs: [
    "https://github.com/cyril-pierro",
    "https://www.linkedin.com/in/per-badasu-3380a9247",
  ],
  knowsAbout: [
    "Backend Engineering",
    "Distributed Systems",
    "Artificial Intelligence",
    "Retrieval-Augmented Generation",
    "Cloud Infrastructure",
    "DevSecOps",
    "React",
    "Next.js",
    "Python",
    "TypeScript",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrains.variable} ${instrument.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="min-h-dvh">
        <a
          href="#work"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
        >
          Skip to content
        </a>

        <div className="atmosphere" aria-hidden="true">
          <div className="blob blob-a" />
          <div className="blob blob-b" />
        </div>
        <div className="grain" aria-hidden="true" />

        <CursorGlow />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
