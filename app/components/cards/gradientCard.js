/** @format */
'use client'

import React, { useEffect, useRef } from "react";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { t } from "i18next";
import { usePathname } from "next/navigation";

const GradientCardsSection = ({
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    heading1,
    heading2,
    heading3,
    heading4,
    heading5,
    heading6,
    number1,
    number2,
    number3,
    number4,
    number5,
    number6,
    text1,
    text2,
    text3,
    text4,
    text5,
    text6,
    setCurrentId,
}) => {
    const ref = useRef();
    const isOnScreen = useInView(ref);

    //Declaring Constants to call the current path of the page
    const path = usePathname();
    // const currentPath = useLocation();
    // const path = currentPath.pathname;

    useEffect(() => {
        if (
            path == "/professional" ||
            path == "/howitworks/professional" ||
            path == "/howitworks/customer"
        )
            return;
    }, [isOnScreen]);

    useEffect(() => {
        if (isOnScreen == true) {
            if (setCurrentId)
                setCurrentId(`#${ref.current.id}`)
        }
    }, [isOnScreen])

    return (
        <Box
            ref={ref}
            id={"works"}
            w="full"
            display={"flex"}
            justifyContent={"center"}
            py={"12rem"}
            my={"-6rem"}
        >
            <Grid
                w={"90vw"}
                maxW={"1500px"}
                gridAutoFlow={{ lg: "column", base: "row" }}
                gridTemplateColumns={{
                    lg: "repeat(1, 0.55fr 0.4fr)",
                    base: "repeat(1, 1fr )",
                }}
                gridTemplateRows={{
                    base: "repeat(1, 0.4fr 0.6fr)",
                    lg: "none",
                }}
                columnGap={{ base: "0.8rem", lg: "1.2rem" }}
                rowGap={{ base: "0.8rem", lg: "1.2rem" }}
                height={{ lg: "600px", base: "1200px" }}
                justifyContent={"center"}
            >
                {/* left Column */}
                <Grid
                    gridAutoFlow={"column"}
                    gridTemplateRows={"repeat(2,1fr )"}
                    rowGap={{ base: "0.8rem", lg: "1.2rem" }}
                >
                    {/* left column 1st row */}
                    <GridItem
                        bgImage={Img1}
                        bgPosition={"center"}
                        bgSize={"cover"}
                        bgRepeat={"no-repeat"}
                        borderRadius={"20px"}
                        display={"flex"}
                        justifyContent={"end"}
                    >
                        <Box
                            alignSelf={"center"}
                            display={"flex"}
                            flexDir={"column"}
                            maxW={"10rem"}
                            px={"1rem"}
                        >
                            <Text color={"#D7D7D7"} fontSize={"16"} fontWeight={"500"}>
                                {t(heading1)}
                            </Text>
                            <Text color={"white"} fontSize={"35"} fontWeight={"600"}>
                                {t(number1)}
                            </Text>
                            <Text color={"#D7D7D7"} fontSize={"12"} fontWeight={"400"}>
                                {t(text1)}
                            </Text>
                        </Box>
                    </GridItem>
                    {/* left column 2nd Row */}
                    <Grid
                        gridAutoFlow={"row"}
                        gridTemplateColumns={{
                            lg: "repeat(1,0.525fr 0.475fr )",
                            base: "repeat(2,1fr)",
                        }}
                        columnGap={{ base: "0.8rem", lg: "1.2rem" }}
                        rowGap={{ base: "0.8rem", lg: "1.2rem" }}
                    >
                        {/* left Column 2nd Row 1st Column */}
                        <GridItem
                            bgImage={Img2}
                            bgPosition={"center"}
                            bgSize={"cover"}
                            bgRepeat={"no-repeat"}
                            borderRadius={"20px"}
                            display={"flex"}
                            justifyContent={"end"}
                        >
                            <Box
                                pl={"1rem"}
                                alignSelf={"center"}
                                display={"flex"}
                                flexDir={"column"}
                                maxW={"10rem"}
                                px={"1rem"}
                            >
                                <Text color={"#D7D7D7"} fontSize={"16"} fontWeight={"500"}>
                                    {t(heading2)}
                                </Text>
                                <Text color={"white"} fontSize={"35"} fontWeight={"600"}>
                                    {t(number2)}
                                </Text>
                                <Text color={"#D7D7D7"} fontSize={"12"} fontWeight={"400"}>
                                    {t(text2)}
                                </Text>
                            </Box>
                        </GridItem>
                        {/* left column 2nd row 2nd column */}
                        <GridItem
                            bgImage={Img3}
                            bgPosition={"center"}
                            bgSize={"cover"}
                            bgRepeat={"no-repeat"}
                            borderRadius={"20px"}
                            display={"flex"}
                            justifyContent={"start"}
                        >
                            <Box
                                pl={"1rem"}
                                alignSelf={"center"}
                                display={"flex"}
                                flexDir={"column"}
                                maxW={"10rem"}
                                px={"1rem"}
                            >
                                <Text color={"#D7D7D7"} fontSize={"16"} fontWeight={"500"}>
                                    {t(heading3)}
                                </Text>
                                <Text color={"white"} fontSize={"35"} fontWeight={"600"}>
                                    {t(number3)}
                                </Text>
                                <Text color={"#D7D7D7"} fontSize={"12"} fontWeight={"400"}>
                                    {t(text3)}
                                </Text>
                            </Box>
                        </GridItem>
                    </Grid>
                </Grid>
                {/* 2nd column */}
                <Grid
                    gridAutoFlow={"column"}
                    gridTemplateRows={"repeat(1,0.333fr 0.333fr 0.333fr )"}
                    rowGap={{ base: "0.8rem", lg: "1.2rem" }}
                >
                    {/* 2nd Column 1st row */}
                    <GridItem
                        bgImage={Img4}
                        bgPosition={"center"}
                        bgSize={"cover"}
                        bgRepeat={"no-repeat"}
                        borderRadius={"20px"}
                        display={"flex"}
                        justifyContent={"end"}
                    >
                        <Box
                            pl={"1rem"}
                            alignSelf={"center"}
                            display={"flex"}
                            flexDir={"column"}
                            maxW={"10rem"}
                            px={"1rem"}
                        >
                            <Text color={"#D7D7D7"} fontSize={"16"} fontWeight={"500"}>
                                {t(heading4)}
                            </Text>
                            <Text color={"white"} fontSize={"35"} fontWeight={"600"}>
                                {t(number4)}
                            </Text>
                            <Text color={"#D7D7D7"} fontSize={"12"} fontWeight={"400"}>
                                {t(text4)}
                            </Text>
                        </Box>
                    </GridItem>
                    {/* 2nd Column 2nd Row */}
                    <GridItem
                        bgImage={Img5}
                        bgPosition={"center"}
                        bgSize={"cover"}
                        bgRepeat={"no-repeat"}
                        borderRadius={"20px"}
                        display={"flex"}
                        justifyContent={"end"}
                    >
                        <Box
                            pl={"1rem"}
                            alignSelf={"center"}
                            display={"flex"}
                            flexDir={"column"}
                            maxW={"10rem"}
                            px={"1rem"}
                        >
                            <Text color={"#D7D7D7"} fontSize={"16"} fontWeight={"500"}>
                                {t(heading5)}
                            </Text>
                            <Text color={"white"} fontSize={"35"} fontWeight={"600"}>
                                {t(number5)}
                            </Text>
                            <Text color={"#D7D7D7"} fontSize={"12"} fontWeight={"400"}>
                                {t(text5)}
                            </Text>
                        </Box>
                    </GridItem>
                    {/* 2nd Column 3rd Row */}
                    <GridItem
                        bgImage={Img6}
                        bgPosition={"center"}
                        bgSize={"cover"}
                        bgRepeat={"no-repeat"}
                        borderRadius={"20px"}
                        display={"flex"}
                        justifyContent={"end"}
                    >
                        <Box
                            pl={"1rem"}
                            alignSelf={"center"}
                            display={"flex"}
                            flexDir={"column"}
                            maxW={"10rem"}
                            px={"1rem"}
                        >
                            <Text color={"#D7D7D7"} fontSize={"16"} fontWeight={"500"}>
                                {t(heading6)}
                            </Text>
                            <Text color={"white"} fontSize={"35"} fontWeight={"600"}>
                                {t(number6)}
                            </Text>
                            <Text color={"#D7D7D7"} fontSize={"12"} fontWeight={"400"}>
                                {t(text6)}
                            </Text>
                        </Box>
                    </GridItem>
                </Grid>
            </Grid>
        </Box>
    );
};

export default GradientCardsSection;
