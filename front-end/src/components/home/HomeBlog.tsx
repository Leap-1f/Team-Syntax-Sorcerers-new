const Blog = () => {
  return (
      <>
          <div className=" flex flex-col justify-center items-center gap-10 py-20">
              <div className="flex flex-col items-center gap-6 w-[35rem]">
                  <h1 className=" text-4xl font-extrabold">FROM OUR BLOG</h1>
                  <div className="flex flex-col items-center">
                      <p className=" text-[#666]">
                          Commodo sociosqu venenatis cras dolor sagittis integer
                          luctus sem primis
                      </p>
                      <p className=" text-[#666]">
                          eget maecenas sed urna malesuada.
                      </p>
                  </div>
              </div>
              <div className="flex gap-6">
                  <div
                      style={{
                          position: "relative",
                          backgroundImage:
                              "url('https://res.cloudinary.com/dqhy9ufze/image/upload/v1714036381/2c395e0218c6392a48648290e32eee2f_zvak6k.jpg')",
                          backgroundSize: "100% 100%",
                          width: "42.25rem",
                          height: "27.87rem",
                      }}
                  >
                      <div className="absolute inset-0 h-full hover:bg-gradient-to-t from-teal-500 via-transparent"></div>
                  </div>
                  <div className="flex flex-col gap-7 ">
                      <div className="flex gap-6">
                          <div
                              style={{
                                  position: "relative",
                                  backgroundImage:
                                      "url('https://res.cloudinary.com/dqhy9ufze/image/upload/v1714036446/df4b56c9b8460033cf3baa24a067daeb_xtdiqz.jpg')",
                                  width: "12.4rem",
                                  height: "8.2rem",
                              }}
                          >
                              <div className="absolute inset-0 h-full hover:bg-gradient-to-t from-teal-500 via-transparent"></div>
                          </div>
                          <div className="flex flex-col gap-4">
                              <button className="text-[21px] pr-12 font-extrabold hover:text-orange-600 transition duration-500">
                                  SIMPLE & EASY DIY FLOWER DECO
                              </button>
                              <p className="text-[#999] text-[13px]">
                                  By{" "}
                                  <span className="text-[#2BB9A9] font">
                                      Erentheme
                                  </span>
                                  /September 16, 2019
                              </p>
                              <p className=" text-[#666] text-[14.5px]">
                                  Sapien luctus id justo suscipit nonummy eget
                                  hymenaeos...
                              </p>
                          </div>
                      </div>
                      <div className="flex gap-6">
                          <div
                              style={{
                                  position: "relative",
                                  backgroundImage:
                                      "url('https://res.cloudinary.com/dqhy9ufze/image/upload/v1714036456/f12302a635ba39ce645619575f468f93_ux7vpf.jpg')",
                                  width: "12.4rem",
                                  height: "8.2rem",
                              }}
                          >
                              <div className="absolute inset-0 h-full hover:bg-gradient-to-t transition duration-500 from-teal-500 via-transparent"></div>
                          </div>
                          <div className="flex flex-col gap-4">
                              <button className="text-[21px] pr-12 font-extrabold hover:text-orange-600 transition duration-500">
                                  SIMPLE & EASY DIY FLOWER DECO
                              </button>
                              <p className="text-[#999] text-[13px]">
                                  By{" "}
                                  <span className="text-[#2BB9A9] font">
                                      Erentheme
                                  </span>
                                  /September 16, 2019
                              </p>
                              <p className=" text-[#666] text-[14.5px]">
                                  Sapien luctus id justo suscipit nonummy eget
                                  hymenaeos...
                              </p>
                          </div>
                      </div>
                      <div className="flex gap-6">
                          <div
                              style={{
                                  position: "relative",
                                  backgroundImage:
                                      "url('https://res.cloudinary.com/dqhy9ufze/image/upload/v1714036543/206686f32e320d56775f12afd2b7bc0c_awcn9a.jpg')",
                                  width: "12.4rem",
                                  height: "8.2rem",
                              }}
                          >
                              <div className="absolute inset-0 h-full hover:bg-gradient-to-t from-teal-500 via-transparent"></div>
                          </div>
                          <div className="flex flex-col gap-4">
                              <button className="text-[21px] pr-12 font-extrabold hover:text-orange-600 transition duration-500">
                                  SIMPLE & EASY DIY FLOWER DECO
                              </button>
                              <p className="text-[#999] text-[13px]">
                                  By{" "}
                                  <span className="text-[#2BB9A9] font">
                                      Erentheme
                                  </span>
                                  /September 16, 2019
                              </p>
                              <p className=" text-[#666] text-[14.5px]">
                                  Sapien luctus id justo suscipit nonummy eget
                                  hymenaeos...
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
};
export default Blog;
