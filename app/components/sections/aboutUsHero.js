import React from "react";

const AboutUsHero = ({ onClick }) => {

  return (
    <div
      className="min-h-[60vh] sm:min-h-[70vh] lg:min-h-[85vh] w-full px-1rem bg-cover bg-top bg-no-repeat flex flex-col justify-center items-center text-center bg-[#021417]"
      style={{ backgroundImage: `url('https://www.completely.ch/images/aboutus/hero.webp')`, backgroundColor: "#021417" }}
    >
      <div className="px-4 lg:px-6 flex flex-col items-center justify-center self-center row-gap-2 md:row-gap-4">
        <h1 className="font-semibold text-white text-2xl md:text-4xl pt-70 md:pt-0">
          {"We are here to make people's lives better."}
        </h1>
        <p className="font-medium text-[#A9ABB2] text-sm md:text-base px-3">
          {
            "Creating a way to connect Professionals ready to work, with people who need work done."
          }
        </p>
        <button
          onClick={onClick}
          className="bg-[#14BDDC] text-white font-semibold py-2 px-4 rounded-md"
        >
          {"Learn More"}
        </button>
      </div>
    </div>
  );
};

export default AboutUsHero;
