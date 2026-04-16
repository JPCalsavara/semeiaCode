type CohortsProps = {
  cohorts: string[];
};

export default function Cohorts({ cohorts }: CohortsProps) {
  return (
    <section id="turmas" className="section reveal cohorts-section">
      <div className="container">
        <div className="section-heading">
          <h2>Turmas</h2>
          <p>
            Ciclos semestrais da Semeia Code com foco em base logica e evolucao
            pratica dos alunos.
          </p>
        </div>

        <div className="cohorts-row">
          {cohorts.map((cohort) => (
            <span key={cohort} className="cohort-chip">
              {cohort}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
