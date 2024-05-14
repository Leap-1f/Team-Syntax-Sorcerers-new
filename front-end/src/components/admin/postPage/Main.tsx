"use client";
import {
  Stack,
  Box,
  Button,
  Typography,
  TextField,
  InputAdornment,
  Checkbox,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getPosts } from "./network";
import { FaMagnifyingGlass, FaTrash } from "react-icons/fa6";
import { BsPencilSquare } from "react-icons/bs";
import Image from "next/image";
// remember to add the backend l8r
export function Main() {
  const titles = ["Image", "Title", "Description"];
  function navigate(where: string) {
    window.location.href = where;
  }

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
    <Stack
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        p: "5vh",
      }}
      gap={2}
    >
      <Button
        sx={{
          p: "10px",
          borderRadius: "10px",
          px: "25px",
          bgcolor: "black",
          color: "white",
          transition: "0.1s",
          "&:hover": {
            bgcolor: "black",
            color: "white",
            p: "12px",
            px: "30px",
          },
        }}
        startIcon=""
        onMouseEnter={(e) => {
          const input = e.target as HTMLElement;
          input.innerText = "Post нэмэх?";
        }}
        onMouseLeave={(e) => {
          const input = e.target as HTMLElement;
          input.innerText = "Post нэмэх";
        }}
        onClick={() => {
          navigate("/admin/post/addPost");
        }}
      >
        Post нэмэх.
      </Button>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <TextField
          size="small"
          sx={{ width: "30%" }}
          placeholder="Post title"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FaMagnifyingGlass fill="black" />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Stack sx={{ display: "flex", gap:"3rem", justifyContent:"center", alignItems:"center" }}>
        <Box sx={{ display: "flex", gap: "30rem" }}>
          {titles.map((title, index) => (
            <Typography
              key={index}
              sx={{
                fontSize: "16px",
                fontWeight: "semibold",
                color: "black",
              }}
            >
              {title}
            </Typography>
          ))}
        </Box>
        <Box sx={{ display:"flex", flexDirection:"column", gap:"3rem" }}>
          {data?.map((data, index) => {
            return (
              <>
                <Box sx={{display:'flex'}}>
                  <Checkbox sx={{paddingRight:"8rem"}}></Checkbox>
                  <Image src={data.image} width={250} height={250} alt="zurag2" />
                  <Typography id={data.name} key={index} sx={{width:"40rem", paddingLeft:"15rem"}}>
                    {data.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "semibold",
                      color: "black",
                      width:"35rem",
                      paddingLeft:"3rem"
                    }}
                  >
                    {data.description}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "semibold",
                      color: "black",
                      paddingLeft:"12rem"
                    }}
                  >
                    {data.createdAt}
                  </Typography>
                  <Stack sx={{display:"flex", flexDirection:"row", paddingLeft:"5rem", paddingBottom:"8rem" }}>
                    <Button>
                      <FaTrash />
                    </Button>
                    <Button>
                      <FaMagnifyingGlass />
                    </Button>
                  </Stack>
                </Box>
              </>
            );
          })}
        </Box>
      </Stack>
    </Stack>
  );
}
