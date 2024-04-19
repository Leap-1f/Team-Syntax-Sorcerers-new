import { Button, Stack, Typography } from "@mui/material";

export const ProductTags = () => {
  const productCategoryText = {
    color: "#222",
    fontFamily: "Barlow",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "28.8px",
    textTransform: "uppercase",
  };

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

  return (
    <>
      <Stack
        direction={"column"}
        alignItems={"flex-start"}
        spacing={"30px"}
        paddingBottom={"200px"}
      >
        <Typography
          sx={{
            ...productCategoryText,
            borderBottom: "solid",
            borderBottomWidth: "3px",
            display: "inline-block",
            width: "fit-content",
          }}
        >
          Product Tags
        </Typography>
        <Stack
          direction={"row"}
          alignItems={"flex-start"}
          width={"500px"}
          spacing={"5px"}
        >
          <button className=" py-[3px] px-[6px] bg-[#F5F5F5] rounded-xl">
            Basketball
          </button>
          <button className="  py-[3px] px-[6px] bg-[#F5F5F5] rounded-xl">
            Sneaker
          </button>
          <button className="  py-[3px] px-[6px] bg-[#F5F5F5] rounded-xl">
            Woman
          </button>
        </Stack>
      </Stack>
    </>
  );
};
