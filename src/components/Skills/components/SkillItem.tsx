import { Skill } from "../types/skill";

function SkillItem({ skill }: { skill: Skill }) {
  const IconComponent = skill.icon;
  return (
    <div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 transition hover:border-blue-500/40 hover:bg-blue-500/5">
      <IconComponent
        size={22}
        className="shrink-0 text-zinc-400 transition group-hover:text-blue-400"
      />
      <span className="text-sm font-medium text-zinc-200">{skill.name}</span>
    </div>
  );
}

export { SkillItem };
