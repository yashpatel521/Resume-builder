"use client";
import React, { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useSession } from "next-auth/react";
import { ResponseType, userFromType } from "@/type";

const BasicUserDetailForm = () => {
  const { data: session } = useSession();

  const [userData, setUserData] = useState<userFromType>({
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phoneNumber: "",
    postalCode: "",
    majorSkill: "",
    password: "",
  });

  const [initialData, setInitialData] = useState({ ...userData }); // Store initial data
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const onChangeFields = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = await fetch(`/api/user/${session?.user._id}`, {
          method: "GET",
        });
        const response: ResponseType = await api.json();
        if (response.success) {
          setUserData(response.data);
          setInitialData(response.data); // Store the initial data
        } else {
          setError(response.message);
        }
      } catch (err: any) {
        setError("Failed to fetch user data.");
      }
    };

    if (session?.user._id) {
      fetchData();
    }
  }, [session?.user._id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const api = await fetch(`/api/user/${session?.user._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const res: ResponseType = await api.json();
      if (!res.success) {
        setError(res.message);
      } else {
        setUserData(res.data);
        setInitialData(res.data); // Update initial data after successful save
        setSuccess("User data saved successfully.");
      }
    } catch (error: any) {
      setError("Failed to save user data.");
    } finally {
      setLoading(false);
    }
  };

  // Function to check if form data has changed
  const hasChanges = () => {
    return JSON.stringify(userData) !== JSON.stringify(initialData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <Input type="hidden" name="_id" value={userData._id} />
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
            value={userData.firstName}
            onChange={onChangeFields}
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
            value={userData.lastName}
            onChange={onChangeFields}
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="email" className="block font-medium text-md">
            Email :
          </Label>
          <Input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border rounded-md shadow-sm h-8"
            placeholder="Enter email address"
            required
            value={userData.email}
            onChange={onChangeFields}
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="majorSkill" className="block font-medium text-md">
            Major Skill :
          </Label>
          <Input
            type="text"
            id="majorSkill"
            name="majorSkill"
            className="mt-1 p-2 w-full border rounded-md shadow-sm h-8"
            placeholder="Enter major skill"
            required
            value={userData.majorSkill}
            onChange={onChangeFields}
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
            value={userData.phoneNumber}
            onChange={onChangeFields}
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
            value={userData.address}
            onChange={onChangeFields}
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
            value={userData.postalCode}
            onChange={onChangeFields}
          />
        </div>
        <div className="flex items-center gap-2">
          <Button type="submit" size="lg" disabled={loading || !hasChanges()}>
            {loading ? "Loading..." : "Save"}
          </Button>
          {error && <p className="text-red-500 text-sm mb-2 block">{error}</p>}
          {success && (
            <p className="text-green-500 text-sm mb-2 block">{success}</p>
          )}
        </div>
      </div>
    </form>
  );
};

export default BasicUserDetailForm;
