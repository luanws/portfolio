import Image from "next/image";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

interface ProjectCardProps {
  title: string;
  image: string;
  demoUrl?: string;
  sourceUrl?: string;
  children: React.ReactNode;
}

export default function ProjectCard({
  title,
  image,
  demoUrl,
  sourceUrl,
  children,
}: ProjectCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-600/10">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-zinc-900">
        <Image
          alt={title}
          src={image}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          unoptimized={/\.(gif|svg)$/.test(image)}
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <h3 className="font-display text-2xl font-bold text-white">{title}</h3>
        <p className="mt-3 flex-1 leading-relaxed text-zinc-400">{children}</p>

        {(demoUrl || sourceUrl) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Acessar <FiArrowUpRight />
              </a>
            )}
            {sourceUrl && (
              <a
                href={sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
              >
                <FiGithub /> Código fonte
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
