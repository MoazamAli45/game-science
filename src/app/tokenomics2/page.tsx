"use client";

import React from "react";
import Tokenomics2 from "@/components/tokenomics2/Tokenomics2";
import Navibar from "@/components/shared/layout/Navibar";
import FooterWithPlayer from "@/components/shared/layout/FooterWithPlayer";

const page = () => {
  return (
    <div className="w-full flex flex-col justify-between min-h-dvh bg-cover bg-no-repeat bg-[url('/tokenomics/bg.svg')]">
      <Navibar />
      <Tokenomics2 />
      <FooterWithPlayer />
    </div>
  );
};

export default page;
