import type { SkillCard } from "@/data/portfolioData";
import type { LegendItem } from "@/lib/portfolio";

type SkillsProps = {
  technologies: SkillCard[];
  legendItems: LegendItem[];
};

export default function Skills({ technologies, legendItems }: SkillsProps) {
  return (
    <section id="habilidades" className="section reveal">
      <div className="container">
        <div className="section-heading">
          <h2>Stack e competencias</h2>
          <p>
            Base tecnica e habilidades humanas para construir projetos
            sustentaveis em equipe.
          </p>
        </div>

        <div className="legend-row">
          {legendItems.map((item) => (
            <span key={item.type} className="legend-pill">
              <span style={{ backgroundColor: item.color }} aria-hidden />
              {item.label}
            </span>
          ))}
        </div>

        <div className="skills-cloud">
          {technologies.map((technology) => (
            <span key={technology.id} className={`tag tone-${technology.type}`}>
              {technology.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
