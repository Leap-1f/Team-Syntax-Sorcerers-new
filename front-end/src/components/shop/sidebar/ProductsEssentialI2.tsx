import { Stack, Box, Typography, Rating } from "@mui/material";
import React, { FC, useState } from "react";
type TCardProps = {
  imageUrl: string;
  title: string;
  price: string;
  index: number;
  brand: string;
  category: string;
};
export const ProductsEssentialI2: FC<TCardProps> = ({
  index,
  title,
  imageUrl,
  price,
  brand,
  category,
}) => {
  const [value, setValue] = useState<number | null>(2);

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
  return (
    <>
      <Stack direction={"row"} width={"50%"}>
        <Box
          sx={{
            width: "447px",
            height: "600px",

            boxShadow: "none",
            padding: "10px",
            transition: "box-shadow 0.3s",
            "&:hover": {
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
            },
          }}
        >
          <Stack
            height={"80%"}
            sx={{
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></Stack>
          <Stack height={"20%"} spacing={"7px"}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              sx={{
                borderBottom: "solid",
                borderBottomWidth: "1px",
                paddingBottom: "8px",
                borderColor: "#2222",
              }}
            >
              <Typography sx={productCategoryFont}>Shoes</Typography>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Stack>
            <Typography sx={productCategoryText}>{title}</Typography>
            <Typography sx={productCategoryText}>₮{price}</Typography>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};
