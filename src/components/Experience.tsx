import type { ActivityCard } from "@/data/portfolioData";

type ExperienceProps = {
  activities: ActivityCard[];
};

function statusLabel(status: ActivityCard["status"]) {
  if (status === "ongoing") return "Em andamento";
  if (status === "open") return "Inscricoes abertas";
  return "Em breve";
}

export default function Experience({ activities }: ExperienceProps) {
  const [featured, ...upcoming] = activities;

  return (
    <section id="atividades" className="section reveal">
      <div className="container">
        <div className="section-heading split-heading">
          <span className="heading-icon" aria-hidden>
            ▣
          </span>
          <h2>Nossas proximas atividades</h2>
        </div>

        <div className="activities-grid">
          {featured && (
            <article className="activity-highlight">
              <p className="chip">{statusLabel(featured.status)}</p>
              <h3>{featured.title}</h3>
              <p>{featured.summary}</p>
              <small>{featured.period}</small>
            </article>
          )}

          <div className="activities-list">
            {upcoming.map((activity) => (
              <article key={activity.id} className="activity-card">
                <p className="chip">{statusLabel(activity.status)}</p>
                <h3>{activity.title}</h3>
                <p>{activity.summary}</p>
                <small>{activity.period}</small>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
