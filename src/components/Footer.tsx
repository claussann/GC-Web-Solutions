/** Piè di pagina. L'anno viene aggiornato automaticamente dal browser. */
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-grid">
        <div>
          <a
            className="brand footer-brand"
            href="#top"
            aria-label="GC Web Solutions, torna all’inizio"
          >
            <span className="brand-mark" aria-hidden="true">
              GC
            </span>
            <span className="brand-name">Web Solutions</span>
          </a>
          <p>
            Siti web, strategia e supporto digitale.
            <br />
            Tra Tarquinia, Civitavecchia e online.
          </p>
        </div>

        <nav aria-label="Link nel piè di pagina">
          <a href="#servizi">Servizi</a>
          <a href="#progetti">Progetti</a>
          <a href="#metodo">Metodo</a>
          <a href="#contatti">Contatti</a>
        </nav>

        <div className="footer-meta">
          <p>© {new Date().getFullYear()} GC Web Solutions</p>
          <p>Progettato con cura, costruito per durare.</p>
        </div>
      </div>
    </footer>
  );
}
