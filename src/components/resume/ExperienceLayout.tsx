"use client";

import React, { useEffect, useState } from "react";
import ExperienceForm from "./ExperienceForm";
import { Button } from "../ui/button";
import { experienceFormType } from "@/type";
import { useSession } from "next-auth/react";
import axios from "axios";
import { toast } from "../ui/use-toast";

const ExperienceLayout = () => {
  const { data: session } = useSession();
  const [forms, setForms] = useState<experienceFormType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/api/experience/user/${session?.user._id}`
        );
        const data = response.data;
        if (data.success) {
          setForms(data.data); // Set the fetched data to state
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
      }
    };

    if (session?.user._id) {
      fetchData();
    }
  }, [session?.user._id]);

  const handleAddExperience = () => {
    const newForm: experienceFormType = {
      _id: "",
      userId: session?.user._id,
      formNumber: forms[forms.length - 1].formNumber + 1,
      company: "Temp Company",
      startDate: new Date(),
      endDate: new Date(),
      position: "Temp Position",
      location: "Temp Location",
      responsibilities: [
        "Temp Responsibility 1",
        "Temp Responsibility 2",
        "Temp Responsibility 3",
      ],
      projects: ["Temp Project 1", "Temp Project 2", "Temp Project 3"],
    };
    setForms([...forms, newForm]);
  };

  // const handleDeleteExperience = (id: string) => {
  //   setForms(forms.filter((form) => form._id !== id));
  // };

  const handleUpdateExperience = (updatedData: experienceFormType) => {
    // setForms(
    //   // forms.map((form) => (form._id === updatedData._id ? updatedData : form))
    // );
  };

  return (
    <div>
      <div className="flex justify-end">
        <Button
          variant="secondary"
          className="mb-2"
          onClick={handleAddExperience}
        >
          Add Experience
        </Button>
      </div>
      {forms.map((form) => (
        <ExperienceForm experienceFormData={form} key={form.formNumber} />
      ))}
    </div>
  );
};

export default ExperienceLayout;
