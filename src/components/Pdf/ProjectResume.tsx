import { formatDateToMonthYear } from "@/lib/utils";
import { ProjectDocument } from "@/type";
import Link from "next/link";
import React from "react";

const ProjectResume = ({ projectData }: { projectData: ProjectDocument }) => {
  return (
    <div className="bg-white rounded-lg my-2">
      <h3 className="text-lg font-semibold text-black">
        <Link
          href={projectData.url}
          className="hover:underline"
          prefetch={false}
          target="_blank"
        >
          {projectData.title}
        </Link>
      </h3>
      <p className="text-sm text-gray-700">
        {formatDateToMonthYear(projectData.startDate)} -{" "}
        {formatDateToMonthYear(projectData.endDate)}
      </p>
      <p className="text-sm text-black">{projectData.description}</p>
      <div className="flex gap-2 mt-2">
        {projectData.technologies &&
          projectData.technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 rounded-sm text-sm border bg-slate-200 text-black"
            >
              {tech}
            </span>
          ))}
      </div>
    </div>
  );
};

export default ProjectResume;
