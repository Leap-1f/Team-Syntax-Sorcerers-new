"use client";
import { Box, Dialog, DialogTitle, Stack, TextField } from "@mui/material";
import { useState } from "react";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;

  onClose: (value: string) => void;
}

export const FeaturesOneDialog = (props: SimpleDialogProps) => {
  const { onClose, selectedValue, open } = props;

  // const handleClose = () => {
  //   onClose(selectedValue);
  // };
  const handleClose = () => {
    const featureData = {
      name: name,
      sales: sales,
      image: image,
    };
    onClose(JSON.stringify(featureData));
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  const [name, setName] = useState("");
  const [sales, setSales] = useState("");
  const [image, setImage] = useState("");

  const handleNameChange = (event: any) => {
    setName(event.target.value);
  };
  const handleSaleChange = (event: any) => {
    setSales(event.target.value);
  };
  const handleImageChange = (event: any) => {
    setImage(event?.target.value);
  };
  return (
    <>
      <Dialog onClose={handleClose} open={open} fullWidth maxWidth={"xs"}>
        {/* <DialogTitle>Set backup account</DialogTitle>
        <List sx={{ pt: 0, px: "20px" }}>
          {emails.map((email) => (
            <ListItem disableGutters key={email}>
              <ListItemButton onClick={() => handleListItemClick(email)}>
                <Typography>Name</Typography>
                <ListItemText primary={email} />
              </ListItemButton>
            </ListItem>
          ))}

          <ListItem disableGutters>
            <ListItemButton
              autoFocus
              onClick={() => handleListItemClick("addAccount")}
            >
              <ListItemAvatar>
                <Avatar>
                  <AddIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Add account" />
            </ListItemButton>
          </ListItem>
        </List> */}

        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            m: "auto",
            width: "fit-content",
            py: "50px",
          }}
        >
          <DialogTitle>SET YOUR FEATURE</DialogTitle>
          <Box
            component="form"
            sx={{
              "& > :not(style)": {
                m: 1,
                width: "25ch",
                display: "flex",
                flexDirection: "column",
              },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="name"
              label="Нэр"
              variant="outlined"
              value={name}
              onChange={handleNameChange}
            />
            <TextField
              id="sale"
              label="Хямдралын хувь"
              variant="outlined"
              value={sales}
              onChange={handleSaleChange}
            />
            <TextField
              id="image"
              label="Зураг"
              value={image}
              onChange={handleImageChange}
              variant="outlined"
            />
          </Box>
        </Stack>
      </Dialog>
    </>
  );
};
