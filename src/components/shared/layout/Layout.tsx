"use client";
import React, { ReactNode } from "react";
import Navibar from "./Navibar";
import Footer from "./Footer";
import { usePathname } from "next/navigation";

export const Layout = ({ children }: { children: ReactNode }) => {
  const pathName = usePathname();

  return (
    <div className="w-full flex flex-col">
      {/* <Header /> */}
      {pathName !== "/" &&
        pathName !== "/tokenomics" &&
        pathName !== "/tokenomics2" && <Navibar />}
      <main className="flex-grow">{children}</main>
      {pathName !== "/" &&
        pathName !== "/tokenomics" &&
        pathName !== "/tokenomics2" && <Footer />}
    </div>
  );
};
