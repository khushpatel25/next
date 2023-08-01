import React from 'react'
import { Box, Link, Text, Image } from "@chakra-ui/react";
import { t } from 'i18next';


const RecentPostsCard = ({ tag, blogImage, title, date, href, ...props }) => {
    return (
        <Box
            py={"1.5rem"}
            {...props}
        >
            <Box as={Link}
                href={href} position={"relative"} objectFit={"cover"}>
                <Image
                    src={blogImage}
                    alt='Blog main picture'
                    width={{ base: "80vw", lg: "35vw", '3xl': "45vw" }}
                    height={{ base: "30vh", lg: "35vh", '3xl': "30vh" }}
                    borderRadius={"18px"}
                    objectFit={"cover"}
                />
                <Box
                    py={"0.4rem"}
                    px={".75rem"}
                    bgColor={"white"}
                    borderRadius={"full"}
                    mb={"0.75rem"}
                    ml={"0.8rem"}
                    display={"flex"}
                    position={"absolute"}
                    bottom={"0.3rem"}
                >
                    <Text
                        fontSize={{ base: "12px", lg: "12px" }}
                        fontWeight={"medium"}
                        color={"black"}
                    >
                        {t(tag)}
                    </Text>
                </Box>
            </Box>
            <Box pt={"1.5rem"}>
                <Text
                    fontSize={{ base: "12px", md: "12px", lg: "16px", xl: "16px" }}
                    maxW={"27rem"}
                    fontWeight={"semibold"}
                    color={"#2B2D33"}
                    pb={"2"}
                >
                    {t(title)}
                </Text>
                <Text
                    fontSize={{ base: "10px", lg: "12px" }}
                    fontWeight={"medium"}
                    color={"#818799"}
                >
                  {t("Published on ")}  {date}
                </Text>
            </Box>
        </Box>
    )
}

export default RecentPostsCard
