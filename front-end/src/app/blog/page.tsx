import React, { FC } from "react";

import PageLayout from "../../components/home/blogs/BlogHeader";
import Body from "@/components/blog/body";

const blog: FC = () => {
  return (
    <>
      <PageLayout />
      <Body />
    </>
  );
};
export default blog;
