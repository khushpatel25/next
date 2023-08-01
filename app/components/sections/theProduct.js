/** @format */

import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { t } from "i18next";
import React from "react";

const TheProduct = () => {
    return (
        <Grid
            mt={"4rem"}
            pb={"1rem"}
            w={"90vw"}
            maxW={"1500px"}
            h={"auto"}
            gridAutoFlow={"row"}
            gridTemplateRows={{
                lg: "repeat(1, 1fr 1.2fr)",
                md: "repeat(1, 1fr)",
            }}
            borderRadius={"26px"}
            bgColor={"#F5F7FA"}
            alignItems={"start"}
        >
            {/* Section Image */}
            <GridItem
                borderTopRadius={"26px"}
                h={{ lg: "250px", base: "300px" }}
                bgImage={"/images/theProduct.webp"}
                bgSize={"cover"}
                bgPos={{ lg: "center", base: "right" }}
                bgRepeat={"no-repeat"}
            />

            {/* Two Columns of text under the image */}

            <Grid
                h={"100%"}
                gridAutoFlow={"row"}
                gridTemplateColumns={{
                    lg: "repeat(2,1fr)",
                    base: "repeat(1,1fr)",
                }}
                gap={"2rem"}
                rowGap={"1rem"}
                justifyContent={"center"}
                alignItems={"start"}
            >
                <Box
                    px={"5vw"}
                    py={"2%"}
                    display={"flex"}
                    flexDir={"column"}
                    justifyContent={"center"}
                    alignItems={"start"}
                >
                    <Text
                        pt={{
                            xl: "2rem",
                            lg: "0.2rem",
                            md: "0",
                            base: "2vh",
                        }}
                        pb={"1.5rem"}
                        fontFamily={"silka"}
                        fontWeight={"semibold"}
                        fontSize={{ lg: "22px", sm: "16px" }}
                        color={"#2B2D33"}
                    >
                        {t("The product")}
                    </Text>
                    <Text
                        w={{ lg: "100%", base: "80vw" }}
                        fontFamily={"silka"}
                        fontWeight={"medium"}
                        fontSize={{ lg: "13px", sm: "14px" }}
                        lineHeight={"26px"}
                        color={"#818799"}
                        textAlign={"justify"}
                    >
                        {t("Completely offers instant services to households in Zurich, Lucerne, Aarau, Solothurn, Basel, Appenzell and Bern under the Completely App, giving millions of Swiss households the opportunity to connect with a professional home service provider and vice versa. Whether it's a furniture build up, wall painting or house cleaning, Completely Professional in switzerland is ready to get the job done for you. Our goal is to provide unmatched online services. We are dedicated to providing you with timely solutions for all your home needs, from cleaning, lamp fitting to finding a chef for your family dinner or personal trainer for your workout.")}
                    </Text>
                </Box>
                <Box
                    px={"5vw"}
                    py={"2%"}
                    display={"flex"}
                    flexDir={"column"}
                    justifyContent={"center"}
                    alignItems={"start"}
                >
                    <Text
                        pt={{
                            xl: "2rem",
                            lg: "0.2rem",
                            md: "0",
                            base: "2vh",
                        }}
                        pb={"1.5rem"}
                        fontFamily={"silka"}
                        fontWeight={"semibold"}
                        fontSize={{ lg: "22px", sm: "16px" }}
                        color={"#2B2D33"}
                    >
                        {t("How We Do It")}
                    </Text>
                    <Text
                        w={{ lg: "100%", base: "80vw" }}
                        fontFamily={"silka"}
                        fontWeight={"medium"}
                        fontSize={{ lg: "13px", sm: "14px" }}
                        lineHeight={"26px"}
                        color={"#818799"}
                        textAlign={"justify"}
                    >
                        {t("Completely provides a platform that allows skilled and experienced professionals to connect with users looking for specific services. All the professionals, though experienced and skilled, undergo intensive training modules before being allowed to list their services on the platform. Once on the platform, our match-making algorithm identifies professionals who are closest to the user's requirements and available at the requested time and date.")}
                    </Text>
                </Box>
            </Grid>
        </Grid> 
    );
};

export default TheProduct;
