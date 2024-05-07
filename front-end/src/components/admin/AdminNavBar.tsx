"use client";
import { useState } from "react";
import { Button, Drawer } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import DiscountIcon from "@mui/icons-material/Discount";
import SettingsIcon from "@mui/icons-material/Settings";
import ListAltIcon from "@mui/icons-material/ListAlt";
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
    // {
    //   name: "Захиалах",
    //   startIcon: <BookmarkBorderIcon />,
    //   link: "/admin/orders",
    // },
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
    // {
    //   name: "Тохиргоо",
    //   startIcon: <SettingsIcon />,
    //   link: "/admin/settings",
    // },
  ];

  return (
    <div className="flex">
      <Button onClick={toggleSidebarcollapse}>
        <IoMdMenu fill="white" width={30} height={30} />
      </Button>
      <Drawer open={isCollapsed} onClose={toggleSidebarcollapse} anchor="left">
        <div className="w-[20vw] border-3 pt-[20px] px-[20px] flex flex-col gap-[20px]  ">
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
        </div>
      </Drawer>
    </div>
  );
};
export default AdminNavBar;
