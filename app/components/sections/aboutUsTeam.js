import React, { useRef, useState } from "react";
import { css } from "@emotion/react"; // Replace the @emotion/css import
import useDragScroll from "./useDragScroll"; // Update this import based on the custom hook implementation
// import { useTranslation } from "i18next"; // Replace react-i18next with next-i18next

const AboutUsTeam = ({ title, children, services }) => {
  const [grab, setGrab] = useState(false);
  const ref = useRef(null);
//   useDragScroll({
//     sliderRef: ref,
//   });

  const handleMouseDown = () => {
    setGrab(true);
  };

  const handleMouseUp = () => {
    setGrab(false);
  };

//   const { t } = useTranslation(); // Use next-i18next's useTranslation hook

  return (
    <div
      className="w-full gap-3rem flex flex-col justify-center items-center px-2rem lg:px-4rem overflow-hidden"
    >
      <h2
        className="font-silka font-semibold text-28px lg:text-22px text-2B2D33"
      >
        {title}
      </h2>
      <div className="w-full flex items-center relative flex-col justify-center items-center">
        <div
          className="w-full px-5vw max-w-1400px flex justify-center items-center overflow-hidden"
        >
          <div
            className={`flex flex-row gap-${services ? "5%" : "1rem"} justify-between items-start`}
            css={css`
              ::-webkit-scrollbar {
                display: none;
              }
            `}
            style={{
              overflowX: "scroll",
              cursor: grab ? "grabbing" : "grab",
            }}
            ref={ref}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsTeam;
