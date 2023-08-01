import { useRef, useState } from 'react';
import css from 'styled-jsx/css'; // If you want to use styled-jsx for inline CSS.

const Timeline = () => {
  const [grab, setGrab] = useState(false);
  const ref = useRef(null);

  const useDragScroll = () => {};

  useDragScroll({
    sliderRef: ref,
    momentumVelocity: 0.5,
  });

  const handleMouseDown = () => {
    setGrab(true);
  };

  const handleMouseUp = () => {
    setGrab(false);
  };

  return (
    <div
      className="py-8 flex w-full text-center flex-col justify-center items-center overflow-hidden mt-[150px]"
    >
      <div
        className="flex w-90vw max-w-1500px relative flex-col justify-start items-start lg:start base:center overflow-x-scroll"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        ref={ref}
        style={{ cursor: grab ? 'grabbing' : 'grab' }}
      >
        <div
          className="hidden lg:block h-1px w-5200px absolute top-15px bg-gradient-to-r from-blackAlpha.50 via-blackAlpha.700 to-blackAlpha.100"
        />
        <div
          className="block lg:hidden h-full w-1px absolute left-15px bottom-0 bg-gradient-to-b from-blackAlpha.50 via-blackAlpha.700 to-blackAlpha.100"
        />
        <div
          className="flex pt-0 lg:pt-0.5rem w-5500px lg:w-5500px base:w-90vw gap-2rem lg:gap-2.5rem flex-col lg:flex-row justify-center lg:start items-start lg:start base:start"
        >
          <div
            className="flex flex-col lg:flex-row min-w-20rem gap-2rem justify-center lg:center items-start lg:center base:start"
          >
            <div
              className="w-30px h-30px min-w-30px z-100 rounded-full bg-accent.900"
            />
            <div className="mt-1.2rem mx-0.4rem flex flex-col text-center lg:text-center justify-center items-start lg:items-center">
              <p className="font-silka font-light text-14px lg:text-14px base:text-12px text-818799">
                2019
              </p>
              <p className="py-1rem font-silka font-semibold text-20px lg:text-20px base:text-14px text-2B2D33">
                The Idea
              </p>
              <p className="font-silka max-w-75% font-medium text-12px lg:text-12px base:text-10px text-8A8A8A px-10 mt-3">
                Flavio and Sandro had the idea to make their program, platform
                accessible to all people in Switzerland.
              </p>
            </div>
          </div>
          <div
            className="flex flex-col lg:flex-row min-w-20rem gap-2rem justify-center lg:center items-start lg:center base:start"
          >
            <div
              className="w-30px h-30px min-w-30px z-100 rounded-full bg-accent.900"
            />
            <div className="mt-1.2rem mx-0.4rem flex flex-col text-center lg:text-center justify-center items-start lg:items-center">
              <p className="font-silka font-light text-14px lg:text-14px base:text-12px text-818799">
                2019
              </p>
              <p className="py-1rem font-silka font-semibold text-20px lg:text-20px base:text-14px text-2B2D33">
                The Idea
              </p>
              <p className="font-silka max-w-75% font-medium text-12px lg:text-12px base:text-10px text-8A8A8A px-10 mt-3">
                Flavio and Sandro had the idea to make their program, platform
                accessible to all people in Switzerland.
              </p>
            </div>
          </div>
          <div
            className="flex flex-col lg:flex-row min-w-20rem gap-2rem justify-center lg:center items-start lg:center base:start"
          >
            <div
              className="w-30px h-30px min-w-30px z-100 rounded-full bg-accent.900"
            />
            <div className="mt-1.2rem mx-0.4rem flex flex-col text-center lg:text-center justify-center items-start lg:items-center">
              <p className="font-silka font-light text-14px lg:text-14px base:text-12px text-818799">
                2019
              </p>
              <p className="py-1rem font-silka font-semibold text-20px lg:text-20px base:text-14px text-2B2D33">
                The Idea
              </p>
              <p className="font-silka max-w-75% font-medium text-9px lg:text-9px base:text-9px text-8A8A8A px-10 mt-3">
                Flavio and Sandro had the idea to make their program, platform
                accessible to all people in Switzerland.
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

const styles = css`
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default Timeline;
