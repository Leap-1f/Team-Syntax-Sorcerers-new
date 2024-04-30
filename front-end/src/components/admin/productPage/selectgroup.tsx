import { Stack } from "@mui/material";
import Dropdown from "./select";
export default function DropdownGroup() {
  return (
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
  );
}
