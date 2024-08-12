import Link from "next/link";
import React from "react";
import navItems from "./headerData";
import { NavItemType } from "@/type";
import { Icons } from "../ui/icons";
import { Bolt } from "lucide-react";
import { LogoutOutButton } from "../auth/LogoutOutButton";

const DesktopHeader = () => {
  return (
    <header className="shadow-md hidden md:block dark:border-b-2 dark:border-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">ResumeBuilder</Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          {navItems.map((item: NavItemType, index) => {
            const Icon = Icons[item.icon];
            return (
              <Link
                href={item.href}
                key={index}
                className="flex gap-1 align-middle justify-center items-center"
              >
                <Icon className="text-gray-500 w-5 h-5" />
                {item.title}
              </Link>
            );
          })}
        </nav>

        <div>
          <LogoutOutButton />
        </div>
      </div>
    </header>
  );
};

export default DesktopHeader;
