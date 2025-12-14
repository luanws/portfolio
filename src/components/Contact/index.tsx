"use client";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Contato</h2>
        <div className="contact-wrapper load-hidden">
          <p className="contact-wrapper__text">
            Interessado em meus serviços ou querendo saber mais sobre meu trabalho?
            Não hesite em entrar em contato por e-mail!
          </p>
          <a
            rel="noreferrer"
            target="_blank"
            className="cta-btn cta-btn--resume"
            href="mailto:luan.w.silveira+portfolio@gmail.com"
          >
            Entrar em contato
          </a>
        </div>
      </div>
    </section>
  );
}
