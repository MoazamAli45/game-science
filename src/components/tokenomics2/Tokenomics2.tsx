import React from "react";
import ComponentWrapper from "../shared/ComponentWrapper";
import Image from "next/image";

const Tokenomics2 = () => {
  return (
    <div className="w-full h-[calc(100vh-215px)]">
      <ComponentWrapper>
        <div className="w-full flex justify-start h-full items-center">
          <div className="w-full max-w-[650px] flex csm:flex-row flex-col  justify-center items-center gap-5">
            {/* stats */}
            <div className="w-[350px] h-[350px] rounded-full relative">
              <Image src="/tokenomics/circle2.png" alt="" fill />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 flex flex-col justify-center items-center -translate-y-1/2">
                <p className="text-[16px] text-white-1/50 font-aeon">
                  Quantity
                </p>
                <p className="text-white-1 uppercase font-aeonBold text-[50px] font-black whitespace-nowrap">
                  1 Billion
                </p>
                <p className="text-black-2 text-[18px] font-aeonBold font-black uppercase px-3 py-[2px] bg-[#B9D6F6] rounded-[8px]">
                  tokens
                </p>
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col items-center csm:items-start gap-2">
              {toekenomicsStats.map((item, index) => {
                return (
                  <p
                    key={index}
                    className={`text-white-1 w-fit ${
                      item.isDone && "line-through"
                    } text-[16px] font-medium font-aeon px-3 py-[4px] rounded-[8px] bg-white-1/20`}
                  >
                    {item.value}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </ComponentWrapper>
    </div>
  );
};

export default Tokenomics2;

const toekenomicsStats = [
  {
    value: "LP burnt",
    isDone: false,
  },
  {
    value: "100% Liquidity pool",
    isDone: false,
  },
  {
    value: "tax",
    isDone: true,
  },
  {
    value: "presale",
    isDone: true,
  },
];
