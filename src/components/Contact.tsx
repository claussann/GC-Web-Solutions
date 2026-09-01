import { ContactForm } from "./ContactForm";

/** Sezione contatti e modulo di richiesta. */
export function Contact() {
  return (
    <section className="contact-section" id="contatti" aria-labelledby="contact-title">
      <div className="section-shell contact-grid">
        <div className="contact-copy">
          <p className="eyebrow light">
            <span aria-hidden="true" />
            Parliamo del tuo progetto
          </p>
          <h2 id="contact-title">
            Hai un’idea?
            <br />
            Mettiamola a fuoco.
          </h2>
          <p>
            Raccontaci cosa vuoi realizzare o migliorare. Ti risponderemo con
            domande chiare e un primo orientamento, senza impegno.
          </p>

          <div className="contact-note">
            <span aria-hidden="true">↳</span>
            <p>
              <strong>Non serve un brief perfetto.</strong>
              <br />
              Bastano il tuo obiettivo e qualche informazione di partenza.
            </p>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
