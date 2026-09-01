import { type FormEvent, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "../config/site";

type FormField = "name" | "email" | "message" | "consent";
type FormErrors = Partial<Record<FormField, string>>;

/**
 * Valida il modulo soltanto nel browser e prepara un'email con `mailto:`.
 * Non vengono inviati o salvati dati su server esterni.
 */
export function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const consent = form.get("consent") === "on";
    const nextErrors: FormErrors = {};

    // Regole di validazione visualizzate accanto al relativo campo.
    if (name.length < 2) nextErrors.name = "Inserisci il tuo nome.";
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      nextErrors.email = "Inserisci un indirizzo email valido.";
    }
    if (message.length < 20) {
      nextErrors.message = "Raccontaci il progetto in almeno 20 caratteri.";
    }
    if (!consent) {
      nextErrors.consent = "Conferma di voler essere ricontattato.";
    }

    setErrors(nextErrors);
    setStatus("");

    if (Object.keys(nextErrors).length > 0) return;

    const recipient = SITE_CONFIG.contactEmail.trim();
    if (!recipient) {
      setStatus(
        "Il modulo è in modalità anteprima: il destinatario verrà collegato prima della pubblicazione.",
      );
      return;
    }

    const subject = encodeURIComponent(
      `Richiesta dal sito GC Web Solutions — ${name}`,
    );
    const body = encodeURIComponent(
      `Nome: ${name}\nEmail: ${email}\n\nMessaggio:\n${message}`,
    );

    setStatus(
      "Il messaggio è pronto: si aprirà il tuo programma di posta elettronica.",
    );
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="field-group">
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Come ti chiami?"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <span className="field-error" id="name-error">
              {errors.name}
            </span>
          )}
        </div>

        <div className="field-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="nome@email.it"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <span className="field-error" id="email-error">
              {errors.email}
            </span>
          )}
        </div>
      </div>

      <div className="field-group">
        <label htmlFor="message">Di cosa hai bisogno?</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Un nuovo sito, un restyling, più visibilità…"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : "message-help"}
        />
        {errors.message ? (
          <span className="field-error" id="message-error">
            {errors.message}
          </span>
        ) : (
          <span className="field-help" id="message-help">
            Non inserire password o dati sensibili.
          </span>
        )}
      </div>

      <label className="privacy-check">
        <input
          type="checkbox"
          name="consent"
          aria-invalid={Boolean(errors.consent)}
          aria-describedby={errors.consent ? "consent-error" : undefined}
        />
        <span>
          Autorizzo GC Web Solutions a ricontattarmi in merito a questa richiesta.
        </span>
      </label>

      {errors.consent && (
        <span className="field-error consent-error" id="consent-error">
          {errors.consent}
        </span>
      )}

      <button className="form-submit" type="submit">
        Invia la richiesta <ArrowUpRight aria-hidden="true" />
      </button>
      <p className="form-status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
