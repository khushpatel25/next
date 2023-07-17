"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navlink = ({ text, link }) => {
  const path = usePathname();
  const pathWithoutLang = path.replace(/^\/[a-z]{2}/, "");
  return (
    <Link
      href={link}
      className="relative font-nohemi font-[350] text-[#C7C7C7]"
    >
      {link === pathWithoutLang && (
        <motion.span
          layoutId="underline"
          className="absolute left-0 top-full block h-[1px] w-full bg-white"
        />
      )}
      {text}
    </Link>
  );
};

export default Navlink;
