import { LogoutOutButton } from "@/components/auth/LogoutOutButton";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";

const HomePage = async () => {
  const data = await getServerSession(authOptions);
  console.log("data", data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-xl">Home</h1>
      <p>Welcome, {data?.user.name}!</p>
      <Image
        src={data?.user.image}
        alt={data?.user.name}
        width={200}
        height={200}
      />
      <LogoutOutButton />
    </main>
  );
};

export default HomePage;
