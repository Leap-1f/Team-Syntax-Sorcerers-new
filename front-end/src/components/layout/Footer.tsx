"use client";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import Button from "@mui/material/Button";
import Image from "next/image";
import { FC, cloneElement, useState } from "react";
import Link from "next/link";

interface SocialLinkProps {
  name: string;
  href: string;
  icon: JSX.Element;
}

const SocialLink: FC<SocialLinkProps> = ({ name, href, icon }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {cloneElement(icon, { style: { fontSize: 20 } })}
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
  const findItFastLinks = ["Privacy Notice", "Delivery Information"];
  const popularCategoriesLinks = ["Sneaker", "Basketball"];

  const PopularLinksComponents = ({ popularCategoriesLinks }: any) => {
    const [showPopularCategoriesLinks, setShowPopularCategoriesLinks] =
      useState(false);

    const handleCategoryClick = () => {
      setShowPopularCategoriesLinks(true);
    };
  };

  return (
    <footer className="w-[100%] flex justify-center items-center px-16 py-20 bg-neutral-800 max-md:px-5">
      <div className="flex gap-5 justify-between items-start mt-6 max-w-full w-[1662px] max-md:flex-wrap">
        <div className="flex flex-col self-stretch my-auto text-base max-md:max-w-full">
          <Link href={"/"}>
            <Image
              loading="lazy"
              src="https://res.cloudinary.com/dqhy9ufze/image/upload/v1715593234/Screenshot_2024-05-13_at_17.30.08-removebg-preview_qk0xld.png"
              width={100}
              height={100}
              alt="Gota Store logo"
              className="aspect-[2.44] w-[150px] h-[100px]"
            />
          </Link>
          <div className="mt-6 text-base leading-7 text-zinc-500 max-md:max-w-full">
            Vortex Kicks is a premium theme with advanced admin module.
            <br />
            It,s extremely customizable, easy to use and fully responsive and
            retina ready.
          </div>
          <div className="flex justify-between gap-5 mt-6 text-white max-md:flex-wrap">
            <Link href={"/contactUs"}>
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
                Бидэнтэй холбоо барих
              </Button>
            </Link>
          </div>
          <div className="mt-9 leading-7 text-teal-500 max-md:max-w-full">
            Gota.mn 2024. Made with heart. Powered by Team-Syntax
          </div>
        </div>
        <nav className="flex flex-col self-stretch text-base text-zinc-500">
          <h2 className="text-xl font-semibold leading-6 text-white uppercase">
            Тусламж
          </h2>
          <div className="flex flex-col ">
            {findItFastLinks.map((link) => (
              <Button
                key={link}
                className="mt-3 align-baseline"
                disabled
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
            Ангилал
          </h2>
          <div className="flex flex-col ">
            {popularCategoriesLinks.map((link, index) => (
              <Link href={"/shop"} key={index}>
                <Button
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
              </Link>
            ))}
          </div>
        </nav>
        <div className="shrink-0 mt-1.5 w-px bg-neutral-700 h-[214px]" />
        <div className="flex flex-col text-white">
          <h2 className="text-xl font-semibold leading-6 uppercase">
            Сошиал хаягууд
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
