"use client";
import React, { FC, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { TestNewArrivals } from "./TestNewArrivals";

type TTitle = {
  title: string;
};

const titles: TTitle[] = [
  { title: "All shoes" },
  { title: "Mens" },
  { title: "Womens" },
];

interface SectionProps {
  title: string;
}

const Section: FC<SectionProps> = ({ title }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <div
      data-aos="slide-up"
      className="w-[50%]  flex flex-col items-center  gap-[50px] bg-white pt-[20px]"
    >
      <div className="flex flex-col items-center justify-center gap-[30px]">
        <h1 className="text-[36px] font-semibold">{title}</h1>
        <p className="text-center text-[15px] text-[#666]">
          Commodo sociosqu venenatis cras dolor sagittis integer luctus <br />
          sem primis eget maecenas sed urna malesuada.
        </p>
        <div className="flex">
          {titles.map((item, index) => (
            <div
              key={index}
              className="w-[140px] h-[50px] border-2 border-gray-400 duration-200 flex justify-center items-center hover:border-[#2BB9A9] hover:text-[#2BB9A9] hover:duration-200"
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>

      <div
        className="w-[100%]  cursor-pointer justify-evenly"
        data-aos="slide-up"
      >
        <TestNewArrivals />
      </div>
    </div>
  );
};

export const NewArrivals = () => {
  return <Section title="EXPLORE NEW ARRIVALS" />;
};

export const OurFeatures = () => {
  return <Section title="EXPLORE OUR FEATURES" />;
};
