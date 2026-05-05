import type { MemberHighlight } from "@/data/portfolioData";

type CollegeProps = {
  members: MemberHighlight[];
};

export default function College({ members }: CollegeProps) {
  return (
    <section id="cargos" className="section reveal">
      <div className="container">
        <div className="section-heading">
          <h2>Cargos da organizacao</h2>
          <p>
            Estrutura de atuacao da SemeiaCOde para organizar as turmas,
            didatica e acompanhamento dos alunos.
          </p>
        </div>

        <div className="members-grid">
          {members.map((member) => (
            <article key={member.id} className="member-card">
              <h3>{member.name}</h3>
              <p className="member-area">{member.area}</p>
              <p>{member.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
