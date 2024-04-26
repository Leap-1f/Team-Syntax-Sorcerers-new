import { Button, Stack, Typography } from "@mui/material";
import React from "react";

export const Card = () => {
  const productCategoryText = {
    color: "#666",
    fontFamily: "Barlow",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "28.8px",
    textTransform: "uppercase",
  };
  const buttonStyle = {
    border: "3px solid #666",
    background: "none",
    color: "black",
    "&:hover": {
      border: "3px solid #2BB9A9",
      background: "none",
    },
  };

  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"flex-end"}
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <Stack
          width={"340px"}
          height={"100vh"}
          paddingRight={"10px"}
          paddingLeft={"10px"}
          direction={"column"}
          justifyContent={"space-between"}
          sx={{ backgroundColor: "white" }}
        >
          <Stack>
            <Stack
              width={"100%"}
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              marginBottom={"20px"}
            >
              <Typography>SHOPPING CARD</Typography>
              <Typography>X</Typography>
            </Stack>
            <Stack
              width={"100%"}
              direction={"row"}
              borderBottom="1px solid black"
              borderColor={"gray"}
              paddingBottom={"10px"}
              paddingTop={"10px"}
            >
              <Stack width={"100%"} direction={"row"} spacing={"7px"}>
                <Stack
                  direction={"row"}
                  justifyContent={"flex-start"}
                  width={"75px"}
                  height={"75px"}
                  sx={{ border: "2px solid #DDD" }}
                ></Stack>
                <Stack direction={"column"} spacing={"5px"}>
                  <Typography>Basketball shoes</Typography>
                  <Typography sx={{ color: "#666" }}>1*$66</Typography>
                </Stack>
              </Stack>
              <Stack>X</Stack>
            </Stack>
          </Stack>
          <Stack
            width={"100%"}
            height={"200px"}
            borderTop="1px solid black"
            paddingRight={"10px"}
            paddingLeft={"10px"}
            spacing={"20px"}
          >
            <Stack
              width={"80%"}
              direction={"row"}
              justifyContent={"space-between"}
            >
              <Typography sx={productCategoryText}>SUBTOTAL:</Typography>
              <Typography
                sx={{
                  ...productCategoryText,
                  color: "#2BB9A9",
                }}
              >
                $500
              </Typography>
            </Stack>
            <Button sx={buttonStyle}>view cart</Button>
            <Button sx={buttonStyle}>checkout</Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};