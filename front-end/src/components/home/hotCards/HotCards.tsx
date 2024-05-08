import { Stack, Typography } from "@mui/material";

const FeaturesOne = () => {
  const h1Typo = {
    color: "#FFF",
    fontFamily: "Barlow",
    fontSize: "25px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "42px",
    textTransform: "uppercase",
  };
  const textTypo = {
    color: "#FFF",
    fontFamily: "Barlow",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "26px",
    textTransform: "uppercase",
  };
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      justifyContent={"space-between"}
      spacing={"20px"}
      py={"40px"}
    >
      <Stack
        width={"25%"}
        height={"409px"}
        direction={"column"}
        justifyContent={"flex-end"}
        alignItems={"flex-start"}
        sx={{
          px: "30px",
          py: "20px",
          backgroundImage:
            "url('https://res.cloudinary.com/ddbgqgsu1/image/upload/v1715063912/nadkvs1thbvtwt1jvfwc.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Stack> {/* <HoteSaleTag /> */}</Stack>
        <Typography sx={h1Typo}>Tatum 2 Vortex </Typography>
        <Typography sx={textTypo}>
          <span style={{ color: "#2BB9A9" }}>20%</span> sale
        </Typography>
      </Stack>
      <Stack
        width={"50%"}
        direction={"column"}
        paddingBottom={"20px"}
        alignItems={"center"}
        justifyContent={"space-between"}
        spacing={"20px"}
        sx={{
          paddingTop: "60px",
          backgroundImage:
            "url('https://res.cloudinary.com/ddbgqgsu1/image/upload/v1715072211/gvhgpu8e7tpcpvntmglv.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Typography sx={textTypo}>THIS MONTH BIG SALE</Typography>
        <Stack direction={"column"} alignItems={"center"} spacing={"10px"}>
          <Typography sx={{ ...h1Typo, fontWeight: 800 }}>
            Jacket Sportwear
          </Typography>
          <Typography sx={textTypo}>
            sale <span style={{ color: "#FFC000" }}>20%</span> Off Helmet for
            Women’s
          </Typography>
        </Stack>
      </Stack>
      <Stack
        width={"25%"}
        direction={"column"}
        justifyContent={"flex-end"}
        alignItems={"flex-start"}
        sx={{
          px: "30px",
          py: "20px",
          backgroundImage:
            "url('https://res.cloudinary.com/ddbgqgsu1/image/upload/v1715070904/iy6dmtrgz6dgo4fjqrcz.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Stack></Stack>
        <Typography sx={h1Typo}>LeBron NXXT Gen </Typography>
        <Typography sx={textTypo}>
          <span style={{ color: "orange" }}>20%</span> sale
        </Typography>
      </Stack>
    </Stack>
  );
};
export default FeaturesOne;
