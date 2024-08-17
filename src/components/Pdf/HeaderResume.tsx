import { UserDocument } from "@/type";
import React from "react";

const HeaderResume = ({ userData }: { userData: UserDocument }) => {
  return (
    <header>
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            {userData.firstName} {userData.lastName}
          </h1>
        </div>
        <div>
          <p className="text-lg">
            <span className="font-semibold">Email:</span> {userData.email}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Phone:</span> {userData.phoneNumber}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Location:</span> {userData.address}
          </p>
        </div>
      </div>
      <hr className="w-4/5 m-auto my-2" />
    </header>
  );
};

export default HeaderResume;
