import { Box, Stack, Typography } from "@mui/material";

export const ColorOption = () => {
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
          Color option
        </Typography>
        <Stack
          direction={"row"}
          alignItems={"flex-start"}
          width={"500px"}
          spacing={"5px"}
        >
          <Box
            width={"40px"}
            height={"40px"}
            borderRadius={"50%"}
            sx={{ backgroundColor: "#0000FF" }}
          ></Box>
          <Box
            width={"40px"}
            height={"40px"}
            borderRadius={"50%"}
            sx={{ backgroundColor: "#D4D4D4" }}
          ></Box>
          <Box
            width={"40px"}
            height={"40px"}
            borderRadius={"50%"}
            sx={{ backgroundColor: "#1CBBB4" }}
          ></Box>
          <Box
            width={"40px"}
            height={"40px"}
            borderRadius={"50%"}
            sx={{ backgroundColor: "#DD3333" }}
          ></Box>
          <Box
            width={"40px"}
            height={"40px"}
            borderRadius={"50%"}
            sx={{ backgroundColor: "#EEEE22" }}
          ></Box>
        </Stack>
      </Stack>
    </>
  );
};
