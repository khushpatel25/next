"use client";
import React from "react";
import useDragScroll from "../hooks/useDragScroll";

function ScrollableContainer({ children }) {
  const {
    scrollContainerRef,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onMouseMove,
  } = useDragScroll();
  return (
    <div
      className="flex overflow-x-scroll hide-scrollbar cursor-pointer md:cursor-default"
      ref={scrollContainerRef}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      <div className=" min-w-max">{children}</div>
    </div>
  );
}

export default ScrollableContainer;
