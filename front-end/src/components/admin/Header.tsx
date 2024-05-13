"use client";
import { Box, Typography } from "@mui/material";
// import { FaBell } from "react-icons/fa6";
// import { FaUser } from "react-icons/fa";
import AdminNavBar from "./AdminNavBar";
// import { GetSession } from "@auth0/nextjs-auth0";
export function Header() {
  const user = "admin";
  //   const { user } = await getSession();
  return (
    <Box
      sx={{
        width: "100%",
        height: "3%",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        flexDirection: "row",
        px: "20px",
        position: "absolute",
      }}
    >
      <AdminNavBar />
      <Box sx={{ overflow: "hidden", margin: "0 auto", whiteSpace: "nowrap" }}>
        <Typography
          variant="h6"
          sx={{
            overflow: "hidden",
            display: "inline-block",
            paddingLeft: "100%",
            animation: "lolwut 10s linear infinite",
            "@keyframes lolwut": {
              "0%": {
                transform: "translate(0, 0)",
              },
              "100%": {
                transform: "translate(-100%, 0)",
              },
            },
          }}
        >
          This is a work in progress. Please report any bugs you find.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {/* <FaBell fill="white" />
        <FaUser fill="white" />
        <Typography>{user}</Typography> */}
      </Box>
    </Box>
  );
}
export function Footer() {
  const user = "admin";
  //   const { user } = await getSession();
  return (
    <Box
      sx={{
        width: "100%",
        height: "3%",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        flexDirection: "row",
        px: "20px",
        bottom: "0",
        position: "absolute",
      }}
    >
      <Box sx={{ overflow: "hidden", margin: "0 auto", whiteSpace: "nowrap" }}>
        <Typography
          variant="h6"
          sx={{
            overflow: "hidden",
            display: "inline-block",
            paddingLeft: "100%",
            animation: "lolwut 10s linear infinite",
            "@keyframes lolwut": {
              "0%": {
                transform: "translate(0, 0)",
              },
              "100%": {
                transform: "translate(-100%, 0)",
              },
            },
          }}
        >
          This is a work in progress. Please report any bugs you find.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {/* <FaBell fill="white" />
        <FaUser fill="white" />
        <Typography>{user}</Typography> */}
      </Box>
    </Box>
  );
}
