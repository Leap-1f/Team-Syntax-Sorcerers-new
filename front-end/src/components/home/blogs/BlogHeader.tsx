const BlogHeader = () => {
  return (
      <>
          <div className=" overflow-hidden">
              <div
                  style={{
                      backgroundImage:
                          "url(https://res.cloudinary.com/dqhy9ufze/image/upload/v1714036577/efe951cb6bd10e256e2af856a33e90d0_xcmu0w.jpg)",
                          
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100% 100%",
                      width: "100vw",
                      height: "50vh",
                      position: "relative",
                      bottom: " 5vh",
                  }}
              >
                  <div className=" absolute text-center top-[50%] left-[48%]">
                      <h6 className=" text-white font-bold text-[60px]">
                          BLOG
                      </h6>
                      <p className=" text-white font-bold text-[16px]">
                          HOME / BLOG
                      </p>
                  </div>
              </div>
          </div>
      </>
  );
};
export default BlogHeader;
