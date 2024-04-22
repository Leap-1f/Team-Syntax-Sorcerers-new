import * as React from "react";
import Button from "@mui/material/Button";

interface CategoryItemProps {
  icon: string;
  label: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ icon, label }) => (
  <div className="flex gap-2 self-stretch my-auto whitespace-nowrap">
    <div className="text-base font-semibold">{label}</div>
    <img
      loading="lazy"
      src={icon}
      className="shrink-0 self-stretch my-auto w-3.5 aspect-[0.88]"
      alt=""
    />
  </div>
);

const categories: CategoryItemProps[] = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2f349336255f5935783564f8952fae61066adccf2e80b92bfc5b10c79b676e71?apiKey=d143e53a0810429f951a4f5ac8caff7f&",
    label: "Home",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2f349336255f5935783564f8952fae61066adccf2e80b92bfc5b10c79b676e71?apiKey=d143e53a0810429f951a4f5ac8caff7f&",
    label: "Shop",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2f349336255f5935783564f8952fae61066adccf2e80b92bfc5b10c79b676e71?apiKey=d143e53a0810429f951a4f5ac8caff7f&",
    label: "Blog",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2f349336255f5935783564f8952fae61066adccf2e80b92bfc5b10c79b676e71?apiKey=d143e53a0810429f951a4f5ac8caff7f&",
    label: "Pages",
  },
];

