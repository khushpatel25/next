import React from 'react'
import Testimonialsclient from './testimonialsclient'
import { useTranslations } from 'next-intl';


const Testimonials = () => {
  const t = useTranslations();
  return (
   <Testimonialsclient>
     <div className="grid gap-4 lg:py-5 pt-8  pl-10 text-[1.2rem] lg:text-[2.2rem] font-gilroy font-semibold">
      {t("k964")}
      <div className="text-[1.6rem] flex items-end gap-3 text-accent">
        <div className="text-[2.5rem]">
        4.8/5</div><div className="text-[0.8rem] relative bottom-[25%] text-brandgrey">{t("k1100")} </div>
      </div>
    </div>
   </Testimonialsclient>
  )
}

export default Testimonials