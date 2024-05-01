"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface ProductProps {
    imageUrl: string;
    title: string;
    price: string;
    index: number;
    hoverImageUrl: string;
    darkModeEnabled: boolean; // New prop
}

const ProductComponent: React.FC<ProductProps> = ({
    imageUrl,
    title,
    hoverImageUrl,
    price,
    index,
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const darkModeEnabled = localStorage.getItem("darkModeEnabled") === "true";

    return (
        <div
            className={`w-[330px] h-[460px] flex flex-col justify-center items-center group group-hover:rotate-3 group-hover:scale-125 hover:shadow-xl duration-300`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            data-aos="slide-up"
            data-aos-delay={`${index * 250}`}
        >
            <div
                className="w-[250px] h-[300px]"
                style={{
                    padding: "30px",
                    backgroundImage: `url(${
                        isHovered ? hoverImageUrl : imageUrl
                    })`,
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
                        {isHovered ? "Add to cart" : title}
                    </h1>
                    <p>{price}</p>
                </div>
            </div>
        </div>
    );
};

export const BestSellers = () => {
    const [darkModeEnabled, setDarkModeEnabled] = useState<boolean>(
        localStorage.getItem("darkModeEnabled") === "true"
    );

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease",
            once: false,
        });
        AOS.refresh();
    }, []);

    const productData: ProductProps[] = [
        {
            imageUrl:
                "https://res.cloudinary.com/dqhy9ufze/image/upload/v1714128559/11_lv3ppy.jpg",
            hoverImageUrl:
                "https://res.cloudinary.com/dqhy9ufze/image/upload/v1714128572/11-2_urvdwg.jpg",
            title: "Lotto Flip-Flop Sports Slippers",
            price: "$660.000-$680.000",
            index: 0,
            darkModeEnabled: false,
        },
        {
            imageUrl:
                "https://res.cloudinary.com/dqhy9ufze/image/upload/v1714128530/9_u0m8c9.jpg",
            hoverImageUrl:
                "https://res.cloudinary.com/dqhy9ufze/image/upload/v1714128538/9-2_slleir.jpg",
            title: "Lotto Professional Sports",
            price: "$660.000-$680.000",
            index: 0,
            darkModeEnabled: false,
        },
        {
            imageUrl:
                "https://res.cloudinary.com/dqhy9ufze/image/upload/v1714049024/d0f78259b152acea1a2a227ce946c439_pjp79c.jpg",
            hoverImageUrl:
                "https://res.cloudinary.com/dqhy9ufze/image/upload/v1714128467/4-2_md9r9g.jpg",
            title: "Running Shoes for Men",
            price: "$660.000-$680.000",
            index: 0,
            darkModeEnabled: false,
        },
        {
            imageUrl:
                "https://res.cloudinary.com/dqhy9ufze/image/upload/v1714049019/d18e34eb34c9a364f0ca7ef6a8076f50_ns3j84.jpg",
            hoverImageUrl:
                "https://res.cloudinary.com/dqhy9ufze/image/upload/v1714128552/3-2_zf7fha.jpg",
            title: "Vibox with mash lining",
            price: "$660.000-$680.000",
            index: 0,
            darkModeEnabled: false,
        },
    ];

    return (
        <div
            data-aos="slide-up"
            className={`w-[100vw] h-[90vh] ${
                darkModeEnabled ? "background-dark" : "background-light"
            } flex flex-col items-center bg-white gap-[50px]`}
        >
            <div className="flex flex-col justify-center items-center gap-[30px] ">
                <h1 className="text-[36px] font-semibold">
                    EXPLORE OUR BESTSELLERS
                </h1>
                <p className="text-center text-[15px] text-[#666]">
                    Commodo sociosqu venenatis cras dolor sagittis integer
                    luctus <br /> sem primis eget maecenas sed urna malesuada.
                </p>

                <div className="flex gap-[1px] font-semibold cursor-pointer">
                    <div className="w-[140px] h-[50px] border-2 border-gray-400 duration-200 flex justify-center items-center hover:border-[#2BB9A9] hover:text-[#2BB9A9] hover:duration-200">
                        All Shoes
                    </div>
                    <div className="w-[140px] h-[50px] border-2 border-gray-400 duration-200 flex justify-center items-center hover:border-[#2BB9A9] hover:text-[#2BB9A9] hover:duration-200">
                        Men's
                    </div>
                    <div className="w-[140px] h-[50px] border-2 border-gray-400 duration-200 flex justify-center items-center hover:border-[#2BB9A9] hover:text-[#2BB9A9] hover:duration-200">
                        Women's
                    </div>
                    <div className="w-[140px] h-[50px] border-2 border-gray-400 duration-200 flex justify-center items-center hover:border-[#2BB9A9] hover:text-[#2BB9A9] hover:duration-200">
                        Kids
                    </div>
                </div>
            </div>
            <div
                className={`flex items-center justify-evenly w-[1400px]  cursor-pointer gap-[20px] h-[360px]`}
                data-aos="slide-up"
            >
                {productData.map((product, index) => (
                    <ProductComponent
                        key={index}
                        imageUrl={product.imageUrl}
                        title={product.title}
                        price={product.price}
                        index={index}
                        hoverImageUrl={product.hoverImageUrl}
                        darkModeEnabled={false}
                    />
                ))}
            </div>
        </div>
    );
};

export default BestSellers;
