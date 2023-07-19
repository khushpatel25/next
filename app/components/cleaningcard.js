import React from "react";
import Location from "../icons/location.jsx";

import Link from "next/link.js";
import { useTranslations } from "next-intl";

const CleaningCard = ({
  src,
  service,
  name,
  designation,
  location,
  href,
  active,
  disabled,
}) => {
  const t = useTranslations();
  return (
    <div className="flex flex-col items-start">
      <Link href={href}>
        <div className="w-[30vw] md:w-[25vw] lg:w-[15vw] xl:w-[14vw] 2xl:w-60">
          <img src={src} alt="service card" />
        </div>
        <div
          className={`font-gilroy ${
            active ? "text-[#2B2D33] " : "text-[#929292]"
          } font-medium max-w-[60%] md:max-w-max text-base xl:text-lg my-2 leading-5 lg:leading-[2rem] ${
            disabled && "opacity-50 pointer-events-none"
          }`}
        >
          {t(service || name)}
        </div>
        <div className="flex items-center space-x-2">
          {location && <Location />}
          <p className="font-silka text-[#929292] text-sm lg:text-base">
            {t(location || designation)}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CleaningCard;
