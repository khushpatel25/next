import React from "react";

const DropDown = ({color}) => {
  return (
    <svg
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.0423 7.33936L9.50065 12.881L3.95898 7.33936"
        stroke={color ? color : "#5B686A"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default DropDown;
