import { Stack } from "@mui/material";
import { Sales } from "@/components/shop/productContainer/Sales";

const Shop = async ({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) => {
  const query = searchParams?.query || "";
  return (
    <>
      <Stack
        width={"100vw"}
        direction={"column"}
        spacing={"60px"}
        alignItems={"center"}
        paddingTop={"200px"}
      >
        {/* <Banner /> */}
        <Stack
          width={"1700px"}
          direction={"row"}
          justifyContent={"center"}
          pb={10}
        >
          <Sales query={query} />
        </Stack>
      </Stack>
    </>
  );
};

export default Shop;
