"use client";

// import React, { useEffect, useRef } from "react";

// import MainLayout from "../../components/cards/layouts/mainLayout";
import TeamCard from "../../components/cards/teamCard";
import AboutUsTeam from "../../components/sections/aboutUsTeam";
import AboutUsHero from "../../components/sections/aboutUsHero";
import AboutUsDescription from "../../components/sections/aboutUsDescription";
import Timeline from "../../components/sections/timeline";
import GradientCardsSection from "../../components/cards/gradientCard";
import TheProduct from "../../components/sections/theProduct";
import CoreValues from '../../components/sections/coreValues'
import Brands from "../../components/sections/brands";
import News from "../../components/sections/news";

const Aboutus = () => {
  // const ref = useRef(null);

  // const handleClick = () => {
  //   ref.current?.scrollIntoView({ behavior: 'smooth' });
  // };

  // useEffect(() => {
  // }, [])

  return (
    <>
      <AboutUsHero onClick={() => {}} />
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
        }
      />
      <Timeline />
      <GradientCardsSection
        Img1="images/gradient.webp"
        heading1="Active Professionals"
        number1="+1,000"
        text1="As of February 2022"
        Img2="images/gcard5.webp"
        heading2="Monthly income on Completely"
        number2="6450"
        text2="As of February 2022"
        Img3="images/gcard4.webp"
        heading3="A service is bought every"
        number3="23 Min."
        text3="As of February 2022"
        Img4="images/gradient2.webp"
        heading4="Completed Services"
        number4="6,850"
        text4="As of February 2022"
        Img5="images/gradient3.webp"
        heading5="Customer Satisfaction"
        number5="98%"
        text5="As of February 2022"
        Img6="images/gcard3.webp"
        heading6="Rating our professionals"
        number6="4.9/5"
        text6="As of February 2022"
      />
      <AboutUsTeam title={"Meet The Team"} alignText={"center"}>
        <TeamCard
          src={"/images/sandro.webp"}
          name={"Sandro Clemente"}
          designation={"Co-Founder, CEO"}
        // email={"sandro.clemente@completely.ch"}
        />
        <TeamCard
          src={"/images/flavio.webp"}
          name={"Flavio Dias"}
          designation={"Co-Founder, COO"}
        // email={"flavio.dias@@completely.ch"}
        />
        <TeamCard
          src={"/images/caterina.webp"}
          name={"Catarina Fadda"}
          designation={"Customer Service Operation Leader"}
        // email={"caterina.fadda@completely.ch"}
        />
        <TeamCard
          src={"/images/gio.webp"}
          name={"Gio Casalucci"}
          designation={"Advisor, Painter Leader"}
        // email={"gio.casalucci@completely.ch"}
        />

        <TeamCard
          src={"/images/vasco.webp"}
          name={"Vasco Damason"}
          designation={"Advisor, Handymen Leader"}
        // email={"vasco.damason@completely.ch"}
        />
        <TeamCard
          src={"/images/paula.webp"}
          name={"Paula Chambina"}
          designation={"Accounting and Controlling Specialist"}
        // email={"paula.chambina@completely.ch"}
        />
        <TeamCard
          src={"/images/janiel.webp"}
          name={"Janiel D`Alberto"}
          designation={"Customer Service Operation"}
        // email={"janiel.dalberto@completely.ch"}
        />
        <TeamCard
          src={"/images/abid.webp"}
          name={"Abid Majid"}
          designation={"UX Designer"}
        // email={"janiel.dalberto@completely.ch"}
        />
        <TeamCard
          src={"/images/ibad.webp"}
          name={"Ibad Sajid"}
          designation={"HR"}
        // email={"janiel.dalberto@completely.ch"}
        />
        <TeamCard
          src={"/images/hafsa.webp"}
          name={"Hafsa Maryam"}
          designation={"Junior Developer"}
        // email={"janiel.dalberto@completely.ch"}
        />
        <TeamCard
          src={"/images/abrar.webp"}
          name={"Syed Abrar"}
          designation={"Junior Developer"}
        // email={"janiel.dalberto@completely.ch"}
        />
      </AboutUsTeam>
      <TheProduct />
      <CoreValues heading={"Our Core Values"} />
      <Brands />
      {/* <News heading={"News & Resources"} allBlogs={[]} /> */}
    </>
  );
};

export default Aboutus;
