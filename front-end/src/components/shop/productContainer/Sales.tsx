"use client";
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
import Link from "next/link";
import SearchMain from "./SearchMain";
import Search from "./Search";
type TCheckedBox = {
  name: string;
  label: string;
};
const checkboxes: TCheckedBox[] = [
  { name: "Lebron", label: "Label" },
  { name: "Tatum", label: "Required" },
  { name: "Jordan", label: "Disabled" },
];

export const Sales = ({ query }: { query: string }) => {
  const [getProductData, setGetProductData] = useState<any[]>([]);

  const [expanded, setExpanded] = useState(false);
  const [checked, setChecked] = useState({
    label: true,
    required: false,
    disabled: false,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProducts();
      if (response.status === 200) {
        setGetProductData(response);
      } else {
        console.error("Failed to fetch products");
      }
    };
    fetchProducts();
  }, []);

  /* ///////////////////// HANDLER  //////////////////////////*/
  const handleClick = () => {
    console.log("Typography clicked!");
  };
  const handleChange = (event: any) => {
    setChecked({ ...checked, [event.target.name]: event.target.checked });
  };
  const handleToggle = () => {
    setExpanded(!expanded);
  };

  /* ///////////////////// TYPO  //////////////////////////*/
  const categoryTypo = {
    flex: "1 1 0%",
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

  const pxZeroTypo = {
    py: "0px",
  };

  return (
    <Stack width={"100%"} spacing={"20px"}>
      <Stack width={"100%"}>
        <Typography>Sneacker</Typography>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography sx={categoryTypo}>Men`s basketball shoes</Typography>
          <Stack direction={"row"} spacing={5}>
            <Search />
            {/* <button className="flex items-center gap-2	">
              Hide Filters
              <IoFilterOutline size={20} />
            </button>
            <select id="sortOptions">
              <option value="listBy4">List by 4</option>
              <option value="listBy2">List by 2</option>
            </select> */}
          </Stack>
        </Stack>
      </Stack>
      <Stack width={"100%"} direction={"row"}>
        <Stack width={"20%"} paddingRight={"50px"}>
          <Stack
            sx={{ borderBottom: "2px solid #E5E5E5" }}
            paddingBottom={"20px"}
          >
            {checkboxes.map((categoryName, index) => (
              <Typography
                key={index}
                sx={categorySortTypo}
                onClick={handleClick}
              >
                {categoryName.name}
              </Typography>
            ))}
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
              {checkboxes.map((checkbox, index) => (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      onChange={handleChange}
                      name={checkbox.label}
                      sx={pxZeroTypo}
                    />
                  }
                  label={checkbox.name}
                />
              ))}
            </FormGroup>
          )}
        </Stack>
        <Box sx={{ flexGrow: 1 }}>
          {/* {getProductData.length > 0 ? ( */}
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            <div className="pt-10">
              <SearchMain query={query} />
            </div>
          </Grid>
          {/* ) : (
            <Typography>No products available</Typography>
          )} */}
        </Box>
      </Stack>
    </Stack>
  );
};
