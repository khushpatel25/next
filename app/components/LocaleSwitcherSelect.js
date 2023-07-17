"use client";
import React from "react";
import clsx from "clsx";
import { useRouter, usePathname as pasthname } from "next/navigation";
import { usePathname } from "next-intl/client";
import { useState } from "react";
import { motion } from "framer-motion";

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
    cr: "Croatian",
    it: "Italian",
    pt: "Portuguese",
    tr: "Turkish",
  };

  console.log(currentLocale);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
        >
          {languageMap[currentLocale]}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
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
        </button>
      </div>

      {isOpen && (
        <motion.div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
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
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
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
