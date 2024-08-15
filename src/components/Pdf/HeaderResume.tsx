import { UserDataType } from "@/type";
import React from "react";

const HeaderResume = ({ userData }: { userData: UserDataType }) => {
  return (
    <div>
      <header className="p-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold">
              {userData.firstName} {userData.lastName}
            </h1>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-lg">
              <span className="font-semibold">Email:</span> {userData.email}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Phone:</span> {userData.phone}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Location:</span>{" "}
              {userData.address}
            </p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderResume;
