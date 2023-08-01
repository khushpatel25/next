/** @format */

import {
    Box,
    Grid,
    Image,
    Text,
} from "@chakra-ui/react"
import { t } from "i18next"
import React from "react"

const Brands = () => {
    return (
        <Box
            w={"full"}
            maxW={"1500px"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            gap={"3rem"}
            alignItems={"center"}
        >
            <Text
                fontFamily={"silka"}
                fontWeight={"semibold"}
                fontSize={{ md: "28px", base: "22px" }}
                color={"primary"}
            >
                {t("Backed By")}
            </Text>
            <Grid
                autoFlow="row"
                templateColumns={{
                    base: "repeat(1,1fr)",
                    sm: "repeat(2,1fr)",
                    md: "repeat(3,1fr)",
                    lg: "repeat(7,1fr)",
                }}
                justifyItems="center"
                alignItems="center"
                rowGap="2rem"
                width="95%"
            >
                <Image
                    src={"/images/brands/swisscom.webp"}
                    alt={"image of a brand"}
                    width={{ lg: "55%", md: "40%", base: "43%" }}
                />
                <Image
                    src={"/images/brands/googleStartup.webp"}
                    alt={"image of a brand"}
                    width={{ lg: "55%", md: "40%", base: "48%" }}
                />
                <Image
                    src={"/images/brands/stripe.webp"}
                    alt={"image of a brand"}
                    width={{ lg: "30%", md: "22%", base: "20%" }}
                />
                <Image
                    src={"/images/brands/sbb.webp"}
                    alt={"image of a brand"}
                    width={{ lg: "55%", md: "40%", base: "43%" }}
                />
                <Image
                    src={"/images/brands/creditSuisse.webp"}
                    alt={"image of a brand"}
                    width={{ lg: "60%", md: "43%", base: "33%" }}
                />
                <Image
                    src={"/images/brands/bexio.webp"}
                    alt={"image of a brand"}
                    width={{ lg: "30%", md: "16%", base: "16%" }}
                />
                <Image
                    src={"/images/brands/serviceklick.webp"}
                    alt={"image of a brand"}
                    width={{ lg: "55%", md: "30%", base: "33%" }}
                />
            </Grid>
        </Box>
    )
}

export default Brands
