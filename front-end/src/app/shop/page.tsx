"use client";
import { Stack } from "@mui/material";
import { Banner } from "../../components/shop/section-01/Banner";
import { Sales } from "../../components/shop/section-01/Sales";
const Shop = () => {
  return (
    <>
      <Stack
        width={"100vw"}
        direction={"column"}
        spacing={"60px"}
        alignItems={"center"}
      >
        <Banner />
        <Stack width={"1440px"} direction={"row"} justifyContent={"center"}>
          <Sales />
        </Stack>
      </Stack>
    </>
  );
};

export default Shop;
