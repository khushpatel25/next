"use client";
import Testimonial from "../../components/testimonial";
import { motion } from "framer-motion";
import React, { useState } from "react";
import cardData from "../../data/testimonialsData.json";
import Padding from "../../components/padding";
import { useTranslations } from "next-intl";

const Testimonials = () => {
  const [testimonialsList, setTestimonialsList] = useState([...cardData]);
  const t = useTranslations();
  return (
    <Padding>
      <div className="flex justify-center mt-16 xl:mt-44">
        <div className="overflow-hidden max-w-[95vw] rounded-3xl bg-[#EFF2F3]">
          <div className="grid gap-4 lg:py-5 pt-8  pl-10 text-[1.2rem] lg:text-[2.2rem] font-gilroy font-semibold">
            {t("k964")}
            <div className="text-[1.6rem] flex items-end gap-3 text-accent">
              <div className="text-[2.5rem]">4.8/5</div>
              <div className="text-[0.8rem] relative bottom-[25%] text-brandgrey">
                {t("k1100")}{" "}
              </div>
            </div>
          </div>
          <motion.div
            className="flex "
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="flex  gap-14  pt-10">
              {testimonialsList.map((elem, idx) => (
                <div key={idx}>
                  <Testimonial
                    name={elem.name}
                    stars={elem.stars}
                    idx={idx}
                    listLength={testimonialsList.length}
                    category={elem.variant}
                    description={elem.description}
                  />
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="flex "
            animate={{
              x: ["10%", "-100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="flex  gap-16 md:py-10 pt-2 py-5">
              {testimonialsList.map((elem, idx) => (
                <div key={idx}>
                  <Testimonial
                    name={elem.name}
                    stars={elem.stars}
                    idx={idx}
                    listLength={testimonialsList.length}
                    category={elem.variant}
                    description={elem.description}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Padding>
  );
};

export default Testimonials;
