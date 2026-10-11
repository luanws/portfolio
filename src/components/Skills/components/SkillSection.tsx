import { Skill } from "../types/skill";
import { SkillItem } from "./SkillItem";

function SkillSection({ skills, title }: { skills: Skill[]; title: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-6 sm:p-8">
      <h3 className="mb-5 font-display text-lg font-semibold text-white">{title}</h3>
      <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2">
        {skills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export { SkillSection };
