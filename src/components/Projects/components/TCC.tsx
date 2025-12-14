"use client";

import ProjectCard from "../../ProjectCard";

export default function TCC() {
  return (
    <ProjectCard
      title="TCC"
      image="/assets/projects/tcc.png"
      demoUrl="https://www.youtube.com/watch?v=fukCSafNtTA"
      sourceUrl="https://github.com/luanws/TCC"
    >
      Este é o meu trabalho de conclusão de curso de Engenharia Elétrica
      desenvolvido na Universidade Federal de Santa Maria. O projeto
      consiste em uma esteira transportadora automatizada capaz de
      classificar objetos por tipo e descartar objetos com defeito através
      de Inteligência Artificial.
    </ProjectCard>
  );
}