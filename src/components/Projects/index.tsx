import SectionTitle from "../SectionTitle";
import AmplifierCircuits from "./components/AmplifierCircuits";
import Guestlink from "./components/Guestlink";
import LudumProBono from "./components/LudumProBono";
import NewsDelivery from "./components/NewsDelivery";
import Soundbot from "./components/Soundbot";
import SupermercadoOnline from "./components/SupermercadoOnline";
import TCC from "./components/TCC";
import WhatsappBotManager from "./components/WhatsappBotManager";

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Portfólio"
          title="Projetos"
          description="Uma seleção de trabalhos pessoais, acadêmicos e profissionais."
        />
        <div className="grid gap-8 md:grid-cols-2">
          <WhatsappBotManager />
          <Guestlink />
          <TCC />
          <NewsDelivery />
          <SupermercadoOnline />
          <Soundbot />
          <LudumProBono />
          <AmplifierCircuits />
        </div>
      </div>
    </section>
  );
}
