import * as React from "react";
import Image from "next/image";
interface HotDealProps {
  imageUrl: string;
}

const HotDealCard: React.FC<HotDealProps> = ({}) => {
  return (
    <div className="relative pb-8 h-20 text-xs font-semibold leading-4 text-center text-white uppercase whitespace-nowrap bg-rose-600 shadow-sm max-w-[35px] w-[35px]">
      <div className="mx-auto mt-1 mb-auto w-full">
        hot <br /> deal
      </div>

      <Image
        src="https://res.cloudinary.com/dqhy9ufze/image/upload/v1714731579/Icon_ct1eq3.svg"
        fill
        alt="Hot Deal"
        className="m-auto w-6/12 aspect-square"
      />
      <div className="absolute bottom-0 left-0 right-0 h-5 w-full overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-full">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-1 w-0 h-0 border-t-6 border-solid border-transparent border-l-6 border-rose-600"></div>
        </div>
      </div>
    </div>
  );
};

export default HotDealCard;
