import React from "react";
import Navlink from "./navlinkbottom";
import { useTranslations } from "next-intl";
import LocaleSwitcherSelect from "./LocaleSwitcherbottom";

const Bottomnav = () => {
  const t = useTranslations();
  return (
    <div className="relative flex justify-center md:hidden z-50">
      <div className="fixed bottom-[2dvh] bg-[#1d1d1d]/70 backdrop-blur-md rounded-full pl-4 pr-2 py-2 gap-3 flex items-center  drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
        <Navlink text={t("k259")} link={"/aboutus"} />
        <Navlink text={t("k1437")} link={"/registerasprofessional"} />
        <Navlink text={t("k1078")} link={"/services"} />
        <LocaleSwitcherSelect />
      </div>
    </div>
  );
};

export default Bottomnav;
