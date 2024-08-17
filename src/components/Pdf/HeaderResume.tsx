import { UserDocument } from "@/type";
import React from "react";

const HeaderResume = ({ userData }: { userData: UserDocument }) => {
  return (
    <header className="bg-white p-6 rounded-t-lg text-black border-b-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">
              {userData?.firstName || "First Name"}{" "}
              {userData?.lastName || "Last Name"}
            </h1>
            <p className="text-sm text-gray-700">
              {userData.majorSkill || "Software Engineer"}
            </p>
          </div>
        </div>
        <div className="grid gap-1 text-right">
          <p>{userData?.email || "email@example.com"}</p>
          <p>+1 {userData?.phoneNumber || "000-000-0000"}</p>
          <p>{userData?.address || "123 Main St"}</p>
          <p>- {userData?.postalCode || "12345"}</p>
        </div>
      </div>
    </header>
  );
};

export default HeaderResume;
