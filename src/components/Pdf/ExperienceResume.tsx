import { ExperienceDocument } from "@/type";
import React from "react";

const ExperienceComponent = ({
  experience,
}: {
  experience: ExperienceDocument;
}) => {
  return (
    <div className="mb-8 border-b border-gray-300 my-4">
      <h2 className="text-2xl font-bold mb-1">
        {experience.company}
        <span className="text-xs text-muted-foreground ml-3">
          ({new Date(experience.startDate).toLocaleDateString()} -{" "}
          {experience.endDate
            ? new Date(experience.endDate).toLocaleDateString()
            : "Present"}
          )
        </span>
      </h2>
      <p className="text-sm font-semibold mb-1 ml-20 text-gray-500">
        - {experience.position} | {experience.location}
      </p>
      <div className="flex gap-20 ml-10">
        <div className="mb-3">
          <h3 className="text-lg font-semibold mb-1">Responsibilities:</h3>
          <ul className="list-disc pl-5 text-sm text-gray-800">
            {experience.responsibilities.map((responsibility, idx) => (
              <li key={idx} className="mb-1">
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
        {experience.projects.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-1">Projects:</h3>
            <ul className="list-disc pl-5 text-sm text-gray-800">
              {experience.projects.map((project, idx) => (
                <li key={idx} className="mb-1">
                  {project}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceComponent;
