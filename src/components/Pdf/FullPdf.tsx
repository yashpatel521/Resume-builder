"use client";
// pages/feature.tsx
import React, { useEffect, useRef, useState } from "react";
import HeaderResume from "@/components/Pdf/HeaderResume";
import { useSession } from "next-auth/react";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import ExperienceComponent from "@/components/Pdf/ExperienceResume";
import EducationResume from "@/components/Pdf/EducationResume";
import ProjectResume from "@/components/Pdf/ProjectResume";
import SkillsResume from "@/components/Pdf/SkillsResume";
import { EducationDocument, ExperienceDocument, ProjectDocument } from "@/type";

const FullPdf = ({ userAllData }: { userAllData: any }) => {
  return (
    userAllData && (
      <main>
        {userAllData.user && <HeaderResume userData={userAllData.user} />}
        <h2 className="text-2xl font-bold mt-4 ">Work Experience</h2>
        <div className="border p-6 rounded-lg mt-4">
          {userAllData.experiences &&
            userAllData.experiences.map(
              (experience: ExperienceDocument, idx: number) => (
                <ExperienceComponent experience={experience} />
              )
            )}
        </div>
        <h2 className="text-2xl font-bold mt-4">Education</h2>
        <div className="border p-6 rounded-lg mt-4">
          {userAllData.educations &&
            userAllData.educations.map(
              (education: EducationDocument, idx: number) => (
                <EducationResume educationData={education} />
              )
            )}
        </div>
        <h2 className="text-2xl font-bold mt-4">Projects</h2>
        <div className="border p-6 rounded-lg mt-4">
          {userAllData.projects &&
            userAllData.projects.map(
              (project: ProjectDocument, idx: number) => (
                <ProjectResume projectData={project} />
              )
            )}
        </div>
        <h2 className="text-2xl font-bold mt-4">Skills</h2>
        {userAllData.skills && <SkillsResume skillsData={userAllData.skills} />}
      </main>
    )
  );
};

export default FullPdf;
