const BlogHeader = () => {
  return (
    <>
      <div className=" overflow-hidden">
        <div
          style={{
            backgroundImage:
              "url(https://s3-alpha-sig.figma.com/img/1d26/f9bd/efe951cb6bd10e256e2af856a33e90d0?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XZhK~-OmrzKSOIVDVe7pJApVeoBMeM3Iiazm4w4cA8gzi5ccmckb2rCBS2MsjdBperN7yxHRjdWxg1iIMg99fzSXMjVE03FEjcsOsvjfvJ5u4Pvbyv5PlJiZTKX514tVrTSjVr6r9FYx6eE7XGvjH1lt5HcyREllio4WPzqcMq~AZNbP6kzpId6GPptjjuJqWbv4B0i6E8sKXDwIlnLjLOb~5SbeZNVq--MlKMqwDYb53sU5~8d0duEcQtjxdbjbzCn~~2pjuzVnMoCi6oqWG6~-ZAZqPLhST4y1Pn-WPy2zTdddEiy2o-89guo4K7e2VtEQGZiQ4uiUl4dBXNJNmg__)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            width: "100vw",
            height: "50vh",
            position: "relative",
            bottom: " 5vh",
          }}
        >
          <div className=" absolute text-center top-[50%] left-[48%]">
            <h6 className=" text-white font-bold text-[60px]">BLOG</h6>
            <p className=" text-white font-bold text-[16px]">HOME / BLOG</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogHeader;
