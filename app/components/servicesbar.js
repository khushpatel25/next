"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';


const Servicesbar = ({tags}) => {
    const marqueeVariants = {
        animate: {
            x: [0, -2000],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 50,
                },
            },
        },
    };
    const t=useTranslations()
  return (
    <div className="w-full mt-[20rem] lg:mt-[32rem] text-white flex justify-between items-center overflow-hidden h-16   bg-accent">
            <motion.div
                className="flex space-x-20"
                variants={marqueeVariants}
                animate="animate"
            >
                {tags.map((tag, idx) => (
                    <p
                        key={idx}
                        className="whitespace-nowrap font-silka text-lg sm:text-base text-white mx-12"
                    >
                        {t(tag)}
                    </p>
                ))}
            </motion.div>
        </div>
  )
}

export default Servicesbar