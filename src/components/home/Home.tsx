"use client";

import React from "react";
import Navibar from "../shared/layout/Navibar";
import Footer from "../shared/layout/Footer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavibarData } from "@/data/Constants";

const Home: React.FC = () => {
  const pathName = usePathname();

  return (
    <div className="w-full flex flex-col  gap-5 md:gap-0 md:justify-between  min-h-dvh bg-[url('/home/bg.png')] bg-cover bg-no-repeat">
      <Navibar />
      {/* links */}
      <div className="w-full flex flex-col justify-center items-center ">
        {NavibarData.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.path}
              className={`text-[60px] md:text-[90px] ${
                pathName === item.path
                  ? "opacity-20 line-through"
                  : "opacity-100"
              } leading-[130px] text-[#FAFAFA] font-things font-normal`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
