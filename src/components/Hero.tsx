import type { ExperienceCard } from "@/data/portfolioData";

type HeroProps = {
  experiences: ExperienceCard[];
};

export default function Hero({ experiences }: HeroProps) {
  return (
    <section id="sobre" className="section section-alt reveal">
      <div className="container">
        <div className="section-heading">
          <h2>Sobre nos</h2>
          <p>
            Unimos estudantes de diferentes fases para criar projetos que
            fortalecem a relacao entre universidade e comunidade.
          </p>
        </div>

        <div className="experience-grid">
          {experiences.map((experience) => (
            <article key={experience.id} className="experience-card">
              <small>{experience.period}</small>
              <h3>{experience.title}</h3>
              <p className="experience-role">{experience.role}</p>
              <p>{experience.summary}</p>
              <ul>
                {experience.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
