import Link from "next/link";

const HomePage = async () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-xl">Home</h1>
      <Link href="/login">Login</Link>
    </main>
  );
};

export default HomePage;
