import { Stack, Box, Typography, Rating } from "@mui/material";
import React from "react";

export const ProductsContainer = () => {
  const [value, setValue] = React.useState<number | null>(2);

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
      <Stack direction={"row"} width={"100%"}>
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
          <Stack height={"80%"}></Stack>
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
              <Typography sx={productCategoryFont}>Shoes, Clothing</Typography>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Stack>
            <Typography sx={productCategoryText}>
              Croft Flat Sandal for Women
            </Typography>
            <Typography sx={productCategoryText}>$680.00 - $680.00</Typography>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};
