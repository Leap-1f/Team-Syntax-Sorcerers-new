"use client";
import { useEffect, useState } from "react";
import { getProductsBestSellers } from "../admin/productPage/network";
export const TestNewArrivals = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const getProduct = async () => {
      const fetchedData = await getProductsBestSellers();
      setData(fetchedData);
      console.log("ari", fetchedData);
    };
    getProduct();
  }, []);
  const handleClickOpen = (data: any) => {
    setOpen(true);
  };
  //   const handleClose = (value: any) => {
  //     setOpen(false);
  //     setSelectedValue(value);
  //   };

  return (
    <>
      {/* <ProductDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      ></ProductDialog> */}
      <div
        className="w-full grid grid-cols-4 gap-4 group group-hover:rotate-3 group-hover:scale-125 hover:shadow-xl duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-aos="slide-up"
        data-aos-delay={250}
      >
        {data.map((data, index) => (
          <div key={index}>
            <div
              className="w-full h-[310px]"
              style={{
                padding: "30px",
                backgroundImage: `url(${isHovered ? data.image : data.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            ></div>
            <div className="flex flex-col w-[100%] h-[100px] gap-[15px]">
              <div className="flex justify-between items-center ">
                <p className="text-[16px] text-gray-400  ">Sneakers</p>
                <p onClick={handleClickOpen}>Star</p>
              </div>
              <div className="border border-gray-400 w-[100%]"></div>
              <div className="text-[16px] font-semibold tracking-tight flex flex-col gap-[10px]">
                <h1 className={isHovered ? "" : ""}>
                  {isHovered ? "Add to cart" : data.title}
                </h1>
                <p>{data.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
