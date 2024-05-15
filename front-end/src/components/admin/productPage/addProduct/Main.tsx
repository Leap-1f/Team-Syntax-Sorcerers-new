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
import { addProduct } from "./network";
export default function Main() {
  const brands = [
    "Nike",
    "Adidas",
    "Puma",
    "Under Armour",
    "Reebok",
    "New Balance",
    "Asics",
    "Converse",
    "Skechers",
  ];

  // const [data, setData] = useState({
  //   name: "",
  //   image: "",
  //   color: "",
  //   brand: "",
  //   gender: "",
  //   price: "",
  //   discount: "",
  //   rest: "",
  //   size: "",
  //   category: "",
  // });

  const [topCategory, setTopCategory] = useState("Сонгох");
  const [category, setCategory] = useState("Сонгох");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [code, setCode] = useState("");
  const [gender, setGender] = useState("Сонгох");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [discount, setDiscount] = useState("123");
  const [brand, setBrand] = useState("");
  const [img, setImg] = useState([
    {
      color: "regular",
      imgs: ["asd"],
    },
  ]);
  const [currentColor, setCurrentColor] = useState("color");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [error, setError] = useState("");
  const [imageColors, setImageColors] = useState(["regular"]);
  const [uploaded, setUploaded] = useState(false);
  const [success, setSuccess] = useState("");
  const handleSizeChange = (event: { target: { value: string } }) => {
    setSize(event.target.value);
  };
  const handleColorChange = (event: { target: { value: string } }) => {
    setColor(event.target.value);
  };
  const handleBrandChange = (event: { target: { value: string } }) => {
    setBrand(event.target.value);
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
    setName("");
    setDesc("");
    setCode("");
    setGender("");
    setPrice("");
    setStock("");
    setSize("");
    setColor("");
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
  const mockData = ["Nizhny Novgorod"];
  useEffect(() => {
    console.log(img);
    if (img.some((e) => e.imgs[0] === "asd")) {
      console.log("found empty");
      img[0].imgs.splice(0, 1);
    } else {
    }
  }, [img]);

  return (
    <Box
      sx={{
        py: "3vh",
        bgcolor: "#f7f7f8",
        width: "100vw",
        height: "100vh",
      }}
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
                overflow: "scroll",
              }}
            >
              <Stack direction={"row"} spacing={2}>
                <Typography sx={{ fontSize: 20 }}>
                  Бүтээгдэхүүний зураг
                </Typography>
              </Stack>
              {imageColors.map((item, index) => (
                <Stack direction="row" spacing={2}>
                  <Typography sx={{ fontSize: 20 }}>{item}</Typography>
                  <CldUploadButton
                    options={{
                      multiple: true,
                    }}
                    className="w-full h-full"
                    uploadPreset={
                      process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME
                    }
                    onSuccess={(res: any) => {
                      const ra = img.findIndex((e) => e.color === item);
                      const arr = img[ra].imgs;
                      arr.push(res.info.secure_url);
                    }}
                  >
                    <Button
                      component="label"
                      variant="contained"
                      sx={{ width: "100%", height: "100%" }}
                    >
                      <FaImage fill="black" size={20} />
                    </Button>
                  </CldUploadButton>
                  {img.map((item, i) => {
                    return (
                      <img
                        src={item.imgs[i]}
                        alt="image"
                        key={index}
                        style={{ width: "50px", height: "50px" }}
                      />
                    );
                  })}
                </Stack>
              ))}
              <Stack direction="row" spacing={2}>
                <Typography sx={{ fontSize: 20 }}>
                  Add color to product.
                </Typography>
                <input
                  type="text"
                  id="colorAdd"
                  value={currentColor}
                  onChange={(e) => {
                    setCurrentColor(e.target.value);
                  }}
                />
                <Button
                  variant="contained"
                  onClick={() => {
                    if (currentColor === "") {
                      setError("Please fill all the fields");
                      return;
                    } else if (imageColors.includes(currentColor)) {
                      setError("Color already added");
                      return;
                    } else {
                      setImageColors([...imageColors, currentColor]);
                      setCurrentColor("color");
                      setImg([...img, { color: currentColor, imgs: [] }]);
                    }
                  }}
                >
                  Add
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
                  inputProps={{ min: 0, max: 300000000000 }}
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
                  inputProps={{ min: 0, max: 300000000000 }}
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
                  {mockData.map((item, index) => (
                    <MenuItem key={item} value={item + index}>
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
                p: "44px",
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
                  inputProps={{ min: 0, max: 55 }}
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
              <FormControl variant="standard">
                <InputLabel
                  shrink
                  htmlFor="gender-input"
                  sx={{ color: "black", fontSize: 24, fontWeight: "semibold" }}
                >
                  Brand
                </InputLabel>
                <Select
                  labelId="brand-input"
                  id="brand-select"
                  value={brand}
                  onChange={handleBrandChange}
                  input={<StyledDropdown />}
                  placeholder="Select an option"
                >
                  <MenuItem value={"Сонгох"} disabled>
                    Сонгох
                  </MenuItem>
                  {brands.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
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
            onClick={async () => {
              if (
                name === "" ||
                price === "" ||
                color === "" ||
                brand === "" ||
                gender === "" ||
                discount === "" ||
                stock === "" ||
                size === "" ||
                img[0].imgs[0] === ""
              ) {
                setError("Please fill all the fields");
                return;
              } else {
                try {
                  const res: any = await addProduct({
                    name: name,
                    image: img,
                    color: color,
                    brand: brand,
                    gender: gender,
                    price: price,
                    discount: 300,
                    rest: stock,
                    size: size,
                  });
                  console.log({
                    name: name,
                    image: img,
                    color: color,
                    brand: brand,
                    gender: gender,
                    price: price,
                    discount: 300,
                    rest: stock,
                    size: size,
                  });
                  if (res.status === 201) {
                    setSuccess("Product has been created");
                  } else {
                    setError(res._message);
                    console.log(res);
                  }
                } catch (e: any) {
                  setError(e);
                }
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
