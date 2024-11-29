import React from "react";
import ComponentWrapper from "../ComponentWrapper";
import * as Icons from "../svg/Icons";

const FooterWithPlayer: React.FC = () => {
  return (
    <ComponentWrapper style="py-3">
      <div className="w-full flex flex-col gap-2 md:gap-0  md:flex-row justify-between items-center">
        <div className="flex justify-center items-center gap-3">
          <Icons.Insta fill="fill-[#FFE81E]" className="w-[22px] h-[22px]" />
          <Icons.Facebook fill="fill-[#FFE81E]" className="w-[22px] h-[22px]" />
          <Icons.Twitter fill="fill-[#FFE81E]" className="w-[22px] h-[22px]" />
          <Icons.Tiktok fill="fill-[#FFE81E]" className="w-[22px] h-[22px]" />
        </div>
        <div className="flex justify-center flex-row items-center csm:gap-3">
          <div className="flex justify-center items-center">
            <Icons.Player className="w-[150px] h-[60px]" />
          </div>
          <p
            className={`csm:w-[300px] text-[9px] text-white-1 font-medium font-helvet`}
          >
            Disclaimer* It is a memecoin and has no utility. Don&apos;t risk
            money you are afraid of losing. The price may go up or it may go
            down. We are not responsible for the price of the token.
          </p>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default FooterWithPlayer;
