import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { TestProjects } from "@/components/testproj";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

import InteractiveBackground from "@/components/interactiveBackground";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <InteractiveBackground followCursor={true} style={{ zIndex: -1 }} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        {/* <TestProjects /> */}
        {/* <Experience />
        <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}
