export const Container2 = () => {
  const services = [
    {
      title: "Packing",
      description:
        "Nunc et augue pulvinar, luctus mi non, sagittis odio. Phasellus congue sem nulla.non sodales orci malesu da vel. Aliquam mi eros.",
    },
    {
      title: "Shipping",
      description:
        "Nunc et augue pulvinar, luctus mi non, sagittis odio. Phasellus congue sem nulla.non sodales orci malesu da vel. Aliquam mi eros.",
    },
    {
      title: "Delivery",
      description:
        "Nunc et augue pulvinar, luctus mi non, sagittis odio. Phasellus congue sem nulla.non sodales orci malesu da vel. Aliquam mi eros.",
    },
  ];

  return (
    <div className="color-black flex justify-center items-center flex-col gap-[70px] ">
      <h1 className="text-[35px] font-semibold text-center">OUR SERVICES</h1>

      <div className="flex w-[1150px] justify-between">
        {services.map((service, index) => (
          <div key={index} className="h-[440px] w-[340px] border border-black">
            <div className="w-[100%] h-[35%] bg-[#dee2e6]"></div>
            <div className="h-[65%] w-[100%] bg-[#222329] m-auto flex justify-center items-center gap-[30px] flex-col relative group  z-0 overflow-hidden p-[30px] ">
              <div className="h-full w-1/5 bg-[#d0f4de] absolute left-0 bottom-full z-[-1] group-hover:translate-y-full duration-500"></div>
              <div className="h-1/3 w-full bg-[#0077b6] absolute left-[120%] top-0 z-[-1] group-hover:-translate-x-full duration-500"></div>
              <div className="h-1/3 w-full bg-[#ade8f4] absolute right-[100%] top-1/3 z-[-1] group-hover:translate-x-full duration-500"></div>
              <div className="h-full w-4/5 bg-[#caf0f8] absolute left-[20%] top-full z-[-1] group-hover:-translate-y-[33.3%] duration-500"></div>
              <button className="text-[0.8em] absolute bottom-[1em] left-[1em] text-[#6C3082] group-hover:text-white duration-100">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
              <h1 className="z-20 font-bold font-Poppin flex justify-center items-center text-[1.4em] group-hover:text-black text-white delay-100 duration-100">
                {service.title}
              </h1>
              <div className="w-[80px] g-[5px] border  group-hover:border-[black] border-[#00f5d4] "></div>
              <p className="z-20  font-Poppin  font-semibold flex justify-center items-center text-center group-hover:text-black text-white delay-100 duration-100">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
