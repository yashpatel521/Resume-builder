"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { register } from "@/actions/auth";
import { ResponseType } from "@/type";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [Loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    setError("");
    setLoading(true);
    if (!email || !password || !firstName || !lastName) {
      setError("Please provide all required fields");
      return;
    }
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    try {
      const res: ResponseType = await register(formData);
      if (!res.success) {
        setError(res.message || "");
      } else {
        await signIn("credentials", {
          email,
          password,
          redirect: true,
          callbackUrl: "/",
        });
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="grid w-full items-center gap-4">
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">First Name</Label>
          <Input
            id="firstName"
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            defaultValue={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Last Name</Label>
          <Input
            id="lastName"
            type="text"
            name="lastName"
            placeholder="Enter your Last name"
            defaultValue={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Email</Label>
          <Input
            id="email"
            type="text"
            name="email"
            placeholder="Enter your email address"
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Password</Label>
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            defaultValue={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <Button type="submit" onClick={handleSubmit}>
        Register
      </Button>
    </div>
  );
};
