"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import SearchIcon from "@mui/icons-material/Search";
import PhoneIcon from "@mui/icons-material/Phone";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CartIcon from "../icons/CartIcon";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightsStayIcon from "@mui/icons-material/NightsStay";

interface CategoryItemProps {
    label: string;
    href: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ label, href }) => (
    <Button
        component="a"
        href={href}
        variant="text"
        sx={{
            width: "fit-content",
            color: "black",
            "&:hover": {
                color: "#2BB9A9",
            },
        }}
    >
        {label}
    </Button>
);

const categories: CategoryItemProps[] = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Shop",
        href: "/shop",
    },
    {
        label: "Blog",
        href: "/blog",
    },
    {
        label: "Pages",
        href: "/aboutUs",
    },
    {
        label: "Portfolio",
        href: "/ourService",
    },
    {
        label: "Contact us",
        href: "/contactUs",
    },
];
function Header() {
    //dark mode nemev
    const [darkModeEnabled, setDarkModeEnabled] = useState<boolean>(false);

    useEffect(() => {
        const storedDarkMode = localStorage.getItem("darkModeEnabled");
        if (storedDarkMode === "true") {
            document.body.classList.add("dark-mode");
            setDarkModeEnabled(true);
        }
    }, []);

    const toggleDarkMode = () => {
        const isDarkMode = !darkModeEnabled;
        setDarkModeEnabled(isDarkMode);
        document.body.classList.toggle("dark-mode", isDarkMode);
        localStorage.setItem("darkModeEnabled", isDarkMode.toString());
    };

    return (
        <div
            className={`w-[100%] flex flex-col mb-5 ${
                darkModeEnabled ? "text-white" : "text-black"
            }`}
        >
            <div className="flex flex-wrap gap-5 justify-between py-2 px-4 md:pr-14 md:pl-14 w-full bg-neutral-800">
                <div className="flex gap-5 justify-between my-auto text-base font-medium leading-6 uppercase whitespace-nowrap text-zinc-500">
                    <div className="flex gap-2">
                        <div className="my-auto">usd</div>
                        <KeyboardArrowDownIcon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex gap-2 my-auto">
                        <div className="grow">english</div>
                        <KeyboardArrowDownIcon className="w-5 h-5 text-white" />
                    </div>
                    <Button
                        onClick={toggleDarkMode}
                        sx={{
                            color: darkModeEnabled ? "yellow" : "white ",
                        }}
                    >
                        {darkModeEnabled ? (
                            <LightModeIcon />
                        ) : (
                            <NightsStayIcon />
                        )}
                    </Button>
                </div>
                <div className="flex flex-wrap gap-[300px] justify-between items-center md:flex-nowrap md:max-w-full">
                    <div className="flex flex-col md:flex-row md:items-center justify-center md:justify-start md:w-full">
                        <p className="text-xs leading-7 text-center text-white">
                            DELIVERY TO YOU - Get Free Standard Delivery On All
                            Orders
                        </p>
                        <Button
                            sx={{
                                color: "#2BB9A9",
                                "&:hover": {
                                    color: "white",
                                },
                            }}
                            className="px-6 py-4 -ml-1 text-center rounded appearance-none cursor-pointer bg-transparent border-none"
                        >
                            See Details
                        </Button>
                    </div>

                    <div className="flex gap-5 my-auto text-base font-medium leading-6 text-right uppercase text-zinc-500">
                        <Button
                            sx={{
                                color: "white",
                                "&:hover": {
                                    color: "#2BB9A9",
                                },
                            }}
                            variant="text"
                        >
                            Wishlist
                        </Button>
                        <Button
                            sx={{
                                color: "white",
                                "&:hover": {
                                    color: "#2BB9A9",
                                },
                            }}
                            href="https://www.figma.com/file/FLYc240YNGXmF4kZmp9Bfs?type=design&node-id=1-320&mode=design"
                            variant="text"
                        >
                            Account
                        </Button>
                        <Button
                            sx={{
                                color: "white",
                                "&:hover": {
                                    color: "#2BB9A9",
                                },
                            }}
                            href="https://www.figma.com/file/FLYc240YNGXmF4kZmp9Bfs?type=design&node-id=1-320&mode=design"
                            variant="text"
                        >
                            Checkout
                        </Button>
                        <Button
                            sx={{
                                color: "white",
                                "&:hover": {
                                    color: "#2BB9A9",
                                },
                            }}
                        >
                            Log in & register
                        </Button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center px-16 py-5 w-full text-xs font-bold leading-5 border-b border-gray-200 border-solid text-zinc-500 max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5 justify-between items-center w-full max-w-[1334px] max-md:flex-wrap max-md:max-w-full">
                    <Image
                        loading="lazy"
                        src="https://res.cloudinary.com/dqhy9ufze/image/upload/v1714038144/9c66d8dd02f3646ac9a10299bb4346aab9ee290841253a496877330db28584fd_bpr2lk.png"
                        width={69}
                        height={69}
                        alt=""
                        className="shrink-0 self-stretch my-auto aspect-[2.44] w-[69px]"
                    />
                    <form className="flex gap-5 self-start px-52 py-5 -mr-px text-base border border-solid bg-stone-50 border-zinc-300 rounded-[50px] text-stone-500 max-md:flex-wrap max-md:px-5">
                        <label htmlFor="search" className="sr-only">
                            Enter keywords to search...
                        </label>
                        <input
                            type="text"
                            id="search"
                            placeholder="Enter keywords to search..."
                            className="flex-auto mr-auto max-md:max-w-full"
                        />
                        <button type="submit">
                            <SearchIcon />
                        </button>
                    </form>
                    <div className="flex gap-1.5 self-stretch py-3 my-auto uppercase whitespace-nowrap">
                        <div>usd</div>
                        <KeyboardArrowDownIcon className="w-5 h-5 text-black" />
                    </div>
                    <div className="flex gap-2 self-stretch my-auto uppercase whitespace-nowrap">
                        <div className="my-auto">english</div>
                        <KeyboardArrowDownIcon className="w-5 h-5 text-black" />
                    </div>
                    <div className="flex gap-5 justify-between self-start text-base font-semibold text-white">
                        <Button
                            sx={{
                                borderRadius: "50%",
                            }}
                        >
                            {" "}
                            <MoreHorizIcon
                                sx={{
                                    color: "black",
                                    "&:hover": { color: "#2BB9A9" },
                                }}
                                className="shrink-0 my-auto w-8 aspect-[1.5]"
                            />
                        </Button>
                        <Button>
                            {" "}
                            <div className="flex gap-5 justify-end px-9 py-4 bg-teal-500 rounded max-md:px-5 align-baseline items-center">
                                <CartIcon />
                                <div className="text-white">My Bag (2)</div>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="flex gap-5 justify-between self-center mt-3.5 w-full max-w-[1368px] text-neutral-800 max-md:flex-wrap max-md:max-w-full">
                <nav className="flex gap-5 justify-between items-center px-5 uppercase leading-[150%] max-md:flex-wrap">
                    <div className="flex gap-5 self-stretch text-base font-bold leading-6">
                        <Button className="flex justify-center py-4rounded max-md:px-5">
                            <DensityMediumIcon />
                        </Button>
                        <div>
                            <p>browse categories</p>
                        </div>
                    </div>
                    <KeyboardArrowDownIcon className="w-5 h-5 text-black" />

                    <div className="shrink-0 self-stretch my-auto w-0.5 h-6 bg-gray-200" />
                    <div className="flex gap-[50px] justify-between self-stretch my-auto text-base font-semibold whitespace-nowrap">
                        {categories.map((category) => (
                            <CategoryItem key={category.label} {...category} />
                        ))}
                    </div>
                    <div className="flex gap-5 justify-between self-stretch my-auto text-base font-semibold"></div>
                </nav>
                <div className="flex gap-2 self-start px-5 text-base font-bold leading-7">
                    <div className="my-auto mt-2 flex-shrink-0 whitespace-nowrap justify-between self-stretch text-base">
                        <PhoneIcon /> Hotline: (+800) 123 456 7890
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