function Header() {
  return (
    <div className="w-[100%] flex flex-col mb-5">
      <div className="flex flex-wrap gap-5 justify-between py-2 px-4 md:pr-14 md:pl-14 w-full bg-neutral-800">
        <div className="flex gap-5 justify-between my-auto text-base font-medium leading-6 uppercase whitespace-nowrap text-zinc-500">
          <div className="flex gap-2">
            <div className="my-auto">usd</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/766d0262588491e6b37f30129738ad5e354eb5d5bcf87f22a5c81a6d53f5ca68?apiKey=d143e53a0810429f951a4f5ac8caff7f&"
              alt=""
              className="shrink-0 w-3.5 aspect-[0.88]"
            />
          </div>
          <div className="flex gap-2 my-auto">
            <div className="grow">english</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d96967beb6e50157e6267b623ace54e62ca4fc9f073bb1bef3f499c17929ada8?apiKey=d143e53a0810429f951a4f5ac8caff7f&"
              alt=""
              className="shrink-0 my-auto w-3.5 aspect-[1.75] fill-zinc-500"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-[300px] justify-between items-center md:flex-nowrap md:max-w-full">
          <div className="flex flex-col md:flex-row md:items-center justify-center md:justify-start md:w-full">
            <p className="text-xs leading-7 text-center text-white">
              DELIVERY TO YOU - Get Free Standard Delivery On All Orders
            </p>
            <Button
              sx={{
                color: "#2BB9A9",
                "&:hover": {
                  color: "white",
                },
              }}
              className="px-6 py-4 -ml-1 text-center rounded appearance-none cursor-pointer bg-transparent border-none"
            >
              See Details
            </Button>
          </div>

          <div className="flex gap-5 my-auto text-base font-medium leading-6 text-right uppercase text-zinc-500">
            <Button
              sx={{
                color: "white",
                "&:hover": {
                  color: "#2BB9A9",
                },
              }}
              variant="text"
            >
              Wishlist
            </Button>
            <Button
              sx={{
                color: "white",
                "&:hover": {
                  color: "#2BB9A9",
                },
              }}
              href="https://www.figma.com/file/FLYc240YNGXmF4kZmp9Bfs?type=design&node-id=1-320&mode=design"
              variant="text"
            >
              Account
            </Button>
            <Button
              sx={{
                color: "white",
                "&:hover": {
                  color: "#2BB9A9",
                },
              }}
              href="https://www.figma.com/file/FLYc240YNGXmF4kZmp9Bfs?type=design&node-id=1-320&mode=design"
              variant="text"
            >
              Checkout
            </Button>
            <Button
              sx={{
                color: "white",
                "&:hover": {
                  color: "#2BB9A9",
                },
              }}
            >
              Log in & register
            </Button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-5 w-full text-xs font-bold leading-5 border-b border-gray-200 border-solid text-zinc-500 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-center w-full max-w-[1334px] max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c66d8dd02f3646ac9a10299bb4346aab9ee290841253a496877330db28584fd?apiKey=d143e53a0810429f951a4f5ac8caff7f&"
            alt=""
            className="shrink-0 self-stretch my-auto aspect-[2.44] w-[69px]"
          />
          <form className="flex gap-5 self-start px-52 py-5 -mr-px text-base border border-solid bg-stone-50 border-zinc-300 rounded-[50px] text-stone-500 max-md:flex-wrap max-md:px-5">
            <label htmlFor="search" className="sr-only">
              Enter keywords to search...
            </label>
            <input
              type="text"
              id="search"
              placeholder="Enter keywords to search..."
              className="flex-auto mr-auto max-md:max-w-full"
            />
            <button type="submit">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6c54940c3cd5c747e8e2983889519dacaef3735c07330252bb12a08cd475b4a?apiKey=d143e53a0810429f951a4f5ac8caff7f&"
                alt="Search"
                className="shrink-0 self-start mr-auto w-4 aspect-square"
              />
            </button>
          </form>
          <div className="flex gap-1.5 self-stretch py-3 my-auto uppercase whitespace-nowrap">
            <div>usd</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/410d16863070f6b594e16b1eff606d79211b5d23c27eb5adf94754caff350560?apiKey=d143e53a0810429f951a4f5ac8caff7f&"
              alt=""
              className="shrink-0 my-auto w-2.5 aspect-square"
            />
          </div>
          <div className="flex gap-2 self-stretch my-auto uppercase whitespace-nowrap">
            <div className="my-auto">english</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9df8f13fed3505257b18a8786396cc77bf2e00e6df8dade48d561fbc50d0468?apiKey=d143e53a0810429f951a4f5ac8caff7f&"
              alt=""
              className="shrink-0 aspect-[0.85] w-[11px]"
            />
          </div>
          <div className="flex gap-5 justify-between self-start text-base font-semibold text-white">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f705102ba396cf93e293d60ce79bb746f407f6eb9151916c5009e235a3e469af?apiKey=d143e53a0810429f951a4f5ac8caff7f&"
              alt=""
              className="shrink-0 my-auto w-4 aspect-[0.61]"
            />
            <div className="flex gap-5 justify-end px-9 py-4 bg-teal-500 rounded max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/640498b073243f1e0931461f5d46f17acd311d36cd5f13398797d74ba2a42bdc?apiKey=d143e53a0810429f951a4f5ac8caff7f&"
                alt=""
                className="shrink-0 aspect-[1.12] w-[19px]"
              />
              <div>My Bag (2)</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between self-center mt-3.5 w-full max-w-[1368px] text-neutral-800 max-md:flex-wrap max-md:max-w-full">
        <nav className="flex gap-5 justify-between items-center px-5 uppercase leading-[150%] max-md:flex-wrap">
          <div className="flex gap-5 self-stretch text-base font-bold leading-6">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2249eff5520dd5c54b488cdc59cf0260b62911a835466f533ee9fe1d05fd4a60?apiKey=d143e53a0810429f951a4f5ac8caff7f&"
              alt=""
              className="shrink-0 my-auto w-3.5 aspect-[0.88]"
            />
            <div>
              <p>browse categories</p>
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f349336255f5935783564f8952fae61066adccf2e80b92bfc5b10c79b676e71?apiKey=d143e53a0810429f951a4f5ac8caff7f&"
            alt=""
            className="shrink-0 self-stretch my-auto w-3.5 aspect-[0.88]"
          />
          <div className="shrink-0 self-stretch my-auto w-0.5 h-6 bg-gray-200" />
          {categories.map((category) => (
            <CategoryItem key={category.label} {...category} />
          ))}
          <div className="flex gap-5 justify-between self-stretch my-auto text-base font-semibold">
            <div>Portfolio</div>
            <div>contact us</div>
          </div>
        </nav>
        <div className="flex gap-2 self-start px-5 text-base font-bold leading-7">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f53bb3a0af6e975d3536ac0bc145ba8b9aa5035d603ab4efa824d3639b8d7094?apiKey=d143e53a0810429f951a4f5ac8caff7f&"
            alt=""
            className="shrink-0 aspect-square w-[21px]"
          />
          <div className="my-auto">Hotline: (+800) 123 456 7890</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
