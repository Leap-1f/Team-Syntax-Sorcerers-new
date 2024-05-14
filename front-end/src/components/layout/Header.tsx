"use client";
import Image from "next/image";
import InputBase from "@mui/material/InputBase";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FC, useState, useSyncExternalStore } from "react";
import { Bag } from "./myBags";
import { useUser } from "@auth0/nextjs-auth0/client";
import {
  Grid,
  Paper,
  SelectChangeEvent,
  Stack,
  Typography,
  styled,
  Button,
} from "@mui/material";

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
  paddingRight: "30px",
};
function Header() {
  const { user, error, isLoading } = useUser();
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
                      {/* <Button
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
            </Button> */}

                      {user && (
                          <Stack
                              direction={"row"}
                              spacing={"10px"}
                              alignItems={"center"}
                          >
                              <Button
                                  sx={{
                                      textTransform: "uppercase",
                                      color: "#adacac",
                                      "&:hover": {
                                          color: "#2bb9a9",
                                      },
                                  }}
                                  href="/api/auth/logout"
                              >
                                  Log Out
                              </Button>

                              <Image
                                  src={user.picture as string}
                                  alt={user.name as string}
                                  width={50}
                                  height={50}
                              />
                          </Stack>
                      )}

                      {!user && (
                          <Button
                              sx={{
                                  textTransform: "uppercase",
                                  color: "#adacac",
                                  "&:hover": {
                                      color: "#2bb9a9",
                                  },
                              }}
                              href="/api/auth/login"
                          >
                              Нэвтрэх
                          </Button>
                      )}
                  </Stack>
              </Stack>
              <Grid
                  container
                  alignItems="center"
                  justifyContent={"space-between"}
                  bgcolor={"white"}
              >
                  <Grid item sx={{ width: "20%" }}></Grid>
                  <Grid
                      item
                      direction={"row"}
                      justifyContent={"center"}
                      sx={{ width: "80%" }}
                  >
                      <Stack
                          width={"100%"}
                          direction={"row"}
                          justifyContent={"space-evenly"}
                          sx={{ py: "30px", px: "48px" }}
                          spacing={"10px"}
                      >
                          {categoriesLeftSide.map((category, index) => (
                              <Button
                                  sx={{
                                      ...buttonTypo,
                                      direction: "flex",
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
                          <Stack
                              direction="row"
                              alignItems="center"
                              justifyContent="center"
                          >
                              <a
                                  href="/"
                                  style={{
                                      textDecoration: "none",
                                      color: "inherit",
                                  }}
                              >
                                  <div
                                      style={{
                                          display: "flex",
                                          flexDirection: "column",
                                          alignItems: "center",
                                      }}
                                  >
                                      <Image
                                          src="https://res.cloudinary.com/dqhy9ufze/image/upload/v1715593235/Screenshot_2024-05-13_at_17.32.56-removebg-preview_ypvw3u.png"
                                          alt=""
                                          width={200}
                                          height={100}
                                          className="cursor-pointer"
                                      />
                                      <Typography
                                          variant="body1"
                                          color="inherit"
                                      >
                                          {/* Text aligned with the image */}
                                      </Typography>
                                  </div>
                              </a>
                          </Stack>
                          {categoriesRightSide.map((category, index) => (
                              <Button
                                  sx={{
                                      ...buttonTypo,
                                      direction: "flex",
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
                          <Grid item sx={{ width: "24%" }}>
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
                                      <span
                                          style={{
                                              color: "black",
                                              fontSize: "24px",
                                          }}
                                      >
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
                      </Stack>
                  </Grid>
                  <Grid item sx={{ width: "20%" }}></Grid>
              </Grid>
          </Stack>
      </>
  );
}

export default Header;
