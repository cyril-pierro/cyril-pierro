import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Focus } from "@/components/focus";
import { Hero } from "@/components/hero";
import { LinkedIn } from "@/components/linkedin";
import { Marquee } from "@/components/marquee";
import { Publications } from "@/components/publications";
import { Skills } from "@/components/skills";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Work />
      <LinkedIn />
      <Publications />
      <Skills />
      <About />
      <Focus />
      <Contact />
    </>
  );
}
