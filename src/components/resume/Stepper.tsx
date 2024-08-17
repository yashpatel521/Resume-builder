"use client";

import {
  Box,
  BriefcaseBusiness,
  ClipboardPenLine,
  Gitlab,
  User,
} from "lucide-react";

import { Step, type StepItem, Stepper } from "@/components/ui/stepper";
import StepperFooter from "./StepperFooter";
import BasicUserDetailForm from "./BasicUserDetailForm";
import ExperienceLayout from "./ExperienceLayout";
import EducationLayout from "./EducationLayout";
import ProjectLayout from "./ProjectLayout";
import SkillsLayout from "./SkillsLayout";

const steps = [
  { label: "User Details", icon: User },
  { label: "Experience", icon: BriefcaseBusiness },
  { label: "Education", icon: ClipboardPenLine },
  { label: "Projects", icon: Gitlab },
  { label: "Skills", icon: Box },
] satisfies StepItem[];

export default function StepperExamples() {
  return (
    <div className="flex w-full flex-col gap-4">
      <Stepper initialStep={0} steps={steps}>
        {steps.map((stepProps, index) => {
          return (
            <Step key={stepProps.label} {...stepProps}>
              <div className="p-6 border rounded-md ">
                {index === 0 && <BasicUserDetailForm />}
                {index === 1 && <ExperienceLayout />}
                {index === 2 && <EducationLayout />}
                {index === 3 && <ProjectLayout />}
                {index === 4 && <SkillsLayout />}
              </div>
            </Step>
          );
        })}
        <StepperFooter />
      </Stepper>
    </div>
  );
}
