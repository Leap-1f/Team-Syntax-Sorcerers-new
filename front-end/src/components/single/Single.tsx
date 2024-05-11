"use client";
import { useEffect, useState, useSyncExternalStore } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export const Single = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const data = { id: id || "" };

  const [productData, setProductData] = useState<any>(Object);

  async function ProductFetchComponent() {
    try {
      const response = await fetch(
        "http://localhost:8080/api/product/getById?id=" + id,
        {
          mode: "cors",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const responseData = await response.json();
      setProductData(responseData[0]);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    ProductFetchComponent();
  }, []);

  if (!productData) {
    return <div>Loading...</div>;
  }
  //======================================================================================
  const store = {
    getSnapshot: () => sessionStorage.getItem("cart") || "[]",
    subscribe: (listener: () => void) => {
      window.addEventListener("storage", listener);
      return () => void window.removeEventListener("storage", listener);
    },
  };
  const kart: any = useSyncExternalStore(store.subscribe, store.getSnapshot);
  const wart: any = JSON.parse(kart);
  const [quantity, setQuantity] = useState(1);
  function addToCart() {
    var has = wart.some((item: any) => {
      if (item.pid === productData.pid) {
        return true;
      }
      return false;
    });
    if (has === true) {
      console.log("has");
      var adjusted = wart.find((item: any) => item.pid === productData.pid);
      adjusted.quantity += quantity;
      console.log(adjusted.quantity);
      const index = wart.indexOf(adjusted);
      wart.splice(index, 1);
      setQuantity(1);
      sessionStorage.setItem("cart", JSON.stringify([...wart, adjusted]));
    } else {
      console.log("hasb't");
      var adjusted = productData;
      console.log(adjusted);
      adjusted.quantity = quantity;
      console.log(adjusted.quantity + "adjusted");
      console.log(quantity);
      setQuantity(1);
      sessionStorage.setItem("cart", JSON.stringify([...wart, productData]));
      adjusted.quantity -= quantity;
    }
  }
  //======================================================================================

  return (
    <>
      {/* <div>{JSON.stringify(data, undefined, 2)}</div> */}
      <div className="flex justify-center mt-[200px] mb-[100px]">
        <div className="container w-[80%] flex">
          <div className="w-[50%] flex px-[60px] justify-between">
            <div className="flex gap-2 flex-col">
              <div className="bg-gray-100">
                <Image width={60} height={60} alt="" src={productData.image} />
              </div>
            </div>
            <div className="w-[80%]">
              <Image alt="" src={productData.image} width={500} height={600} />
            </div>
          </div>
          <div className="w-[40%]  px-[20px]">
            <h1 className=" font-medium text-[23px]">{productData.name}</h1>
            <p className=" font-medium pb-[15px]">Basketball Shoes</p>
            <h2 className=" font-medium">${productData.price}</h2>
            <div className=" text-[#757575]">
              <p>incl. of taxes</p>
              <p>(Also includes all applicable duties)</p>
            </div>
            <div className="flex flex-wrap gap-2 py-[20px]">
              <div className="bg-gray-100 flex ">
                <Image alt="" src={productData.image} width={75} height={75} />
              </div>
            </div>
            <div className="flex gap-2">
              <h1>Qty</h1>
              <input
                className="border-solid border-[1px] rounded-md px-1"
                type="number"
                onChange={(event) => setQuantity(Number(event.target.value))}
                value={quantity}
              />
            </div>
            <div className="flex justify-between py-[10px]">
              <h1 className=" font-medium">Select Size</h1>
              <h1 className="text-[#707072] font-medium">Size Guide</h1>
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="flex">
                <div className=" py-[12px] px-[34px] border-solid border-[1px] rounded-md">
                  <h1>{productData.size}</h1>
                </div>
              </div>
            </div>
            <Link href="/checkout">
              <button
                onClick={() => addToCart()}
                className="py-[20px] text-white bg-teal-500 hover:bg-teal-600 w-[100%] rounded-[30px] my-[10px]"
              >
                Add to Checkout
              </button>
            </Link>
            <button
              onClick={() => addToCart()}
              className="py-[20px] text-white bg-teal-500 hover:bg-teal-600 w-[100%] rounded-[30px] my-[10px]"
            >
              Add to Bag
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
