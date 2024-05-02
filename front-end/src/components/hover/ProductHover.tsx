import React, { FC } from "react";
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
  selectedValue: string;
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
  const [value, setValue] = React.useState<number | null>(2);
  return (
    <>
      <Dialog onClose={handleClose} open={open} fullWidth maxWidth={"lg"}>
        <Stack direction={"row"} spacing={2}>
          <Stack sx={{ width: "40%" }}>
            <Image
              src="https://res.cloudinary.com/dqhy9ufze/image/upload/v1714128559/11_lv3ppy.jpg"
              width={470}
              height={470}
              alt=""
            />
          </Stack>
          <Stack spacing={2} sx={{ width: "60%", py: "70px" }}>
            <Stack spacing={1}>
              <Typography fontSize={"30px"}>
                Lotto Flip-Flop Sports Slippers
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
                660.000
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
                    // Corrected syntax for hover state
                    backgroundColor: "green",
                  },
                }}
              >
                Add To Card
              </Button>
              <CiHeart />
              <CiCircleInfo />
            </Stack>
            <Stack sx={{ paddingTop: "30px" }}>
              <Stack direction={"row"} spacing={1}>
                <Typography sx={typoTitle}>Category:</Typography>
                <Typography sx={typoTitle}>Basketball shoes</Typography>
              </Stack>
              <Stack direction={"row"} spacing={1}>
                <Typography sx={typoTitle}>Brand:</Typography>
                <Typography sx={typoTitle}>Nike</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Dialog>
    </>
  );
};

export default ProductDialog;
