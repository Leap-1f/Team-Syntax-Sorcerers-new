import { Stack } from "@mui/material";
import { ProductCategory } from "./ProductCategory";
import { FilterByPrice } from "./FilterByPrice";
import { Size } from "./Size";
import { ColorOption } from "./ColorOption";
import { TopRated } from "./TopRated";
import { ProductTags } from "./ProductTags";
import { Header } from "../section-02/Header";
import { ProductsContainer } from "../section-02/ProductsContainer";

export const Sales = () => {
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      justifyContent={"space-between"}
      spacing={"20px"}
    >
      <Stack direction={"column"} spacing={"60px"} sx={{ width: "30%" }}>
        <ProductCategory />
        <FilterByPrice />
        <Size />
        <ColorOption />
        <TopRated />
        <ProductTags />
      </Stack>
      <Stack direction={"column"} spacing={"20px"} sx={{ width: "65%" }}>
        <Header />
        <ProductsContainer />
      </Stack>
    </Stack>
  );
};
