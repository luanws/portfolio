"use client";

import ProjectCard from "../../ProjectCard";

export default function LudumProBono() {
  return (
    <ProjectCard
      title="Ludum pro bono"
      image="/assets/projects/ludum-pro-bono.gif"
      demoUrl="https://lumac-ufsm.github.io/ludum-pro-bono-frontend/games/index.html"
      sourceUrl="https://github.com/ludum-pro-bono/ludum-pro-bono-games"
    >
      Este projeto apresenta a construção de jogos com foco na
      aprendizagem de lógica e algoritmos. Cada jogo desenvolvido abrange
      diferentes áreas do conhecimento como o raciocínio lógico, cálculo e
      memória do jogador, fazendo com que o usuário aprenda através de um
      processo divertido.
    </ProjectCard>
  );
}