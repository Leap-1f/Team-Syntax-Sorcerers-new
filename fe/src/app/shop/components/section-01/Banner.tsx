import { Box, Popover, Stack, Typography } from "@mui/material";

export const Banner = () => {
  const bannerTextStyle = {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Barlow",
    fontSize: "60px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "72px",
    textTransform: "uppercase",
  };

  return (
    <>
      <Stack width={"100vw"}>
        <Box
          height={"400px"}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{ backgroundColor: "black" }}
        >
          <Typography sx={bannerTextStyle}>SHOP</Typography>
          <Stack direction={"row"} spacing={1}>
            <button className=" text-white">Home</button>
            <button className=" text-white">Shop</button>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};
