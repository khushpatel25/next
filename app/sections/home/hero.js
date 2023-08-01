import Play from "../../icons/playgrey";
import Padding from "../../components/padding";
import React from "react";
import Applegrey from "../../icons/applegrey";
import Qrgrey from "../../icons/qrgrey";
import Image from "next/image";
import hero from "/public/images/heroimgnew.png";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t=useTranslations()
  return (
    <Padding classes={"bg-brandblack"}>
      <div className="font-gilroy flex flex-col justify-center text-center items-center text-white text-[2.2rem] font-medium lg:text-[3rem] 2xl:text-[6rem] gap-4 lg:gap-9  sm:min-h-[120vh]  lg:min-h-[160vh] xl:min-h-[140vh] 2xl:min-h-[150vh] leading-1">
        <div className="flex flex-col text-center items-center gap-2 lg:pt-40 2xl:pt-0  pt-40">
          <div>{t("k403")}</div>
          <div className="text-brandgrey font-silka text-[0.9rem] lg:text-[1.2rem] 2xl:text-[1.5rem]  flex font-light max-w-[80vw] lg:max-w-[55vw] leading-8">
            Download our App and Book services, see prices, read reviews and
            chat with pros, all in the app.
          </div>
        </div>
        <div className="flex gap-4 2xl:gap-0">
          <Play />
          <Applegrey />
          <Qrgrey />
        </div>
        <div className="bg-[#1C1C1C] mt-8 xl:mt-16 rounded-[2rem] p-[1rem] 2xl:min-w-[60dvw] flex justify-center mb-40 2xl:mb-0 ">
          <Image src={hero} />
        </div>
      </div>
    </Padding>
  );
};

export default Hero;
