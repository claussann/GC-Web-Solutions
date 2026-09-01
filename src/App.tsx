import { About } from "./components/About";
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
