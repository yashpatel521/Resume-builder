import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const BasicUserDetailForm = () => {
  return (
    <form>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="mb-4">
          <Label htmlFor="firstName" className="block font-medium text-md">
            First Name :
          </Label>
          <Input
            type="text"
            id="firstName"
            name="firstName"
            className="mt-1 p-2 w-full border rounded-md shadow-sm h-8"
            placeholder="Enter first name"
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="lastName" className="block font-medium text-md">
            Last Name :
          </Label>
          <Input
            type="text"
            id="lastName"
            name="lastName"
            className="mt-1 p-2 w-full border rounded-md shadow-sm h-8"
            placeholder="Enter last name"
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="email" className="block font-medium text-md">
            Email :
          </Label>
          <Input
            type="text"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border rounded-md shadow-sm h-8"
            placeholder="Enter email address"
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="phoneNumber" className="block font-medium text-md">
            Phone Number :
          </Label>
          <Input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            className="mt-1 p-2 w-full border rounded-md shadow-sm h-8"
            placeholder="Enter phone number"
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="address" className="block font-medium text-md">
            Address :
          </Label>
          <Input
            type="text"
            id="address"
            name="address"
            className="mt-1 p-2 w-full border rounded-md shadow-sm h-8"
            placeholder="Enter address"
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="postalCode" className="block font-medium text-md">
            Postal Code :
          </Label>
          <Input
            type="text"
            id="postalCode"
            name="postalCode"
            className="mt-1 p-2 w-full border rounded-md shadow-sm h-8"
            placeholder="Enter postal code"
            required
          />
        </div>
        <div className="flex items-center gap-2">
          <Button type="submit" size="lg">
            Save
          </Button>
        </div>
      </div>
    </form>
  );
};

export default BasicUserDetailForm;
