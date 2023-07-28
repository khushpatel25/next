import ScrollableContainer from "@/app/components/ScrollableContainer";
import Benefit from "@/app/components/benefit";
import Padding from "@/app/components/padding";
import WhiteTickOutline from "@/app/icons/whiteTickOutline";
import React from "react";

const Benefits = () => {
    const tag=["hello","hello2","helo3"]
  return (
    <div className="mt-[14rem] xl:mt-[22rem]">
      <div className="flex justify-center">
        <p className="text-[1.8rem] font-gilroy font-semibold text-center">
          What do you benefit from Completely?
        </p>
      </div>
      <ScrollableContainer classes={"w-full"}>
        <Padding classes={"mt-[5rem] xl:mt-[8rem] flex flex-col items-center "}>
          <div className="flex gap-6 justify-between max-w-[1500px] ">
            <div>
              <Benefit
                heading={"k999"}
                desc={"k943"}
                src={"/images/cleaningcard.png"}
                w={200}
              h={0}
              features={tag}
              />
              
            </div>
            <Benefit
              heading={"k251"}
              desc={"k1377"}
              src={"/images/iphone1.png"}
              w={120}
              h={0}
              features={tag}

            />
            <Benefit
              heading={"k529"}
              desc={"k1084"}
              src={"/images/support.png"}
              w={200}
              h={0}
              features={tag}

            />
          </div>

        </Padding>
      </ScrollableContainer>
    </div>
  );
};

export default Benefits;
