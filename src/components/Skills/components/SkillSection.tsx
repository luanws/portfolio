import { Skill } from "../types/skill";
import { SkillItem } from "./SkillItem";

function SkillSection({ skills, title }: { skills: Skill[]; title: string }) {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export { SkillSection };
