import { Stack } from "@mui/material";
import React from "react";

export const FeaturesOne = () => {
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      justifyContent={"space-between"}
      spacing={"20px"}
    >
      <Stack
        width={"25%"}
        height={"409px"}
        sx={{
          backgroundImage:
            "url('https://wphix.com/template/gota/gota/assets/img/features/banar3-1.png')",
        }}
      >
        a
      </Stack>
      <Stack
        width={"50%"}
        sx={{
          backgroundImage:
            "url('https://wphix.com/template/gota/gota/assets/img/features/banar3-2.png')",
        }}
      >
        a
      </Stack>
      <Stack
        width={"25%"}
        sx={{
          backgroundImage:
            "url('https://wphix.com/template/gota/gota/assets/img/features/banar3-3.png')",
        }}
      >
        a
      </Stack>
    </Stack>
  );
};
