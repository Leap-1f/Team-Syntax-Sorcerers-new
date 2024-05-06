"use client";
import { Button, Drawer, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import useLocalStorage from "usehooks-ts";
export const Bag = (open: boolean, close: any) => {
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
  const [data, setData] = useState<any[]>([]);
  const getProduct = async () => {
    const data: any = localStorage.getItem("cart");
    if (data) {
      const jsonified = JSON.parse(data);
      setData(jsonified);
    }
  };

  useEffect(() => {
    try {
      getProduct();
    } catch (error) {
      console.log(error);
    }
    console.log("localstorage changed");
  }, [useLocalStorage]);
  return (
    <>
      <Drawer open={open} onClose={close} anchor="right" id="sidebar">
        <Stack
          width={"340px"}
          height={"100vh"}
          paddingRight={"10px"}
          paddingLeft={"10px"}
          direction={"column"}
          justifyContent={"space-between"}
          sx={{
            backgroundColor: "white",
          }}
        >
          <Stack>
            <Stack
              width={"100%"}
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              marginBottom={"20px"}
              paddingTop={"20px"}
            >
              <Typography>SHOPPING CARD</Typography>
              <Typography sx={{ cursor: "pointer" }} onClick={close}>
                X
              </Typography>
            </Stack>
            {data?.map((product: any, index: any) => (
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
                    <Typography>{product.title}</Typography>
                    <Typography sx={{ color: "#666" }}>
                      {product.price}
                    </Typography>
                  </Stack>
                </Stack>
                <Stack>X</Stack>
              </Stack>
            ))}
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
      </Drawer>
    </>
  );
};
