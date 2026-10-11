import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import {
  SiAmazonwebservices,
  SiCss3,
  SiDart,
  SiDocker,
  SiDotnet,
  SiExpo,
  SiExpress,
  SiFastify,
  SiFirebase,
  SiFlask,
  SiFlutter,
  SiGit,
  SiGooglecloud,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiOpenjdk,
  SiPython,
  SiReact,
  SiSpringboot,
  SiSqlite,
  SiSupabase,
  SiTypescript,
  SiUnity,
} from "react-icons/si";
import SectionTitle from "../SectionTitle";
import { SkillSection } from "./components/SkillSection";
import { Skill } from "./types/skill";

const languages: Skill[] = [
  { name: "Java", icon: SiOpenjdk },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Python", icon: SiPython },
  { name: "C#", icon: SiDotnet },
  { name: "Dart", icon: SiDart },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
];

const databases: Skill[] = [
  { name: "PostgreSQL", icon: BiLogoPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "SQLite", icon: SiSqlite },
  { name: "Redis", icon: DiRedis },
  { name: "Firebase Realtime Database", icon: SiFirebase },
  { name: "Firestore", icon: SiFirebase },
];

const frameworks: Skill[] = [
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "React Native", icon: SiReact },
  { name: "Flask", icon: SiFlask },
  { name: "Express.js", icon: SiExpress },
  { name: "Fastify", icon: SiFastify },
  { name: "Unity", icon: SiUnity },
  { name: "Flutter", icon: SiFlutter },
];

const otherTech: Skill[] = [
  { name: "Git", icon: SiGit },
  { name: "Docker", icon: SiDocker },
  { name: "Expo", icon: SiExpo },
  { name: "Firebase", icon: SiFirebase },
  { name: "Supabase", icon: SiSupabase },
  { name: "AWS", icon: SiAmazonwebservices },
  { name: "GCP", icon: SiGooglecloud },
];

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Stack"
          title="Tecnologias"
          description="Ferramentas que uso no dia a dia para tirar ideias do papel."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <SkillSection skills={languages} title="Linguagens" />
          <SkillSection skills={frameworks} title="Frameworks" />
          <SkillSection skills={databases} title="Bancos de dados" />
          <SkillSection skills={otherTech} title="Outras tecnologias" />
        </div>
      </div>
    </section>
  );
}
