import { educationFormType } from "@/type";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon, Loader } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { format } from "date-fns";
import axios from "axios";
import { toast } from "../ui/use-toast";
import { Textarea } from "../ui/textarea";

const EducationForm = ({
  educationFormData,
  handleDeleteEducation,
  setUpdateNumber,
}: {
  educationFormData: educationFormType;
  handleDeleteEducation: (id: string) => void;
  setUpdateNumber: (prev: (prev: number) => number) => void;
}) => {
  const [loading, setLoading] = useState(false);
  const [institution, setInstitution] = useState(educationFormData.institution);
  const [degree, setDegree] = useState(educationFormData.degree);
  const [startDate, setStartDate] = useState<Date | undefined>(
    educationFormData.startDate
  );
  const [endDate, setEndDate] = useState<Date | undefined>(
    educationFormData.endDate
  );
  const [description, setDescription] = useState(educationFormData.description);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError("");
    setLoading(true);
    if (!institution || !degree || !startDate || !endDate) {
      setError("Please fill all the fields");
      setLoading(false);
      return;
    }

    const formData = {
      _id: educationFormData._id,
      userId: educationFormData.userId,
      institution,
      degree,
      startDate,
      endDate,
      description,
      formNumber: educationFormData.formNumber,
    };

    try {
      if (!educationFormData._id) {
        //create
        const response = await axios.post("/api/education", formData);
        const data = response.data;
        if (data.success) {
          setUpdateNumber((prev: number) => prev + 1);
          toast({
            title: "Education data saved successfully!",
            description: "Your updated education data has been saved.",
          });
        } else {
          toast({
            title: "Failed to save education data!",
            description: "An error occurred while saving your education data.",
            variant: "destructive",
          });
        }
      } else {
        //update
        const response = await axios.post(
          `/api/education/${educationFormData._id}`,
          formData
        );
        const data = response.data;
        if (data.success) {
          toast({
            title: "Education data updated successfully!",
            description: "Your updated education data has been saved.",
          });
        } else {
          toast({
            title: "Failed to save education data!",
            description: "An error occurred while saving your education data.",
            variant: "destructive",
          });
        }
      }
    } catch (err) {
      toast({
        title: "Failed to save education data!",
        description: "An error occurred while saving your education data.",
        variant: "destructive",
      });
    }
    setLoading(false);
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `/api/education/${educationFormData._id}`
      );
      const data = response.data;
      if (data.success) {
        handleDeleteEducation(educationFormData._id);
        toast({
          title: "Education data deleted successfully!",
          description: "Your education data has been deleted.",
        });
      } else {
        toast({
          title: "Failed to delete education data!",
          description: "An error occurred while deleting your education data.",
          variant: "destructive",
        });
      }
    } catch (err) {
      toast({
        title: "Failed to delete education data!",
        description: "An error occurred while deleting your education data.",
        variant: "destructive",
      });
    }
  };

  return (
    <div>
      <h1 className="text-center text-accent-foreground text-2xl">
        Education Form {educationFormData.formNumber}
      </h1>
      {error && <div className="text-red-500 text-sm text-center">{error}</div>}
      <hr className="w-1/2 m-auto my-2" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="mb-4">
          <Label
            htmlFor="institutionName"
            className="block font-medium text-md"
          >
            Institution Name:
          </Label>
          <Input
            type="text"
            id="institutionName"
            name="institutionName"
            className="mt-1 p-2 w-full border rounded-md shadow-sm h-8"
            placeholder="Enter Company Name"
            required
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="degree" className="block font-medium text-md">
            Degree:
          </Label>
          <Input
            type="text"
            id="degree"
            name="degree"
            className="mt-1 p-2 w-full border rounded-md shadow-sm h-8"
            placeholder="Enter Degree"
            required
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
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
        <div className="mb-4 col-span-2">
          <Label htmlFor="description" className="block font-medium text-md">
            Description:
          </Label>
          <Textarea
            id="description"
            name="description"
            className="mt-1 p-2 w-full border rounded-md shadow-sm h-32"
            placeholder="Enter Description"
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
          {educationFormData._id ? "Update" : "Save"}
          {loading && <Loader className="ml-2 animate-spin" />}
        </Button>
        {educationFormData._id && (
          <Button size="lg" variant="destructive" onClick={handleDelete}>
            Delete
          </Button>
        )}
      </div>
    </div>
  );
};

export default EducationForm;
