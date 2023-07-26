import ScrollableContainer from "@/app/components/ScrollableContainer";
import Padding from "@/app/components/padding";
import Topservicecard from "@/app/components/topservicecard";
import { useTranslations } from "next-intl";
import React from "react";

const Topservices = () => {
  const t = useTranslations();
  return (
    <Padding
      classes={
        "flex justify-center bg-[#2B2D33] mt-24 xl:mt-44 pt-[4rem] md:pt-[6rem] md:h-[50vh] h-[40vh] 2xl:h-[40vh] relative"
      }
    >
      <div className="max-w-[1400px] flex flex-col lg:flex-row  lg:justify-between items-center w-full lg:items-start lg:gap-0 gap-4 ">
        <div className="flex flex-col gap-2 lg:gap-4 items-center lg:items-start ">
          <p className="text-[#B8BABD] font-silka text-[12px] tracking-widest">
            {t("k1357")}
          </p>
          <p className="text-white font-gilroy font-semibold text-[1.6rem] ">{t("k698")}</p>
        </div>
        <div>
          <p className="max-w-[400px] text-[#B8BABD] text-[14px] lg:text-[18px] lg:font-medium text-center lg:text-left">
            {t("k1400")}
          </p>
        </div>
      </div>
      <div className="absolute bg-white  md:max-w-[95vw] 2xl:max-w-[1400px] w-full h-max top-[16rem] md:top-[18rem] rounded-3xl shadow-[0_7px_80px_rgba(0,0,0,0.1)]">
        <div className="flex justify-center text-[24px] font-medium py-[3rem]  ">
          <p>{t("k1210")}</p>
        </div>
        <div className="flex gap-5 lg:gap-16 2xl:gap-16 pb-10 justify-center px-5">
          <ScrollableContainer classes={"min-w-full flex gap-12 md:gap-20 lg:gap-28 "}>
            <Topservicecard
              src={"/images/service1.webp"}
              href={"/services/cleaning"}
              service={t("k701")}
              location={t("See pros near you")}
            />
            <Topservicecard
              src={"/images/service4.webp"}
              href={"/services/airbnbcleaning"}
              service={t("k279")}
              location={t("See pros near you")}
            />
            <Topservicecard
              src={"/images/service2.webp"}
              href={"/services/endofleasecleaning"}
              service={t("k575")}
              location={t("See pros near you")}
            />
            <Topservicecard
              src={"/images/chef.webp"}
              href={"/services/privatechef"}
              service={t("k991")}
              location={t("See pros near you")}
            />
          </ScrollableContainer>
        </div>
      </div>
    </Padding>
  );
};

export default Topservices;
