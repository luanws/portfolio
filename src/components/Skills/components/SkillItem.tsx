import { Skill } from "../types/skill";

function SkillItem({ skill }: { skill: Skill }) {
  const IconComponent = skill.icon;
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl border border-gray-200 w-48 h-48">
      <IconComponent size={40} className="mb-1 text-blue-900" />
      <span className="text-xl text-center text-gray-800">
        {skill.name}
      </span>
    </div>
  );
}

export { SkillItem };
