import { FC, useState, useSyncExternalStore } from "react";
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
const store = {
  getSnapshot: () => sessionStorage.getItem("cart") || "[]",
  subscribe: (listener: () => void) => {
    window.addEventListener("storage", listener);
    return () => void window.removeEventListener("storage", listener);
  },
};

const ProductDialog: FC<TSimpleDialogProps> = ({
  open,
  onClose,
  selectedValue,
}) => {
  const handleClose = () => {
    onClose(selectedValue);
  };
  const kart: any = useSyncExternalStore(store.subscribe, store.getSnapshot);
  const wart: any = JSON.parse(kart);
  const [quantity, setQuantity] = useState(1);
  function addToCart() {
    var has = wart.some((item: any) => {
      if (item.pid === selectedValue.pid) {
        return true;
      }
      return false;
    });
    if (has === true) {
      console.log("has");
      var adjusted = wart.find((item: any) => item.pid === selectedValue.pid);
      adjusted.quantity += quantity;
      console.log(adjusted.quantity);
      const index = wart.indexOf(adjusted);
      wart.splice(index, 1);
      setQuantity(1);
      sessionStorage.setItem("cart", JSON.stringify([...wart, adjusted]));
    } else {
      console.log("hasb't");
      var adjusted = selectedValue;
      console.log(adjusted);
      adjusted.quantity += quantity;
      console.log(adjusted.quantity + "adjusted");
      console.log(quantity);
      setQuantity(1);
      sessionStorage.setItem("cart", JSON.stringify([...wart, selectedValue]));
      adjusted.quantity -= quantity;
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
            <Image src={selectedValue.image} width={470} height={470} alt="" />
          </Stack>
          <Stack spacing={2} sx={{ width: "60%", py: "70px" }}>
            <Stack spacing={1}>
              <Typography fontSize={"30px"} textTransform={"uppercase"}>
                {selectedValue.name}
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
              ₮
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
                type="number"
                defaultValue={1}
                value={quantity}
                onChange={(event) => setQuantity(Number(event.target.value))}
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
                onClick={() => {
                  addToCart();
                  handleClose();
                }}
              >
                Add To Card
              </Button>
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
