"use client";

import ProjectCard from "../../ProjectCard";

export default function Guestlink() {
  return (
    <ProjectCard
      title="Guestlink"
      image="/assets/projects/guestlink.png"
      demoUrl="https://guestlink.vercel.app/"
      sourceUrl="https://github.com/luanws/guestlink"
    >
      O aplicativo Guestlink oferece uma solução completa para a gestão de
      convites de eventos. Com ele, é possível criar convites
      personalizados, compartilhar um link exclusivo com os convidados e
      controlar a lista de convidados de forma eficiente. Organizar
      eventos torna-se uma tarefa mais fácil ao utilizar o Guestlink.
    </ProjectCard>
  );
}