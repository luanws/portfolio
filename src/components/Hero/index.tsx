import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const socials = [
  { href: "https://github.com/luanws", label: "GitHub", icon: FiGithub },
  { href: "https://www.linkedin.com/in/luanws/", label: "LinkedIn", icon: FiLinkedin },
  { href: "mailto:luan.w.silveira+portfolio@gmail.com", label: "E-mail", icon: FiMail },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-16 sm:px-6"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-300">
          <span className="h-2 w-2 rounded-full bg-blue-400" />
          Engenheiro de Software na WEG
        </div>

        <h1 className="mt-8 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Olá, meu nome&nbsp;é
          <br />
          <span className="text-gradient">Luan Silveira</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
          Sou engenheiro de software full stack. Construo sistemas distribuídos e aplicações web
          com foco em performance, resiliência e produtividade do time.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#experience"
            className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:shadow-blue-600/40"
          >
            Ver experiência
          </a>
          <a
            href="#about"
            className="rounded-full border border-white/15 px-7 py-3.5 font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
          >
            Saber mais
          </a>
          <div className="flex items-center gap-2 sm:ml-4">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="rounded-full p-3 text-zinc-400 transition hover:bg-white/5 hover:text-white"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Rolar para baixo"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-zinc-500 hover:text-white"
      >
        <FiArrowDown size={24} />
      </a>
    </section>
  );
}
