import { formatDateToMonthYear } from "@/lib/utils";
import { ExperienceDocument } from "@/type";
import React from "react";

const ExperienceComponent = ({
  experience,
}: {
  experience: ExperienceDocument;
}) => {
  return (
    <section className="mb-2">
      <div className="grid gap-8">
        <div>
          <h3 className="text-lg font-semibold text-black">
            {experience.company}
            <span className="text-xs text-gray-600 ml-2">
              ({experience.position})
            </span>
          </h3>

          <p className="text-sm text-gray-700">
            {experience.location} |{" "}
            {formatDateToMonthYear(experience.startDate)} -{" "}
            {formatDateToMonthYear(experience.endDate)}
          </p>
          <p className="text-sm text-black">{experience.description}</p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceComponent;
