import React from "react";
import Star from "../icons/star.jsx";

const Reviewer = ({ name, stars, category }) => {
  const colors = [
    "bg-blue-300",
    "bg-blue-400",
    "bg-red-500",
    "bg-pink-300",
    "bg-yellow-200",
    "bg-yellow-400",
    "bg-indigo-900",
  ];

  const selectElement = () => {
    const number = Math.floor(Math.random() * colors.length);
    return number;
  };

  return (
    <div className="flex space-x-4 items-center">
      <div className={`w-10 h-10 rounded-full ${colors[selectElement()]}`}></div>
      <div className="flex flex-col space-y-1 items-start">
        <div className="flex space-x-1">
          {Array.from({ length: stars }, (_, i) => (
            <div key={i + 1} className="lg:flex hidden">
              <Star />
            </div>
          ))}
        </div>
        <div className="flex items-end space-x-1">
          <p className="font-silka font-medium text-base text-black">{name} /</p>
          <p className="text-sm text-[#545454] font-medium pl-1">{category}</p>
        </div>
      </div>
    </div>
  );
};

export default Reviewer;
