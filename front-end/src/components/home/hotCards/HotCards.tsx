import { Stack, Typography } from "@mui/material";

const FeaturesOne = () => {
  const h1Typo = {
    color: "#FFF",
    fontFamily: "Barlow",
    fontSize: "35px",
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
              justifyContent={"space-between"}
              sx={{
                  px: "30px",
                  py: "20px",
                  backgroundImage:
                      "url('https://res.cloudinary.com/dqhy9ufze/image/upload/v1714037448/banar3-1_jxnqf3.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
              }}
          >
              <Stack> {/* <HoteSaleTag /> */}</Stack>{" "}
              <Typography sx={h1Typo}>Helmet Sport for women’s</Typography>
              <Typography sx={textTypo}>
                  sale <span style={{ color: "#FFC000" }}>20%</span> Off Helmet
                  for Women’s
              </Typography>
          </Stack>
          <Stack
              width={"50%"}
              direction={"column"}
              alignItems={"center"}
              spacing={"50px"}
              sx={{
                  paddingTop: "60px",
                  backgroundImage:
                      "url('https://res.cloudinary.com/dqhy9ufze/image/upload/v1714037460/banar3-2_glxmfx.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
              }}
          >
              <Stack
                  direction={"column"}
                  alignItems={"center"}
                  spacing={"20px"}
              >
                  <Typography sx={textTypo}>THIS MONTH BIG SALE</Typography>
                  <Typography sx={h1Typo}>
                      <span style={{ fontWeight: 800 }}>Jacket </span>Sportwear
                  </Typography>
              </Stack>
              <Typography sx={textTypo}>
                  sale <span style={{ color: "#FFC000" }}>20%</span> Off Helmet
                  for Women’s
              </Typography>
          </Stack>
          <Stack
              width={"25%"}
              direction={"column"}
              justifyContent={"space-between"}
              sx={{
                  px: "30px",
                  py: "20px",
                  backgroundImage:
                      "url('https://res.cloudinary.com/dqhy9ufze/image/upload/v1714037467/banar3-3_zjvndu.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
              }}
          >
              <Stack>a</Stack>
              <Typography sx={h1Typo}>Helmet Sport for women’s</Typography>
              <Typography sx={textTypo}>
                  sale <span style={{ color: "#A80E0E" }}>20%</span> Off Helmet
                  for Women’s
              </Typography>
          </Stack>
      </Stack>
  );
};
export default FeaturesOne;
