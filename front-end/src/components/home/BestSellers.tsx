"use client";
import React, { useState } from "react";
interface ProductProps {
    imageUrl: string;
    title: string;
    price: string;
}

const ProductComponent: React.FC<ProductProps> = ({
    imageUrl,
    title,
    price,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="w-[330px] h-[460px] flex flex-col justify-center items-center group group-hover:rotate-3 group-hover:scale-125 hover:shadow-xl duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className="w-[250px] h-[300px]"
                style={{
                    padding: "30px",
                    backgroundImage: `url('${
                        isHovered ? imageUrl : imageUrl
                    }')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            ></div>
            <div className="flex flex-col w-[310px] h-[100px] gap-[15px]">
                <div className="flex justify-between items-center">
                    <p className="text-[12px] text-gray-400">SHOES,CLOTHING</p>
                    <div className="">star</div>
                </div>
                <div className="border border-gray-400 w-[310px]"></div>
                <div className="text-[16px] font-semibold tracking-tight flex flex-col gap-[10px]">
                    <h1 className={isHovered ? "" : ""}>
                        {isHovered ? "Add to card" : title}
                    </h1>
                    <p>{price}</p>
                </div>
            </div>
        </div>
    );
};

export const BestSellers = () => {
    const productData = [
        {
            imageUrl:
                "https://res.cloudinary.com/dqhy9ufze/image/upload/v1714036836/7_scirkj.jpg",
            title: "Lotto Flip-Flop Sports Slippers",
            price: "$660.000-$680.000",
        },
        {
            imageUrl:
                "https://res.cloudinary.com/dqhy9ufze/image/upload/v1714036831/6_g79t15.jpg",
            title: "Lotto Professional Sports",
            price: "$660.000-$680.000",
        },
        {
            imageUrl:
                "https://res.cloudinary.com/dqhy9ufze/image/upload/v1714049024/d0f78259b152acea1a2a227ce946c439_pjp79c.jpg",
            title: "Running Shoes for Men",
            price: "$660.000-$680.000",
        },
        {
            imageUrl:
                "https://res.cloudinary.com/dqhy9ufze/image/upload/v1714049019/d18e34eb34c9a364f0ca7ef6a8076f50_ns3j84.jpg",
            title: "Vibox with mash lining",
            price: "$660.000-$680.000",
        },
    ];

    return (
        <div className="w-[100vw] h-[90vh] flex flex-col items-center bg-white gap-[50px]">
            <div className="flex flex-col justify-center items-center gap-[30px] ">
                <h1 className="text-[36px] font-semibold">
                    EXPLORE OUR BESTSELLERS
                </h1>
                <p className="text-center text-[15px] text-[#666]">
                    Commodo sociosqu venenatis cras dolor sagittis integer
                    luctus <br /> sem primis eget maecenas sed urna malesuada.
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
            <div className="flex items-center justify-evenly w-[1400px] cursor-pointer gap-[20px] h-[360px]">
                {productData.map((product, index) => (
                    <ProductComponent
                        key={index}
                        imageUrl={product.imageUrl}
                        title={product.title}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default BestSellers;
