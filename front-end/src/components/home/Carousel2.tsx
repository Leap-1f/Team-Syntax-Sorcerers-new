import * as React from "react";
import Image from "next/image";

const Carousel: React.FC = () => {
  return (
    <section className="relative flex justify-center w-full items-center px-16 py-20 text-white bg-[#FFAB02] max-md:px-5 z-0 h-[837px]">
      <div className="flex gap-5 justify-between mt-28 w-full max-w-[1598px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full relative">
        <Image
          className="absolute w-[1376px] left-[125px] justify-center items-center z-1 "
          src="https://res.cloudinary.com/dmz3nwq2t/image/upload/v1715676286/got_z2ghcf.png"
          alt="top sale"
          width={1376}
          height={376}
        />

        <Image
          id="gota-limited"
          className="absolute left-[550px] bottom-[-185px] justify-center items-center z-2 gota-limited"
          src="https://res.cloudinary.com/dmz3nwq2t/image/upload/v1715675922/bannerPuuz_oz0y3h.png"
          alt="top sale"
          width={1032}
          height={781}
        />
        <div className="flex gap-5 self-end mt-96 text-base font-black whitespace-nowrap max-md:mt-10">
          <div className="leading-[102%]"></div>
          <div className="leading-[100%]"></div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
