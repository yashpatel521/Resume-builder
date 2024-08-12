"use client";
import React from "react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export const LogoutOutButton = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        signOut({ redirect: false }).then(() => {
          router.replace("/login");
        });
      }}
      className="text-center rounded-md py-2 flex justify-center align-middle items-center gap-1"
      variant="ghost"
    >
      <LogOut className="w-5 h-5" />
      LogOut
    </Button>
  );
};
