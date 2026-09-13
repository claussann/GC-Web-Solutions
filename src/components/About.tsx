import {
  ArrowUpRight,
  MessagesSquare,
  ShieldCheck,
  Wrench,
} from "lucide-react";

/** Sezione di presentazione di GC Web Solutions. */
export function About() {
  return (
    <section className="about-section" id="chi-siamo" aria-labelledby="about-title">
      <div className="section-shell about-grid">
        <div className="about-visual" aria-hidden="true">
          <span className="about-wordmark">GC</span>
          <div className="about-orbit orbit-one" />
          <div className="about-orbit orbit-two" />
          <span className="about-label">
            Web
            <br />
            Solutions
          </span>
        </div>

        <div className="about-copy">
          <p className="eyebrow">
            <span aria-hidden="true" />
            Chi siamo
          </p>
          <h2 id="about-title">Competenze diverse, una direzione condivisa.</h2>
          <p className="about-lead">
            GC Web Solutions nasce per accompagnare attività locali e
            professionisti nel digitale con un rapporto diretto e concreto.
          </p>
          <p>
            Uniamo sviluppo web, WordPress, UX/UI, SEO e assistenza tecnica. Il
            risultato non è soltanto un sito gradevole, ma uno strumento
            comprensibile, manutenibile e costruito con cura.
          </p>

          <div className="about-points">
            <span>
              <MessagesSquare aria-hidden="true" />
              Confronto continuo
            </span>
            <span>
              <ShieldCheck aria-hidden="true" />
              Scelte trasparenti
            </span>
            <span>
              <Wrench aria-hidden="true" />
              Supporto nel tempo
            </span>
          </div>

          <div className="about-actions">
            <a className="button button-primary" href="#/chi-siamo">
              Conosciamoci
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
