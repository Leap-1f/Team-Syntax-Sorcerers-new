"use client";
import React, { useState } from "react";

export const BestSellers = () => {
  const [hoverStates, setHoverStates] = useState([false, false, false, false]);

  const handleMouseEnter = (index) => {
    setHoverStates((prevStates) => {
      const newHoverStates = [...prevStates];
      newHoverStates[index] = true;
      return newHoverStates;
    });
  };

  const handleMouseLeave = (index) => {
    setHoverStates((prevStates) => {
      const newHoverStates = [...prevStates];
      newHoverStates[index] = false;
      return newHoverStates;
    });
  };

  return (
    <div className="w-[100vw] h-[90vh] flex flex-col items-center bg-white gap-[100px]">
      <div className="flex flex-col justify-center items-center gap-[10px] ">
        <h1 className="text-[36px] font-semibold">EXPLORE OUR BESTSELLERS</h1>
        <p className="text-center text-[15px] text-[#666]">
          Commodo sociosqu venenatis cras dolor sagittis integer luctus <br />{" "}
          sem primis eget maecenas sed urna malesuada.
        </p>

        <div className="flex gap-[1px]  font-semibold cursor-pointer">
          <div className="w-[140px] h-[50px] border-2 border-gray-400 duration-200  flex justify-center items-center hover:border-[#2BB9A9] hover:text-[#2BB9A9] hover:duration-200">
            All Shoes
          </div>
          <div className="w-[140px] h-[50px] border-2 border-gray-400 duration-200  flex justify-center items-center hover:border-[#2BB9A9] hover:text-[#2BB9A9] hover:duration-200">
            Men's
          </div>
          <div className="w-[140px] h-[50px] border-2 border-gray-400 duration-200  flex justify-center items-center hover:border-[#2BB9A9] hover:text-[#2BB9A9] hover:duration-200">
            Women's
          </div>
          <div className="w-[140px] h-[50px] border-2 border-gray-400 duration-200  flex justify-center items-center hover:border-[#2BB9A9] hover:text-[#2BB9A9] hover:duration-200">
            Kids
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-[1400px] h-[360px]">
        {[0, 1, 2, 3].map((index) => (
          <a
            key={index}
            href="#"
            className="w-[330px] h-[460px]  hover:opacity-70 flex flex-col  justify-center items-center group group-hover:rotate-3 hover:scale-105 hover:shadow-2xl duration-300 relative"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            {/* Product Image */}
            <div>
              <div
                className="w-[250px] h-[300px] hover:duration-200 duration-100 "
                style={{
                  padding: "30px",
                  backgroundImage: `url('${
                    hoverStates[index]
                      ? "https://wphix.com/template/gota/gota/assets/img/product/17-2.jpg"
                      : "https://wphix.com/template/gota/gota/assets/img/product/17.jpg"
                  }')`,

                  transform: hoverStates[index]
                    ? "perspective(1000px) rotateY(5deg) rotateX(-5deg)"
                    : "perspective(1000px) rotateY(0deg) rotateX(0deg)",

                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>

            {/* Product Details */}
            <div className="flex flex-col w-[310px] h-[100px] gap-[15px] ">
              <div className="flex justify-between items-center">
                <p className="text-[12px] text-gray-400">SHOES,CLOTHING</p>
                <div className="">star</div>
              </div>
              <div className="border border-gray-400 w-[310px] bg-white"></div>
              <div className="text-[16px] font-semibold tracking-tight flex flex-col gap-[10px]">
                <h1
                  className={
                    hoverStates[index]
                      ? "text-gray-500 underline cursor-pointer tracking-wide"
                      : ""
                  }
                >
                  {hoverStates[index]
                    ? "Add to card + "
                    : "Flat Sandal For Woman"}
                </h1>
                <p>$660.000-$680.000</p>
              </div>
            </div>

            {/* Button */}
            {hoverStates[index] && (
              <div className="flex absolute bottom-100 gap-[20px]">
                <button className=" p-[20px] bg-black text-white px-4 py-2 rounded hover:bg-gray-900 transition duration-300">
                  hi
                </button>
                <button className=" bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300">
                  yu
                </button>
                <button className=" bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300">
                  bn
                </button>
              </div>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};
