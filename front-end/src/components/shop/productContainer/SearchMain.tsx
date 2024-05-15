"use client";
import { Grid, Stack, Typography, Paper, styled, Link } from "@mui/material";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getProducts } from "@/components/admin/productPage/network";

const TestSearch = ({ query }: { query: string }) => {
  const productCardTitle = {
    color: "#111111",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "1.5",
    fontFamily: "'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
  };
  const pruductCardSubtitle = {
    color: "#707072",
    fontSize: "16px",
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "100%",
    height: "400px",
    position: "relative",
  }));
  const [getProductData, setGetProductData] = useState<any[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProducts();
      if (response.status === 200) {
        setGetProductData(response);
      } else {
        console.error("Failed to fetch products");
      }
    };
    fetchProducts();
  }, []);
  console.log("this", query);
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
        sx={{ paddingBottom: "20px" }}
      >
        {getProductData
          .filter((el) => el.name.includes(query))
          .map((data, index) => (
            <Grid item xs={2} sm={4} md={4} key={index} width={"600px"}>
              <Link href={"/single?id=" + data.id}>
                <Item>
                  <Image
                    className="w-full h-[full] top-0 left-0 object-cover rounded-2xl"
                    alt="profile"
                    objectFit="cover"
                    fill
                    src={data.image[0].imgs[0]}
                  />
                </Item>
                <Stack paddingTop={"20px"}>
                  <Typography sx={productCardTitle}>{data.name}</Typography>
                  <Typography sx={pruductCardSubtitle}>{data.brand}</Typography>
                  <Typography sx={pruductCardSubtitle}>1 Colour</Typography>
                </Stack>
                <Typography paddingTop={"10px"} sx={productCardTitle}>
                  ₮{data.price}
                </Typography>
              </Link>
            </Grid>
          ))}
      </Grid>
    </>
  );
};
export default TestSearch;
