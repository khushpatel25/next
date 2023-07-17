"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const Navlinkbottom = ({ text, link, classes }) => {
  const path = usePathname();
  const pathWithoutLang = path.replace(/^\/[a-z]{2}/, "");
  console.log(pathWithoutLang)
  return (
    <Link
      href={link}
      className={clsx(
        classes,
        "relative font-gilroy font-[350] text-[14px] text-[#C7C7C7] hover:text-white"
      )}
    >
      {link === pathWithoutLang && (
        <motion.span
          layoutId="underlines"
          className="absolute left-0 top-5 block h-[1px] w-full bg-white"
        />
      )}
      {text}
    </Link>
  );
};

export default Navlinkbottom;
