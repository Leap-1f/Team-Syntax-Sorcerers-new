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
} from "@mui/material";
import { StyledInput } from "./styledInput";
import { FaAngleLeft, FaImage } from "react-icons/fa6";
import { StyledDropdown } from "./styledDropdown";
import { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { addProduct } from "./network";
export default function Main() {
  const [topCategory, setTopCategory] = useState("Сонгох");
  const [category, setCategory] = useState("Сонгох");
  const [imageAmt, setImageAmt] = useState(3);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [code, setCode] = useState("");
  const [gender, setGender] = useState("Сонгох");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [tags, setTags] = useState([""]);
  const handleTagChange = (event: { target: { value: string } }) => {
    const newTags: string[] = [...tags];
    const index = newTags.indexOf(event.target.value);
    if (index > -1) {
      newTags.splice(index, 1);
    } else {
      newTags.push(event.target.value);
    }
    setTags(newTags);
  };
  const handleSizeChange = (event: { target: { value: string } }) => {
    setSize(event.target.value);
  };
  const handleColorChange = (event: { target: { value: string } }) => {
    setColor(event.target.value);
  };
  const handleGenderChange = (event: { target: { value: string } }) => {
    setGender(event.target.value);
  };
  const handlePriceChange = (event: { target: { value: string } }) => {
    setPrice(event.target.value);
  };
  const handleStockChange = (event: { target: { value: string } }) => {
    setStock(event.target.value);
  };
  const handleNameChange = (event: { target: { value: string } }) => {
    setName(event.target.value);
  };
  const handleDescChange = (event: { target: { value: string } }) => {
    setDesc(event.target.value);
  };
  const handleCodeChange = (event: { target: { value: string } }) => {
    setCode(event.target.value);
  };
  const handleTopChange = (event: { target: { value: string } }) => {
    setTopCategory(event.target.value);
  };
  const handleCategoryChange = (event: { target: { value: string } }) => {
    setCategory(event.target.value);
  };
  const handleClear = () => {
    setCategory("");
    setTopCategory("");
    setImageAmt(3);
    setName("");
    setDesc("");
    setCode("");
    setGender("");
    setPrice("");
    setStock("");
    setSize("");
    setColor("");
    setTags([""]);
  };
  const incrementImageAmt = () => {
    if (imageAmt < 6) {
      setImageAmt((prev) => prev + 1);
    } else {
    }
  };
  const clearImageAmt = () => {
    setImageAmt(3);
  };
  useEffect(() => {
    if (imageAmt > 6 || imageAmt === 6) {
      const addImageButton = document.getElementById("add-image-button")!;
      addImageButton.style.display = "none";
    } else {
      const addImageButton = document.getElementById("add-image-button")!;
      addImageButton.style.display = "flex";
    }
  }, [imageAmt]);

  const mockData = [
    "Сонгох",
    "Сонгох",
    "Тайлбар",
    "Тайлбар",
    "Давуу",
    "Давуу",
    "Гол",
    "Гол",
    "Онцолсон",
    "Онцолсон",
    "Байгал",
    "Байгал",
    "Айгүл",
    "Айгүл",
  ];
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
          Бүтээгдэхүүн нэмэх
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
                  htmlFor="name-input"
                  sx={{ color: "black", fontSize: 24, fontWeight: "semibold" }}
                >
                  Бүтээгдэхүүний нэр
                </InputLabel>
                <StyledInput
                  placeholder="Нэр"
                  id="name-input"
                  value={name}
                  onChange={handleNameChange}
                  sx={{ width: "100%" }}
                />
              </FormControl>
              <FormControl variant="standard">
                <InputLabel
                  shrink
                  htmlFor="desc-input"
                  sx={{ color: "black", fontSize: 24, fontWeight: "semibold" }}
                >
                  Нэмэлт мэдээлэл
                </InputLabel>
                <StyledInput
                  placeholder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар."
                  id="desc-input"
                  sx={{ width: "100%" }}
                  multiline
                  value={desc}
                  onChange={handleDescChange}
                  rows={2}
                />
              </FormControl>
              <FormControl variant="standard">
                <InputLabel
                  shrink
                  htmlFor="code-input"
                  sx={{ color: "black", fontSize: 24, fontWeight: "semibold" }}
                >
                  Барааны код
                </InputLabel>
                <StyledInput
                  placeholder="#12345678"
                  value={code}
                  onChange={handleCodeChange}
                  id="code-input"
                  sx={{ width: "100%" }}
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
                <Typography sx={{ fontSize: 20 }}>
                  Бүтээгдэхүүний зураг
                </Typography>
                <Button onClick={() => clearImageAmt()}>Clear</Button>
              </Stack>
              <Stack direction="row" spacing={2}>
                {Array.from({ length: imageAmt }, (_, i) => (
                  <Button
                    sx={{
                      width: "5.8vw",
                      height: "11vh",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 4,
                      display: "flex",
                      border: "1px dotted black",
                    }}
                    component="label"
                    onClick={() => incrementImageAmt()}
                  >
                    <FaImage fill="black" size={20} />
                    <input
                      accept="image/*"
                      style={{ display: "none" }}
                      id="raised-button-file"
                      multiple
                      type="file"
                    />
                  </Button>
                ))}

                <Button
                  sx={{
                    width: "5.8vw",
                    height: "11vh",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 4,
                    display: "flex",
                  }}
                  id="add-image-button"
                  onClick={() => incrementImageAmt()}
                >
                  <CiCirclePlus fill="black" size={30} />
                </Button>
              </Stack>
            </Stack>
            {/* Below is the price and stock part of the form */}
            <Stack
              direction="row"
              spacing={2}
              sx={{
                width: "100%",
                p: "27px",
                borderRadius: 4,
                bgcolor: "white",
              }}
            >
              <FormControl variant="standard" sx={{ width: "50%" }}>
                <InputLabel
                  shrink
                  htmlFor="price-input"
                  sx={{ color: "black", fontSize: 24, fontWeight: "semibold" }}
                >
                  Үндсэн үнэ
                </InputLabel>
                <StyledInput
                  placeholder="Үндсэн үнэ"
                  value={price}
                  onChange={handlePriceChange}
                  id="price-input"
                  sx={{ width: "100%" }}
                  type="number"
                />
              </FormControl>
              <FormControl variant="standard" sx={{ width: "50%" }}>
                <InputLabel
                  shrink
                  htmlFor="code-input"
                  sx={{ color: "black", fontSize: 24, fontWeight: "semibold" }}
                >
                  Үлдэгдэл тоо ширхэг
                </InputLabel>
                <StyledInput
                  placeholder="Үлдэгдэл тоо ширхэг"
                  value={stock}
                  onChange={handleStockChange}
                  id="code-input"
                  type="number"
                  sx={{ width: "100%" }}
                />
              </FormControl>
            </Stack>
          </Stack>
          {/* Below is the second part of the form */}

          <Stack
            direction="column"
            spacing={2}
            sx={{
              width: "50%",
            }}
          >
            {/* Below is the category part of the form */}
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
                  htmlFor="top-category-input"
                  sx={{ color: "black", fontSize: 24, fontWeight: "semibold" }}
                >
                  Ерөнхий ангилал
                </InputLabel>
                <Select
                  labelId="top-category-input"
                  id="demo-customized-select"
                  value={topCategory}
                  onChange={handleTopChange}
                  input={<StyledDropdown />}
                  placeholder="Select an option"
                >
                  <MenuItem value={"Сонгох"} disabled>
                    Сонгох
                  </MenuItem>
                  {mockData.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl variant="standard">
                <InputLabel
                  shrink
                  htmlFor="top-category-input"
                  sx={{ color: "black", fontSize: 24, fontWeight: "semibold" }}
                >
                  Дэд ангилал
                </InputLabel>
                <Select
                  labelId="top-category-input"
                  id="demo-customized-select"
                  value={category}
                  onChange={handleCategoryChange}
                  input={<StyledDropdown />}
                  placeholder="Select an option"
                >
                  <MenuItem value={"Сонгох"} disabled>
                    Сонгох
                  </MenuItem>
                  {mockData.map((item, index) => (
                    <MenuItem key={item} value={item + index}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Stack>
            {/*  This part is the part of the forum where you can add specific details about products one. */}
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
              <Typography sx={{ fontSize: 20 }}>Төрөл</Typography>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel
                  shrink
                  htmlFor="color-input"
                  sx={{ color: "black", fontSize: 24, fontWeight: "semibold" }}
                >
                  Өнгө
                </InputLabel>
                <StyledInput
                  placeholder="Өнгө"
                  value={color}
                  onChange={handleColorChange}
                  id="color-input"
                  sx={{ width: "100%" }}
                />
              </FormControl>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel
                  shrink
                  htmlFor="size-input"
                  sx={{ color: "black", fontSize: 24, fontWeight: "semibold" }}
                >
                  Хэмжээ
                </InputLabel>
                <StyledInput
                  placeholder="Хэмжээ"
                  value={size}
                  onChange={handleSizeChange}
                  id="size-input"
                  sx={{ width: "100%" }}
                  type="number"
                />
              </FormControl>
              <FormControl variant="standard">
                <InputLabel
                  shrink
                  htmlFor="gender-input"
                  sx={{ color: "black", fontSize: 24, fontWeight: "semibold" }}
                >
                  Хүйс
                </InputLabel>
                <Select
                  labelId="gender-input"
                  id="gender-select"
                  value={gender}
                  onChange={handleGenderChange}
                  input={<StyledDropdown />}
                  placeholder="Select an option"
                >
                  <MenuItem value={"Сонгох"} disabled>
                    Сонгох
                  </MenuItem>
                  <MenuItem value={"male"}>Эрэгтэй</MenuItem>
                  <MenuItem value={"female"}>Эмэгтэй</MenuItem>
                </Select>
              </FormControl>
            </Stack>
            <Stack
              direction="column"
              spacing={2}
              sx={{
                width: "100%",
                p: "16px",
                borderRadius: 4,
                bgcolor: "white",
              }}
            >
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel
                  shrink
                  htmlFor="code-input"
                  sx={{ color: "black", fontSize: 24, fontWeight: "semibold" }}
                >
                  Таг
                </InputLabel>
                <StyledInput
                  placeholder="Таг нэмэх..."
                  onChange={handleTagChange}
                  id="tag-input"
                  sx={{ width: "100%" }}
                />
              </FormControl>
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
            onClick={() => {
              const res = addProduct({
                name: name,
                image: "asd",
                color: color,
                brand: "asd",
                gender: gender,
                price: price,
                discount: 300,
                rest: stock,
                size: size,
              });
              console.log(res);
            }}
          >
            Нийтлэх
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
