import Header from "@/components/header";
import React from "react";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      <main className="flex-grow">{children}</main>
    </>
  );
};

export default Layout;
