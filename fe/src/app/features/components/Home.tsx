import { Box, Stack, Container, Typography } from "@mui/material";

export const Home = () => {
  return (
    <div className=" flex justify-center items-center  flex-col gap-[70px]">
      <div className="bg-black w-[1920px] h-[684px] border border-green-400 pl-[388px] pr-[1086.27px] pt-[200px] pb-[200px] ">
        <div className="flex flex-col gap-8 text-white ">
          <h1 className="text-4xl">we are on our way</h1>
          <p className="text-lg leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            iaculis luctus leo ut lacinia. Nunc et augue pulvinar, luctus mi
            non, sagittis odio. Phasellus congue sem nulla, non sodales orci
            malesuada vel. Aliquam posuere mi eros, at condimentum elit feugiat
            vel.
          </p>
          <button className="w-[155px] h-[42px] text-[16px] bg-[#2BB9A9] text-center">
            read more
          </button>
        </div>
      </div>
      <div className="color-black flex justify-center items-center flex-col gap-[70px] ">
        <h1 className="text-[35px]">OUR SERVICE</h1>
        <div className="flex gap-[30px]">
          <div className="h-[440px] w-[360px] border border-black  ">
            <div className="w-[100%] h-[35%] bg-red-600"></div>
            <div className="w-[100%] h-[65%] bg-[#222329] text-white flex justify-center items-center text-center flex-col gap-[30px] p-[30px]">
              <h1>PACKING</h1>
              <div className="w-[60px] g-[5px] border border-green-300"></div>
              <p>
                Nunc et augue pulvinar, luctus mi non, sagittis odio. Phasellus
                congue sem nulla.non sodales orci malesu da vel. Aliquam mi
                eros.
              </p>
            </div>
          </div>
          <div className="h-[440px] w-[360px] border border-black  ">
            {" "}
            <div className="w-[100%] h-[35%] bg-red-600"></div>
            <div className="w-[100%] h-[65%] bg-[#222329] text-white flex justify-center items-center text-center flex-col gap-[30px] p-[30px]">
              <h1>PACKING</h1>
              <div className="w-[60px] g-[5px] border border-green-300"></div>
              <p>
                Nunc et augue pulvinar, luctus mi non, sagittis odio. Phasellus
                congue sem nulla.non sodales orci malesu da vel. Aliquam mi
                eros.
              </p>
            </div>
          </div>{" "}
          <div className="h-[440px] w-[360px] border border-black  ">
            {" "}
            <div className="w-[100%] h-[35%] bg-red-600"></div>
            <div className="w-[100%] h-[65%] bg-[#222329] text-white flex justify-center items-center text-center flex-col gap-[30px] p-[30px]">
              <h1>PACKING</h1>
              <div className="w-[60px] g-[5px] border border-green-300"></div>
              <p>
                Nunc et augue pulvinar, luctus mi non, sagittis odio. Phasellus
                congue sem nulla.non sodales orci malesu da vel. Aliquam mi
                eros.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[70px] justify-center items-center ">
        <h1 className="text-[35px]">OUR EXPERIECE</h1>
        <div className="flex gap-[10px]">
          <div className="w-[460px] h-[742px] bg-black"></div>
          <div className="w-[650px] h-[742px] border border-blue-500"></div>
        </div>
      </div>
    </div>
  );
};
