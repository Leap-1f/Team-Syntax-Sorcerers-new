const blog = () => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center gap-10">
        <div className=" flex flex-col flex-wrap items-center gap-6 w-[35rem]">
          <h1 className=" text-4xl font-extrabold">FROM OUR BLOG</h1>
          <p className=" text-sm text-[#666] ">
            Commodo sociosqu venenatis cras dolor sagittis integer luctus sem
            primis eget maecenas sed urna malesuada.
          </p>
        </div>
        <div className="flex gap-6">
          <div className="relative">
            <img src="blog.png" alt="" />
            <div className="absolute inset-0 h-full hover:bg-gradient-to-t from-teal-500 via-transparent"></div>
          </div>
          <div className="flex flex-col gap-7 ">
            <div className="flex gap-6">
              <div className="relative">
                <img src="blog-post.png" alt="" />
                <div className="absolute inset-0 h-full hover:bg-gradient-to-t from-teal-500 via-transparent"></div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-[21px] font-extrabold">
                  SIMPLE & EASY DIY FLOWER DECO
                </p>
                <p className="text-[#999] text-[13px]">
                  By <span className="text-[#2BB9A9] font">Erentheme</span>
                  /September 16, 2019
                </p>
                <p className=" text-[#666] text-[14.5px]">
                  Sapien luctus id justo suscipit nonummy eget hymenaeos...
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="relative">
                <img src="blog-post.png" alt="" />
                <div className="absolute inset-0 h-full hover:bg-gradient-to-t from-teal-500 via-transparent"></div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-[21px] font-extrabold">
                  SIMPLE & EASY DIY FLOWER DECO
                </p>
                <p className="text-[#999] text-[13px]">
                  By <span className="text-[#2BB9A9] font">Erentheme</span>
                  /September 16, 2019
                </p>
                <p className=" text-[#666] text-[14.5px]">
                  Sapien luctus id justo suscipit nonummy eget hymenaeos...
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="relative">
                <img src="blog-post.png" alt="" />
                <div className="absolute inset-0 h-full hover:bg-gradient-to-t from-teal-500 via-transparent"></div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-[21px] font-extrabold">
                  SIMPLE & EASY DIY FLOWER DECO
                </p>
                <p className="text-[#999] text-[13px]">
                  By <span className="text-[#2BB9A9] font">Erentheme</span>
                  /September 16, 2019
                </p>
                <p className=" text-[#666] text-[14.5px]">
                  Sapien luctus id justo suscipit nonummy eget hymenaeos...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default blog;
