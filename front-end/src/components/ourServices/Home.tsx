import Image from "next/image";
export const Home = () => {
  return (
      <div className="flex justify-center items-center flex-col gap-[70px]">
          <div
              className="background relative w-[1920px] h-[684px] border border-black pl-[388px] pr-[1086.27px] pt-[200px] pb-[200px]"
              style={{
                  backgroundImage: "url('natural.jpg')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
              }}
          >
              <div className="absolute w-full h-full flex justify-center items-center"></div>
              <div className="flex absolute flex-col gap-8 text-white">
                  <h1 className="flex flex-start">
                      <Image
                          src="https://res.cloudinary.com/dqhy9ufze/raw/upload/v1714038282/readme-typing-svg.herokuapp.com_s67lp7"
                          alt="zurag"
                      />
                  </h1>
                  <p className="text-lg leading-8">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin iaculis luctus leo ut lacinia. Nunc et augue
                      pulvinar, luctus mi non, sagittis odio. Phasellus congue
                      sem nulla, non sodales orci malesuada vel. Aliquam posuere
                      mi eros, at condimentum elit feugiat vel.
                  </p>
                  <button className="w-[155px] h-[50px] z-30 text-[16px] font-righteous bg-[#00b4d8] rounded-md text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#6096ba] after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#a9def9;] hover:[text-shadow:2px_2px_2px_#a9def9] text-2xl">
                      Read More
                  </button>
              </div>
          </div>
      </div>
  );
};
