import ScrollableContainer from "@/app/components/ScrollableContainer";
import CleaningCard from "@/app/components/cleaningcard";
import Location from "@/app/components/location";
import Padding from "@/app/components/padding";
import { Tab, Tabs } from "@/app/components/tabs";
import { useTranslations } from "next-intl";
import React from "react";

const Services = () => {
  const t = useTranslations();

  return (
    <div>
      <Padding>
        <Tabs
          tabContainerStyle={
            "mt-16 xl:mt-28 border border-1-black rounded-full p-1"
          }
        >
          <Tab id="1" label={t("k427")}>
            <div className="flex gap-4 md:gap-10">
              <CleaningCard
                src={"/images/cleaning.webp"}
                href={"/aboutus"}
                service={t("k701")}
                active={true}
              />
              <CleaningCard
                src={"/images/service2.webp"}
                href={"/aboutus"}
                service={t("k575")}
                active={true}
              />
              <CleaningCard
                src={"/images/service4.webp"}
                href={"/aboutus"}
                service={t("k279")}
                active={true}
              />
              <CleaningCard
                src={"/images/carpet.webp"}
                href={"/aboutus"}
                service={t("k406")}
                active={false}
              />
              <CleaningCard
                src={"/images/products.webp"}
                href={"/aboutus"}
                service={t("k428")}
                active={false}
              />
            </div>
          </Tab>
          <Tab id="2" label={t("k703")}>
            <div className="flex gap-4 md:gap-10">
              <CleaningCard
                src={"/images/chef.webp"}
                href={"/aboutus"}
                service={t("k991")}
                active={true}
              />
              <CleaningCard
                src={"/images/hospitality2.webp"}
                href={"/aboutus"}
                service={t("k1076")}
                active={true}
              />
              <CleaningCard
                src={"/images/sommelier.webp"}
                href={"/aboutus"}
                service={t("k1350")}
                active={true}
              />
              <CleaningCard
                src={"/images/wine.webp"}
                href={"/aboutus"}
                service={t("k1349")}
                active={false}
              />
            </div>
          </Tab>
          <Tab
            id="3"
            label={t("k702")}
            disabled="true"
            extraComponent={
              <p className="text-[12px] inline pl-4">{t("k439")}</p>
            }
          >
            <div>Content for Tab 1</div>
          </Tab>
          <Tab
            id="4"
            label="Beauty"
            disabled="true"
            extraComponent={
              <p className="text-[12px] inline pl-4">{t("k439")}</p>
            }
          >
            <div>Content for Tab 1</div>
          </Tab>
          <Tab
            id="5"
            label="Sports & Wellness"
            disabled="true"
            extraComponent={
              <p className="text-[12px] inline pl-4">{t("k439")}</p>
            }
          >
            <div>Content for Tab 1</div>
          </Tab>
        </Tabs>
      </Padding>
    </div>
  );
};

export default Services;
