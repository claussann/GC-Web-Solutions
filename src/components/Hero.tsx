import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Code2,
  Layers3,
  MousePointer2,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

/** Prima sezione e mockup animato del processo di realizzazione. */
export function Hero() {
  return (
    <section className="hero section-shell" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">
          <span aria-hidden="true" />
          Strategia · design · sviluppo
        </p>

        <h1 id="hero-title">
          Siti web che fanno <span>lavorare meglio</span> la tua attività.
        </h1>

        <p className="hero-lead">
          Progettiamo presenze digitali chiare, credibili e semplici da usare.
          Dall’idea alla pubblicazione, con un referente sempre presente.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#contatti">
            Raccontaci il progetto
            <ArrowDownRight aria-hidden="true" />
          </a>
          <a className="text-link" href="#progetti">
            Guarda i progetti
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <div className="hero-proof" aria-label="I nostri punti di forza">
          <span>
            <Check aria-hidden="true" />
            Approccio su misura
          </span>
          <span>
            <Check aria-hidden="true" />
            Assistenza diretta
          </span>
        </div>
      </div>

      <div
        className="hero-studio"
        aria-label="Il nostro processo: dal brief alla pubblicazione"
      >
        <div className="studio-grid" aria-hidden="true" />

        <div className="browser-card">
          <div className="browser-bar">
            <span className="browser-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="browser-url">gc / nuovo progetto</span>
            <ShieldCheck aria-hidden="true" />
          </div>

          <div className="browser-content">
            <p className="mini-label">Progetto in costruzione</p>
            <div className="mini-heading" aria-hidden="true">
              <span />
              <span />
            </div>

            <div className="mini-layout">
              <div className="mini-preview" aria-hidden="true">
                <div className="mini-nav" />
                <div className="mini-title" />
                <div className="mini-copy" />
                <div className="mini-button" />
              </div>

              <div className="mini-panel">
                <div className="panel-row active">
                  <Search aria-hidden="true" />
                  <span>Struttura</span>
                  <Check aria-hidden="true" />
                </div>
                <div className="panel-row">
                  <Layers3 aria-hidden="true" />
                  <span>Design</span>
                  <Check aria-hidden="true" />
                </div>
                <div className="panel-row">
                  <Code2 aria-hidden="true" />
                  <span>Sviluppo</span>
                  <span className="pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="floating-note note-one">
          <MousePointer2 aria-hidden="true" />
          Mobile first
        </div>
        <div className="floating-note note-two">
          <Sparkles aria-hidden="true" />
          Pronto a crescere
        </div>
        <span className="studio-index" aria-hidden="true">
          01—04
        </span>
      </div>
    </section>
  );
}
