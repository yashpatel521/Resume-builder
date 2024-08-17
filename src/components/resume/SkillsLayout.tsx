import { Skill } from "@/type";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import axios from "axios";
import { toast } from "../ui/use-toast";
import { Loader } from "lucide-react";

const SkillsLayout = () => {
  const { data: session } = useSession();
  const [forms, setForms] = useState<Skill[]>([
    { name: "Temp", proficiency: "Low" },
  ]);
  const [formId, setFormId] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true); // Add a state for initial data fetching

  useEffect(() => {
    const fetchData = async () => {
      setFetching(true);
      try {
        const response = await axios.get(
          `/api/skills/user/${session?.user._id}`
        );
        const data = response.data;
        if (data.success) {
          setFormId(data.data._id);
          setForms(data.data.skills); // Set the fetched data to state
        } else {
          toast({
            title: "Experience fetch failed",
            description: data.message || "Failed to fetch experiences",
            variant: "destructive",
          });
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "An error occurred while fetching experiences.",
          variant: "destructive",
        });
        console.error("Failed to fetch experiences:", error);
      } finally {
        setFetching(false); // Turn off the fetching loader
      }
    };

    if (session?.user._id) {
      fetchData();
    }
  }, [session?.user._id]);

  const handleAddSkills = () => {
    const newForm = {
      name: "NextJs",
      proficiency: "Pro",
    };
    setForms([...forms, newForm]);
  };

  const handleDeleteSkill = (index: number) => {
    if (forms.length > 1) {
      const updatedForms = forms.filter((_, i) => i !== index);
      setForms(updatedForms);
    }
  };

  const handleSubmit = async () => {
    setError("");
    setLoading(true);
    const formData = {
      userId: session?.user._id,
      skills: forms,
      _id: formId,
    };

    try {
      if (!formId) {
        //create
        const response = await axios.post("/api/skills", formData);
        const data = response.data;
        if (data.success) {
          toast({
            title: "Skills saved successfully!",
            description: "Your skills have been saved.",
          });
        } else {
          toast({
            title: "Failed to save skills!",
            description: "An error occurred while saving your skills.",
            variant: "destructive",
          });
        }
      } else {
        //update
        const response = await axios.post(`/api/skills/${formId}`, formData);
        const data = response.data;
        if (data.success) {
          toast({
            title: "Skills updated successfully!",
            description: "Your skills have been updated.",
          });
        } else {
          toast({
            title: "Failed to update skills!",
            description: "An error occurred while updating your skills.",
            variant: "destructive",
          });
        }
      }
    } catch (err) {
      toast({
        title: "Error",
        description: "An error occurred while saving your skills.",
        variant: "destructive",
      });
    } finally {
      setLoading(false); // Turn off the saving/updating loader
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold mb-4">Skills</h1>
        <div className="flex justify-end gap-2">
          {formId ? (
            <Button className="mb-2" onClick={handleSubmit} disabled={loading}>
              {loading ? "Updating..." : "Update"}
              {loading && <Loader size="sm" className="ml-2" />}
            </Button>
          ) : (
            <Button className="mb-2" onClick={handleSubmit} disabled={loading}>
              {loading ? "Saving..." : "Save"}
              {loading && <Loader size="sm" className="ml-2" />}{" "}
            </Button>
          )}
          <Button
            variant="secondary"
            className="mb-2"
            onClick={handleAddSkills}
            disabled={loading}
          >
            Add Skill
          </Button>
        </div>
      </div>
      {fetching ? ( // Show loader while fetching data
        <div className="flex justify-center items-center h-40">
          <Loader className="w-24 h-24 animate-spin" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          {forms.map((form, index) => (
            <React.Fragment key={index}>
              <div className="mb-4">
                <Label className="block font-medium text-md">
                  Name {index + 1}:
                </Label>
                <Input
                  className="w-full border rounded-md shadow-sm"
                  type="text"
                  placeholder="Skill Name"
                  value={form.name}
                  onChange={(e) => {
                    setForms(
                      forms.map((skill, i) =>
                        i === index ? { ...skill, name: e.target.value } : skill
                      )
                    );
                  }}
                />
              </div>
              <div className="mb-4">
                <Label className="block font-medium text-md">
                  Proficiency {index + 1}:
                </Label>
                <Input
                  className="w-full border rounded-md shadow-sm"
                  type="text"
                  placeholder="Proficiency"
                  value={form.proficiency}
                  onChange={(e) => {
                    setForms(
                      forms.map((skill, i) =>
                        i === index
                          ? { ...skill, proficiency: e.target.value }
                          : skill
                      )
                    );
                  }}
                />
              </div>
              {forms.length > 1 && (
                <Button
                  variant="destructive"
                  className="mt-2"
                  onClick={() => handleDeleteSkill(index)}
                  disabled={loading} // Disable delete button during saving/updating
                >
                  Delete
                </Button>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillsLayout;
