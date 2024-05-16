"use client";
import { useEffect, useState } from "react";
import { getPosts } from "../admin/postPage/network";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

const Body = () => {
  const [data, setData] = useState<any[]>([]);
  async function refresh() {
    const mane = await getPosts();
    console.log(mane);
    setData(mane);
  }
  useEffect(() => {
    refresh();
  }, []);
  return (
    <>
      <Box></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "5rem",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "5rem",
        }}
      >
        {data?.map((data, index) => {
          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                gap: "2rem",
                alignItems: "center",
                maxWidth: "100%",
              }}
            >
              <Box
                sx={{
                  position: "relative", // Add position relative
                  width: "450px",
                  height: "350px",

                  overflow: "hidden",
                }}
              >
                <Image
                  src={data.image}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center bottom"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "30rem",
                  justifyContent: "flex-start", // Align text to the top
                  gap: "2rem",
                  paddingBottom: "9rem",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                  }}
                >
                  {data.title}
                </Typography>
                <Typography>{data.description}</Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
};
export default Body;
