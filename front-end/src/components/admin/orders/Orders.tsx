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
import { FaMagnifyingGlass, FaTrash } from "react-icons/fa6";
import Image from "next/image";
import EditDialog from "../productPage/Edit";
import DropdownGroup from "../productPage/selectgroup";
import { getOrders } from "./Network";

// remember to add the backend l8r
const Orders = () => {
  const titles = [
    "Захиалгын ID дугаар",
    "Үйлчлүүлэгч",
    "Төлбөр",
    "Нэмсэн огноо",
    "Статус",
    "",
  ];
  function navigate(where: string) {
    window.location.href = where;
  }

  const [data, setData] = useState<any[]>([]);
  async function refresh() {
    const mane = await getOrders();
    setData(mane);
  }
  console.log("data", data);

  useEffect(() => {
    refresh();
  }, []);
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleClickOpen = (id: string) => {
    sessionStorage.setItem("selectedItemId", id);
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };
  return (
    <>
      <EditDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      ></EditDialog>
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
            input.innerText = "Захиалга?";
          }}
          onMouseLeave={(e) => {
            const input = e.target as HTMLElement;
            input.innerText = "Захиалга";
          }}
          onClick={() => {
            navigate("/admin/product/addProduct");
          }}
        >
          Захиалга
        </Button>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <DropdownGroup />
          <TextField
            size="small"
            sx={{ width: "30%" }}
            placeholder="Захиалгачын ID"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaMagnifyingGlass fill="black" />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Stack spacing={2} direction="column" sx={{ width: "100%" }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gridTemplateRows: "repeat(11, 1fr)",
              gap: "0px",
            }}
          >
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

            {data?.map((yotta, index) => {
              return (
                <>
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      width: "100%",
                      alignItems: "center",
                    }}
                  >
                    <Typography id={yotta.id} key={index}>
                      {yotta.id}
                    </Typography>
                  </Box>
                  <Stack key={index} direction="row">
                    <Typography id={yotta.name} key={index}>
                      {yotta.user}
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "semibold",
                      color: "black",
                    }}
                  >
                    {yotta.color}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "semibold",
                      color: "black",
                    }}
                  >
                    {yotta.createdAt}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "semibold",
                      color: "black",
                      border: "1px solid green",
                      px: "5px",
                      py: "3px",
                      backgroundColor: "green",
                    }}
                  >
                    {yotta.status}
                  </Typography>

                  <Stack
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                      alignItems: "center",
                    }}
                    direction="row"
                  >
                    <Button>
                      <FaTrash />
                    </Button>
                    <Button>
                      <FaMagnifyingGlass
                        onClick={() => handleClickOpen(yotta.id)}
                      />
                    </Button>
                  </Stack>
                </>
              );
            })}
          </Box>
        </Stack>
      </Stack>
    </>
  );
};
export default Orders;
