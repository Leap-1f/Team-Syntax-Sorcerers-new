"use client";
import { FC, useEffect, useState } from "react";
import { Stack, Box, Typography, Rating } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductDialog from "@/components/hover/ProductHover";
type TCardProps = {
  image: any;
  name: string;
  price: string;
  index: number;
  quantity: number;
  brand: string;
  pid: string;
  category: string;
};

export const Card: FC<TCardProps> = ({
  index,
  name,
  image,
  price,
  pid,
  quantity,
  brand,
  category,
}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: false,
    });
    AOS.refresh();
  }, []);

  const animationDelay = 250 * index; // Adjust the delay timing as needed

  const productCategoryText = {
    color: "black",
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
  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState({
    image,
    name,
    price,
    index,
    brand,
    pid,
    quantity,
    category,
  });
  const handleClickOpen = (data: any) => {
    setOpen(true);
  };
  const handleClose = (value: any) => {
    setOpen(false);
    setSelectedValue(value);
  };
  const regularImage =
    selectedValue.image &&
    selectedValue.image.find((img: any) => img.color === "regular");
  const regularImageUrl = regularImage
    ? regularImage.imgs[0]
    : "https://res.cloudinary.com/ddbgqgsu1/image/upload/v1715686642/uxrmuosrtkq90sz77mc6.jpg";

  return (
    <>
      <ProductDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      ></ProductDialog>
      <Stack
        onClick={handleClickOpen}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        direction={"row"}
        width={"308px"}
        sx={{
          borderRadius: "10px",

          backgroundColor: "white",
        }}
        data-aos="fade-in"
        data-aos-delay={animationDelay}
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
          <Stack
            height={"80%"}
            sx={{
              backgroundImage: `url(${regularImageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></Stack>

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
                Sneaker
              </Typography>
            </Stack>
            <Typography sx={productCategoryText}>{name}</Typography>
            <Typography sx={productCategoryText}>₮{price}</Typography>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};
