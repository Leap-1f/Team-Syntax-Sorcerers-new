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
import { FaMagnifyingGlass, FaTrash } from "react-icons/fa6";
import { BsPencilSquare } from "react-icons/bs";
import DropdownGroup from "./selectgroup";
// remember to add the backend l8r
export function Main() {
  const titles = [
    "",
    "Бүтээгдэхүүн",
    "Ангилал",
    "Үнэ",
    "Үлдэгдэл",
    "Зарагдсан",
    "Нэмсэн огноо",
    "",
  ];
  const testData = [
    {
      id: 1,
      category: ["Bag", "Women"],
      price: "1200",
      date: "2022-01-01",
      name: "Bag",
      description: "Is a bag",
      remaining: "100",
      sold: "0",
      image: "mamaMia!",
    },
  ];
  return (
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
            gridTemplateRows: "repeat(9, 1fr)",
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
          {testData.map((data, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                alignItems: "center",
              }}
            >
              <Checkbox id={data.name} />
            </Box>
          ))}
          {testData.map((data, index) => (
            <Typography id={data.name} key={index}>
              {data.name}
            </Typography>
          ))}
          {testData.map((data, index) => (
            <Typography id={data.name} key={index}>
              {data.category.join(", ")}
            </Typography>
          ))}
          {testData.map((data, index) => (
            <Typography id={data.name} key={index}>
              {data.price}
            </Typography>
          ))}
          {testData.map((data, index) => (
            <Typography id={data.name} key={index}>
              {data.remaining}
            </Typography>
          ))}
          {testData.map((data, index) => (
            <Typography id={data.name} key={index}>
              {data.sold}
            </Typography>
          ))}
          {testData.map((data, index) => (
            <Typography id={data.name} key={index}>
              {data.date}
            </Typography>
          ))}
          {testData.map((data, index) => (
            <Stack id={data.name} key={index} direction="row">
              <Button>
                <FaTrash />
              </Button>
              <Button>
                <BsPencilSquare />
              </Button>
            </Stack>
          ))}
        </Box>
      </Stack>
    </Stack>
  );
}
