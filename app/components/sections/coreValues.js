/** @format */

import { Box, Grid, Text, Img } from "@chakra-ui/react";
import { t } from "i18next";
import React from "react";
import CommunityCore from "../../icons/communityCore.jsx";
import Efficiency from "../../icons/efficiency.jsx";
import Innovation from "../../icons/innovation.jsx";
import Reliability from "../../icons/reliability.jsx";

const CoreValueRows = ({ icon, title, description, border }) => {
    return (
        <Grid
            w={{ lg: "90vw", base: "full" }}
            maxW={"1500px"}
            gridAutoFlow={"row"}
            gridTemplateColumns={{
                lg: "repeat(2,1fr)",
                base: "repeat(1,1fr)",
            }}
            rowGap={{ lg: "1rem", base: "0.5rem" }}
            columnGap={"1rem"}
            justifyContent={"space-between"}
            alignItems={{ lg: "center", base: "start" }}
            borderBottom={border}
            borderColor={"#545959"}
            pb={"10"}
        >
            <Box
                pl={{ md: "0", base: "5vw" }}
                display={"flex"}
                flexDir={"row"}
                justifyContent={{ lg: "start", base: "start" }}
                alignItems={{ lg: "center", base: "center" }}
            >
                <Box
                    // w={{ base: "20%", sm: "12%", md: "8%", xl: "7%" }}
                >
                    {icon}
                </Box>
                <Text
                    px={"1.5rem"}
                    fontFamily={"silka"}
                    fontWeight={"semibold"}
                    fontSize={{ base: "18px", lg: "16px" }}
                    color={"white"}
                >
                    {t(title)}

                </Text>
            </Box>
            <Text
                px={{ lg: "1rem", base: "5vw" }}
                pt={{ lg: "0px", base: "1.4rem" }}
                maxW={"100%"}
                fontFamily={"silka"}
                fontWeight={"medium"}
                fontSize={{ lg: "14px", base: "12px" }}
                lineHeight={"224%"}
                color={"#929398"}
            >
                {t(description)}
            </Text>
        </Grid>
    );
};

const CoreValues = () => {
    return (
        <Box
            w={"full"}
            py={{ lg: "5%", base: "15%" }}
            bgColor={"primary"}
            display={"flex"}
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Box
                maxW={"1400px"}
                display={"flex"}
                flexDir={"column"}
                justifyContent={"start"}
                alignItems={"start"}
            >
                <Text
                    mb={"4rem"}
                    ml={{ lg: "0", base: "5vw" }}
                    fontFamily={"silka"}
                    fontWeight={"bold"}
                    fontSize={{ lg: "23px", base: "22px" }}
                    color={"white"}
                >
                    {t("Our Core Values")}
                </Text>
                <Grid
                    gridAutoFlow={"row"}
                    gridTemplateRows={"repeat(1,1fr)"}
                    rowGap={"3rem"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    px={"2rem"}
                >
                    <CoreValueRows
                        title={"Reliability"}
                        description={
                            "Completely’s team comprises of dedicated individuals with a high level of desire to make a difference in our customer’s lives."
                        }
                        icon={<Reliability/>}
                        border={"1px"}
                    />
                    <CoreValueRows
                        title={"Efficiency"}
                        description={
                            "Giving our customers the greatest experience possible requires a lot of effort with few resources we have to get the best results."
                        }
                        icon={<Efficiency/>}
                        border={"1px"}
                    />
                    <CoreValueRows
                        title={"Innovation"}
                        description={
                            "New ways of doing things, Drive Changes & Deliver Results"
                        }
                        icon={<Innovation/>}
                        border={"1px"}
                    />
                    <CoreValueRows
                        title={"Community Core"}
                        description={
                            "Completely is committed to local community activities throughout Switzerland."
                        }
                        icon={<CommunityCore/>}
                        border={"0"}
                    />
                </Grid>
            </Box>
        </Box>
    );
};

export default CoreValues;
