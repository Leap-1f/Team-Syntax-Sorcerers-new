"use client";
import Link from "next/link";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Image from "next/image";
export const Cart = () => {
  return (
    <>
      <div className="flex justify-center my-[100px] mt-[200px]">
        <div className="container flex">
          <div className="w-[70%] mx-3 rounded-md">
            <div className="flex *:py-[23px] *:flex *:justify-center *:border-[1px] *:border-solid justify-between">
              <div className="w-[25%] text-base font-semibold">PRODUCT</div>
              <div className="w-[25%]"></div>
              <div className="w-[10%] text-base font-semibold">PRICE</div>
              <div className="w-[15%] text-base font-semibold">QUANTITY</div>
              <div className="w-[15%] text-base font-semibold">TOTAL</div>
              <div className="w-[10%]"></div>
            </div>
            {/* =============================== */}
            <div className="flex *:flex *:justify-center *:items-center *:border-[1px] *:border-solid justify-between">
              <div className="w-[25%]">
                <Image src="" alt="" fill />
              </div>
              <div className="w-[25%] text-base font-semibold">
                Detail V-Neck Sweater
              </div>
              <div className="w-[10%] text-base font-semibold">$18.00</div>
              <div className="w-[15%] py-[20px]">
                <div className="border-[2px] border-solid h-[50px] w-[100px] flex items-center pl-[10px] text-[#C1C1C1] text-[20px] font-semibold">
                  1
                </div>
              </div>
              <div className="w-[15%] text-base font-semibold">$500.00</div>
              <div className="w-[10%] text-[25px]">
                <IoMdCloseCircleOutline />
              </div>
            </div>
            {/* =============================== */}
            <div className="*:flex *:justify-center *:items-center *:border-[1px] *:border-solid  ">
              <div className="w-[100%]">
                <button className="border-[1px] border-solid m-[10px]  p-[10px] w-[30%] hover:bg-teal-600 font-semibold bg-teal-500 text-white rounded-[8px]">
                  UPDATE CART
                </button>
              </div>
            </div>
          </div>
          <div className="w-[30%] bg-[#F5F5F5] mx-3 p-[30px] rounded-[6px] ">
            <div className="text-[20px] font-semibold pb-[20px]">
              CART TOTALS
            </div>
            <div className="border-[1px] border-solid">
              <div className="flex *:flex *:justify-center *:items-center *:border-[1px] *:border-solid">
                <div className="font-semibold w-[30%] py-[16px]">Subtotal</div>
                <div className=" text-2xl w-[70%]">$20.00</div>
              </div>
              <div className="flex *:border-[1px] *:border-solid *:flex *:justify-center *:items-center">
                <div className="font-semibold w-[30%]">Shipping</div>
                <div className="w-[70%] p-[12px] flex text-center">
                  Enter your address to view shipping options Calculate shipping
                </div>
              </div>
              <div className="flex *:border-[1px] *:border-solid *:flex *:justify-center *:items-center ">
                <div className="font-semibold w-[30%] py-[16px]">Total</div>
                <div className=" text-2xl w-[70%]"> $50.00</div>
              </div>
              <Link href="/checkout">
                <div className="p-[30px]">
                  <button className="py-[16px] w-[100%] hover:bg-teal-600 bg-teal-500 rounded-[8px] text-white font-semibold">
                    Procced To Checkout
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
