"use client";
import { useEffect, useState, useSyncExternalStore } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export const Single = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const data = { id: id || "" };
  const [regularImageUrl, setRegularImageUrl] = useState("");
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
  const [selectedImageUrl, setSelectedImageUrl] = useState("");
  const [selectedImageUrls, setSelectedImageUrls] = useState<any>([]);
  //======================================================================================

  useEffect(() => {
    const regularImage =
      productData.image &&
      productData.image.find((img: any) => img.color === "regular");
    const imageUrl = regularImage
      ? regularImage.imgs[0]
      : "https://res.cloudinary.com/ddbgqgsu1/image/upload/v1715686642/uxrmuosrtkq90sz77mc6.jpg";
    setRegularImageUrl(imageUrl);
    setSelectedImageUrl(imageUrl);
    setSelectedImageUrls([imageUrl]);
  }, [productData]);

  const handleImageClick = (index: any) => {
    setSelectedImageUrl(productData.image[index].imgs[0]);
    setSelectedImageUrls(productData.image[index].imgs);
  };
  console.log("selectedImageUrls", selectedImageUrl);

  return (
    <>
      {/* <div>{JSON.stringify(data, undefined, 2)}</div> */}
      <div className="flex justify-center mt-[200px] mb-[100px]">
        <div className="container w-[80%] flex">
          <div className="w-[50%] flex px-[60px] justify-between">
            <div className="flex gap-2 flex-col">
              {selectedImageUrls.map((url: any, index: any) => (
                <div className="bg-gray-100 ">
                  <div className="bg-gray-100 flex gap-3">
                    <Image alt="" src={url} width={80} height={60} />
                  </div>
                </div>
              ))}
            </div>
            <div className="w-[80%]">
              {regularImageUrl && (
                <Image alt="" src={selectedImageUrl} width={500} height={600} />
              )}
            </div>
          </div>
          <div className="w-[40%]  px-[20px]">
            <h1 className=" font-medium text-[23px]">{productData.name}</h1>
            <p className=" font-medium pb-[15px]">Basketball Shoes</p>
            <h2 className=" font-medium">₮{productData.price}</h2>
            <div className=" text-[#757575]">
              <p>Хүргэлт орсон</p>
            </div>
            <div className="flex flex-wrap gap-2 py-[20px]">
              {productData.image?.map((img: any, index: any) => (
                <div
                  key={index}
                  className="bg-gray-100 flex gap-3"
                  onClick={() => handleImageClick(index)}
                >
                  <Image
                    width={60}
                    height={60}
                    alt={img.color}
                    src={img.imgs[0]}
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <h1>Тоо ширхэг</h1>
              <input
                className="border-solid border-[1px] rounded-md px-1"
                type="number"
                onChange={(event) => setQuantity(Number(event.target.value))}
                value={quantity}
              />
            </div>
            <div className="flex justify-between py-[10px]">
              <h1 className=" font-medium">Хэмжээ</h1>
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="flex">
                <div className=" py-[12px] px-[34px] border-solid border-[1px] rounded-md">
                  <h1>{productData.size}</h1>
                </div>
              </div>
            </div>
            <Link href="#">
              <button
                disabled
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
              Сагсанд орох
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
