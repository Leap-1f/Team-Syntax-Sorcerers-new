import { Stack } from "@mui/material";
import { ProductCategory } from "./ProductCategory";
import { FilterByPrice } from "./FilterByPrice";
import { Size } from "./Size";
import { ColorOption } from "./ColorOption";
import { TopRated } from "./TopRated";
import { ProductTags } from "./ProductTags";
import { Header } from "../section-02/Header";
import { ProductsContainer } from "../section-02/ProductsContainer";
import { useEffect, useState } from "react";
import { getProducts } from "@/components/admin/productPage/network";

export const Sales = () => {
  const [getProductData, setGetProductData] = useState<any[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setGetProductData(data.product);
    };
    fetchProducts();
  }, []);
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
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          width={"100%"}
        >
          {getProductData.map((product, index) => (
            <ProductsContainer
              key={product._id}
              imageUrl={product.image}
              title={product.name}
              price={product.price}
              index={product._id}
              brand={product.brand}
              category={product.category}
            />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};
