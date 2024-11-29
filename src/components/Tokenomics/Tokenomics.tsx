"use client";

import React from "react";
import ComponentWrapper from "../shared/ComponentWrapper";
import Image from "next/image";
import Navibar from "../shared/layout/Navibar";
import Footer from "../shared/layout/Footer";

const Tokenomics: React.FC = () => {
  return (
    <div className="w-full flex overflow-hidden relative flex-col justify-between min-h-dvh">
      <Navibar />
      <div className="w-full relative overflow-hidden">
        <ComponentWrapper>
          <div className="w-full flex justify-center items-center">
            <div className="w-[280px] h-[280px] md:w-[490px] md:h-[490px] relative">
              <Image
                src="/tokenomics/circle.png"
                alt="Tokenomics circle"
                fill
                className="object-contain"
              />
              <p className="font-things absolute text-center left-1/2 -translate-x-1/2 top-[21%] font-normal text-[36px] md:text-[60px] leading-tight md:leading-[60px]">
                <span className="text-[54px] md:text-[90px] whitespace-nowrap">
                  1 billion <br />
                </span>
                tokens
              </p>
            </div>
          </div>
        </ComponentWrapper>
      </div>
      <Footer />
      <div className="w-full absolute -bottom-[8%] md:-bottom-[18%]">
        <div className="w-full max-w-[1190px] mx-auto h-[300px] md:h-[550px] relative">
          <Image
            src="/tokenomics/image1.png"
            alt="Tokenomics illustration"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
