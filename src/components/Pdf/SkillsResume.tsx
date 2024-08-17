import { SkillsDocument } from "@/type";
import React from "react";

const SkillsResume = ({ skillsData }: { skillsData: SkillsDocument }) => {
  return (
    <div className="grid gap-8 p-6 border rounded-lg bg-white text-black mt-6">
      <div className="grid gap-4">
        <h3 className="text-lg font-semibold">Technical Skills</h3>
        <div className="grid gap-3 text-sm">
          {skillsData.skills &&
            skillsData.skills.map((skill, index) => (
              <div key={index} className="flex gap-5 items-center">
                <span className="min-w-32">{skill.name}</span>
                <div className="w-1/2 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-black h-2 rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
                <span>{skill.proficiency}%</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsResume;
