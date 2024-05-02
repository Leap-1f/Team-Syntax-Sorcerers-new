"use client";
import React, { useEffect } from "react";
import { Stack, Box, Typography, Rating } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
interface CardProps {
  imageUrl: string;
  index: number;
}

export const Card: React.FC<CardProps> = ({ imageUrl }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: false,
    });
    AOS.refresh(); // Refresh AOS after initialization
  }, []);

  const productCategoryText = {
    color: "#222",
    fontFamily: "Barlow",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "21.6px",
    textTransform: "capitalize",
  };

  const productCategoryFont = {
    color: "#666",
    fontFamily: "Inter",
    fontSize: "14.5px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "24px",
    textTransform: "capitalize",
    padding: 0,
    cursor: "pointer",
  };
  const productCategorySortTypography = {
    color: "#888",
    fontFamily: "Barlow",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "21px",
    textTransform: "uppercase",
  };
  return (
    <Stack
      direction={"row"}
      width={"308px"}
      sx={{
        borderRadius: "10px",

        backgroundColor: "white",
      }}
      data-aos="slide-left"
    >
      <Box
        sx={{
          width: "308px",
          height: "450px",
          boxShadow: "none",
          padding: "10px",
          transition: "box-shadow 0.3s",
          "&:hover": {
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
          },
        }}
      >
        <Stack height={"80%"}>
          {/* Add the image here */}
          <Image
            src={imageUrl}
            alt="Product"
            fill
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Stack>
        <Stack height={"20%"} spacing={"7px"}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{
              borderBottom: "solid",
              borderBottomWidth: "1px",
              paddingBottom: "8px",
              borderColor: "#2222",
            }}
          >
            <Typography sx={productCategorySortTypography}>
              Shoes, Clothing
            </Typography>
            <Rating name="read-only" readOnly sx={{ fontSize: "20px" }} />
          </Stack>
          <Typography sx={productCategoryText}>Sport Vidox Sandal</Typography>
          <Typography sx={productCategoryText}>$680.00 - $680.00</Typography>
        </Stack>
      </Box>
    </Stack>
  );
};
