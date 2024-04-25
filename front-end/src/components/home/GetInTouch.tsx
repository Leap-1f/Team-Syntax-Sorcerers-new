import { Stack, Typography, TextField, Box } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { LuSend } from "react-icons/lu";

export const GetInTouch = () => {
  const textH1 = {
    color: "#222",
    textAlign: "center",
    fontFamily: "Barlow",
    fontSize: "36px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "54px",
    textTransform: "uppercase",
  };
  const textType = {
    color: "#666",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "14.75px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "26px",
  };
  return (
      <>
          <Stack
              width={"100%"}
              height={"354px"}
              direction={"column"}
              alignItems={"center"}
              spacing={"40px"}
              sx={{
                  backgroundImage:
                      "url('https://res.cloudinary.com/dqhy9ufze/image/upload/v1714037929/flowershape_ydnoz2.png')",
              }}
          >
              <Stack spacing={"20px"}>
                  <Typography sx={textH1}>Get In Touch</Typography>
                  <Typography textAlign={"center"} sx={textType}>
                      Sign up for all the news about our latest arrivals and get
                      an exclusive early access shopping. Join 60.000+
                      Subscribers <br /> and get a new discount coupon on every
                      Saturday.
                  </Typography>
              </Stack>
              <TextField
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: "800px", borderRadius: "50%" }}
                  InputProps={{
                      endAdornment: (
                          <Box>
                              <LuSend color="#2BB9A9" size={"30px"} />
                          </Box>
                      ),
                  }}
              />
          </Stack>
      </>
  );
};
export default GetInTouch;
