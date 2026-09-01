import { projects, type Project } from "../data/content";

/** Testo del singolo progetto, cliccabile solo quando è presente un link. */
function ProjectDetails({ project }: { project: Project }) {
  const content = (
    <>
      <p>{project.type}</p>
      <h3>{project.name}</h3>
      <p className="project-description">{project.description}</p>
      <span>
        {project.services}
        {project.link && " · Visita il sito ↗"}
      </span>
    </>
  );

  if (!project.link) {
    return <div className="project-copy">{content}</div>;
  }

  return (
    <a
      className="project-copy"
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visita il sito di ${project.name}`}
    >
      {content}
    </a>
  );
}

/** Sezione portfolio. I progetti si modificano in data/content.ts. */
export function Projects() {
  return (
    <section className="projects-section" id="progetti" aria-labelledby="projects-title">
      <div className="section-shell">
        <div className="section-heading projects-heading">
          <div>
            <p className="eyebrow light">
              <span aria-hidden="true" />
              Progetti selezionati
            </p>
            <h2 id="projects-title">Lavori reali, pensati per persone reali.</h2>
          </div>
          <p>
            Ogni progetto parte da un contesto diverso. Il filo comune è una
            presenza digitale più chiara, utile e riconoscibile.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <article className="project-row" key={project.name}>
              <span className="project-number">0{index + 1}</span>
              <div className={`project-visual ${project.theme}`} aria-hidden="true">
                <div className="project-window">
                  <div className="project-window-bar">
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="project-monogram">{project.initials}</div>
                  <div className="project-lines">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
              <ProjectDetails project={project} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
