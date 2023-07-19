import React from "react";
import { useTranslations } from 'next-intl';
import Reviewer from "./reviewer";

const Testimonial = ({ name, category, description, stars, idx }) => {
//   const t = useTranslations();
  
  return (
    <div
      key={idx}
      className="flex flex-col items-start bg-white rounded-3xl px-9 py-6 min-w-[500px] md:min-w-[500px] lg:min-w-[max-content] max-w-500 h-[fit-content]"
    >
      <div className="flex flex-col space-y-2 items-start min-h-[max-content]">
        <Reviewer name={name} stars={stars} category={(category)} />
        <p
          className="font-silka text-[#545454] text-base md:text-base lg:text-sm leading-[170%] lg:leading-[202%] text-justify max-w-[90%] lg:min-w-max"
        >
          {(description)}
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
