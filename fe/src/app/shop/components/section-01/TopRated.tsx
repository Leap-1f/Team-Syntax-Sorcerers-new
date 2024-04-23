import { Stack, Typography } from "@mui/material";

export const TopRated = () => {
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
          Product Categories
        </Typography>

        <Stack direction={"column"} alignItems={"flex-start"} width={"500px"}>
          <Stack>
            <Stack></Stack>
            <Stack>
              <Typography>Arsenal Home Jersey</Typography>
              <Typography sx={productCategoryFont}>$55.00</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
