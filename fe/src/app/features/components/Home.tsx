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
            <img src="https://readme-typing-svg.herokuapp.com/?size=35&&&width=500&height=70&duration=4000&lines=Hello+👋;+ WE ARE ON OUR WAY;" />
          </h1>
          <p className="text-lg leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            iaculis luctus leo ut lacinia. Nunc et augue pulvinar, luctus mi
            non, sagittis odio. Phasellus congue sem nulla, non sodales orci
            malesuada vel. Aliquam posuere mi eros, at condimentum elit feugiat
            vel.
          </p>
          <button className="w-[155px] h-[50px] z-30 text-[16px] font-righteous bg-[#00b4d8] rounded-md text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#6096ba] after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#a9def9;] hover:[text-shadow:2px_2px_2px_#a9def9] text-2xl">
            Read More
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
