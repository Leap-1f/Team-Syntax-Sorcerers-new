"use client";
import React, { useState, useEffect, FC, use } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductDialog from "../hover/ProductHover";
import { getProductsBestSellers } from "../admin/productPage/network";
import Link from "next/link";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { Single } from "../single/Single";
import { useSearchParams } from "next/navigation";

interface ProductProps {
  image: string;
  name: string;
  price: string;
  index: number;
  hoverImageUrl: string;
  brand: string;
  pid: string;
  quantity: number;
  category: string;
}

const ProductComponent: FC<ProductProps> = ({
  image,
  name,
  hoverImageUrl,
  price,
  index,
  pid,
  brand,
  quantity,
  category,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState({
    image,
    name,
    hoverImageUrl,
    price,
    index,
    pid,
    quantity,
    brand,
    category,
  });
  const handleClickOpen = (data: any) => {
    setOpen(true);
  };

  const handleClose = (value: any) => {
    setOpen(false);
    setSelectedValue(value);
  };
  var bob = 0;

  return (
    <>
      <ProductDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
      <div
        className="w-[330px] h-[460px] flex flex-col overflow-hidden justify-center items-center group group-hover:rotate-3 group-hover:scale-125 hover:shadow-xl duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-aos="slide-up"
        data-aos-delay={`${index * 200}`}
        style={{ position: "relative" }}
      >
        <div
          className="w-[250px] h-[300px] relative"
          style={{
            padding: "30px",
            backgroundImage: `url(${isHovered ? hoverImageUrl : image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {isHovered && (
            <div
              className="absolute inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center transition-opacity duration-500"
              style={{ opacity: 0.8, zIndex: 1 }}
            >
              <Box
                className="rounded-[50%] px-4 py-2 hover:"
                onClick={handleClickOpen}
              >
                <VisibilityIcon
                  className="text-black hover:text-white"
                  style={{ fontSize: "2rem" }}
                  onClick={handleClickOpen}
                />
              </Box>
            </div>
          )}
        </div>
        <div className="flex flex-col w-[310px] h-[100px] gap-[15px]">
          <div className="flex justify-between items-center">
            <p className="text-[12px] text-gray-400 uppercase ">Shoes</p>
            <p onClick={handleClickOpen}>Star</p>
          </div>
          <div className="border border-gray-400 w-[310px]" />

          <div className="text-[16px] font-semibold tracking-tight flex flex-col gap-[10px]">
            <Link href={"/single?id=" + pid}>
              <h1 className={`${isHovered ? "spin" : ""} transition-all`}>
                {isHovered ? "Add to cart" : name}
              </h1>
            </Link>
            <p>{price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export const BestSellers = ({
  searchParams,
}: {
  searchParams: { id: string | undefined };
}) => {
  const [data, setData] = useState<any[]>([]);
  const getProduct = async () => {
    const data = await getProductsBestSellers();
    console.log(data);
    setData(data);
  };
  useEffect(() => {
    try {
      getProduct();
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: false,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div
        data-aos="slide-up"
        className="w-[100vw] h-[90vh] flex flex-col items-center bg-white gap-[50px]"
      >
        <div className="flex flex-col justify-center items-center gap-[30px] ">
          <h1 className="text-[36px] font-semibold">EXPLORE OUR BESTSELLERS</h1>
          <p className="text-center text-[15px] text-[#666]">
            Commodo sociosqu venenatis cras dolor sagittis integer luctus <br />
            sem primis eget maecenas sed urna malesuada.
          </p>

          <div className="flex gap-[1px] font-semibold cursor-pointer">
            <div className="w-[140px] h-[50px] border-2 border-gray-400 duration-200 flex justify-center items-center hover:border-[#2BB9A9] hover:text-[#2BB9A9] hover:duration-200">
              All Shoes
            </div>
            <div className="w-[140px] h-[50px] border-2 border-gray-400 duration-200 flex justify-center items-center hover:border-[#2BB9A9] hover:text-[#2BB9A9] hover:duration-200">
              Men,s
            </div>
            <div className="w-[140px] h-[50px] border-2 border-gray-400 duration-200 flex justify-center items-center hover:border-[#2BB9A9] hover:text-[#2BB9A9] hover:duration-200">
              Women,s
            </div>
            <div className="w-[140px] h-[50px] border-2 border-gray-400 duration-200 flex justify-center items-center hover:border-[#2BB9A9] hover:text-[#2BB9A9] hover:duration-200">
              Kids
            </div>
          </div>
        </div>
        <div
          className="flex items-center justify-evenly w-[1400px] cursor-pointer gap-[20px] h-[360px]"
          data-aos="slide-up"
        >
          {data?.map((product, index) => (
            <ProductComponent
              key={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              index={index}
              hoverImageUrl={product.image}
              pid={product.id}
              brand={product.brand}
              quantity={0}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default BestSellers;
