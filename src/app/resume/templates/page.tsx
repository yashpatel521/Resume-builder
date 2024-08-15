import HeaderResume from "@/components/Pdf/HeaderResume";
import { userData } from "@/lib/UserData";
import React from "react";

const TemplatePage = () => {
  return (
    <div>
      <HeaderResume userData={userData} />
    </div>
  );
};

export default TemplatePage;
