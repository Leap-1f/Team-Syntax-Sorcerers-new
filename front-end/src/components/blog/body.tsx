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
      <Box sx={{display:"flex" , flexDirection:"column" , gap:"5rem" , justifyContent:"center" , alignItems:"center"}}>
        {data?.map((data, index) => {
          return (
            <>
              <Box sx={{display:"flex", gap:"3rem"}}>
                <Image src={data.image} width={250} height={250} alt=""></Image>
                <Box>
                  <Typography>{data.title}</Typography>
                  <Typography>{data.description}</Typography>
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
