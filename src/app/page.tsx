import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Focus } from "@/components/focus";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Skills } from "@/components/skills";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Work />
      <Skills />
      <About />
      <Focus />
      <Contact />
    </>
  );
}
