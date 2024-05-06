import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getProducts } from "@/components/admin/productPage/network";
import { IoFilterOutline } from "react-icons/io5";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import Image from "next/image";

export const Sales = () => {
  const [getProductData, setGetProductData] = useState<any[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setGetProductData(data.product);
    };
    fetchProducts();
  }, []);
  const categoryTypo = {
    flex: "1 1 0%",
    font: "var(--podium-cds-typography-body1-strong)",
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "1.3",
    paddingBottom: "2px",
  };
  const categorySortTypo = {
    color: "#111111",
    fontWeight: 500,
    whiteSpace: "normal",
    wordWrap: "break-word",
    lineHeight: "1.35em",
    paddingBottom: "10px",
    paddingRight: "1.1em",
    "&:hover": {
      cursor: "pointer",
    },
  };
  const sortTypo = {
    fontFamily: "'Helvetica Now Text', Helvetica, Arial, sans-serif",
    fontSize: "1rem",
    fontWeight: 400,
    color: "#333",
    lineHeight: 1.5,
    py: "0px",
  };
  const pxZeroTypo = {
    py: "0px",
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const handleClick = () => {
    console.log("Typography clicked!");
  };

  const [checked, setChecked] = useState({
    label: true,
    required: false,
    disabled: false,
  });
  const [expanded, setExpanded] = useState(false);

  const handleChange = (event: any) => {
    setChecked({ ...checked, [event.target.name]: event.target.checked });
  };

  const handleToggle = () => {
    setExpanded(!expanded);
  };
  return (
    <Stack width={"100%"} spacing={"20px"}>
      <Stack width={"100%"}>
        <Typography>Basketball/Shoes</Typography>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography sx={categoryTypo}>Men`s basketball shoes(10)</Typography>
          <Stack direction={"row"} spacing={5}>
            <button className="flex items-center gap-2	">
              Hide Filters
              <IoFilterOutline size={20} />
            </button>
            <select id="sortOptions">
              <option value="listBy4">List by 4</option>
              <option value="listBy2">List by 2</option>
            </select>
          </Stack>
        </Stack>
      </Stack>
      <Stack width={"100%"} direction={"row"}>
        <Stack width={"20%"} paddingRight={"50px"}>
          <Stack
            sx={{ borderBottom: "2px solid #E5E5E5" }}
            paddingBottom={"20px"}
          >
            <Typography sx={categorySortTypo} onClick={handleClick}>
              Lebron
            </Typography>
            <Typography sx={categorySortTypo} onClick={handleClick}>
              Curry
            </Typography>
            <Typography sx={categorySortTypo} onClick={handleClick}>
              Tatum
            </Typography>
            <Typography sx={categorySortTypo} onClick={handleClick}>
              Harden
            </Typography>
          </Stack>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
              transition: "color 0.6s",
              paddingTop: "10px",
            }}
            onClick={handleToggle}
          >
            Gender
            {expanded ? <FaArrowUp /> : <FaArrowDown />}
          </Typography>
          {expanded && (
            <FormGroup
              sx={{
                maxHeight: expanded ? "500px" : "0",
                overflow: "hidden",
                transition: "max-height 0.3s ease-in-out",
                "& .MuiFormControlLabel-root": {
                  "& .MuiCheckbox-root": {
                    color: "black",
                  },
                },
              }}
            >
              <FormControlLabel
                sx={sortTypo}
                control={
                  <Checkbox
                    checked={checked.label}
                    onChange={handleChange}
                    name="label"
                    sx={pxZeroTypo}
                  />
                }
                label="Label"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked.required}
                    onChange={handleChange}
                    name="required"
                    sx={pxZeroTypo}
                  />
                }
                label="Required"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked.disabled}
                    onChange={handleChange}
                    name="disabled"
                    sx={pxZeroTypo}
                  />
                }
                label="Disabled"
              />
            </FormGroup>
          )}
        </Stack>
        {/* <Stack width={"80%"} bgcolor={"red"} paddingLeft={"30px"}></Stack> */}
        {/* <Grid width={"80%"} bgcolor={"red"} paddingLeft={"30px"}>
          dadas
        </Grid> */}
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {Array.from(Array(6)).map((_, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Item>
                  <Image
                    className="w-full"
                    fill
                    src={
                      "https://res.cloudinary.com/dqhy9ufze/image/upload/v1714036836/7_scirkj.jpg"
                    }
                    alt=""
                  ></Image>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>

      {/* <Stack
        direction={"column"}
        spacing={"100px"}
        sx={{ width: "15%", paddingTop: "50px" }}
      >
        <ProductCategory />
        <FilterByPrice />
        <Size />
        <ColorOption />
        <TopRated />
        <ProductTags />
      </Stack>
      <Stack
        direction={"column"}
        spacing={"20px"}
        sx={{ width: "85%", paddingTop: "50px" }}
      >
        <Header />
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          width={"100%"}
          height={"100%"}
        >
          {getProductData.map((product, index) => (
            <ProductsEssentialI2
              key={product._id}
              imageUrl={product.image}
              title={product.name}
              price={product.price}
              index={product._id}
              brand={product.brand}
              category={product.category}
            />
          ))}
        </Stack>
      </Stack> */}
    </Stack>
  );
};
