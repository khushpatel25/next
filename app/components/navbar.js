import React from "react";
import Logo from "../icons/logo";
import Navlink from "./navlink";
import { useTranslations } from "next-intl";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import Custombutton from "./custombutton";
import Padding from "./padding";
import MenuMobButton from "../icons/menuMobButton";
import Link from "next/link";

const Navbar = () => {
  const t = useTranslations();
  return (
    <Padding classes={"bg-brandblack "}>
      <div className="font-silka bg-brandblack flex items-center justify-between pt-3">
        <div className=" items-center gap-8 flex">
            <Link href={'/'}>
          <Logo color={"white"} />
            </Link>
          <div className="md:flex gap-8 hidden">
            <Navlink text={t("k259")} link={"/aboutus"} />
            <Navlink text={t("eaef6085e2")} link={"/registerasprofessional"} />
            <Navlink text={t("8f59f637a8")} link={"/services"} />
          </div>
        </div>
        <div className="lg:flex gap-3 hidden">
          <LocaleSwitcherSelect />
          <Custombutton
            text={"Book a Service"}
            classes={"text-[#ffffff] bg-accent hover:bg-[#0E9BB5] transition-all duration-500"}
          />
        </div>
        <div className={'lg:hidden'}>
            <MenuMobButton stroke={'white'}  />
        </div>
      </div>
    </Padding>
  );
};

export default Navbar;
