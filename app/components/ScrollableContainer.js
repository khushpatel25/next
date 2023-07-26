"use client";
import React from "react";
import useDragScroll from "../hooks/useDragScroll";
import clsx from "clsx";

function ScrollableContainer({ children, classes }) {
  const {
    scrollContainerRef,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onMouseMove,
  } = useDragScroll();
  return (
    <div
      className="flex overflow-x-scroll  hide-scrollbar snap-start cursor-pointer md:cursor-default"
      ref={scrollContainerRef}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      <div className={clsx(classes, "min-w-max")}>{children}</div>
    </div>
  );
}

export default ScrollableContainer;
