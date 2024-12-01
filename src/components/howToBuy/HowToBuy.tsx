import React from "react";
import ComponentWrapper from "../shared/ComponentWrapper";
import Card from "./Card";
import { HowToBuyData } from "@/data/Constants";

const HowToBuy: React.FC = () => {
  return (
    <ComponentWrapper>
      <div className="w-full grid  justify-center items-center sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {HowToBuyData.map((item, index) => {
          return (
            <Card
              key={index}
              img={item.img}
              title={item.title}
              bgColor={item.cardColor}
              des={item.des}
            />
          );
        })}
      </div>
    </ComponentWrapper>
  );
};

export default HowToBuy;
