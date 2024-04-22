import { Stack, Typography } from "@mui/material";
import { PiStarBold } from "react-icons/pi";
import { IoTriangle } from "react-icons/io5";

export const HoteSaleTag = () => {
  const tagTypo = {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Barlow",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 600,
    lineWigth: 1,
    lineHeight: 1,
    textTransform: "uppercase",
  };
  return (
    <>
      <Stack
        width={"35px"}
        height={"80px"}
        direction={"column"}
        spacing={"20%"}
        sx={{
          flexShrink: "0",
          backgroundColor: "#FFC000",
          p: "1%",
          overflow: "hidden",
        }}
      >
        <Typography sx={tagTypo}>hot deal</Typography>
        <PiStarBold color="#fff"></PiStarBold>
        <IoTriangle />
      </Stack>
    </>
  );
};
