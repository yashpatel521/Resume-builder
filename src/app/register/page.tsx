import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="flex justify-center align-middle items-center h-screen">
      <Card className="max-w-[350px]">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>
            Create an account to access all features of our platform.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email</Label>
                <Input
                  id="email"
                  type="text"
                  name="email"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Password</Label>
                <Input
                  id="email"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button>Register</Button>
        </CardFooter>
        <p className="text-gray-500 flex justify-center">
          Already have a account?
          <Link href="/login" className="text-blue-500 underline">
            {" "}
            Login
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default RegisterPage;
