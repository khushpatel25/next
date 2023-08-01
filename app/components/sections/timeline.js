/** @format */
'use client'

import { Box, Center, Text } from "@chakra-ui/react";
import { css } from "@emotion/css";
import { t } from "i18next";
import React, { useRef, useState } from "react";
import useDragScroll from "./useDragScroll";

import WhiteTickOutline from "../../icons/whiteTickOutline.svg";

const Timeline = () => {
    const [grab, setGrab] = useState(false);
    const ref = useRef(null);
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
        <Box
            py={"2rem"}
            display={"flex"}
            w={"full"}
            textAlign={"center"}
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            overflow={"hidden"}
        >
            <Box
                display={"flex"}
                w={"90vw"}
                maxW={"1500px"}
                position={"relative"}
                flexDir={"column"}
                justifyContent={{
                    lg: "start",
                    base: "center",
                }}
                alignItems={"start"}
                overflowX={"scroll"}
                className={css`
          ::-webkit-scrollbar {
            display: none;
          }
        `}
                ref={ref}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                cursor={grab != true ? "grab" : "grabbing"}
            >
                <Box
                    display={{ lg: "block", base: "none" }}
                    h={"1px"}
                    w={"5200px"}
                    position={"absolute"}
                    top={"15px"}
                    maxW={"1500px"}
                    bgGradient={
                        "linear(to-r, blackAlpha.50 0%, blackAlpha.700 3%, blackAlpha.700 50%, blackAlpha.700 96%, blackAlpha.100 100%)"
                    }
                />

                <Box
                    display={{ lg: "none", base: "block" }}
                    h={"100%"}
                    w={"1px"}
                    position={"absolute"}
                    left={"15px"}
                    bottom={"0"}
                    bgGradient={
                        "linear(to-b, blackAlpha.50 0%, blackAlpha.700 10%, blackAlpha.700 50%, blackAlpha.700 90%, blackAlpha.100 100%)"
                    }
                />

                <Box
                    display={"flex"}
                    pt={{ lg: "0", base: "5rem" }}
                    w={{ lg: "5500px", base: "90vw" }}
                    rowGap={"2.5rem"}
                    columnGap={"2rem"}
                    flexDir={{ lg: "row", base: "column" }}
                    justifyContent={{
                        lg: "center",
                        base: "start",
                    }}
                    alignItems={{ lg: "start", base: "start" }}
                >
                    <Box
                        display={"flex"}
                        flexDir={{ lg: "column", base: "row" }}
                        minW={"20rem"}
                        columnGap={"2rem"}
                        justifyContent={"center"}
                        alignItems={{ lg: "center", base: "start" }}
                    >
                        <Box
                            w={"30px"}
                            h={"30px"}
                            minW={"30px"}
                            zIndex={"100"}
                            borderRadius={"full"}
                            bgColor={"accent.900"}
                        />
                        <Box
                            mt={{ lg: "1.2rem", base: "0" }}
                            mx={"0.4rem"}
                            display={"flex"}
                            textAlign={{ lg: "center", base: "start" }}
                            flexDir={"column"}
                            justifyContent={"center"}
                            alignItems={{ lg: "center", base: "start" }}
                        >
                            <Text
                                fontFamily={"silka"}
                                fontWeight={"light"}
                                fontSize={{ lg: "14px", base: "12px" }}
                                color={"#818799"}
                            >

                                {t("2019")}

                            </Text>
                            <Text
                                py={"1rem"}
                                fontFamily={"silka"}
                                fontWeight={"semibold"}
                                fontSize={{ lg: "20px", base: "14px" }}
                                color={"#2B2D33"}
                            >

                                {t("The Idea")}

                            </Text>
                            <Text
                                fontFamily={"silka"}
                                maxW={"75%"}
                                fontWeight={"medium"}
                                fontSize={{
                                    lg: "12px",
                                    base: "10px",
                                }}
                                color={"#8A8A8A"}
                            >


                                {t("Flavio and Sandro had the idea to make their program, platform accessible to all people in Switzerland.")}
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Timeline;
