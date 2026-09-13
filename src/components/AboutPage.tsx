import { ArrowLeft, ArrowUpRight, UserRound } from "lucide-react";

/**
 * Pagina dedicata alla storia e alle persone di GC Web Solutions.
 * Avatar, ruoli e descrizioni sono provvisori e possono essere sostituiti
 * senza modificare il resto della struttura.
 */
export function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-page-hero" aria-labelledby="about-page-title">
        <div className="section-shell about-page-heading">
          <a className="back-link" href="#top">
            <ArrowLeft aria-hidden="true" />
            Torna alla home
          </a>

          <p className="eyebrow">
            <span aria-hidden="true" />
            La nostra storia
          </p>
          <h1 id="about-page-title">Chi siamo</h1>
          <p>
            GC Web Solutions nasce dalla voglia di due ragazzi di mettersi in
            gioco e trasformare la propria passione per il digitale in un lavoro.
            Non realizziamo semplicemente siti web: costruiamo una presenza online
            chiara, credibile e capace di rappresentare davvero ogni attività.
            Affianchiamo imprese e professionisti con strategia, design, sviluppo,
            visibilità e assistenza continua. Ci presentiamo, siamo Claudio e
            Gianluca.
          </p>
        </div>
      </section>

      <section className="team-section" aria-labelledby="team-title">
        <div className="section-shell">
          <div className="team-heading">
            <p className="eyebrow">
              <span aria-hidden="true" />
              Le persone dietro GC
            </p>
            <h2 id="team-title">Due competenze, un unico obiettivo.</h2>
          </div>

          <div className="team-grid">
            <article className="team-card">
              <div className="team-avatar" aria-label="Avatar provvisorio di Claudio">
                <UserRound aria-hidden="true" />
                <span>Foto di Claudio</span>
              </div>
              <div className="team-profile">
                <p className="team-role">Co-founder · Sviluppo e tecnologia</p>
                <h3>Claudio</h3>
                <p>
                  Testo provvisorio: Claudio segue lo sviluppo dei progetti, la
                  parte tecnica e l’assistenza ai clienti. Trasforma obiettivi e
                  necessità concrete in soluzioni digitali semplici da utilizzare,
                  veloci e costruite per durare nel tempo.
                </p>
              </div>
            </article>

            <article className="team-card">
              <div className="team-avatar" aria-label="Avatar provvisorio di Gianluca">
                <UserRound aria-hidden="true" />
                <span>Foto di Gianluca</span>
              </div>
              <div className="team-profile">
                <p className="team-role">Co-founder · Strategia e progettazione</p>
                <h3>Gianluca</h3>
                <p>
                  Testo provvisorio: Gianluca segue la progettazione, la strategia
                  digitale e il rapporto con il cliente. Cura ogni fase affinché il
                  progetto comunichi con chiarezza, abbia una direzione precisa e
                  porti valore reale all’attività.
                </p>
              </div>
            </article>
          </div>

          <div className="team-cta">
            <p>Hai un progetto o vuoi migliorare la tua presenza online?</p>
            <a className="button button-primary" href="#contatti">
              Parliamone insieme
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
