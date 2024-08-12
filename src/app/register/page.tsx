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
    <div className="flex justify-center align-middle items-center h-screen">
      <Card className="max-w-[350px]">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>
            Create an account to access all features of our platform.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
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
