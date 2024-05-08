"use client";
import { useEffect, useState } from "react";
import { getProducts } from "../admin/productPage/network";
import Image from "next/image";
import Link from "next/link";
// type TProductData = {
//   _id: string;
//   name: string;
//   price: string;
//   image: string;
//   brand: string;
//   category: string;
//   size: string;
// };
export const Single = () => {
  const [getProductData, setGetProductData] = useState<any>([]);

  const getProduct = async () => {
    const data = await getProducts();
    setGetProductData(data[0]);
  };
  useEffect(() => {
    getProduct();
  }, []);
  console.log(getProductData);

  return (
    <>
      <div className="flex justify-center mt-[200px] mb-[100px]">
        <div className="container w-[80%] flex">
          <div className="w-[50%] flex px-[60px] justify-between">
            <div className="flex gap-2 flex-col">
              <div className="bg-gray-100">
                <Image
                  width={60}
                  height={60}
                  alt=""
                  src={getProductData.image}
                />
              </div>
            </div>
            <div className="w-[80%]">
              <Image
                alt=""
                src={getProductData.image}
                width={500}
                height={600}
              ></Image>
            </div>
          </div>
          <div className="w-[40%]  px-[20px]">
            <h1 className=" font-medium text-[23px]">{getProductData.name}</h1>
            <p className=" font-medium pb-[15px]">Basketball Shoes</p>
            <h2 className=" font-medium">${getProductData.price}</h2>
            <div className=" text-[#757575]">
              <p>incl. of taxes</p>
              <p>(Also includes all applicable duties)</p>
            </div>
            <div className="flex flex-wrap gap-2 py-[20px]">
              <div className="bg-gray-100 flex ">
                <Image
                  alt=""
                  src={getProductData.image}
                  width={75}
                  height={75}
                ></Image>
              </div>
            </div>
            <div className="flex justify-between py-[10px]">
              <h1 className=" font-medium">Select Size</h1>
              <h1 className="text-[#707072] font-medium">Size Guide</h1>
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="flex">
                <div className=" py-[12px] px-[34px] border-solid border-[1px] rounded-md">
                  <h1>{getProductData.size}</h1>
                </div>
              </div>
            </div>
            <Link href="/checkout">
              <button className="py-[20px] text-white bg-teal-500 hover:bg-teal-600 w-[100%] rounded-[30px] my-[10px]">
                Add to Bag
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
