import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-8">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
          Build Your Perfect Resume
        </h1>
        <p className="text-xl text-white mb-12 opacity-90">
          A few clicks away from your dream job.
        </p>
      </div>
      <div className="flex space-x-4">
        <Link href="/login">
          <Button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-blue-50 transition-transform transform hover:scale-105">
            Sign In
          </Button>
        </Link>
        <Link href="/register">
          <Button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:bg-purple-50 transition-transform transform hover:scale-105">
            Sign Up
          </Button>
        </Link>
      </div>
    </main>
  );
}
