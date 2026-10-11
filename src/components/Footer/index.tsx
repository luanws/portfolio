import { FiArrowUp, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} · Portfolio by luanws
        </p>
        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/luanws/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full p-2.5 text-zinc-500 transition hover:bg-white/5 hover:text-white"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href="https://github.com/luanws"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full p-2.5 text-zinc-500 transition hover:bg-white/5 hover:text-white"
          >
            <FiGithub size={18} />
          </a>
          <a
            href="#top"
            aria-label="Voltar ao topo"
            className="ml-2 rounded-full border border-white/10 p-2.5 text-zinc-400 transition hover:-translate-y-0.5 hover:border-white/30 hover:text-white"
          >
            <FiArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
