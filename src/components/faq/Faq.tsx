"use client";

import React, { useState } from "react";
import Image from "next/image";
import ComponentWrapper from "../shared/ComponentWrapper";
import { FaqData } from "@/data/Constants";
import clsx from "clsx";

const Faq: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const handleItemInteraction = (img: string) => {
    if (window.innerWidth <= 768) {
      setActiveImage(activeImage === img ? null : img);
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-215px)]  gap-2 md:gap-0 md:justify-center md:items-center flex flex-col">
      <div className="w-full relative flex flex-col">
        {FaqData.map((item, index) => {
          return (
            <div
              onMouseEnter={() =>
                window.innerWidth > 768 && setActiveImage(item.img)
              }
              onMouseLeave={() =>
                window.innerWidth > 768 && setActiveImage(null)
              }
              onClick={() => handleItemInteraction(item.img)}
              key={index}
              className={clsx(
                "w-full relative py-3 border-t-[1px] transition-all duration-200 border-black-2 bg-transparent cursor-pointer",
                faqHoverColor[index],
                FaqData.length === index + 1 && "border-b-[1px]"
              )}
            >
              <ComponentWrapper>
                <div className="w-full flex justify-start items-center">
                  <p className="text-xl md:text-[32px] font-things uppercase font-normal text-black-2">
                    {item.ques}
                  </p>
                </div>
              </ComponentWrapper>
            </div>
          );
        })}
        {activeImage && (
          <div className="hidden md:block absolute right-0 top-0">
            <div className="w-[480px] h-[480px] relative">
              <Image
                src={activeImage}
                alt={`FAQ image`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}
      </div>
      {/*  For mobile active image */}
      {activeImage && (
        <div className="md:hidden w-full h-[240px] relative ">
          <Image
            src={activeImage}
            alt={`FAQ image for ${activeImage}`}
            fill
            className="object-fill "
          />
        </div>
      )}
    </div>
  );
};

export default Faq;

const faqHoverColor = [
  "hover:bg-[#FE98C0]",
  "hover:bg-[#B7DDF0]",
  "hover:bg-[#ECB594]",
  "hover:bg-[#FAADDF]",
  "hover:bg-[#DAA6F5]",
  "hover:bg-[#FFE890]",
  "hover:bg-[#B1D0FA]",
];
