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
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <Card className="max-w-[400px] w-full bg-white shadow-lg rounded-lg p-6">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-gray-800">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-gray-600">
            Enter your credentials to access your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm buttonClassName="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md w-full" />
        </CardContent>
        <p className="text-gray-600 text-center mt-4">
          Don&apos;t have an account?
          <Link href="/register" className="text-blue-600 underline ml-1">
            Register
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default LoginPage;
