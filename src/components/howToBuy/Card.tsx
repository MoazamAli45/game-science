import React from "react";
import Image from "next/image";
import clsx from "clsx";

interface Props {
  bgColor: string;
  title: string;
  des: string;
  img: string;
}

const Card: React.FC<Props> = ({ bgColor, title, des, img }: Props) => {
  return (
    <div style={{background:bgColor}} className={clsx('w-full relative flex flex-col gap-2 py-3 px-5 h-full max-h-[600px] border-[2px] border-black-1 rounded-[24px]')}>
      <h3 className="text-[54px] text-white-1 font-things">{title}</h3>
      <p className="text-white-1 max-w-[200px] w-full font-normal font-suisse uppercase text-[12px] ">
       {des}
      </p>
      <div className="w-full h-[77%] left-0 absolute bottom-0">
        <div className="w-full h-full relative">
          <Image src={img} alt="" fill />
        </div>
      </div>
    </div>
  );
};

export default Card;
