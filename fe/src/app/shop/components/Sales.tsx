import { Stack } from "@mui/material";
import { ProductCategory } from "./ProductCategory";
import { FilterByPrice } from "./FilterByPrice";

export const Sales = () => {
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      justifyContent={"space-between"}
      spacing={"20px"}
    >
      <Stack spacing={"20px"} sx={{ width: "30%" }}>
        <ProductCategory />
        <FilterByPrice />
      </Stack>
      <Stack sx={{ width: "65%" }}>Child 2</Stack>
    </Stack>
  );
};
