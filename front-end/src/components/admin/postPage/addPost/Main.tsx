"use client";
import {
  Box,
  Button,
  Stack,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
} from "@mui/material";
import { CldUploadButton } from "next-cloudinary";
import { StyledInput } from "./styledInput";
import { FaAngleLeft, FaImage } from "react-icons/fa6";
import { StyledDropdown } from "./styledDropdown";
import { useEffect, useState } from "react";
import { addPost } from "./network";
export default function Main() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imagine, setImg] = useState(
    "https://res.cloudinary.com/dqlupfpzv/image/upload/f_auto,q_auto/strragpojdatzwqlyi9h"
  );
  const [error, setError] = useState("");
  const [uploaded, setUploaded] = useState(false);
  const [success, setSuccess] = useState("");
  const handleTitleChange = (event: { target: { value: string } }) => {
    setTitle(event.target.value);
  };
  const handleDescriptionChange = (event: { target: { value: string } }) => {
    setDescription(event.target.value);
  };
  const handleClear = () => {
    setTitle("");
    setDescription("");
  };

  useEffect(() => {
    if (error) {
      const errorAlert = document.getElementById("error-alert")!;
      errorAlert.style.display = "block";
      setTimeout(() => {
        errorAlert.style.display = "none";
        setError("");
      }, 3000);
    }
  }, [error]);
  useEffect(() => {
    if (success) {
      const successAlert = document.getElementById("success-alert")!;
      successAlert.style.display = "block";
      setTimeout(() => {
        successAlert.style.display = "none";
        setSuccess("");
      }, 3000);
    }
  }, [success]);
  return (
    <Box
      sx={{ py: "3vh", bgcolor: "#f7f7f8", width: "100vw", height: "100vh" }}
    >
      {/* Below is the go back button and title of page */}
      <Stack
        direction="row"
        alignItems="center"
        sx={{ bgcolor: "white", height: "4vh" }}
      >
        <Button onClick={() => history.back()}>
          <FaAngleLeft fill="black" width={40} height={40} />
        </Button>
        <Typography
          sx={{ fontSize: 20, fontWeight: "light", textAlign: "center" }}
        >
          Мэдээ нэмэх
        </Typography>
      </Stack>
      {/* Below is the form of the page */}
      <Box sx={{ p: "2vw" }}>
        <Stack direction="row" alignItems="flex-start" spacing={2}>
          <Stack
            direction="column"
            spacing={2}
            sx={{
              width: "50%",
            }}
          >
            {/* Below is the main info of the product [name, desc, code] */}
            <Stack
              direction="column"
              spacing={2}
              sx={{
                width: "100%",
                p: "27px",
                borderRadius: 4,
                bgcolor: "white",
              }}
            >
              <FormControl variant="standard">
                <InputLabel
                  shrink
                  htmlFor="title-input"
                  sx={{ color: "black", fontSize: 24, fontWeight: "semibold" }}
                >
                  Title
                </InputLabel>
                <StyledInput
                  placeholder="title"
                  id="title-input"
                  value={title}
                  onChange={handleTitleChange}
                  sx={{ width: "100%" }}
                />
              </FormControl>
              <FormControl variant="standard">
                <InputLabel
                  shrink
                  htmlFor="description-input"
                  sx={{ color: "black", fontSize: 24, fontWeight: "semibold" }}
                >
                  Description
                </InputLabel>
                <StyledInput
                  placeholder="description"
                  id="description-input"
                  sx={{ width: "100%" }}
                  multiline
                  value={description}
                  onChange={handleDescriptionChange}
                  rows={2}
                />
              </FormControl>
            </Stack>
            {/* Below is the image of the product */}
            <Stack
              direction="column"
              spacing={2}
              sx={{
                width: "100%",
                p: "27px",
                borderRadius: 4,
                bgcolor: "white",
                height: "20vh",
              }}
            >
              <Stack direction={"row"} spacing={2}>
                <Typography sx={{ fontSize: 20 }}>зураг</Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <CldUploadButton
                  className="w-full h-full"
                  uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME}
                  onSuccess={(res: any) => {
                    console.log(res.info.secure_url);

                    setImg(res.info.secure_url);
                  }}
                >
                  <Button
                    component="label"
                    variant="contained"
                    sx={{ width: "100%", height: "100%    " }}
                  >
                    <FaImage fill="black" size={20} />
                  </Button>
                </CldUploadButton>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          sx={{ width: "100%", p: "16px", justifyContent: "flex-end" }}
          spacing={2}
        >
          <Button
            variant="contained"
            sx={{
              "&:hover": { backgroundColor: "white", color: "black" },
              backgroundColor: "white",
              color: "black",
            }}
            onClick={handleClear}
          >
            Ноорог
          </Button>
          <Button
            sx={{
              "&:hover": { backgroundColor: "black", color: "white" },
              backgroundColor: "black",
              color: "white",
            }}
            onClick={async () => {
              console.log(imagine);
              if (title === "" || description === "") {
                setError("Please fill all the fields");
                return;
              } else {
                try {
                  console.log(imagine);
                  const res: any = await addPost({
                    title: title,
                    image: imagine,
                    description: description,
                  });
                  console.log(res);
                  if (res.status === 201) {
                    setSuccess("Post has been created");
                  } else {
                    setError(res._message);
                  }
                } catch (e: any) {
                  setError(e);
                }
                console.log(success);
              }
            }}
          >
            Нийтлэх
          </Button>
        </Stack>
      </Box>
      <Alert
        variant="filled"
        severity="error"
        sx={{
          position: "fixed",
          top: 12,
          right: "40%",
          left: "40%",
          display: "none",
        }}
        id="error-alert"
      >
        {error}
      </Alert>
      <Alert
        variant="filled"
        severity="success"
        sx={{
          position: "fixed",
          top: 12,
          right: "40%",
          left: "40%",
          display: "none",
        }}
        id="success-alert"
      >
        {success}
      </Alert>
    </Box>
  );
}
