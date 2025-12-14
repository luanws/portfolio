"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title load-hidden pt-24">Sobre mim</h2>
        <div className="row about-wrapper">
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__image load-hidden">
              <Image
                alt="Profile Image"
                className="img-fluid rounded shadow-lg"
                height={300}
                width={300}
                src="/assets/profile.jpg"
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__info load-hidden">
              <p className="about-wrapper__info-text">
                Sou programador full stack desde 2019, formado em Engenharia
                Elétrica pela Universidade Federal de Santa Maria, com ampla
                experiência no desenvolvimento de software para Backend,
                Frontend WEB e Mobile. Adquiri experiência em todas as etapas do
                ciclo de desenvolvimento de software, desde o planejamento,
                análise, codificação, testes e deploy. Atuei como desenvolvedor
                de software em empresas, além de freelancers, iniciativas
                pessoais e atividades de pesquisa e extensão universitária.
              </p>
              <span className="d-flex mt-3">
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="cta-btn cta-btn--resume"
                  href="/cv"
                >
                  Currículo
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
