import React, { FC } from "react";

import PageLayout from "../../components/home/blogs/BlogHeader";
import Body from "@/components/blog/body";
import { Stack } from "@mui/material";

const blog: FC = () => {
  return (
    <>
      <Stack>
        <PageLayout />
        <Body />
      </Stack>
    </>
  );
};
export default blog;
