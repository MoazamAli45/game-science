import React from "react";
import ComponentWrapper from "../ComponentWrapper";
import * as Icons from "../svg/Icons";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Footer: React.FC = () => {
  const pathName = usePathname();

  return (
    <ComponentWrapper style="py-3">
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <div className="flex justify-center items-center gap-4">
          <a href="#" aria-label="Instagram">
            <Icons.Insta className="w-[22px] h-[22px]" />
          </a>
          <a href="#" aria-label="Facebook">
            <Icons.Facebook className="w-[22px] h-[22px]" />
          </a>
          <a href="#" aria-label="Twitter">
            <Icons.Twitter className="w-[22px] h-[22px]" />
          </a>
          <a href="#" aria-label="TikTok">
            <Icons.Tiktok className="w-[22px] h-[22px]" />
          </a>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-3">
          <div className="flex justify-center items-center">
            <div className="w-[92px] h-[68px] md:w-[115px] md:h-[85px] relative">
              <Image
                src="/footer/player.png"
                alt="Player"
                fill
                className="object-contain"
              />
            </div>
            <button aria-label="Play" className="-ml-2">
              <Icons.PlayButton className="w-[43px] h-[43px] md:w-[54px] md:h-[54px]" />
            </button>
          </div>
          <p
            className={`w-full md:w-[300px] text-[8px] md:text-[9px] text-center md:text-left ${
              pathName === "/" ? "text-white-1" : "text-black-1"
            } font-medium font-helvet`}
          >
            Disclaimer* It is a memecoin and has no utility. Don&apos;t risk
            money you are afraid of losing. The price may go up or it may go
            down. We are not responsible for the price of the token. Don&apos;t
            risk money you are afraid of losing. The price may go up or it may
            go down. We are not responsible for the price of the token.
          </p>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Footer;
