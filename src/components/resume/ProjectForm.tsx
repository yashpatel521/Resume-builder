import { projectFormType } from "@/type";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon, Loader, PlusCircle, XCircle } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { format } from "date-fns";
import axios from "axios";
import { toast } from "../ui/use-toast";

const ProjectForm = ({
  projectFormData,
  handleDeleteProjectForm,
  setUpdateNumber,
}: {
  projectFormData: projectFormType;
  handleDeleteProjectForm: (formId: string) => void;
  setUpdateNumber: (prev: (prev: number) => number) => void;
}) => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState(projectFormData.title);
  const [description, setDescription] = useState(projectFormData.description);
  const [startDate, setStartDate] = useState<Date | undefined>(
    projectFormData.startDate
  );
  const [endDate, setEndDate] = useState<Date | undefined>(
    projectFormData.endDate
  );
  const [url, setUrl] = useState(projectFormData.url);
  const [screenshot, setScreenshot] = useState(projectFormData.screenshot);
  const [technologies, setTechnologies] = useState<string[]>(
    projectFormData.technologies
  );
  const [newTechnology, setNewTechnology] = useState("");

  const handleAddTechnology = () => {
    if (newTechnology.trim()) {
      setTechnologies([...technologies, newTechnology.trim()]);
      setNewTechnology("");
    }
  };

  const handleDeleteTechnology = (index: number) => {
    const updatedTechnologies = technologies.filter((_, i) => i !== index);
    setTechnologies(updatedTechnologies);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const formData = {
      _id: projectFormData._id,
      title,
      description,
      startDate,
      endDate,
      url,
      screenshot,
      technologies,
      userId: projectFormData.userId,
      formNumber: projectFormData.formNumber,
    };
    // Send the formData to your backend API endpoint
    if (formData._id) {
      // update
      const response = await axios.post(
        `/api/project/${formData._id}`,
        formData
      );
      const data = response.data;
      if (data.success) {
        toast({
          title: "Project Updated",
          description: "Your project has been successfully updated!",
        });
      } else {
        toast({
          title: "Error Updating Project",
          description: data.message,
          variant: "destructive",
        });
      }
    } else {
      // create
      const response = await axios.post("/api/project", formData);
      const data = response.data;
      if (data.success) {
        setUpdateNumber((prev) => prev + 1);
        toast({
          title: "Project Created",
          description: "Your project has been successfully created!",
        });
      } else {
        toast({
          title: "Error Creating Project",
          description: data.message,
          variant: "destructive",
        });
      }
    }
    setLoading(false);
  };
  const handleDelete = async () => {
    const response = await axios.delete(`/api/project/${projectFormData._id}`);
    const data = response.data;
    if (data.success) {
      handleDeleteProjectForm(projectFormData._id);
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
    <div>
      <h1 className="text-center text-accent-foreground text-2xl">
        Project Form {projectFormData.formNumber}
      </h1>
      <hr className="w-1/2 m-auto my-2" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        <div className="mb-4">
          <Label htmlFor="title" className="block font-medium text-md">
            Title:
          </Label>
          <Input
            type="text"
            id="title"
            name="title"
            className=" w-full border rounded-md shadow-sm "
            placeholder="Enter Project Title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
        <div className="mb-4">
          <Label htmlFor="url" className="block font-medium text-md">
            URL:
          </Label>
          <Input
            type="url"
            id="url"
            name="url"
            className=" w-full border rounded-md shadow-sm"
            placeholder="Enter Project URL"
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="screenshot" className="block font-medium text-md">
            Screenshot URL:
          </Label>
          <Input
            type="text"
            id="screenshot"
            name="screenshot"
            className=" w-full border rounded-md shadow-sm"
            placeholder="Enter Screenshot URL"
            value={screenshot}
            onChange={(e) => setScreenshot(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="technologies" className="block font-medium text-md">
            Technologies:
          </Label>
          <div className="space-y-2">
            <div className="flex items-center">
              <Input
                type="text"
                id="newTechnology"
                name="newTechnology"
                className=" w-full border rounded-md shadow-sm"
                placeholder="Add a Technology"
                value={newTechnology}
                onChange={(e) => setNewTechnology(e.target.value)}
              />
              <Button
                type="button"
                className="ml-2"
                onClick={handleAddTechnology}
              >
                <PlusCircle className="mr-2 h-5 w-5" />
                Add
              </Button>
            </div>
            <div className="flex gap-2">
              {technologies.map((technology, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 rounded-md border w-fit gap-2"
                >
                  <span>{technology}</span>
                  <XCircle
                    className="text-red-500 cursor-pointer"
                    onClick={() => handleDeleteTechnology(index)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mb-4 col-span-2">
          <Label htmlFor="description" className="block font-medium text-md">
            Description:
          </Label>
          <Textarea
            id="description"
            name="description"
            className=" w-full border rounded-md shadow-sm h-24"
            placeholder="Enter Project Description"
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
          {projectFormData._id ? "Update" : "Save"}
          {loading && <Loader className="ml-2 animate-spin" />}
        </Button>
        {projectFormData._id && (
          <Button size="lg" variant="destructive" onClick={handleDelete}>
            Delete
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProjectForm;
