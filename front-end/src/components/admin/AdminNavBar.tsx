"use client";
import { useState } from "react";
import { Box, Button, Drawer } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { IoMdMenu } from "react-icons/io";
const buttonStyle = {
  width: "100%",
  display: "flex",
  gap: "20px",
  justifyContent: "start",
  borderColor: "black",
  color: "black",
  fontSize: "18px",
  fontWeight: "bold",
  height: "15%",
};
const AdminNavBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  function toggleSidebarcollapse() {
    setIsCollapsed((prev) => !prev);
  }
  function navigate(where: string) {
    window.location.href = where;
  }
  const allButtons = [
    // {
    //   name: "Хяналтын самбар",
    //   startIcon: <GridViewIcon />,
    //   link: "/admin/",
    // },
    {
      name: "Захиалга",
      startIcon: <BookmarkBorderIcon />,
      link: "/admin/orders",
    },
    // {
    //   name: "Орлого",
    //   startIcon: <DiscountIcon />,
    //   link: "/admin/discounts",
    // },
    {
      name: "Бүтээгдэхүүн",
      startIcon: <ListAltIcon />,
      link: "/admin/product",
    },
    {
      name: "Post",
      startIcon: <PostAddIcon />,
      link: "/admin/post",
    },
    // {
    //   name: "Тохиргоо",
    //   startIcon: <SettingsIcon />,
    //   link: "/admin/settings",
    // },
  ];

  return (
    <Box className="flex">
      <Button onClick={toggleSidebarcollapse}>
        <IoMdMenu fill="white" width={30} height={30} />
      </Button>
      <Drawer open={isCollapsed} onClose={toggleSidebarcollapse} anchor="left">
        <Box className="w-[20vw] border-3 pt-[20px] px-[20px] flex flex-col gap-[20px]  ">
          {allButtons.map((button) => (
            <Button
              sx={buttonStyle}
              style={{ textTransform: "none" }}
              startIcon={button.startIcon}
              key={button.name}
              onClick={() => navigate(button.link)}
            >
              {button.name}
            </Button>
          ))}
        </Box>
      </Drawer>
    </Box>
  );
};
export default AdminNavBar;
