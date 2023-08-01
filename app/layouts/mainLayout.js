'use client'

import { Box, Button, Link, Menu, MenuButton, MenuItem, MenuList, useDisclosure } from '@chakra-ui/react';
import React, { useContext, useLayoutEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import ServicesDropDown from '../dropdown/servicesdropdown';
import Navbar from '../navbar';
import Announcementbar from '../sections/announcementbar';
import Dropdown from "../icons/dropDown.jsx";
import World from "../icons/world.jsx";
import { LanguageContext } from "../../utils/contexts/LanguageContext";
import English from '../icons/english.jsx';
import Deutsch from '../icons/deutsch.jsx';
import French from '../icons/french.jsx';
import Italian from '../icons/italian.jsx';
import Portugues from '../icons/portugues.jsx';
import SignupButton from '../signupButton';
import DownloadTheApp from '../modals/downloadTheApp';
import Man from '../icons/man.jsx';
import NewToCompletely from '../sections/newToCompletely';
import Footer from '../footer';
import { useTranslation } from 'react-i18next';
import Croatia from '../icons/croatia';
import Turkey from '../icons/turkey';





// a function to show an active link in the navbar depending on the path
const LinkItem = ({ href, target, children, ...props }) => {
    //Declaring Constants to call the current path of the page
    const currentPath = useLocation();
    const path = currentPath.pathname;
    const active = path === href;
    const inactiveColor = "#A5A9AA";
    const activeColor = "#23B4E1";

    const routeTo = useNavigate();
    const handleClick = () => {
        routeTo(href)
    }


    return (

        <Link onClick={() => handleClick()} _hover={{ textDecoration: "none" }}>
            <Box display={"flex"} flexDirection={"row"} m={0} p={0}>
                <Link
                    p={"0px 30px 0px 0px"}
                    color={active ? activeColor : inactiveColor}
                    target={target}
                    {...props}
                    _hover={{ color: "#23B4E1" }}
                    _active={{
                        bgColor: "#E5F5F8",
                        borderRadius: "10px",
                    }}
                >
                    {children}
                </Link>
            </Box>
        </Link>
    );
};

const MainLayout = ({
    children,
    bColor,   //background color for children
    sectionGap, //Gap between each section
    title  //Page Title for head tag.
}) => {
    //To change the language
    const { t, i18n } = useTranslation();

    //Declaring Constants to call the current path of the page
    const currentPath = useLocation();
    const path = currentPath.pathname;
    const inactiveColor = "#5B686A";
    //change color when scroll
    const [initialColor, setinitialColor] = useState("#A3A3A3");

    const changeLogoScroll = () => {
        if (window.scrollY >= 50) {
            setinitialColor(inactiveColor)
        } else {
            setinitialColor(initialColor)
        }
    }

    React.useEffect(() => {
        window.addEventListener("scroll", changeLogoScroll);
    }, []);

    //a function to switch the color based on the background color of different pages
    const getNavColor = () => {
        switch (path) {
            case "/":
                return inactiveColor;
            case "/aboutus":
                return initialColor;
            case "/services/privatechef":
                return initialColor;
            case "/professional":
                return inactiveColor;
            case "/newsroom":
                return initialColor;
            case "/againstdiscrimination":
                return initialColor

            default:
                return "";
        }
    }

    const mainRef = useRef();

    const [openService, setOpenService] = useState(false);

    const [closeBg, setCloseBg] = useState(false);

    const [height, setHeight] = useState("");

    const bgColor = bColor ? bColor : "white";

    const languageContext = useContext(LanguageContext);

    // for download the app modal

    const {
        isOpen: isDownloadModalOpen,
        onOpen: onDownloadModalOpen,
        onClose: onDownloadModalClose,
    } = useDisclosure();

    const finalRef = useRef(null);

    const handleModalBg = () => {
        setCloseBg(!closeBg);
    };

    useLayoutEffect(() => {
        setHeight(`${mainRef.current.clientHeight}px`);
    }, []);

    const languages = [
        {
            lang: "Deutsch",
            icon: <Deutsch />,
            key: "de",
            isDisabled: false
        },
        {
            lang: "English",
            icon: <English />,
            key: "en",
            isDisabled: false
        },
        // {
        //     lang: "French",
        //     icon: <French />,
        //     key: "fr",
        //     isDisabled: true
        // },
        {
            lang: "Italiano",
            icon: <Italian />,
            key: "it",
            isDisabled: true
        },
        {
            lang: "Portugues",
            icon: <Portugues />,
            key: "pt",
            isDisabled: true
        },
        {
            lang: "Turkish",
            icon: <Turkey />,
            key: "tr",
            isDisabled: true
        },
        {
            lang: "Croatian",
            icon: <Croatia />,
            key: "cr",
            isDisabled: true
        }
    ];

    return (
        <Box
            w={"full"}
            ref={mainRef}
            onClick={() => {
                if (openService === true) {
                    setOpenService(!openService);
                }
            }}
        >
            <head>
                {/* meta tags go here */}
                <title>{title}</title>
                <meta name="facebook-domain-verification" content="99x3r6py4zub91etyk5r6ykoc8ylpg" />
            </head>
            <Announcementbar />
            <Navbar
                servicesDropdown={<ServicesDropDown onOpen={handleModalBg} onClose={handleModalBg} />}
                languageMob={
                    <Menu
                        onOpen={handleModalBg}
                        onClose={handleModalBg}
                        autoSelect={false}
                    >
                        <MenuButton
                            as={Button}
                            variant={"solid"}
                            borderRadius={"full"}
                            px={"4"}
                            py={"2"}
                            alignItems={"center"}
                            justifyContent={"center"}
                            bgColor={"#EBEBEB"}
                            color={"black"}
                            fontSize={"14px"}
                            leftIcon={<World />}
                            textTransform="capitalize"
                        >
                            {localStorage.getItem("getLanguage") ? localStorage.getItem("getLanguage") : "de"}
                        </MenuButton>
                        <MenuList
                            p={"1rem"}
                            // boxSize={"sm"}
                            display={"flex"}
                            flexDir={"column"}
                            borderRadius={"20"}
                            transition={"ScaleFade"}
                            rowGap={"1rem"}
                        >
                            {languages.map((item, idx) => {
                                return (
                                    <Button
                                        as={MenuItem}
                                        key={idx}
                                        leftIcon={item.icon}
                                        justifyContent={"start"}
                                        gap={"1.5rem"}
                                        _active={{
                                            color: "#23B4E1",
                                            borderRadius: "12",
                                        }}
                                        _hover={{
                                            color: "#23B4E1",
                                            borderRadius: "12",
                                            bgColor: "#E5F5F8",
                                        }}
                                        bgColor={"transparent"}
                                        onClick={() => {
                                            i18n.changeLanguage(item.key)
                                            languageContext.setLang(item.key)
                                            localStorage.setItem("getLanguage", item.key)
                                            window.location.reload(true)

                                        }}
                                        disabled={item.isDisabled}
                                    >
                                        {item?.lang}
                                    </Button>
                                );
                            })}
                        </MenuList>
                    </Menu>
                }
            >
                <Box dislay={"flex"}>
                    <Menu
                        onOpen={handleModalBg}
                        onClose={handleModalBg}
                        autoSelect={false}
                    >
                        <MenuButton
                            as={Button}
                            variant="ghost"
                            rightIcon={<Dropdown />}
                            padding="1rem"
                            fontFamily="silka"
                            fontWeight="medium"
                            color={getNavColor()}
                            bgColor="transparent"
                            _hover={{
                                bgColor: "transparent",
                            }}
                            _active={{
                                bgColor: "transparent",
                            }}
                        >
                            {t("More")}
                        </MenuButton>
                        <MenuList borderRadius={"25px"} pl={"1.5rem"} pr={"1rem"} py={"1.5rem"} >
                            <MenuItem color={"#525556"} fontSize={"14px"} py={"0.8rem"} fontWeight={"medium"} as={LinkItem} href="/howitworks">
                                {t("How it works")}
                            </MenuItem>
                            <MenuItem color={"#525556"} fontSize={"14px"} py={"0.8rem"} fontWeight={"medium"} as={LinkItem} href="/newsroom">
                                {t("News Room")}
                            </MenuItem>
                            <MenuItem color={"#525556"} fontSize={"14px"} py={"0.8rem"} fontWeight={"medium"} as={LinkItem} href="/helpcenter">
                                {t("Help Center")}
                            </MenuItem>
                            <MenuItem color={"#525556"} fontSize={"14px"} py={"0.8rem"} fontWeight={"medium"} as={LinkItem} href="/crowdsourcing">
                                {t("Crowdsourcing Community")}
                            </MenuItem>
                            <MenuItem color={"#525556"} fontSize={"14px"} py={"0.8rem"} fontWeight={"medium"} as={LinkItem} href="/privacypolicy">
                                {t("Privacy Policy")}
                            </MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu
                        onOpen={handleModalBg}
                        onClose={handleModalBg}
                        autoSelect={false}
                    >
                        <MenuButton
                            as={Button}
                            variant={"solid"}
                            borderRadius={"full"}
                            px={"4"}
                            py={"2"}
                            alignItems={"center"}
                            justifyContent={"center"}
                            bgColor={"#EBEBEB"}
                            color={"black"}
                            fontSize={"14px"}
                            leftIcon={<World />}
                            textTransform="capitalize"
                        >
                            {localStorage.getItem("getLanguage") ? localStorage.getItem("getLanguage") : "de"}
                        </MenuButton>
                        <MenuList
                            p={"1rem"}
                            // boxSize={"sm"}
                            display={"flex"}
                            flexDir={"column"}
                            borderRadius={"20"}
                            transition={"ScaleFade"}
                            rowGap={"1rem"}
                        >
                            {languages.map((item, idx) => {
                                return (
                                    <Button
                                        as={MenuItem}
                                        key={idx}
                                        leftIcon={item.icon}
                                        justifyContent={"start"}
                                        gap={"1.5rem"}
                                        _active={{
                                            color: "#23B4E1",
                                            borderRadius: "12",
                                        }}
                                        _hover={{
                                            color: "#23B4E1",
                                            borderRadius: "12",
                                            bgColor: "#E5F5F8",
                                        }}
                                        bgColor={"transparent"}
                                        onClick={() => {
                                            i18n.changeLanguage(item.key)
                                            languageContext.setLang(item.key)
                                            localStorage.setItem("getLanguage", item.key)
                                            window.location.reload(true)
                                        }}
                                        isDisabled={item.isDisabled}
                                    >
                                        {item?.lang}
                                    </Button>
                                );
                            })}
                        </MenuList>
                    </Menu>

                </Box>

                <SignupButton onClick={onDownloadModalOpen} />
            </Navbar>

            <DownloadTheApp
                onClose={onDownloadModalClose}
                isOpen={isDownloadModalOpen}

            />
            <Box
                ref={finalRef}
                bgColor={bgColor}
                display={"flex"}
                gap={sectionGap}
                flexDir={"column"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Box
                    display={closeBg == true ? "block" : "none"}
                    w={"full"}
                    h={height}
                    zIndex={10}
                    bgColor={"blackAlpha.700"}
                    position={"absolute"}
                    top={108}
                    left={0}
                    backdropFilter={"blur(2px)"}
                />

                {children}
                <Box display={path === "/advertising" ? "none" : "block"}>
                    <NewToCompletely
                        title={"New to Completely?"}
                        srcLg={<Man />}
                        srcSm={"/images/newToCompletelyGrad.webp"}
                        description={
                            "See upfront pricing, read reviews and chat with pros, all in the app."
                        }
                        bgColor={"accent.900"}
                        titleColor={"white"}
                        desColor={"white"}
                        onDownloadClick={onDownloadModalOpen}
                    />
                </Box>
                <Footer
                    locations={[
                        { name: "Aargau", available: true },
                        {
                            name: "Appenzell-Ausserrhoden",
                            available: false,
                        },
                        {
                            name: "Appenzell-Innerrhoden",
                            available: false,
                        },
                        { name: "Basel-Land", available: true },
                        { name: "Basel-Stadt", available: true },
                        { name: "Bern", available: true },
                        { name: "Fribourg", available: false },
                        { name: "Genf", available: false },
                        { name: "Glarus", available: false },
                        { name: "Graubünden", available: false },
                        { name: "Jura", available: false },
                        { name: "Luzern", available: false },
                        { name: "Neuchâtel", available: false },
                        { name: "Nidwalden", available: false },
                        { name: "Obwalden", available: false },
                        { name: "St.Gallen", available: false },
                        { name: "Schaffhausen", available: false },
                        { name: "Schwyz", available: false },
                        { name: "Solothurn", available: true },
                        { name: "Thurgau", available: false },
                        { name: "Ticino", available: false },
                        { name: "Uri", available: false },
                        { name: "Zug", available: false },
                        { name: "Zürich", available: true },
                    ]}
                />
            </Box>
        </Box>
    )
}

export default MainLayout
