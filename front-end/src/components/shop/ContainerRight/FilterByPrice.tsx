import { Stack, Typography, Slider, Button } from "@mui/material";
import * as React from "react";
function valuetext(value: number) {
  return `${value}°C`;
}
export const FilterByPrice = () => {
  const productCategoryText = {
    color: "#222",
    fontFamily: "Barlow",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "28.8px",
    textTransform: "uppercase",
  };
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <>
      <Stack direction={"column"} alignItems={"flex-start"} spacing={"30px"}>
        <Typography
          sx={{
            ...productCategoryText,
            borderBottom: "solid",
            borderBottomWidth: "3px",
            display: "inline-block",
            width: "fit-content",
          }}
        >
          Filter By Price
        </Typography>
        <Stack direction={"column"} alignItems={"flex-start"} width={"500px"}>
          <Slider
            sx={{ color: "#EB2323", width: "70%" }}
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
          <Stack>
            <Button
              sx={{
                backgroundColor: "#333",
                color: "white",
                textTransform: "none",
              }}
            >
              Filter
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
