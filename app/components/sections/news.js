'use client'

import { Box, Text, Grid, Skeleton } from "@chakra-ui/react";
import { css } from "@emotion/css";
import React, { useContext, useEffect, useState } from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";

// import StrapiContext from "../../utils/contexts/strapiContext";
import RecentPostsCard from "../cards/recentPostsCard";

// import { useLocation, useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";
import { t } from "i18next";

const News = ({ setCurrentId, heading, display }) => {

    const router = useRouter();
    const path = router.pathname;
    //   const currentPath = useLocation();
    //   const path = currentPath.pathname;

    //   const Router = useNavigate();

    //   const strapiContext = useContext(StrapiContext);
    //   const { blogs, fetchBlogs, fetchBlogData } = strapiContext;

    const handleSelect = (blog) => {
        fetchBlogData(blog.id).then(() => {
            router.push(`/blog/${blog.id}`, { state: { selectedBlog: blog } });
        });
    };

    const ref = useRef();
    const isOnScreen = useInView(ref);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchBlogs().then(() => {
            setIsLoading(false);
        });
    }, []);

    useEffect(() => {
        if (
            path === "/professional" ||
            path === "/howitworks/professional" ||
            path === "/howitworks/customer"
        )
            return;
    }, [isOnScreen]);

    useEffect(() => {
        if (isOnScreen === true) {
            setCurrentId ? setCurrentId(`#${ref.current.id}`) : console.log("is on screen");
        }
    }, [isOnScreen]);

    return (
        <Box
            ref={ref}
            id="news"
            w="full"
            maxW="1500px"
            display={display ? display : "flex"}
            flexDir="column"
            overflow="hidden"
            px={{ base: "5vw", lg: "5rem", xl: "4rem" }}
            pt={{ base: "5vw", lg: "5rem", xl: "8rem" }}
            mt={{ base: "-5vw", lg: "-5rem", xl: "-8rem" }}
            pb={{ base: "5vw", lg: "5rem", xl: "4rem" }}
        >
            <Box
                display="flex"
                flexDir="row"
                justifyContent="space-between"
                alignItems="center"
                pb={10}
            >
                <Text
                    color="#2B2D33"
                    fontSize={{ lg: "25px", base: "16px" }}
                    fontWeight="semibold"
                >
                    {t(heading)}
                </Text>
            </Box>
            <Grid
                gridAutoFlow={{ base: "row", lg: "row" }}
                // templateRows={{ lg: "repeat(3,1fr)", xl: "repeat(3,1fr)" }}
                templateColumns={{ lg: "repeat(2,1fr)", xl: "repeat(3,1fr)" }}
                pr={{ xl: "0", base: "5vw" }}
                gap={{ base: "8vw", lg: "6", xl: "16" }}
                w="full"
                className={css`
          ::-webkit-scrollbar {
            display: "none";
          }
        `}
                overflowX="scroll"
                scrollBehavior="smooth"
                justifyItems="center"
            >
                {isLoading ? (
                    <>
                        <Skeleton height="240px" width="100%" rounded={'2xl'} mb="4" />
                        <Skeleton height="240px" width="100%" rounded={'2xl'} mb="4" />
                        <Skeleton height="240px" width="100%" rounded={'2xl'} mb="4" />
                        <Skeleton height="240px" width="100%" rounded={'2xl'} mb="4" />
                        <Skeleton height="240px" width="100%" rounded={'2xl'} mb="4" />
                        <Skeleton height="240px" width="100%" rounded={'2xl'} mb="4" />
                    </>
                ) : (
                    blogs.map((blog) => (
                        <RecentPostsCard
                            tag={blog.attributes.categories.data[0].attributes.Category}
                            blogImage={`https://blog.completely.ch${blog.attributes.featuredImage.data.attributes.url}`}
                            key={blog.id}
                            date={blog.attributes.PublishedDate}
                            title={blog.attributes.Title}
                            onClick={() => handleSelect(blog)}
                        />
                    ))
                )}
            </Grid>
        </Box>
    );
};

export default News;
