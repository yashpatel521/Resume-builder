import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";
import { LoginForm } from "@/components/auth/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex justify-center align-middle items-center h-screen">
      <Card className="max-w-[350px] p-5">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <p className="text-gray-500 flex justify-center">
          Don&apos;t have account?
          <Link href="/register" className="text-blue-500 underline">
            {" "}
            Register
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default LoginPage;
