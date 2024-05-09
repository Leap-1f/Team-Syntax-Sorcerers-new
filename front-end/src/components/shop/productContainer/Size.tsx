import { Box, Stack, Typography } from "@mui/material";

export const Size = () => {
  const productCategoryFont = {
    color: "#666",
    fontFamily: "Inter",
    fontSize: "14.5px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "24px",
    textTransform: "capitalize",
    padding: 0,
    cursor: "pointer",
  };

  const productCategoryText = {
    color: "#222",
    fontFamily: "Barlow",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "28.8px",
    textTransform: "uppercase",
  };

  return (
    <>
      <Stack direction={"column"} alignItems={"flex-start"} spacing={"30px"}>
        <Typography
          sx={{
            ...productCategoryText,
            borderBottom: "solid",
            borderBottomWidth: "3px",
            display: "inline-block",
            width: "fit-content",
          }}
        >
          Size
        </Typography>
        <Stack
          direction={"row"}
          alignItems={"flex-start"}
          width={"500px"}
          spacing={"10px"}
        >
          <Box
            sx={{
              ...productCategoryFont,
              width: "35",
              height: "35",
              backgroundColor: "#F1F1F1",
              borderRadius: "50%",
              padding: "10px",
            }}
          >
            XL
          </Box>
          <Box
            sx={{
              ...productCategoryFont,
              width: "35",
              height: "35",
              backgroundColor: "#F1F1F1",
              borderRadius: "50%",
              padding: "10px",
            }}
          >
            L
          </Box>
          <Box
            sx={{
              ...productCategoryFont,
              width: "35",
              height: "35",
              backgroundColor: "#F1F1F1",
              borderRadius: "50%",
              padding: "10px",
            }}
          >
            M
          </Box>
        </Stack>
      </Stack>
    </>
  );
};
