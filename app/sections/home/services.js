import ScrollableContainer from "@/app/components/ScrollableContainer";
import CleaningCard from "@/app/components/cleaningcard";
import Padding from "@/app/components/padding";
import { Tab, Tabs } from "@/app/components/tabs";
import { useTranslations } from "next-intl";
import React from "react";

const Services = () => {
    const t=useTranslations()
  return (
    
    <div >
      <Padding>
        <Tabs tabContainerStyle={'mt-16 xl:mt-32 border border-1-black rounded-full p-1'}>
          <Tab id="1" label={t("k427")} >
            <div><CleaningCard src={"/images/cleaning.webp"} href={'/aboutus'} service={t("k701")} active={true}/></div>
          </Tab>
          <Tab id="2" label={t("k703")} >
            <div>Content for Tab 1</div>
          </Tab>
          <Tab id="3" label={t("k702")} disabled="true" extraComponent={<p className="text-[12px] inline pl-4">{t("k439")}</p>}>
            <div>Content for Tab 1</div>
          </Tab>
          <Tab id="4" label="Beauty" disabled="true" extraComponent={<p className="text-[12px] inline pl-4">{t("k439")}</p>}>
            <div>Content for Tab 1</div>
          </Tab>
          <Tab id="5" label="Sports & Wellness" disabled="true" extraComponent={<p className="text-[12px] inline pl-4">{t("k439")}</p>}>
            <div>Content for Tab 1</div>
          </Tab>
        </Tabs>
      </Padding>
    </div>

  );
};

export default Services;
