import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Certificates from "@/components/certificates";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import TechBackground from "@/components/tech-background";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <TechBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
}

