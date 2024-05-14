import AddBestProducts from "@/components/admin/AddBestProducts";
import { Button, Stack } from "@mui/material";
import Link from "next/link";
const addBestProduct = () => {
  return (
    <>
      <Stack direction={"column"} alignItems={"center"}>
        <Stack
          width={"1400px"}
          height={"100vh"}
          direction={"column"}
          alignItems={"center"}
          spacing={10}
        >
          <AddBestProducts />
        </Stack>
      </Stack>
    </>
  );
};
export default addBestProduct;
