"use client";

import ProjectCard from "../../ProjectCard";

export default function NewsDelivery() {
  return (
    <ProjectCard
      title="News delivery"
      image="/assets/projects/news-delivery.png"
    >
      O News Delivery é um aplicativo móvel para gerenciamento de entregas
      de jornais, que permite automatizar o controle das entregas,
      notificar clientes e definir rotas para os entregadores. O
      entregador pode acessar sua rota por meio de um mapa, permitindo que
      o sistema notifique o cliente automaticamente quando o entregador se
      aproxima a 100 metros do endereço de entrega. As informações
      referentes às entregas são salvas em um banco de dados para gerar
      relatórios com dados importantes. O aplicativo é disponibilizado
      apenas para administradores e funcionários do jornal.
    </ProjectCard>
  );
}