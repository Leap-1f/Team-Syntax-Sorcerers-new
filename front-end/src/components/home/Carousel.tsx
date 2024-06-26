import { Button } from "@mui/material";
import * as React from "react";
import Image from "next/image";
import PauseIcon from "../icons/PauseIcon";

interface ProductCardProps {
    title: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title }) => {
    return (
        <div className="flex flex-col font-bold relative">
            <div className="flex gap-5 text-lg font-semibold leading-5 uppercase">
              <PauseIcon />
              <h2 className="flex-auto my-auto">{title}</h2>
            </div>
            <h1 className="mt-9 text-8xl uppercase font-bold leading-[108px] max-md:text-4xl max-md:leading-[53px] z-2 opacity-100">
                Sport <br /> life <br /> style
            </h1>

            <Button className="flex flex-col px-2 pt-2 mt-11 text-base leading-9 text-center bg-white text-zinc-800 max-md:mt-10">
                Discover Now
            </Button>

            <div className="absolute inset-0 left-[1000px] h-[434px]  flex top-[220px]  justify-center items-center z-[-2]">
                <div className=" text-[#36161e] text-10xl uppercase font-medium leading-[480px] opacity-30 animate-size text-nowrap">
                    T0P SALE
                </div>
            </div>
        </div>
    );
};

const Carousel: React.FC = () => {
    const products = [
        {
            title: "Top sale products",
        },
    ];

    return (
        <section className="relative flex justify-center w-full items-center px-16 py-20 text-white bg-[#7D0B2C] max-md:px-5 z-0 h-[837px]">
            <div className="flex gap-5 justify-between mt-28 w-full max-w-[1598px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full relative">
           
       
                    {products.map((product, index) => (
                        <ProductCard key={index}  title={product.title} />
                    ))}
            
                <Image
                    id="top-sale"
                    className="absolute left-[800px] bottom-[-125px] justify-center items-center z-2  "
                    src="https://res.cloudinary.com/dqhy9ufze/image/upload/v1714037889/0a5e7f9d353355a22fcdae69e14e311c_qo3mum.png"
                    alt="top sale"
                    width={1000}
                    height={500}
                />
                <div className="flex gap-5 self-end mt-96 text-base font-black whitespace-nowrap max-md:mt-10">
                    <div className="leading-[102%]"></div>
                    <div className="leading-[100%]"></div>
                </div>
            </div>
        </section>
    );
};

export default Carousel;
