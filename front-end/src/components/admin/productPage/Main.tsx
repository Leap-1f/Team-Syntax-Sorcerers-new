"use client";
import { Stack, Box, Button, Typography } from "@mui/material";
import Dropdown from "./select";
export function Main() {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button>Бүтээгдэхүүн нэмэх.</Button>
      <Stack direction="row" sx={{ width: "30%", height: "10%" }} spacing={2}>
        {Dropdown("category", "Ангилал", [
          { label: "Product 1", value: "1" },
          { label: "Product 2", value: "2" },
          { label: "Product 3", value: "3" },
        ])}
        {Dropdown("price", "Үнэ", [
          { label: "Product 1", value: "1" },
          { label: "Product 2", value: "2" },
          { label: "Product 3", value: "3" },
        ])}
        {Dropdown("month", "Сараар", [
          { label: "Product 1", value: "1" },
          { label: "Product 2", value: "2" },
          { label: "Product 3", value: "3" },
        ])}
      </Stack>
    </Stack>
  );
}
