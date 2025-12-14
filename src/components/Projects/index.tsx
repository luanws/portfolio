"use client";

import Guestlink from "./components/Guestlink";
import TCC from "./components/TCC";
import NewsDelivery from "./components/NewsDelivery";
import SupermercadoOnline from "./components/SupermercadoOnline";
import Soundbot from "./components/Soundbot";
import LudumProBono from "./components/LudumProBono";
import AmplifierCircuits from "./components/AmplifierCircuits";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="project-wrapper">
          <h2 className="section-title dark-blue-text">Projetos</h2>
          <Guestlink />
          <TCC />
          <NewsDelivery />
          <SupermercadoOnline />
          <Soundbot />
          <LudumProBono />
          <AmplifierCircuits />
        </div>
      </div>
    </section>
  );
}
