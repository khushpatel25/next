"use client";
import Testimonial from "@/app/components/testimonial";
import { motion } from "framer-motion";
import React, { useState } from "react";
import cardData from "../../data/testimonialsData.json";


const Testimonialsclient = ({ children }) => {
  const [testimonialsList, setTestimonialsList] = useState([...cardData]);
  return (
    <div className="flex justify-center mt-16 xl:mt-44">
      <div className="overflow-hidden max-w-[95vw] rounded-3xl bg-[#EFF2F3]">
        <div>{children}</div>
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
          <div className="flex  gap-16  pt-10">
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
  );
};

export default Testimonialsclient;
