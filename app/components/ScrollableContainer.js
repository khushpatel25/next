"use client";
import React from 'react';

function ScrollableContainer({ children }) {
  return (
    <div className="flex overflow-x-scroll hide-scrollbar">
      <div className=" min-w-max">
        {children}
      </div>
    </div>
  );
}

export default ScrollableContainer;
