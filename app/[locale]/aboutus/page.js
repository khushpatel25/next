"use client"
import TeamCard from "@/app/components/cards/teamCard";
// import MainLayout from "@/app/components/cards/layouts/mainLayout";
import React, { useEffect, useRef } from "react";
import AboutUsHero from "../../components/sections/aboutUsHero";
import AboutUsDescription from "@/app/components/sections/aboutUsDescription";
import Timeline from "@/app/components/sections/timeline";

const Aboutus = () => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
  }, [])

  return (
    <>
      <AboutUsHero onClick={''} />
      <AboutUsDescription
        title={"We believe your weekends weren't made for housework."}
        titleDesc={
          "Completely is the technology leader developing the modern home management platform."
        }
        Desc1={
          "In an age where everything in our lives is increasingly connected, we set out to bring your home and home services - a $500 billion industry - into the 22nd century. Today, 3000+ of people use Completely to safely manage their homes. We help you know what to do, when to do it, and who to hire."
        }
        Desc2={
          "At Completely, we're not just creating a new era of homeownership. We're supporting local economies and building stronger communities. Each day, we connect local professionals with busy homeowners, helping small businesses across the country thrive. By leveling the playing field for businesses of all sizes, we aim to give everyone a fair shot at success."
        } />
        <Timeline/>
    </>
  )
}

export default Aboutus