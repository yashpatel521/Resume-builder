import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { RegisterForm } from "@/components/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <Card className="max-w-[400px] w-full bg-white shadow-lg rounded-lg p-6">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-gray-800">
            Create Account
          </CardTitle>
          <CardDescription className="text-gray-600">
            Sign up to unlock all features of our platform.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
        <p className="text-gray-600 text-center mt-4">
          Already have an account?
          <Link href="/login" className="text-blue-600 underline ml-1">
            Log in
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default RegisterPage;
