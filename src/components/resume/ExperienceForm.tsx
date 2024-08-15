"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { format } from "date-fns";
import {
  Calendar as CalendarIcon,
  CirclePlusIcon,
  Trash2Icon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const ExperienceForm = ({ formId }: { formId: number }) => {
  const [startDate, setStartDate] = React.useState<Date>();
  const [endDate, setEndDate] = React.useState<Date>();
  const [projects, setProjects] = React.useState<string[]>([""]);
  const [responsibilities, setResponsibilities] = React.useState<string[]>([
    "",
  ]);

  // Functions for managing projects
  const handleAddProject = () => {
    setProjects([...projects, ""]);
  };

  const handleProjectChange = (index: number, value: string) => {
    const updatedProjects = [...projects];
    updatedProjects[index] = value;
    setProjects(updatedProjects);
  };

  const handleDeleteProject = (index: number) => {
    if (projects.length > 1) {
      const updatedProjects = projects.filter((_, i) => i !== index);
      setProjects(updatedProjects);
    }
  };

  // Functions for managing responsibilities
  const handleAddResponsibility = () => {
    setResponsibilities([...responsibilities, ""]);
  };

  const handleResponsibilityChange = (index: number, value: string) => {
    const updatedResponsibilities = [...responsibilities];
    updatedResponsibilities[index] = value;
    setResponsibilities(updatedResponsibilities);
  };

  const handleDeleteResponsibility = (index: number) => {
    if (responsibilities.length > 1) {
      const updatedResponsibilities = responsibilities.filter(
        (_, i) => i !== index
      );
      setResponsibilities(updatedResponsibilities);
    }
  };

  return (
    <form className="border p-2 mb-5">
      <h1 className="text-center text-accent-foreground text-2xl">
        Form Experience {++formId}
      </h1>
      <hr className="w-1/2 m-auto my-2" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="mb-4">
          <Label
            htmlFor={`companyName-${++formId}`}
            className="block font-medium text-md"
          >
            Company Name:
          </Label>
          <Input
            type="text"
            id={`companyName-${++formId}`}
            name={`companyName-${++formId}`}
            className="mt-1 p-2 w-full border rounded-md shadow-sm h-8"
            placeholder="Enter Company Name"
            required
          />
        </div>
        <div className="mb-4">
          <Label
            htmlFor={`position-${++formId}`}
            className="block font-medium text-md"
          >
            Position:
          </Label>
          <Input
            type="text"
            id={`position-${++formId}`}
            name={`position-${++formId}`}
            className="mt-1 p-2 w-full border rounded-md shadow-sm h-8"
            placeholder="Enter Position"
            required
          />
        </div>

        <div className="mb-4">
          <Label
            htmlFor={`startDate-${++formId}`}
            className="block font-medium text-md"
          >
            Start Date:
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !startDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {startDate ? (
                  format(startDate, "PPP")
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <Calendar
                mode="single"
                selected={startDate}
                onSelect={setStartDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="mb-4">
          <Label
            htmlFor={`endDate-${++formId}`}
            className="block font-medium text-md"
          >
            End Date:
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !endDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <Calendar
                mode="single"
                selected={endDate}
                onSelect={setEndDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Projects Section */}
        <div className="mb-4">
          <Label htmlFor="projects" className="block font-medium text-md">
            Projects:
          </Label>
          {projects.map((project, index) => (
            <div key={index} className="flex gap-2 items-center mt-2">
              <Input
                type="text"
                id={`projects-${index}`}
                name={`projects-${index}`}
                className="p-2 border rounded-md shadow-sm h-8 w-4/5"
                placeholder="Enter project"
                value={project}
                onChange={(e) => handleProjectChange(index, e.target.value)}
              />
              <Button
                type="button"
                onClick={handleAddProject}
                variant="outline"
                className="h-8"
              >
                <CirclePlusIcon />
              </Button>
              {projects.length > 1 && (
                <Button
                  type="button"
                  onClick={() => handleDeleteProject(index)}
                  variant="destructive"
                  className="h-8"
                >
                  <Trash2Icon />
                </Button>
              )}
            </div>
          ))}
        </div>

        {/* Responsibilities Section */}
        <div className="mb-4">
          <Label
            htmlFor="responsibilities"
            className="block font-medium text-md"
          >
            Responsibilities:
          </Label>
          {responsibilities.map((responsibility, index) => (
            <div key={index} className="flex gap-2 items-center mt-2">
              <Input
                type="text"
                id={`responsibilities-${index}`}
                name={`responsibilities-${index}`}
                className="p-2 border rounded-md shadow-sm h-8 w-4/5"
                placeholder="Enter responsibility"
                value={responsibility}
                onChange={(e) =>
                  handleResponsibilityChange(index, e.target.value)
                }
              />
              <Button
                type="button"
                onClick={handleAddResponsibility}
                variant="outline"
                className="h-8"
              >
                <CirclePlusIcon />
              </Button>
              {responsibilities.length > 1 && (
                <Button
                  type="button"
                  onClick={() => handleDeleteResponsibility(index)}
                  variant="destructive"
                  className="h-8"
                >
                  <Trash2Icon />
                </Button>
              )}
            </div>
          ))}
        </div>
        <div className="mb-4">
          <Label htmlFor="location" className="block font-medium text-md">
            Location:
          </Label>
          <Input
            type="text"
            id="location"
            name="location"
            className="mt-1 p-2 w-full border rounded-md shadow-sm h-8"
            placeholder="Enter location"
            required
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button type="submit" size="lg">
          Save
        </Button>
      </div>
    </form>
  );
};

export default ExperienceForm;
