import { normal } from "@cloudinary/url-gen/qualifiers/textDecoration";
import { Button, Stack, Typography } from "@mui/material";

export const Blog = () => {
  const blogH1 = {
    color: "#222",
    textAlign: "center",
    fontFamily: "Barlow",
    fontSize: "36px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "54px",
    textTransform: "uppercase",
  };
  const blogTypograpiy = {
    color: "#666",
    textAlign: "center",
    fontDamily: "Inter",
    fontSize: "14.375px",
    fontStyle: "normal",
    fontWeight: 400,

    lineHeight: "26px",
  };
  const blogPostH1 = {
    color: " #FFF",
    fontFamily: "Barlow",
    fontSize: "21px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "25.2px",
    textTransform: "uppercase",
  };
  const blogPostTypo = {
    color: " #FFF",
    fontFamily: "Inter",
    fontSize: "13.344px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "26px",
  };
  const buttonContinueReading = {
    color: "#FFF",
    fontFamily: "Barlow",
    fontsize: "16px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "24px",
  };
  const blogPostTypoTwo = {
    color: "#666",
    fontFamily: "Futura Std Book",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "normal",
    lineHeight: "26px",
  };
  return (
    <>
      <Stack width={"100%"} spacing={"20px"} py={"100px"}>
        <Stack>
          <Typography sx={blogH1}>сонирхолтой мэдээлэл</Typography>
          <Typography sx={blogTypograpiy}>
            Commodo sociosqu venenatis cras dolor sagittis integer luctus sem
            primis <br /> eget maecenas sed urna malesuada.
          </Typography>
        </Stack>
        <Stack direction={"row"} width={"100%"} spacing={"20px"}>
          <Stack
            width={"50%"}
            height={"450px"}
            direction={"column"}
            spacing={"10px"}
            justifyContent={"flex-end"}
            alignItems={"flex-start"}
            sx={{
              backgroundImage:
                "url(https://res.cloudinary.com/dqhy9ufze/image/upload/v1714036381/2c395e0218c6392a48648290e32eee2f_zvak6k.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
              paddingLeft: "20px",
              paddingBottom: "40px",
            }}
          >
            <Button
              sx={{
                borderRadius: "0px",
                backgroundColor: "#2BB9A9",
                color: "white",
                textTransform: "none",
              }}
            >
              Shoes, Clothes
            </Button>
            <Typography sx={blogPostH1}>
              Mauris rhoncus aliquet purus
            </Typography>
            <Typography sx={blogPostTypo}>
              By Erentheme /September 16, 2019
            </Typography>
            <Button sx={{ ...buttonContinueReading, paddingLeft: "0px" }}>
              Continue reading
            </Button>
          </Stack>
          <Stack
            direction={"column"}
            justifyContent={"space-between"}
            spacing={"10px"}
            width={"50%"}
          >
            <Stack direction={"row"} width={"100%"} spacing={"20px"}>
              <Stack
                width={"198px"}
                height={"130px"}
                sx={{
                  backgroundImage:
                    "url(https://res.cloudinary.com/dqhy9ufze/image/upload/v1714036446/df4b56c9b8460033cf3baa24a067daeb_xtdiqz.jpg)",
                }}
              ></Stack>
              <Stack
                direction={"column"}
                spacing={"10px"}
                sx={{ paddingTop: "5px" }}
              >
                <Typography sx={{ ...blogPostH1, color: "black" }}>
                  Simple & Easy DIY Flower Deco
                </Typography>
                <Typography sx={{ ...blogPostTypo, color: "black" }}>
                  By Erentheme /September 16, 2019
                </Typography>
                <Typography sx={blogPostTypoTwo}>
                  Sapien luctus id justo suscipit nonummy eget hymenaeos...
                </Typography>
              </Stack>
            </Stack>
            <Stack direction={"row"} width={"100%"} spacing={"20px"}>
              <Stack
                width={"198px"}
                height={"130px"}
                sx={{
                  backgroundImage:
                    "url(https://res.cloudinary.com/dqhy9ufze/image/upload/v1714036456/f12302a635ba39ce645619575f468f93_ux7vpf.jpg)",
                }}
              ></Stack>
              <Stack
                direction={"column"}
                spacing={"10px"}
                sx={{ paddingTop: "5px" }}
              >
                <Typography sx={{ ...blogPostH1, color: "black" }}>
                  Simple & Easy DIY Flower Deco
                </Typography>
                <Typography sx={{ ...blogPostTypo, color: "black" }}>
                  By Erentheme /September 16, 2019
                </Typography>
                <Typography sx={blogPostTypoTwo}>
                  Sapien luctus id justo suscipit nonummy eget hymenaeos...
                </Typography>
              </Stack>
            </Stack>{" "}
            <Stack direction={"row"} width={"100%"} spacing={"20px"}>
              <Stack
                width={"198px"}
                height={"130px"}
                sx={{
                  backgroundImage:
                    "url(https://res.cloudinary.com/dqhy9ufze/image/upload/v1714036543/206686f32e320d56775f12afd2b7bc0c_awcn9a.jpg)",
                }}
              ></Stack>
              <Stack
                direction={"column"}
                spacing={"10px"}
                sx={{ paddingTop: "5px" }}
              >
                <Typography sx={{ ...blogPostH1, color: "black" }}>
                  Simple & Easy DIY Flower Deco
                </Typography>
                <Typography sx={{ ...blogPostTypo, color: "black" }}>
                  By Erentheme /September 16, 2019
                </Typography>
                <Typography sx={blogPostTypoTwo}>
                  Sapien luctus id justo suscipit nonummy eget hymenaeos...
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
export default Blog;
