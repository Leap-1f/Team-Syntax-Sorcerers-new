import { Stack, Typography } from "@mui/material";
import { Card } from "./components/Card";
import exp from "constants";

export const FeaturesTwo = () => {
  const featureTypoGraphy = {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Barlow",
    fontSize: "36px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "54px",
    textTransform: "uppercase",
  };
  const paraTypoGraphy = {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "26px",
  };

  return (
    <>
      <Stack
        width={"100%"}
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={"20px"}
        sx={{
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          paddingTop: "60px",
          paddingBottom: "80px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://wphix.com/template/gota/gota/assets/img/service/categorybg.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            zIndex: -1,
          }}
        />
        <Stack>
          <Typography sx={featureTypoGraphy}>
            EXPLORE OUR <br /> FEATURED
          </Typography>
          <Typography sx={paraTypoGraphy}>
            Commodo sociosqu venenatis cras dolor sagittis integer luctus sem
            <br />
            primis eget maecenas sed urna malesuada.
          </Typography>
        </Stack>
        <Stack direction={"row"} justifyContent={"center"} spacing={"40px"}>
          <Card />
          <Card />
          <Card />
          <Card />
        </Stack>
      </Stack>
    </>
  );
};

export default FeaturesTwo;
