import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Certificates } from "@/components/Certificates";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6">
      <Navbar />
      <Hero />
      <About />
      <Certificates />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
