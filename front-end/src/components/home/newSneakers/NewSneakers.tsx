"use client";
import React, { use, useEffect, useState } from "react";
import { Stack, Typography } from "@mui/material";
import { Card } from "./Card";
import AOS from "aos";
import "aos/dist/aos.css";
import { getProductsBestSellers } from "@/components/admin/productPage/network";

export const FeaturesTwo = () => {
  const [fetchedProductData, setFetchedProductData] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductsBestSellers();
      setFetchedProductData(data.product);
    };

    fetchData();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease",
      once: false,
    });
    AOS.refresh();
  }, []);

  const featureTypoGraphy = {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Barlow",
    fontSize: "36px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "54px",
    textTransform: "uppercase",
  };
  const paraTypoGraphy = {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "26px",
  };

  return (
    <>
      <Stack
        width={"100%"}
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={"20px"}
        sx={{
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          paddingTop: "60px",
          paddingBottom: "80px",
        }}
        data-aos="fade-up"
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://res.cloudinary.com/dqhy9ufze/image/upload/v1714041259/categorybg_frb8bp.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            zIndex: -1,
          }}
        />
        <Stack>
          <Typography sx={featureTypoGraphy}>
            EXPLORE OUR <br /> FEATURED
          </Typography>
          <Typography sx={paraTypoGraphy}>
            Commodo sociosqu venenatis cras dolor sagittis integer luctus sem
            <br />
            primis eget maecenas sed urna malesuada.
          </Typography>
        </Stack>
        <Stack direction={"row"} justifyContent={"center"} spacing={"40px"}>
          {fetchedProductData?.map((product, index) => (
            <Card
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
    </>
  );
};

export default FeaturesTwo;
