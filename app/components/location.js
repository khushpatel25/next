"use client";
import React, { useState, useEffect } from "react";
import { useCurrentLocation } from "../hooks/useCurrentLocation";

const Location = () => {
  const location = useCurrentLocation();
  const cities = ["Zurich", "Geneva", "Bern", "Basel"];

  const [activeCity, setActiveCity] = useState("Select Your City");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (location && location.city) {
      setActiveCity(location.city);
    }
  }, [location]);

  const handleClick = (city) => {
    setActiveCity(city);
    setIsOpen(false);
  };

  const handleLocationClick = () => {
    if (location && location.city) {
      setActiveCity(location.city);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-center w-full rounded-full px-4 py-2 bg-white text-sm font-medium text-black hover:bg-opacity-70 focus:outline-none"
      >
        {activeCity}
      </button>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1 text-base font-normal text-black">
            {cities.map((city, index) => (
              <button
                key={index}
                onClick={() => handleClick(city)}
                className="block w-full text-left px-10 py-2"
              >
                {city}
              </button>
            ))}
            <button
              onClick={handleLocationClick}
              className="block w-full text-left px-10 py-2"
            >
              Auto-Detect
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Location;
