"use client";
import { useEffect, useState } from "react";
import { getPosts, getSinglePost } from "../admin/postPage/network";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

const Body = () => {
  const [data, setData] = useState<any[]>([]);
  const [sidePost, setSidePost] = useState<any[]>([]);
  async function fetchThreePosts() {
    const mane = await getPosts();
    console.log(mane);
    setSidePost(mane);
  }
  async function fetchOnePost() {
    const mane = await getSinglePost();
    console.log(mane);
    setData(mane);
  }
  useEffect(() => {
    fetchOnePost();
    fetchThreePosts();
  }, []);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "3rem",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "5rem",
        }}
      >
        {data?.map((data, index) => {
          return (
            <>
              <Box sx={{ display: "flex", gap: "2rem" }}>
                <Box>
                  <Box sx={{ border: "1px solid black" }}>
                    <Image
                      src={data.image}
                      width={300}
                      height={300}
                      alt=""
                      style={{ width: "500px", height: "500px" }}
                    ></Image>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "2rem",
                    }}
                  >
                    <Typography sx={{ fontSize: "1.5rem", fontWeight: "600" }}>
                      {data.title}
                    </Typography>
                    <Typography sx={{ width: "500px" }}>
                      {data.description}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                >
                  {sidePost?.map((sidePost, index) => {
                    return (
                      <>
                        <Box sx={{ display: "flex", gap: "1rem" }}>
                          <Box sx={{ border: "1px solid black" }}>
                            <Image
                              src={sidePost.image}
                              width={300}
                              height={300}
                              alt=""
                              style={{ width: "150px", height: "150px" }}
                            ></Image>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              width: "30rem",
                              gap: "1rem",
                              paddingTop: "2rem",
                            }}
                          >
                            <Typography
                              sx={{ fontSize: "1.5rem", fontWeight: "600" }}
                            >
                              {sidePost.title}
                            </Typography>
                            <Typography>{sidePost.description}</Typography>
                          </Box>
                        </Box>
                      </>
                    );
                  })}
                </Box>
              </Box>
            </>
          );
        })}
      </Box>
    </>
  );
};
export default Body;
