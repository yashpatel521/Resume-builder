"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export const LoginForm = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const handleSubmit = async () => {
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res?.error) {
        setError(res.error as string);
      }
      if (res?.ok) {
        return router.push("/resume");
      }
    } catch (err) {
      setError(err as string);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex flex-col justify-center gap-2">
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <div className="grid w-full items-center gap-4">
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
            id="email"
            type="password"
            name="password"
            placeholder="Enter your password"
            defaultValue={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <Button
        onClick={handleSubmit}
        disabled={isLoading}
        variant="ghost"
        className="bg-blue-600"
      >
        {isLoading ? "Loading..." : "Sign In"}
      </Button>
    </div>
  );
};
