"use client";

import React, { useState } from "react";
import ComponentWrapper from "../ComponentWrapper";
import Image from "next/image";
import * as Icons from "../svg/Icons";
import { usePathname } from "next/navigation";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navibar: React.FC = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isHomePage = pathName === "/" || pathName === "/tokenomics2";

  return (
    <ComponentWrapper style="py-6">
      <div className="w-full flex justify-between items-center">
        <div className="flex justify-center items-center gap-6">
          <Image
            src="/navibar/logo.svg"
            alt=""
            width={46}
            height={46}
            className={`${
              isHomePage
                ? "bg-transparent"
                : "bg-white-1 shadow-lg rounded-[8px]"
            }`}
          />
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <Popover>
              <PopoverTrigger>
                <div
                  className={`border-[1px] font-balltimore text-[14px] leading-[0px] font-normal py-5 px-4 rounded-[8px] ${
                    isHomePage ? "border-white-1" : "border-[#1D1D1D]"
                  }`}
                >
                  <p className={isHomePage ? "text-white-1" : "text-black-1"}>
                    menu
                  </p>
                </div>
              </PopoverTrigger>
              <PopoverContent align="center" className="mt-2 ml-4">
                <div className="w-full flex justify-center items-center gap-5">
                  {navibarData.map((item, index) => (
                    <Link
                      key={index}
                      href={item.path}
                      className={`${
                        pathName === item.path ? "opacity-60" : "opacity-100"
                      } text-[12px] text-black-2 font-normal font-balltimore`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>
          {/* Mobile Menu */}
          <div className="md:hidden ">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className={`border-[1px] font-balltimore text-[14px] leading-[0px] font-normal py-5 px-4 rounded-[8px] ${
                    isHomePage ? "border-white-1" : "border-[#1D1D1D]"
                  }`}
                >
                  <p className={isHomePage ? "text-white-1" : "text-black-1"}>
                    menu
                  </p>
                </button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className={`w-[300px] sm:w-[400px] z-50 fixed inset-0 bg-white-1 shadow-xl`}
              >
                <div className="flex flex-col justify-between h-full ">
                  <nav className="flex flex-col gap-4">
                    {navibarData.map((item, index) => (
                      <Link
                        key={index}
                        href={item.path}
                        className={`${
                          pathName === item.path ? "opacity-60" : "opacity-100"
                        } text-[16px] text-black-2 font-normal font-balltimore`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                  {/*  Copy text */}
                  <div
                    className={`flex md:hidden justify-center items-center gap-3 p-2   border-black-1 border-[1px] rounded-[8px]`}
                  >
                    <p
                      className={`text-[7.5px] text-black-1 font-normal  font-balltimore`}
                    >
                      BeqKgf3QYcPPXc2vLFxrL9BHocRdlf
                    </p>
                    <button>
                      <Icons.BlackCopy className="w-[14px] h-[16px]" />
                    </button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <div
          className={`hidden md:flex justify-center items-center gap-3 p-2 ${
            isHomePage ? "border-white-1" : "border-black-1"
          } border-[1px] rounded-[8px]`}
        >
          <p
            className={`text-[10px] ${
              isHomePage ? "text-white-1" : "text-black-1"
            } font-normal font-balltimore`}
          >
            BeqKgf3QYcPPXc2vLFxrL9BHocRdlf
          </p>
          <button>
            {isHomePage ? (
              <Icons.Copy className="w-[14px] h-[16px]" />
            ) : (
              <Icons.BlackCopy className="w-[14px] h-[16px]" />
            )}
          </button>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Navibar;

const navibarData = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "tokenomics",
    path: "/tokenomics",
  },
  {
    name: "how to buy",
    path: "/how-to-buy",
  },
  {
    name: "FAQ",
    path: "/faq",
  },
];
