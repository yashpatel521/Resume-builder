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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex justify-center align-middle items-center h-screen">
      <form>
        <Card className="max-w-[350px] p-5">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
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
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button>login</Button>
          </CardFooter>
          <p className="text-gray-500 flex justify-center">
            Don&apos;t have account?
            <Link href="/register" className="text-blue-500 underline">
              {" "}
              Register
            </Link>
          </p>
        </Card>
      </form>
    </div>
  );
};

export default LoginPage;
