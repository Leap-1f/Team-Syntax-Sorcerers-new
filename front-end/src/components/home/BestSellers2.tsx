import * as React from "react";
import Image from "next/image";
import HotDealCard from "./HotDealCard";
interface BestsellerProductsProps {
  products: {
    name: string;
    description: string;
  }[];
}

function BestsellerProducts({ products }: BestsellerProductsProps) {
  return (
    <section className="flex relative justify-center items-center mx-auto w-full text-center bg-neutral-800 h-[888px] leading-[120%] max-md:px-5">
      <div className="flex relative left-[920px] bottom-[123px]">
        {" "}
        <HotDealCard imageUrl={""} />
      </div>{" "}
      <div className="flex flex-col items-center mx-auto mt-8 mb-auto w-full h-[440px] max-w-[1242px] max-md:max-w-full">
        <h2 className="mx-auto text-lg font-semibold text-teal-500 uppercase">
          Bestseller products
        </h2>
        {products.map((product, index) => (
          <React.Fragment key={index}>
            <h3 className="mx-auto mt-5 text-4xl font-bold text-white uppercase leading-[54px] max-md:max-w-full">
              {product.name}
            </h3>
            <p className="mx-auto mb-auto text-sm leading-7 text-stone-500 max-md:max-w-full">
              {product.description}
            </p>
          </React.Fragment>
        ))}

        <div className="flex flex-col self-center px-5 mt-[100px] my-auto w-auto font-black text-center uppercase whitespace-nowrap leading-[200px] text-[250px] text-neutral-700 tracking-[60px] max-md:text-4xl">
          <div className="self-center max-md:max-w-full max-md:text-4xl">
            top
          </div>
          <div className="self-center mx-auto mt-3 w-full max-md:max-w-full max-md:text-4xl">
            limited
          </div>
        </div>
        <Image
          id="top-limited"
          className="absolute left-[650px] top-[250px]  justify-center items-center z-2 top-limited"
          src={
            "https://res.cloudinary.com/dqhy9ufze/image/upload/v1714730312/882602fbfb1d792aaf914f94828111d8_donydl.png"
          }
          alt={""}
          width={1032}
          height={781}
        />
      </div>
    </section>
  );
}

function BestSellers2() {
  const products = [
    {
      name: "Nike Air Force 1 Sage Low XL",
      description:
        "Commodo sociosqu venenatis cras dolor sagittis integer luctus sem primis eget maecenas sed urna malesuada.",
    },
  ];

  return <BestsellerProducts products={products} />;
}
export default BestSellers2;
