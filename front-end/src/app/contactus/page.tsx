import React, { FC } from "react";
import ContactUsMap from "@/components/home/ContactUs/ContactUs";
import { Stack } from "@mui/material";
const ContactUs: FC = () => {
  return (
    <>
      <Stack paddingTop={"150px"}>
        <ContactUsMap />
      </Stack>
    </>
  );
};
export default ContactUs;
