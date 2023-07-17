import React from "react";
import Navlink from "./navlinkbottom";
import { useTranslations } from "next-intl";
import LocaleSwitcherSelect from "./LocaleSwitcherbottom";

const Bottomnav = () => {
  const t = useTranslations();
  return (
    <div className="relative flex justify-center md:hidden">
      <div className="fixed bottom-[2dvh] bg-[#1d1d1d]/70 backdrop-blur-md rounded-full pl-4 pr-2 py-2 gap-3 flex items-center  drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
        <Navlink classes={'text-[12px]'} text={t("93ffc1e2a2")} link={"/aboutus"} />
        <Navlink classes={'text-[12px]'} text={t("eaef6085e2")} link={"/registerasprofessional"} />
        <Navlink classes={'text-[12px]'} text={t("8f59f637a8")} link={"/services"} />
        <LocaleSwitcherSelect/>
      </div>
    </div>
  );
};

export default Bottomnav;
