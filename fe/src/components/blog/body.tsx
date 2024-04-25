import Posts from "../home/blogs/posts";
import SideBar from "../home/blogs/sidebar";

const Body = () => {
  return (
    <>
      <div className="flex justify-center gap-[5.4rem] py-[2rem]">
        <SideBar></SideBar>
        <Posts></Posts>
      </div>
    </>
  );
};
export default Body;
