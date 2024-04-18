import * as React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import Button from "@mui/material/Button";

interface SocialLinkProps {
    name: string;
    href: string;
    icon: JSX.Element;
}

const SocialLink: React.FC<SocialLinkProps> = ({ name, href, icon }) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            {React.cloneElement(icon, { style: { fontSize: 20 } })}
        </a>
    );
};

const socialLinks = [
    {
        name: "Facebook",
        href: "https://www.facebook.com/",
        icon: <FacebookIcon />,
    },
    { name: "Twitter", href: "https://twitter.com/", icon: <TwitterIcon /> },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/",
        icon: <LinkedInIcon />,
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/",
        icon: <InstagramIcon />,
    },
    {
        name: "Pinterest",
        href: "https://www.pinterest.com/",
        icon: <PinterestIcon />,
    },
];

function Footer() {
    const findItFastLinks = [
        "Privacy Notice",
        "Shopping FAQs",
        "Returns & Refunds",
        "Sale Terms & Conditions",
        "Delivery Information",
    ];
    const popularCategoriesLinks = [
        "Sneaker",
        "Clothing & Stools",
        "Helmet for Women's",
        "Basketball",
        "Men's Running",
    ];

    return (
        <footer className="flex justify-center items-center px-16 py-20 bg-neutral-800 max-md:px-5">
            <div className="flex gap-5 justify-between items-start mt-6 max-w-full w-[1662px] max-md:flex-wrap">
                <div className="flex flex-col self-stretch my-auto text-base max-md:max-w-full">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8dd0365eecf8e481f916bd7d08dd80faa7d45a10826dbb783d0b5eb82d88665?apiKey=d143e53a0810429f951a4f5ac8caff7f&"
                        alt="Gota Store logo"
                        className="aspect-[2.44] w-[69px]"
                    />
                    <div className="mt-6 text-base leading-7 text-zinc-500 max-md:max-w-full">
                        Gota Store is a premium theme with advanced admin
                        module.
                        <br />
                        It's extremely customizable, easy to use and fully
                        responsive and retina ready.
                    </div>
                    <div className="flex justify-between gap-5 mt-6 text-white max-md:flex-wrap">
                        <Button
                            className="flex text-sm leading-6"
                            variant="text"
                            sx={{
                                color: "white",
                                "&:hover": {
                                    color: "#2BB9A9",
                                },
                            }}
                        >
                            Site Map
                        </Button>
                        <Button
                            className="flex text-sm leading-6"
                            variant="text"
                            sx={{
                                color: "white",
                                "&:hover": {
                                    color: "#2BB9A9",
                                },
                            }}
                        >
                            Search Terms
                        </Button>
                        <Button
                            className="flex text-sm leading-6"
                            variant="text"
                            sx={{
                                color: "white",
                                "&:hover": {
                                    color: "#2BB9A9",
                                },
                            }}
                        >
                            Advanced Search
                        </Button>
                        <Button
                            className="flex text-sm leading-6"
                            variant="text"
                            sx={{
                                color: "white",
                                "&:hover": {
                                    color: "#2BB9A9",
                                },
                            }}
                        >
                            Contact Us
                        </Button>
                    </div>
                    <div className="mt-9 leading-7 text-teal-500 max-md:max-w-full">
                        Copyright ©{" "}
                        <span className="text-teal-500">Gota Store</span> All
                        Rights Reserved. Powered by{" "}
                        <span className="text-teal-500">theme_pure</span>
                    </div>
                </div>
                <nav className="flex flex-col self-stretch text-base text-zinc-500">
                    <h2 className="text-xl font-semibold leading-6 text-white uppercase">
                        FIND IT FAST
                    </h2>
                    <div className="flex flex-col ">
                        {findItFastLinks.map((link) => (
                            <Button
                                key={link}
                                className="mt-3 align-baseline"
                                fullWidth={true}
                                style={{ justifyContent: "flex-start" }}
                                sx={{
                                    color: "white",
                                    "&:hover": {
                                        color: "#2BB9A9",
                                    },
                                }}
                            >
                                {link}
                            </Button>
                        ))}
                    </div>
                </nav>
                <nav className="flex flex-col self-stretch text-base text-zinc-500">
                    <h2 className="text-xl font-semibold leading-6 text-white uppercase">
                        popular categories
                    </h2>
                    <div className="flex flex-col ">
                        {popularCategoriesLinks.map((link) => (
                            <Button
                                key={link}
                                className="mt-3 align-baseline"
                                fullWidth={true}
                                style={{ justifyContent: "flex-start" }}
                                sx={{
                                    color: "white",
                                    "&:hover": {
                                        color: "#2BB9A9",
                                    },
                                }}
                            >
                                {link}
                            </Button>
                        ))}
                    </div>
                </nav>
                <div className="shrink-0 mt-1.5 w-px bg-neutral-700 h-[214px]" />
                <div className="flex flex-col text-white">
                    <h2 className="text-xl font-semibold leading-6 uppercase">
                        On social networks
                    </h2>
                    <div className="flex mt-[20px] flex-row gap-[30px]">
                        {socialLinks.map((link) => (
                            <SocialLink key={link.name} {...link} />
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
