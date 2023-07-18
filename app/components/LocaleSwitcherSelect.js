"use client";
import React from "react";
import clsx from "clsx";
import { useRouter, usePathname as pasthname } from "next/navigation";
import { usePathname } from "next-intl/client";
import { useState } from "react";
import { motion } from "framer-motion";
import Globe from "../icons/globe";

export default function LocaleSwitcherSelect() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const currentLocale = pasthname().split("/")[1];

  function onSelectChange(lang) {
    router.replace(`/${lang}${pathname}`);
  }

  const languageMap = {
    en: "English",
    de: "German",
    hr: "Croatian",
    it: "Italian",
    pt: "Portuguese",
    tr: "Turkish",
    es: "Spanish",
    fr: "French",
    sr: "Serbian"
  };


  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center gap-3 justify-center w-full rounded-full shadow-sm px-3 py-3 bg-[#353535] text-sm font-medium text-brandwhite hover:bg-[#1C1C1C] focus:outline-none focus:ring-none  focus:bg-[#3c3c3c]"
        >
          <Globe/>
          <div className="flex gap-1 font-silka font-normal" >
          {currentLocale}
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          </div>
        </button>
      </div>

      {isOpen && (
        <motion.div
          className="origin-top-right absolute right-0 mt-2  rounded-md shadow-lg bg-[#3c3c3c] ring-1ring-1 ring-black ring-opacity-5"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.1 }}
        >
          <motion.div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
            initial="collapsed"
            animate="open"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {Object.entries(languageMap).map(([lang, fullName], i) => (
              <motion.div
                className="block px-4 py-2 text-sm text-brandgrey hover:bg-[#696969] hover:text-gray-900 cursor-pointer"
                role="menuitem"
                key={i}
                onClick={() => onSelectChange(lang)}
                variants={{
                  open: { opacity: 1, y: 0 },
                  collapsed: { opacity: 0, y: 50 },
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  delay: i * 0.1,
                }}
              >
                {fullName}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
