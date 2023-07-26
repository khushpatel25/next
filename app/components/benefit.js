import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Benefit = ({ heading, desc, src,w,h,classes }) => {
  const t = useTranslations();
  return (
    <div className=" grid lg:grid-flow-col lg:grid-cols-2  items-center bg-[#f5f5f5] px-6 rounded-3xl min-h-[50vh] max-h-max lg:min-h-max lg:max-h-[51vh]  pt-10  lg:max-w-[40vw] md:max-w-[40vw]  gap-6 justify-items-center">
      <div className="">
        <p className="2xl:max-w-[210px] leading-7 text-[16px] font-gilroy font-semibold pb-2 sm:max-w-[40vw] max-w-[60vw]">
          {t(heading)}
        </p>
        <p className="max-w-[210px] leading-6 text-[14px] text-[#96979B] font-silka">
          {t(desc)}
        </p>
      </div>
        <Image src={src} width={w} height={h} className={classes}/>
    </div>
  );
};

export default Benefit;
