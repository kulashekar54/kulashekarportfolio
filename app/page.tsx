import ClientShell from "@/components/ClientShell";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import DebuggingStories from "@/components/DebuggingStories";
import Research from "@/components/Research";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <ClientShell />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <DebuggingStories />
        <Research />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
