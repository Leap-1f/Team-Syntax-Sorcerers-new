"use client";
import { Button, Drawer, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useSyncExternalStore } from "react";
export const Bag = (open: boolean, close: any) => {
  const productCategoryText = {
    color: "#666",
    fontFamily: "Barlow",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "28.8px",
    textTransform: "uppercase",
  };
  const buttonStyle = {
    width: "100%",
    border: "3px solid #666",
    background: "none",
    color: "black",

    "&:hover": {
      border: "3px solid #2BB9A9",
      background: "none",
    },
  };
  const store = {
    getSnapshot: () => sessionStorage.getItem("cart") || "[]",
    subscribe: (listener: () => void) => {
      window.addEventListener("storage", listener);
      return () => void window.removeEventListener("storage", listener);
    },
  };
  const kart: any = useSyncExternalStore(store.subscribe, store.getSnapshot);
  const wart: any = JSON.parse(kart);
  const totalPrice = wart?.reduce(
    (acc: number, item: any) => acc + item.price * item.quantity,
    0
  );
  function removeFromCart(index: number, pid: string) {
    console.log(index, pid);
    const cart: Array<any> = JSON.parse(sessionStorage.getItem("cart") || "[]");
    const item = document.getElementById(pid);
    item?.classList.add("hidden");
    var adjusted = cart.filter((item: any, i: number) => pid !== item.pid);
    sessionStorage.setItem("cart", JSON.stringify([...adjusted]));
  }
  console.log("wart", wart);

  return (
    <>
      <Drawer open={open} onClose={close} anchor="right" id="sidebar">
        <Stack
          width={"340px"}
          height={"100vh"}
          paddingRight={"10px"}
          paddingLeft={"10px"}
          direction={"column"}
          justifyContent={"space-between"}
          sx={{
            backgroundColor: "white",
          }}
        >
          <Stack>
            <Stack
              width={"100%"}
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              marginBottom={"20px"}
              paddingTop={"20px"}
            >
              <Typography sx={{ fontSize: 25 }}>Сагс</Typography>
              <Typography sx={{ cursor: "pointer" }} onClick={close}>
                X
              </Typography>
            </Stack>
            {wart?.map((product: any, index: any) => (
              <div id={product.pid} key={index}>
                <Stack
                  width={"100%"}
                  direction={"row"}
                  borderBottom="1px solid black"
                  borderColor={"gray"}
                  paddingBottom={"10px"}
                  paddingTop={"10px"}
                >
                  <Stack width={"100%"} direction={"row"} spacing={"7px"}>
                    <Stack
                      direction={"row"}
                      justifyContent={"flex-start"}
                      width={"75px"}
                      height={"75px"}
                      sx={{ border: "2px solid #DDD" }}
                    >
                      <Image
                        src={product.image[0].imgs[0]}
                        width={75}
                        height={75}
                        alt=""
                      />
                    </Stack>
                    <Stack direction={"column"} spacing={"5px"}>
                      <Typography>{product.name}</Typography>
                      <Typography sx={{ color: "#666" }}>
                        {product.price} x {product.quantity} = ₮
                        {product.price * product.quantity}
                      </Typography>
                      <Typography>Тоо ширхэг: {product.quantity}</Typography>
                    </Stack>
                  </Stack>
                  <Stack
                    onClick={() => removeFromCart(index, product.pid)}
                    sx={{ cursor: "pointer" }}
                  >
                    X
                  </Stack>
                </Stack>
              </div>
            ))}
          </Stack>
          <Stack
            width={"100%"}
            height={"200px"}
            borderTop="1px solid black"
            paddingRight={"10px"}
            paddingLeft={"10px"}
            spacing={"20px"}
          >
            <Stack
              width={"80%"}
              direction={"row"}
              justifyContent={"space-between"}
            >
              <Typography sx={productCategoryText}>Нийт дүн:</Typography>
              <Typography
                sx={{
                  ...productCategoryText,
                  color: "#2BB9A9",
                }}
              >
                ₮ {totalPrice}
              </Typography>
            </Stack>
            {/* <Link href="/cart">
              <div className="w-[100%]">
                <Button sx={buttonStyle}>view cart</Button>
              </div>
            </Link> */}
            <Link href="/checkout">
              <Button onClick={close} sx={buttonStyle}>
                Худалдаж авах
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Drawer>
    </>
  );
};
