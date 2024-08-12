"use client";
import Link from "next/link";
import React, { useState } from "react";
import navItems from "./headerData";
import { NavItemType } from "@/type";
import { Icons } from "../ui/icons";
import { Bolt, LogOut, Menu, X } from "lucide-react";
import { LogoutOutButton } from "../auth/LogoutOutButton";

const MobileHeader = () => {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="shadow-md md:hidden">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">ResumeBuilder</Link>
        </div>

        {/* Mobile Menu Button */}
        <div>
          <button
            className="focus:outline-none"
            aria-label="Open Menu"
            onClick={toggleMenu} // Toggle menu on click
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item: NavItemType, index) => {
            const Icon = Icons[item.icon];
            return (
              <Link
                href={item.href}
                key={index}
                className="rounded-md py-2 flex gap-1 align-middle justify-center items-center"
              >
                <Icon className="w-5 h-5" />
                {item.title}
              </Link>
            );
          })}
          <LogoutOutButton />
        </div>
      )}
    </header>
  );
};

export default MobileHeader;
