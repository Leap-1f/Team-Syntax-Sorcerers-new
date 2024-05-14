"use client";
import {
  Stack,
  Box,
  Button,
  Typography,
  TextField,
  InputAdornment,
  Checkbox,
} from "@mui/material";
import { useEffect, useState, useSyncExternalStore } from "react";
import { getProducts } from "./network";
import { FaMagnifyingGlass, FaTrash } from "react-icons/fa6";
import DropdownGroup from "./selectgroup";
import Image from "next/image";
import EditDialog from "./Edit";

// remember to add the backend l8r
export function Main() {
  const titles = [
    "",
    "Бүтээгдэхүүн",
    "Color",
    "Үнэ",
    "Нэмсэн огноо",
    "Gender",
    "Size",
    "",
  ];
  function navigate(where: string) {
    window.location.href = where;
  }

  const [data, setData] = useState<any[]>([]);
  async function refresh() {
    const mane = await getProducts();
    console.log(mane);
    setData(mane);
  }
  useEffect(() => {
    refresh();
  }, []);
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleClickOpen = (id: string) => {
    sessionStorage.setItem("selectedItemId", id);
    console.log("selectedItemId", id);

    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };
  return (
    <>
      <EditDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      ></EditDialog>
      <Stack
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          p: "5vh",
        }}
        gap={2}
      >
        <Button
          sx={{
            p: "10px",
            borderRadius: "10px",
            px: "25px",
            bgcolor: "black",
            color: "white",
            transition: "0.1s",
            "&:hover": {
              bgcolor: "black",
              color: "white",
              p: "12px",
              px: "30px",
            },
          }}
          startIcon=""
          onMouseEnter={(e) => {
            const input = e.target as HTMLElement;
            input.innerText = "Бүтээгдэхүүн нэмэх?";
          }}
          onMouseLeave={(e) => {
            const input = e.target as HTMLElement;
            input.innerText = "Бүтээгдэхүүн нэмэх";
          }}
          onClick={() => {
            navigate("/admin/product/addProduct");
          }}
        >
          Бүтээгдэхүүн нэмэх.
        </Button>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <DropdownGroup />
          <TextField
            size="small"
            sx={{ width: "30%" }}
            placeholder="Бүтээгдэхүүний нэр, SKU, UPC"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaMagnifyingGlass fill="black" />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Stack spacing={2} direction="column" sx={{ width: "100%" }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(8, 1fr)",
              gridTemplateRows: "repeat(11, 1fr)",
              gap: "0px",
            }}
          >
            {titles.map((title, index) => (
              <Typography
                key={index}
                sx={{
                  fontSize: "16px",
                  fontWeight: "semibold",
                  color: "black",
                }}
              >
                {title}
              </Typography>
            ))}

            {data?.map((yotta, index) => {
              return (
                <>
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox id={yotta.name} />
                  </Box>
                  <Stack key={index} direction="row">
                    <Image
                      src={yotta.image}
                      width={50}
                      height={50}
                      alt="zurag2"
                    />
                    <Typography id={yotta.name} key={index}>
                      {yotta.name}
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "semibold",
                      color: "black",
                    }}
                  >
                    {yotta.color}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "semibold",
                      color: "black",
                    }}
                  >
                    {yotta.price}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "semibold",
                      color: "black",
                    }}
                  >
                    {yotta.createdAt}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "semibold",
                      color: "black",
                    }}
                  >
                    {yotta.gender}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "semibold",
                      color: "black",
                    }}
                  >
                    {yotta.size}
                  </Typography>
                  <Stack
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                      alignItems: "center",
                    }}
                    direction="row"
                  >
                    <Button>
                      <FaTrash />
                    </Button>
                    <Button>
                      <FaMagnifyingGlass
                        onClick={() => handleClickOpen(yotta.id)}
                      />
                    </Button>
                  </Stack>
                </>
              );
            })}
          </Box>
        </Stack>
      </Stack>
    </>
  );
}
