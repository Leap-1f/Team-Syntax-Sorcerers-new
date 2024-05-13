"use client";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { FC, use, useState, useSyncExternalStore } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Bag } from "./myBags";
import { Grid, Paper, SelectChangeEvent, styled, Button } from "@mui/material";

interface CategoryItemProps {
  label: string;
  href: string;
}
const store = {
  getSnapshot: () => sessionStorage.getItem("cart") || "[]",
  subscribe: (listener: () => void) => {
    window.addEventListener("storage", listener);
    return () => void window.removeEventListener("storage", listener);
  },
};

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled("input")(({ theme }) => ({
  color: "inherit",
  width: "100%",
  paddingLeft: "20px",
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
    label: "Нүүр хуудас",
    href: "/",
  },
  {
    label: "Бүх бараа",
    href: "/shop",
  },
  {
    label: "Мэдээ",
    href: "/blog",
  },
];
const categoriesRightSide: CategoryItemProps[] = [
  {
    label: "Бидний тухай",
    href: "/aboutUs",
  },
  {
    label: "Үйлчилгээ",
    href: "/ourService",
  },
  {
    label: "Холбоо барих",
    href: "/contactus",
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
  paddingX: "20px",
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
  const kart: any = useSyncExternalStore(store.subscribe, store.getSnapshot);
  const wart: any = JSON.parse(kart);

  return (
    <>
      <Stack width={"100%"} position={"sticky"} top={"0"} zIndex={"100"}>
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
          <Stack direction={"row"} color={"#88888"}></Stack>
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
              Бүртгүүлэх
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
              Нэвтрэх
            </Button>
          </Stack>
        </Stack>
        {/* //====================================================================== */}
        <Grid
          container
          alignItems="center"
          justifyContent={"space-between"}
          bgcolor={"white"}
        >
          <Grid item sx={{ width: "20%" }}></Grid>
          <Grid item justifyContent={"center"} sx={{ width: "60%" }}>
            <Stack
              width={"100%"}
              direction={"row"}
              justifyContent={"space-evenly"}
              sx={{ py: "30px", px: "48px" }}
            >
              {categoriesLeftSide.map((category, index) => (
                <Button
                  sx={{
                    ...buttonTypo,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
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
              <a href="/">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Image
                    loading="lazy"
                    width={100}
                    height={100}
                    src="https://res.cloudinary.com/dqhy9ufze/image/upload/v1715339533/vortexkicks/Screenshot_2024-05-10_at_19.11.40-removebg-preview_zla5fj.png"
                    alt=""
                    className="cursor-pointer"
                  />
                  <Typography
                    sx={{
                      ...buttonTypo,
                      color: "#222222",
                    }}
                  ></Typography>
                </div>
              </a>

              {categoriesRightSide.map((category, index) => (
                <Button
                  sx={{
                    ...buttonTypo,
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
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
                  paddingX: "20px ",
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
                  My Bag ({wart.length})
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
