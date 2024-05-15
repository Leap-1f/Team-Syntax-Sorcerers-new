"use client";
import { useEffect, useState } from "react";
import { getPosts, getSinglePost } from "../admin/postPage/network";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

const Body = () => {
  const [data, setData] = useState<any[]>([]);
  const [sidePost, setSidePost] = useState<any[]>([]);
  const [isShown, setIsShown] = useState(false)
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
          paddingTop: "5rem",
        }}
      >
        {data?.map((data, index) => {
          return (
            <>
              <Box sx={{ display: "flex", gap: "2rem" }}>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}
                >
                  <Box
                    sx={{
                      width: "500px",
                      height: "500px",
                      "&:hover": {
                        filter: "brightness(70%)",
                        transition: "filter 0.3s ease-in-out",
                      },
                    }}
                    onMouseEnter={()=>setIsShown(true)}
                    onMouseLeave={()=>setIsShown(false)}
                  >
                    {isShown && (
                      <><Typography
                        sx={{
                          fontWeight: "600",
                          fontSize: "1.5rem",
                          width: "fit-content",
                          "&:hover": {
                            color: "#2BB9A9",
                            transition: "300ms",
                          },
                        }}
                      >
                        {data.title}
                      </Typography><Typography sx={{ width: "500px", color: "#888888" }}>
                          {data.description}
                        </Typography></>
                    )}
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                  }}
                >
                  {sidePost?.map((sidePost, index) => {
                    return (
                      <>
                        <Box
                          sx={{
                            display: "flex",
                            gap: "1rem",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            component="img"
                            src={sidePost.image}
                            alt=""
                            sx={{
                              width: "150px",
                              height: "150px",
                              "&:hover": {
                                filter: "brightness(70%)",
                                transition: "filter 0.3s ease-in-out",
                              },
                            }}
                          ></Box>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              width: "41rem",
                              gap: "0.5rem",
                            }}
                          >
                            <Typography
                              sx={{
                                fontWeight: "600",
                                fontSize: "1.5rem",
                                width: "fit-content",
                                "&:hover": {
                                  color: "#2BB9A9",
                                  transition: "300ms",
                                },
                              }}
                            >
                              {sidePost.title}
                            </Typography>
                            <Typography sx={{ color: "#888888" }}>
                              {sidePost.description}
                            </Typography>
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
