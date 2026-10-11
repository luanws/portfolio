interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-lg text-zinc-400">{description}</p>}
    </div>
  );
}
