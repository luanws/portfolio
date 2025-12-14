"use client";

export default function Hero() {
  return (
    <section id="hero" className="jumbotron">
      <div className="container">
        <h1 className="hero-title">
          Olá, meu nome é <span className="text-color-main">Luan Silveira</span>
          <br />
          Sou um desenvolvedor full stack.
        </h1>
        <p className="hero-cta">
          <a rel="noreferrer" className="cta-btn cta-btn--hero" href="#about">
            Saber mais
          </a>
        </p>
      </div>
    </section>
  );
}
