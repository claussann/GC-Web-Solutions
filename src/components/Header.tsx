import { ArrowUpRight } from "lucide-react";

/** Header desktop e menu mobile. Le ancore puntano alle sezioni della pagina. */
export function Header() {
  return (
    <header className="site-header">
      <a
        className="brand"
        href="#top"
        aria-label="GC Web Solutions, torna all’inizio"
      >
        <span className="brand-mark" aria-hidden="true">
          GC
        </span>
        <span className="brand-name">Web Solutions</span>
      </a>

      <nav className="desktop-nav" aria-label="Navigazione principale">
        <a href="#servizi">Servizi</a>
        <a href="#progetti">Progetti</a>
        <a href="#metodo">Metodo</a>
        <a href="#chi-siamo">Chi siamo</a>
      </nav>

      <a className="header-cta" href="#contatti">
        Parliamone
        <ArrowUpRight aria-hidden="true" />
      </a>

      <details className="mobile-nav">
        <summary aria-label="Apri il menu">Menu</summary>
        <nav aria-label="Navigazione mobile">
          <a href="#servizi">Servizi</a>
          <a href="#progetti">Progetti</a>
          <a href="#metodo">Metodo</a>
          <a href="#chi-siamo">Chi siamo</a>
          <a href="#contatti">Contatti</a>
        </nav>
      </details>
    </header>
  );
}
