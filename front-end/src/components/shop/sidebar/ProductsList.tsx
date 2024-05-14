import {
  Stack,
  Box,
  Typography,
  Rating,
  OutlinedInput,
  Button,
} from "@mui/material";
import Image from "next/image";
import React, { FC, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
type TCardProps = {
  imageUrl: string;
  title: string;
  price: string;
  index: number;
  brand: string;
  category: string;
};
export const ProductsListedList: FC<TCardProps> = ({
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
      <Stack
        direction={"row"}
        width={"100%"}
        spacing={2}
        sx={{
          paddingBottom: "30px",
          borderBottom: "1px solid #ddd",
        }}
      >
        <Stack sx={{ width: "40%" }}>
          <Image src={imageUrl} width={470} height={470} alt="" />
        </Stack>
        <Stack spacing={2} sx={{ width: "60%", py: "70px" }}>
          <Stack spacing={1}>
            <Typography fontSize={"30px"} textTransform={"uppercase"}>
              {title}
            </Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Stack>
          <Stack direction={"row"}>
            <Typography sx={{ ...productCategoryText, color: "#669900" }}>
            ₮
            </Typography>
            <Typography sx={{ ...productCategoryText, fontWeight: 900 }}>
              {price}
            </Typography>
          </Stack>
          <Stack direction={"row"} spacing={1}>
            <Typography sx={productCategoryText}>Available :</Typography>
            <Typography
              sx={{
                ...productCategoryText,
                color: "#669900",
              }}
            >
              In stock
            </Typography>
          </Stack>
          <Typography sx={productCategoryFont}>
            Anlor sit amet, consectetur adipiscing elit. Fusce condimentum est
            lacus, non pretium
          </Typography>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Typography>Qty</Typography>
            <OutlinedInput
              sx={{
                width: "140px",
                height: "39px",
                "&.MuiOutlinedInput-root": {
                  color: "green",
                },
                "&.Mui-focused": {
                  borderStyle: "1px",
                  borderColor: "green",
                },
              }}
              placeholder="1"
            />
            <Button
              sx={{
                backgroundColor: "#fc4a1a",
                color: "white",
                "&:hover": {
                  backgroundColor: "green",
                },
              }}
            >
              Add To Card
            </Button>
            <CiHeart />
            <CiCircleInfo />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
