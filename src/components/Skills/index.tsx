import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import {
  SiAmazonsqs,
  SiAmazonwebservices,
  SiCypress,
  SiDart,
  SiDocker,
  SiDotnet,
  SiElasticsearch,
  SiExpo,
  SiExpress,
  SiFastify,
  SiFirebase,
  SiFlask,
  SiFlutter,
  SiFlyway,
  SiGit,
  SiGithubactions,
  SiGitlab,
  SiGooglecloud,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiJunit5,
  SiKeras,
  SiKeycloak,
  SiKotlin,
  SiLangchain,
  SiLiquibase,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiOpencv,
  SiOpenjdk,
  SiPrisma,
  SiPython,
  SiPytorch,
  SiRadixui,
  SiReact,
  SiReactquery,
  SiScikitlearn,
  SiShadcnui,
  SiSpringboot,
  SiSpringsecurity,
  SiStorybook,
  SiSupabase,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";
import { TbApi, TbChartBar, TbTable, TbTestPipe } from "react-icons/tb";
import SectionTitle from "../SectionTitle";
import { SkillSection } from "./components/SkillSection";
import { Skill } from "./types/skill";

const languages: Skill[] = [
  { name: "Java", icon: SiOpenjdk, core: true },
  { name: "TypeScript", icon: SiTypescript, core: true },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Python", icon: SiPython },
  { name: "Kotlin", icon: SiKotlin },
  { name: "C#", icon: SiDotnet },
  { name: "Dart", icon: SiDart },
];

const backend: Skill[] = [
  { name: "Spring Boot", icon: SiSpringboot, core: true },
  { name: "Spring Security", icon: SiSpringsecurity },
  { name: "Node.js", icon: SiNodedotjs, core: true },
  { name: "Fastify", icon: SiFastify },
  { name: "Express.js", icon: SiExpress },
  { name: "Flask", icon: SiFlask },
  { name: "GraphQL", icon: SiGraphql },
  { name: "gRPC", icon: TbApi },
  { name: "Keycloak", icon: SiKeycloak },
];

const frontend: Skill[] = [
  { name: "React", icon: SiReact, core: true },
  { name: "Next.js", icon: SiNextdotjs, core: true },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "shadcn/ui", icon: SiShadcnui },
  { name: "Radix UI", icon: SiRadixui },
  { name: "TanStack Query", icon: SiReactquery },
  { name: "Storybook", icon: SiStorybook },
  { name: "AG Grid", icon: TbTable },
  { name: "AG Charts", icon: TbChartBar },
  { name: "React Native", icon: SiReact },
  { name: "Expo", icon: SiExpo },
  { name: "Flutter", icon: SiFlutter },
];

const data: Skill[] = [
  { name: "PostgreSQL", icon: BiLogoPostgresql, core: true },
  { name: "MongoDB", icon: SiMongodb, core: true },
  { name: "Redis", icon: DiRedis, core: true },
  { name: "Elasticsearch", icon: SiElasticsearch },
  { name: "Prisma", icon: SiPrisma },
  { name: "Flyway", icon: SiFlyway },
  { name: "Liquibase", icon: SiLiquibase },
  { name: "AWS SQS/SNS", icon: SiAmazonsqs },
  { name: "Firestore", icon: SiFirebase },
];

const cloud: Skill[] = [
  { name: "AWS", icon: SiAmazonwebservices, core: true },
  { name: "Docker", icon: SiDocker, core: true },
  { name: "GCP", icon: SiGooglecloud },
  { name: "Git", icon: SiGit },
  { name: "GitHub Actions", icon: SiGithubactions },
  { name: "GitLab CI/CD", icon: SiGitlab },
  { name: "Firebase", icon: SiFirebase },
  { name: "Supabase", icon: SiSupabase },
];

const testing: Skill[] = [
  { name: "JUnit 5", icon: SiJunit5 },
  { name: "Mockito", icon: TbTestPipe },
  { name: "Testcontainers", icon: SiDocker },
  { name: "Cypress", icon: SiCypress },
  { name: "Jest", icon: SiJest },
];

const ai: Skill[] = [
  { name: "PyTorch", icon: SiPytorch },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "Keras", icon: SiKeras },
  { name: "OpenCV", icon: SiOpencv },
  { name: "scikit-learn", icon: SiScikitlearn },
  { name: "LangChain", icon: SiLangchain },
  { name: "OpenAI API", icon: SiOpenai },
];

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Stack"
          title="Tecnologias"
          description="Ferramentas que uso no dia a dia. Em destaque, minha stack principal."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <SkillSection skills={languages} title="Linguagens" />
          <SkillSection skills={backend} title="Backend" />
          <SkillSection skills={frontend} title="Frontend e mobile" />
          <SkillSection skills={data} title="Dados e mensageria" />
          <SkillSection skills={cloud} title="Cloud e DevOps" />
          <SkillSection skills={testing} title="Testes e qualidade" />
          <SkillSection skills={ai} title="Inteligência artificial" />
        </div>
      </div>
    </section>
  );
}
