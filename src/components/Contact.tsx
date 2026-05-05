type ContactProps = {
  social: {
    github: string;
    linkedin: string;
    email: string;
  };
};

export default function Contact({ social }: ContactProps) {
  const waitlistFormLink = "https://forms.gle/";

  return (
    <section id="contato" className="section contact-section reveal">
      <div className="container contact-content">
        <div>
          <h2>Quer colaborar com o SemeiaCOde?</h2>
          <p>
            Estamos abertos a parcerias com escolas, grupos estudantis e
            organizacoes que acreditam em educacao tecnologica acessivel e de
            qualidade.
          </p>
        </div>

        <div className="contact-links">
          <a href={social.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={social.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={social.email}>Email</a>
        </div>
      </div>

      <div className="container contact-footer">
        <a href={waitlistFormLink} target="_blank" rel="noreferrer">
          Formulario de espera do processo seletivo
        </a>
        <p>
          © {new Date().getFullYear()} SemeiaCOde. Todos os direitos reservados.
        </p>
      </div>
    </section>
  );
}
