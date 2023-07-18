import Play from "@/app/icons/playgrey";
import Padding from "../../components/padding";
import React from "react";
import Applegrey from "@/app/icons/applegrey";
import Qrgrey from "@/app/icons/qrgrey";
import Image from "next/image";
import hero from "/public/images/heroimgnew.png"

const Hero = () => {
  return (
   
      <Padding classes={'bg-brandblack'}>
        <div className="font-gilroy flex flex-col justify-center text-center items-center text-white text-[2.2rem] font-medium lg:text-[3rem] 2xl:text-[6rem] gap-4 lg:gap-9 min-h-[120vh] sm:min-h-[150vh]  lg:min-h-[160vh] xl:min-h-[180vh] 2xl:min-h-[150vh] leading-1">
          <div className="flex flex-col text-center items-center gap-2 lg:pt-20 xl:pt-0 ">
            <div>Caring for your home made easy.</div>
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
          <div className="bg-[#1C1C1C] mt-8 xl:mt-16 rounded-[2rem] p-[1rem] 2xl:min-w-[60dvw] flex justify-center">
            <Image src={hero}  />
          </div>
        </div>
      </Padding>

  );
};

export default Hero;
