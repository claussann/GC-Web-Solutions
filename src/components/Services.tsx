import { services } from "../data/content";

/** Sezione servizi. I contenuti delle card si modificano in data/content.ts. */
export function Services() {
  return (
    <section
      className="section-shell section-block"
      id="servizi"
      aria-labelledby="services-title"
    >
      <div className="section-heading">
        <p className="eyebrow">
          <span aria-hidden="true" />
          Cosa facciamo
        </p>
        <h2 id="services-title">Il digitale, senza complicazioni.</h2>
        <p>
          Soluzioni proporzionate a ciò che serve davvero: meno complessità, più
          chiarezza e una base solida su cui crescere.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article className="service-card" key={service.number}>
              <div className="service-top">
                <span>{service.number}</span>
                <Icon aria-hidden="true" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul aria-label={`Competenze per ${service.title}`}>
                {service.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
