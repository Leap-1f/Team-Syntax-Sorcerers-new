import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import PageLayout from "../components/blogs/PageLayout";
import Body from "../components/blogs/body";

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
