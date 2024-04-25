import { Stack, Box, Typography, Rating } from "@mui/material";
import React from "react";

export const Card = () => {
    //   const [value, setValue] = React.useState<number | null>(2);

    const productCategoryText = {
        color: "#222",
        fontFamily: "Barlow",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "21.6px",
        textTransform: "capitalize",
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
    const productCategorySortTypography = {
        color: "#888",
        fontFamily: "Barlow",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "21px",
        textTransform: "uppercase",
    };
    return (
        <Stack
            direction={"row"}
            width={"308px"}
            sx={{
                backgroundColor: "white",
               
            }}
        >
            <Box
                sx={{
                    width: "308px",
                    height: "450px",
                    boxShadow: "none",
                    padding: "10px",
                    transition: "box-shadow 0.3s",
                    "&:hover": {
                        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
                    },
                }}
            >
                <Stack height={"80%"}></Stack>
                <Stack height={"20%"} spacing={"7px"}>
                    <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        sx={{
                            borderBottom: "solid",
                            borderBottomWidth: "1px",
                            paddingBottom: "8px",
                            borderColor: "#2222",
                        }}
                    >
                        <Typography sx={productCategorySortTypography}>
                            Shoes, Clothing
                        </Typography>
                        <Rating
                            name="read-only"
                            readOnly
                            sx={{ fontSize: "20px" }}
                        />
                    </Stack>
                    <Typography sx={productCategoryText}>
                        Sport Vidox Sandal
                    </Typography>
                    <Typography sx={productCategoryText}>
                        $680.00 - $680.00
                    </Typography>
                </Stack>
            </Box>
        </Stack>
    );
};
