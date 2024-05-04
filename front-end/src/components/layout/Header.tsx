"use client";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import InputBase from "@mui/material/InputBase";
import { AiOutlineShoppingCart } from "react-icons/ai";
import React, { FC, useState } from "react";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { Bag } from "./myBags";
import {
  Grid,
  MenuItem,
  Paper,
  SelectChangeEvent,
  SelectProps,
  Stack,
  Typography,
  styled,
} from "@mui/material";

interface CategoryItemProps {
  label: string;
  href: string;
}
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    paddingLeft: "20px",
  },
}));
const Search = styled("div")({
  display: "flex",
  alignItems: "center",
  borderRadius: "5px",
});
const CategoryItem: FC<CategoryItemProps> = ({ label, href }) => (
  <Button
    component="a"
    href={href}
    variant="text"
    sx={{
      width: "fit-content",
      color: "black",
      "&:hover": {
        color: "#2BB9A9",
      },
    }}
  >
    {label}
  </Button>
);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const categoriesLeftSide: CategoryItemProps[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Shop",
    href: "/shop",
  },
  {
    label: "Blog",
    href: "/blog",
  },
];
const categoriesRightSide: CategoryItemProps[] = [
  {
    label: "Pages",
    href: "/aboutUs",
  },
  {
    label: "Portfolio",
    href: "/ourService",
  },
  {
    label: "Contact us",
    href: "/contactUs",
  },
];
const headerCurrencyTypo = {
  fontSize: "16px",
  fontFamily: "Barlow",
  fontWeight: 500,
  color: "#adacac",
};
const gotaTypo = {
  fontSize: "16px",
  textTransform: "uppercase",
  px: "30px",
  fontWeight: 600,
  color: "#222222",
};
const buttonTypo = {
  fontSize: "16px",
  color: "#222222",
  fontWeight: 600,
  textTransform: "uppercase",
  display: "block",
  paddingRight: "30px",
};
function Header() {
  const [currency, setCurrency] = useState<string>("USD");
  const handleChange = (event: SelectChangeEvent) => {
    setCurrency(event.target.value as string);
  };
  const [showAddCard, setShowAddCard] = useState(false);
  const openAddCard = () => {
    setShowAddCard((prev) => !prev);
  };

  return (
    <>
      <Stack width={"100%"}>
        {Bag(showAddCard, openAddCard)}
        <Stack
          width={"100%"}
          height={"48px"}
          bgcolor={"#202020"}
          px={"48px"}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          color={"white"}
        >
          <Stack direction={"row"} color={"#88888"}>
            <Select
              placeholder="USD"
              indicator={<KeyboardArrowDown />}
              variant="plain"
              sx={{
                ...headerCurrencyTypo,
                width: 85,
                backgroundColor: "#202020",
                [`& .${selectClasses.indicator}`]: {
                  transition: "0.2s",
                  [`&.${selectClasses.expanded}`]: {
                    transform: "rotate(-180deg)",
                  },
                },
                "&:hover": {
                  color: "#2bb9a9",
                  backgroundColor: "#202020",
                },
              }}
            >
              <Option value="usd">USD</Option>
              <Option value="mnt">MNT</Option>
            </Select>
            <Select
              placeholder="ENGLISH"
              indicator={<KeyboardArrowDown />}
              variant="plain"
              sx={{
                ...headerCurrencyTypo,
                width: 120,
                backgroundColor: "#202020",
                [`& .${selectClasses.indicator}`]: {
                  transition: "0.2s",
                  [`&.${selectClasses.expanded}`]: {
                    transform: "rotate(-180deg)",
                  },
                },
                "&:hover": {
                  color: "#2bb9a9",
                  backgroundColor: "#202020",
                },
              }}
            >
              <Option value="english">ENGLISH</Option>
              <Option value="mongolia">MONGOLIA</Option>
            </Select>
          </Stack>
          <Stack direction={"row"}>
            <Button
              sx={{
                textTransform: "uppercase",
                color: "#adacac",
                "&:hover": {
                  color: "#2bb9a9",
                },
              }}
            >
              Wishlist
            </Button>
            <Button
              sx={{
                textTransform: "uppercase",
                color: "#adacac",
                "&:hover": {
                  color: "#2bb9a9",
                },
              }}
            >
              account
            </Button>
            <Button
              sx={{
                textTransform: "uppercase",
                color: "#adacac",
                "&:hover": {
                  color: "#2bb9a9",
                },
              }}
            >
              Checkout
            </Button>
            <Button
              sx={{
                textTransform: "uppercase",
                color: "#adacac",
                "&:hover": {
                  color: "#2bb9a9",
                },
              }}
            >
              login&register
            </Button>
          </Stack>
        </Stack>
        <Grid container alignItems="center" justifyContent={"space-between"}>
          <Grid item sx={{ width: "20%" }}>
            <Stack sx={{ py: "30px", px: "48px" }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search"
                  inputProps={{ "aria-label": "search" }}
                  sx={gotaTypo}
                />
              </Search>
            </Stack>
          </Grid>
          <Grid
            item
            direction={"row"}
            justifyContent={"center"}
            sx={{ width: "60%" }}
          >
            <Stack
              width={"100%"}
              direction={"row"}
              justifyContent={"center"}
              sx={{ py: "30px", px: "48px" }}
              spacing={"10px"}
            >
              {categoriesLeftSide.map((category, index) => (
                <Button
                  sx={{
                    ...buttonTypo,
                    "&:hover": {
                      backgroundColor: "none",
                      border: "none !important",
                      color: "#2bb9a9",
                    },
                  }}
                  key={index}
                  href={category.href}
                >
                  {category.label}
                </Button>
              ))}
              <Image
                loading="lazy"
                width={75}
                height={69}
                src="https://res.cloudinary.com/dqhy9ufze/image/upload/v1714038144/9c66d8dd02f3646ac9a10299bb4346aab9ee290841253a496877330db28584fd_bpr2lk.png"
                alt=""
                className="shrink-0 self-stretch my-auto aspect-[2.44] w-[69px]"
              />
              {categoriesRightSide.map((category, index) => (
                <Button
                  sx={{
                    ...buttonTypo,
                    "&:hover": {
                      backgroundColor: "none",
                      border: "none !important",
                      color: "#2bb9a9",
                    },
                  }}
                  key={index}
                  href={category.href}
                >
                  {category.label}
                </Button>
              ))}
            </Stack>
          </Grid>

          <Grid item sx={{ width: "20%" }}>
            <Stack
              direction={"row"}
              justifyContent={"flex-end"}
              sx={{ paddingRight: "48px" }}
            >
              <Button
                sx={{
                  padding: "0px",
                  display: "flex",
                  width: "fit-content",
                }}
                onClick={openAddCard}
              >
                <span style={{ color: "black", fontSize: "24px" }}>
                  <AiOutlineShoppingCart />
                </span>
                <Typography
                  sx={{
                    ...gotaTypo,
                    fontSize: "16px",
                    px: "10px",
                  }}
                >
                  My Bag (2)
                </Typography>
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}

export default Header;
