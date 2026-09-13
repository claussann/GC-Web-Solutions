import { useEffect, useState } from "react";

import { About } from "./components/About";
import { AboutPage } from "./components/AboutPage";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Process } from "./components/Process";
import { Projects } from "./components/Projects";
import { PromiseBand } from "./components/PromiseBand";
import { Services } from "./components/Services";

/**
 * Composizione della pagina.
 * L'ordine dei componenti corrisponde all'ordine visibile delle sezioni.
 */
export default function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    function handleHashChange() {
      setHash(window.location.hash);
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    if (hash === "#/chi-siamo") {
      document.title = "Chi siamo | GC Web Solutions";
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    document.title = "GC Web Solutions | Siti web e soluzioni digitali";

    const sectionId = hash.replace("#", "");
    if (!sectionId) return;

    // Attende che la home sia nuovamente renderizzata prima dello scroll.
    window.requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    });
  }, [hash]);

  if (hash === "#/chi-siamo") {
    return (
      <main>
        <Header />
        <AboutPage />
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Header />
      <Hero />
      <PromiseBand />
      <Services />
      <Projects />
      <Process />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
