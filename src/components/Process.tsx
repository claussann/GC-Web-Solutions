import { ArrowDownRight } from "lucide-react";
import { processSteps } from "../data/content";

/** Metodo di lavoro. I quattro passaggi si modificano in data/content.ts. */
export function Process() {
  return (
    <section
      className="section-shell section-block process-section"
      id="metodo"
      aria-labelledby="process-title"
    >
      <div className="section-heading compact-heading">
        <p className="eyebrow">
          <span aria-hidden="true" />
          Come lavoriamo
        </p>
        <h2 id="process-title">Sai sempre cosa stiamo facendo. E perché.</h2>
      </div>

      <ol className="process-list">
        {processSteps.map((step) => (
          <li key={step.number}>
            <span className="step-number">{step.number}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
            <ArrowDownRight aria-hidden="true" />
          </li>
        ))}
      </ol>
    </section>
  );
}
