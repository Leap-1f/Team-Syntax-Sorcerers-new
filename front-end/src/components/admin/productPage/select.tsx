"use client";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
const Dropdown = (id: string, name: string, value: Array<any>): JSX.Element => {
  const [val, setVal] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setVal(event.target.value as string);
  };
  return (
    <FormControl fullWidth>
      <InputLabel id={id + "-label"}>{name}</InputLabel>
      <Select
        labelId={id + "-label"}
        id={id}
        value={val}
        label={name}
        onChange={handleChange}
      >
        {value.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default Dropdown;
