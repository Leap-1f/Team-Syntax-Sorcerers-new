import React, { FC, useState } from "react";
import {
  Button,
  Dialog,
  OutlinedInput,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";

export type TSimpleDialogProps = {
  open: boolean;
  selectedValue: any;
  onClose: (value: string) => void;
};

const ProductDialog: FC<TSimpleDialogProps> = ({
  open,
  onClose,
  selectedValue,
}) => {
  const handleClose = () => {
    onClose(selectedValue);
  };

  function addToCart() {
    const cart: Array<any> = JSON.parse(localStorage.getItem("cart") || "[]");
    var has = cart.some((item) => {
      if (item.pid === selectedValue.pid) {
        return true;
      }
      return false;
    });
    if (has === true) {
      console.log(cart);
      console.log(selectedValue);
      console.log("already in cart");
      var adjusted = selectedValue;
      adjusted.quantity = 1;
      adjusted.quantity += 1;
      const index = cart.indexOf(selectedValue);
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify([...cart, adjusted]));
    } else {
      console.log("not in cart");
      localStorage.setItem("cart", JSON.stringify([...cart, selectedValue]));
    }
  }
  const handleListItemClick = (value: string) => {
    onClose(value);
  };
  const typoDollar = {
    fontSize: "16px",
    fontWeight: 700,
  };
  const typoSecond = {
    fontSize: "18px",
    fontWeight: 400,
  };
  const typoTitle = {
    fontSize: "14px",
    fontWeight: "normal",
    lineHeight: "26px",
    color: "#666",
  };
  const [value, setValue] = useState<number | null>(2);
  return (
    <>
      <Dialog onClose={handleClose} open={open} fullWidth maxWidth={"lg"}>
        <Stack direction={"row"} spacing={2}>
          <Stack sx={{ width: "40%" }}>
            <Image
              src={selectedValue.imageUrl}
              width={470}
              height={470}
              alt=""
            />
          </Stack>
          <Stack spacing={2} sx={{ width: "60%", py: "70px" }}>
            <Stack spacing={1}>
              <Typography fontSize={"30px"} textTransform={"uppercase"}>
                {selectedValue.title}
              </Typography>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Stack>
            <Stack direction={"row"}>
              <Typography sx={{ ...typoDollar, color: "#669900" }}>
                $
              </Typography>
              <Typography sx={{ ...typoDollar, fontWeight: 900 }}>
                {selectedValue.price}
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={1}>
              <Typography sx={typoSecond}>Available :</Typography>
              <Typography
                sx={{
                  ...typoSecond,
                  color: "#669900",
                }}
              >
                In stock
              </Typography>
            </Stack>
            <Typography sx={typoTitle}>
              Anlor sit amet, consectetur adipiscing elit. Fusce condimentum est
              lacus, non pretium
            </Typography>
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={2}
              sx={{
                paddingBottom: "30px",
                borderBottom: "1px solid #ddd",
              }}
            >
              <Typography>Qty</Typography>
              <OutlinedInput
                sx={{
                  width: "140px",
                  height: "39px",
                  "&.MuiOutlinedInput-root": {
                    color: "green",
                  },
                  "&.Mui-focused": {
                    borderStyle: "1px",
                    borderColor: "green",
                  },
                }}
                placeholder="1"
              />
              <Button
                sx={{
                  backgroundColor: "#fc4a1a",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "green",
                  },
                }}
                onClick={addToCart}
              >
                Add To Card
              </Button>
              <CiHeart />
              <CiCircleInfo />
            </Stack>
            <Stack sx={{ paddingTop: "30px" }}>
              <Stack direction={"row"} spacing={1}>
                <Typography sx={typoTitle}>Category:</Typography>
                <Typography sx={typoTitle}>{selectedValue.category}</Typography>
              </Stack>
              <Stack direction={"row"} spacing={1}>
                <Typography sx={typoTitle}>Brand:</Typography>
                <Typography sx={typoTitle}>{selectedValue.brand}</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Dialog>
    </>
  );
};

export default ProductDialog;
