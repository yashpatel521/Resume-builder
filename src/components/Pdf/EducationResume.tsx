import { formatDateToMonthYear } from "@/lib/utils";
import { EducationDocument } from "@/type";
import React from "react";

const EducationResume = ({
  educationData,
}: {
  educationData: EducationDocument;
}) => {
  return (
    <section className="mb-2">
      <div className="grid gap-6">
        <div>
          <h3 className="text-lg font-semibold text-black">
            {educationData.degree}
          </h3>
          <p className="text-sm text-gray-700">
            {educationData.institution},{" "}
            {formatDateToMonthYear(educationData.startDate)} -{" "}
            {formatDateToMonthYear(educationData.endDate)}
          </p>
          <p className="text-sm text-black">{educationData.description}</p>
        </div>
      </div>
    </section>
  );
};

export default EducationResume;
