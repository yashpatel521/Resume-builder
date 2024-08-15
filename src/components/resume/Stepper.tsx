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
                {index === 1 && <BasicUserDetailForm />}
                {index === 0 && <ExperienceLayout />}
              </div>
            </Step>
          );
        })}
        <StepperFooter />
      </Stepper>
    </div>
  );
}
