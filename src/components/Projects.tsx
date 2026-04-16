import type { ProjectCard } from "@/data/portfolioData";
import type { TechnologyTagMap } from "@/lib/portfolio";

type ProjectsProps = {
  projects: ProjectCard[];
  tagsMap: TechnologyTagMap;
};

export default function Projects({ projects, tagsMap }: ProjectsProps) {
  return (
    <section id="projetos" className="section section-alt reveal">
      <div className="container">
        <div className="section-heading">
          <h2>Projetos em destaque</h2>
          <p>
            Solucoes desenvolvidas para escala institucional, comunicacao e
            acompanhamento de impacto.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <small>{project.period}</small>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="tags-row">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className={`tag tone-${tagsMap[technology]?.category || "all"}`}
                  >
                    {technology}
                  </span>
                ))}
              </div>
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer">
                  Ver projeto
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
