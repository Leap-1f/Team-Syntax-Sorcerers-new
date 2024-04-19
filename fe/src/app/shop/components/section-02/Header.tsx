import { Button, Stack, Typography } from "@mui/material";

import { MdGridView } from "react-icons/md";

export const Header = () => {
  const productCategoryFont = {
    color: "#666",
    fontFamily: "Inter",
    fontSize: "18.125px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "26px", // 171.901%
  };

  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography sx={productCategoryFont}>Showing all 21 results</Typography>
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <Typography sx={productCategoryFont}>views</Typography>

          <MdGridView size={"25px"} />

          <MdGridView size={"25px"} />

          <MdGridView size={"25px"} />
        </Stack>
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <Typography sx={{ ...productCategoryFont, fontSize: "16px" }}>
            Defualt Settings
          </Typography>
          <Button
            sx={{
              backgroundColor: "#333",
              color: "white",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "red",
              },
            }}
          >
            Filter
          </Button>
        </Stack>
      </Stack>
    </>
  );
};
