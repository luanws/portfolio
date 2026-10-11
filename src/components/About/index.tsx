import Image from "next/image";
import { FiFileText } from "react-icons/fi";
import SectionTitle from "../SectionTitle";

const stats = [
  { value: "~8 anos", label: "de experiência em produção" },
  { value: "Full stack", label: "backend, web e mobile" },
  { value: "UFSM", label: "Eng. Elétrica e mestrado" },
];

export default function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Sobre mim" title="Quem sou eu" />

        <div className="grid items-center gap-12 md:grid-cols-[2fr_3fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-blue-600/40 to-indigo-600/10 blur-2xl" />
            <Image
              alt="Foto de Luan Silveira"
              src="/assets/profile.jpg"
              width={400}
              height={400}
              className="relative aspect-square w-full rounded-3xl border border-white/10 object-cover"
            />
          </div>

          <div>
            <p className="text-lg leading-relaxed text-zinc-300">
              Sou engenheiro de software full stack, com cerca de 8 anos projetando, construindo e
              operando sistemas em produção. Atuo principalmente em backend distribuído (Java, Spring
              Boot, microsserviços, mensageria, cache) e frontend web (TypeScript, React, Next.js),
              com experiência complementar em mobile e IA aplicada.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-zinc-400">
              Investigo gargalos até a causa raiz, tomo decisões de arquitetura orientadas a
              métricas e crio ferramentas internas que reduzem o custo de desenvolvimento. Sou
              referência técnica do time na resolução de problemas complexos. Engenheiro
              Eletricista pela UFSM, hoje no mestrado com pesquisa aplicada em visão computacional.
            </p>

            <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <dt className="font-display text-xl font-bold text-white">{stat.value}</dt>
                  <dd className="mt-1 text-sm text-zinc-400">{stat.label}</dd>
                </div>
              ))}
            </dl>

            <a
              href="/cv"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-zinc-950 transition hover:-translate-y-0.5 hover:bg-blue-100"
            >
              <FiFileText /> Ver currículo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
