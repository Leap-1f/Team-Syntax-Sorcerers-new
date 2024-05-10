import { Stack, Typography } from "@mui/material";
import Image from "next/image";

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
        <Stack
            direction="column"
            alignItems="center"
            spacing={4}
            paddingTop={8}
            paddingBottom={8}
            sx={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }} // Adjusted width and added margin
        >
            <Stack
                width={"300px"}
                height={"300px"}
                sx={{
                    borderRadius: "50%",
                    backgroundColor: "black",
                    justifyContent: "center", // Center horizontally
                    alignItems: "center", // Center vertically
                    overflow: "hidden", // Added overflow hidden to contain the image
                }}
            >
                <Image
                    src="https://res.cloudinary.com/dqhy9ufze/image/upload/v1715337764/VortexKicks-removebg-preview_svma1y.png"
                    alt="team-syntax"
                    width={300}
                    height={300}
                    objectFit="cover"
                />
            </Stack>
            <Typography textAlign="center" sx={textTypo}>
                Great theme, extended super and fast professional support. Easy
                to use, flexible, visual composer and more functional plugins on
                board. Yes a real good, strong theme with structured coding.
                Enjoy it! friendly and super good!
            </Typography>
            <Typography sx={textTypoSecond}>
                <span
                    style={{
                        ...textTypoSecond,
                        color: "#2BB9A9",
                        fontWeight: 600,
                    }}
                >
                    Team-Syntax
                </span>{" "}
                - Team of Leap 1F
            </Typography>
        </Stack>
    );
};

export default AboutOurTeam;
