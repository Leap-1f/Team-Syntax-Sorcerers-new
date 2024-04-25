import React from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import PageLayout from "../../components/home/blogs/BlogHeader";
import Body from "@/components/blog/body";


const blog: React.FC = () => {
  return (
    <>
      <Header />
      <PageLayout />
      <Body />
      <Footer />
    </>
  );
};
export default blog;
