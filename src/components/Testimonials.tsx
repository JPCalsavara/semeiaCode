import Image from "next/image";
import type { TestimonialCard } from "@/data/portfolioData";

type TestimonialsProps = {
  testimonials: TestimonialCard[];
};

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section id="depoimentos" className="section section-alt reveal">
      <div className="container">
        <div className="section-heading">
          <h2>O que antigos membros dizem</h2>
          <p>
            Depoimentos de quem viveu a SemeiaCOde e hoje atua no mercado,
            levando adiante o impacto da extensao.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className="testimonial-card">
              <div className="testimonial-head">
                <Image
                  src={testimonial.photo}
                  alt={`Foto de ${testimonial.name}`}
                  width={64}
                  height={64}
                  className="testimonial-photo"
                />
                <div>
                  <h3>{testimonial.name}</h3>
                  <p className="testimonial-work">{testimonial.workplace}</p>
                </div>
              </div>

              <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
