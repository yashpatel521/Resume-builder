"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { format } from "date-fns";
import {
  Calendar as CalendarIcon,
  CirclePlusIcon,
  Loader,
  Trash2Icon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import axios from "axios";
import { toast } from "../ui/use-toast";
import { experienceFormType } from "@/type";
import { Textarea } from "../ui/textarea";

const ExperienceForm = ({
  experienceFormData,
  handleDeleteExperience,
  setUpdateNumber,
}: {
  experienceFormData: experienceFormType;
  handleDeleteExperience: (id: string) => void;
  setUpdateNumber: (prev: (prev: number) => number) => void;
}) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [companyName, setCompanyName] = useState(experienceFormData.company);
  const [position, setPosition] = useState(experienceFormData.position);
  const [startDate, setStartDate] = useState<Date | undefined>(
    experienceFormData.startDate
  );
  const [endDate, setEndDate] = useState<Date | undefined>(
    experienceFormData.endDate
  );
  const [projects, setProjects] = useState<string[]>(
    experienceFormData.projects
  );
  const [responsibilities, setResponsibilities] = useState<string[]>(
    experienceFormData.responsibilities
  );
  const [location, setLocation] = useState(experienceFormData.location);
  const [description, setDescription] = useState(
    experienceFormData.description
  );
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

  const handleSubmit = async () => {
    setLoading(true);
    setError("");

    if (
      !companyName ||
      !position ||
      !startDate ||
      !endDate ||
      !location ||
      projects.some((project) => !project) ||
      responsibilities.some((responsibility) => !responsibility)
    ) {
      setError("Please make sure all fields are filled out correctly!");

      setLoading(false);
      return;
    }

    const formData = {
      _id: experienceFormData._id,
      userId: experienceFormData.userId,
      formNumber: experienceFormData.formNumber,
      company: companyName,
      position,
      startDate,
      endDate,
      location,
      description,
      responsibilities,
      projects,
    };
    // Send the formData to your backend API endpoint
    if (formData._id) {
      // update
      const response = await axios.post(
        `/api/experience/${formData._id}`,
        formData
      );
      const data = response.data;
      if (data.success) {
        toast({
          title: "Experience Updated",
          description: "Your experience has been successfully updated!",
        });
      } else {
        toast({
          title: "Error Updating Experience",
          description: data.message,
          variant: "destructive",
        });
      }
    } else {
      // create
      const response = await axios.post("/api/experience", formData);
      const data = response.data;
      if (data.success) {
        setUpdateNumber((prev: number) => prev + 1);
        toast({
          title: "Experience Saved",
          description: "Your experience has been successfully saved!",
        });
      } else {
        toast({
          title: "Error Saving Experience",
          description: data.message,
          variant: "destructive",
        });
      }
    }
    setLoading(false);
  };

  const handleDelete = async () => {
    const response = await axios.delete(
      `/api/experience/${experienceFormData._id}`
    );
    const data = response.data;
    if (data.success) {
      handleDeleteExperience(experienceFormData._id);
      toast({
        title: "Experience Deleted",
        description: "Your experience has been successfully deleted!",
      });
    } else {
      toast({
        title: "Error Deleting Experience",
        description: data.message,
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <h1 className="text-center text-accent-foreground text-2xl">
        Form Experience {experienceFormData.formNumber}
      </h1>
      <hr className="w-1/2 m-auto my-2" />
      {error && <div className="text-red-500 text-sm text-center">{error}</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="mb-4">
          <Label htmlFor="companyName" className="block font-medium text-md">
            Company Name:
          </Label>
          <Input
            type="text"
            id="companyName"
            name="companyName"
            className="w-full border rounded-md shadow-sm "
            placeholder="Enter Company Name"
            required
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="position" className="block font-medium text-md">
            Position:
          </Label>
          <Input
            type="text"
            id="position"
            name="position"
            className="mt-1 p-2 w-full border rounded-md shadow-sm h-8"
            placeholder="Enter Position"
            required
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="startDate" className="block font-medium text-md">
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
          <Label htmlFor="endDate" className="block font-medium text-md">
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
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="mb-4 col-span-2">
          <Label htmlFor="description" className="block font-medium text-md">
            Description:
          </Label>
          <Textarea
            id="description"
            name="description"
            className="mt-1 p-2 w-full border rounded-md shadow-sm h-32"
            placeholder="Enter description"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button
          type="submit"
          size="lg"
          onClick={handleSubmit}
          disabled={loading}
        >
          {experienceFormData._id ? "Update" : "Save"}
          {loading && <Loader className="ml-2 animate-spin" />}
        </Button>
        {experienceFormData._id && (
          <Button size="lg" variant="destructive" onClick={handleDelete}>
            Delete
          </Button>
        )}
      </div>
    </>
  );
};

export default ExperienceForm;
