import { Stack, Typography } from "@mui/material";

const AboutOurTeam = () => {
  const textTypo = {
    color: "#666",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "14.375px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "26px",
  };
  const textTypoSecond = {
    color: "#222",
    fontFamily: "Barlow",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "19.2px",
  };
  return (
    <>
      <Stack
        width={"70%"}
        direction={"column"}
        alignItems={"center"}
        spacing={"20px"}
        paddingTop={"100px"}
        paddingBottom={"100px"}
      >
        <Stack
          width={"100px"}
          height={"100px"}
          sx={{ borderRadius: "50%", backgroundColor: "black" }}
        ></Stack>
        <Typography textAlign={"center"} sx={textTypo}>
          Great theme, extended super and fast professional support. Easy to
          use, flexible, visual composer and more functional <br /> plugins on
          board. Yes a real good, strong theme with structured coding.
          <br />
          Enjoy it! friendly and super good!
        </Typography>
        <Typography sx={textTypoSecond}>
          <span
            style={{ ...textTypoSecond, color: "#2BB9A9", fontWeight: 600 }}
          >
            Team-Syntax
          </span>
          - Team of Leap 1F
        </Typography>
      </Stack>
    </>
  );
};
export default AboutOurTeam;
