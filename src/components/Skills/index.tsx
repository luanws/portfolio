"use client";

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
    <section id="skills" className="pt-16 pb-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">Tecnologias</h2>
        <SkillSection skills={languages} title="Linguagens" />
        <SkillSection skills={databases} title="Bancos de dados" />
        <SkillSection skills={frameworks} title="Frameworks" />
        <SkillSection skills={otherTech} title="Outras tecnologias" />
      </div>
    </section>
  );
}
