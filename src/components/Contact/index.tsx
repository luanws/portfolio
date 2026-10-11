import { FiMail } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 px-6 py-16 text-center sm:px-12 sm:py-20">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
            Contato
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Vamos conversar?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100/90">
            Interessado em meus serviços ou querendo saber mais sobre meu trabalho? Não hesite em
            entrar em contato por e-mail!
          </p>
          <a
            href="mailto:luan.w.silveira+portfolio@gmail.com"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-zinc-950 shadow-xl transition hover:-translate-y-0.5 hover:bg-blue-50"
          >
            <FiMail /> Entrar em contato
          </a>
        </div>
      </div>
    </section>
  );
}
