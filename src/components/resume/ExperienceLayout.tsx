"use client";

import React, { useState } from "react";
import ExperienceForm from "./ExperienceForm";
import { Button } from "../ui/button";

const ExperienceLayout = () => {
  const [forms, setForms] = useState([0]); // Initial state with one form

  const handleAddExperience = () => {
    setForms([...forms, forms.length]); // Add a new form by appending to the array
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
      {forms.map((formIndex) => (
        <ExperienceForm key={formIndex} formId={+formIndex} />
      ))}
    </div>
  );
};

export default ExperienceLayout;
