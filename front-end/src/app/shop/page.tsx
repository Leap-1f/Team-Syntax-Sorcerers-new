"use client";
import { Stack } from "@mui/material";
import { Banner } from "../../components/shop/ContainerRight/Banner";
import { Sales } from "../../components/shop/ContainerRight/Sales";
import Header from "@/components/layout/Header";
const Shop = () => {
  return (
    <>
      <Stack
        width={"100vw"}
        direction={"column"}
        spacing={"60px"}
        alignItems={"center"}
      >
        <Header />

        {/* <Banner /> */}
        <Stack width={"1700px"} direction={"row"} justifyContent={"center"}>
          <Sales />
        </Stack>
      </Stack>
    </>
  );
};

export default Shop;
