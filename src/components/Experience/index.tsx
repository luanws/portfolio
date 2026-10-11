import SectionTitle from "../SectionTitle";

interface Job {
  role: string;
  company: string;
  note?: string;
  period: string;
  summary?: string;
  highlights: string[];
  stack: string[];
}

const jobs: Job[] = [
  {
    role: "Engenheiro de Software",
    company: "WEG",
    period: "Jan 2024 – Atual",
    summary:
      "Serviços backend em arquitetura de microsserviços e plataforma web interna.",
    highlights: [
      "Reduzi em 10x o tempo de resposta de uma aplicação crítica com uma camada de cache distribuído em Redis.",
      "Reduzi em 50% o consumo de memória de uma aplicação em produção após análise de causa raiz e refatoração dos trechos críticos.",
      "Contive em ~1 dia um ataque de supply chain que adulterava respostas da API em todos os frontends, rastreando a causa até uma dependência npm comprometida.",
      "Projetei uma arquitetura de mensageria assíncrona orientada a eventos (SQS/SNS, Webhooks, SSE) que desacopla os microsserviços.",
      "Reduzi a reprodução de bugs complexos de ~2h para ~5 min com uma ferramenta interna que grava, edita e reexecuta requisições à API.",
      "Atuo como referência técnica do time em bugs complexos, desenho de funcionalidades e code review.",
    ],
    stack: ["Java", "Spring Boot", "MongoDB", "PostgreSQL", "Redis", "AWS", "Next.js", "React", "TypeScript"],
  },
  {
    role: "Engenheiro de Software e Pesquisador",
    company: "CPFL",
    note: "pesquisa de mestrado",
    period: "Jan 2024 – Set 2026",
    summary:
      "Software de um projeto de P&D para detecção automatizada de falhas em linhas de transmissão com drones e IA.",
    highlights: [
      "Projetei e desenvolvi de ponta a ponta a plataforma de detecção de falhas, do treinamento dos modelos à integração com o backend.",
      "Construí a ferramenta de gerenciamento de datasets e processamento de imagens de inspeção usada no treinamento.",
    ],
    stack: ["Python", "Java", "Spring Boot", "MongoDB", "Next.js", "TypeScript"],
  },
  {
    role: "Engenheiro de Software Full Stack",
    company: "A Elétrica",
    note: "PJ",
    period: "Jul 2025 – Dez 2025",
    highlights: [
      "Projetei e desenvolvi uma plataforma de gerenciamento de chatbots para WhatsApp com Inteligência Artificial.",
    ],
    stack: ["TypeScript", "Node.js", "Fastify", "Prisma", "PostgreSQL", "Next.js", "n8n", "Docker"],
  },
  {
    role: "Engenheiro de Software Full Stack",
    company: "Logic-Press Brasil",
    note: "PJ",
    period: "Jan 2019 – Jan 2024",
    summary:
      "Projetos de ponta a ponta, do levantamento de requisitos e arquitetura ao deploy e manutenção.",
    highlights: [
      "Guia telefônico multiplataforma com backend único servindo clientes web, mobile e desktop.",
      "App de rastreamento em tempo real de entregadores de jornais, que avisa o cliente quando a entrega está próxima.",
      "Plataforma de cadastro e busca do mercado de mídia, com autenticação e busca com filtros.",
    ],
    stack: ["Python", "Flask", "TypeScript", "React", "React Native", "Next.js", "PostgreSQL", "Docker"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionTitle eyebrow="Carreira" title="Experiência" />

        <ol className="relative space-y-10 border-l border-white/10 pl-8 sm:pl-10">
          {jobs.map((job) => (
            <li key={`${job.company}-${job.period}`} className="relative">
              <span className="absolute -left-[calc(2rem+5px)] top-2 h-2.5 w-2.5 rounded-full bg-blue-500 ring-4 ring-blue-500/20 sm:-left-[calc(2.5rem+5px)]" />

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h3 className="font-display text-xl font-bold text-white">
                    {job.role} <span className="text-gradient">· {job.company}</span>
                  </h3>
                  <span className="shrink-0 text-sm text-zinc-500">{job.period}</span>
                </div>
                {job.note && (
                  <span className="mt-2 inline-block rounded-full bg-white/5 px-3 py-0.5 text-xs text-zinc-400">
                    {job.note}
                  </span>
                )}
                {job.summary && <p className="mt-4 text-zinc-300">{job.summary}</p>}

                <ul className="mt-4 space-y-2">
                  {job.highlights.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed text-zinc-400">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-blue-400" />
                      {item}
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
