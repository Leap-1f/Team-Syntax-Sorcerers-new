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
      <Box sx={{display:"flex" , flexDirection:"column" , gap:"5rem" , justifyContent:"center" , alignItems:"center" , paddingBottom:"5rem"}}>
        {data?.map((data, index) => {
          return (
            <>
              <Box sx={{display:"flex", gap:"3rem"}}>
                <Image src={data.image} width={300} height={300} alt="" style={{width:"250px", height:"250px"}}></Image>
                <Box sx={{display:"flex" , flexDirection:"column",  width:"30rem" , gap:"2rem" , paddingTop:"2rem"}}>
                  <Typography sx={{fontSize:"1.5rem" , fontWeight:"600"}}>{data.title}</Typography>
                  <Typography sx={{}}>{data.description}</Typography>
                  <Typography>{data.date}</Typography>
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
