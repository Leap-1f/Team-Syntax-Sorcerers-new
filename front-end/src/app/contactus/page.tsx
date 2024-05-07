import React from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import ContactUsMap from "@/components/home/ContactUs/ContactUs";
const ContactUs: React.FC = () => {
  return (
    <>
      <Header />
      <ContactUsMap />
      <Footer />
    </>
  );
};
export default ContactUs;
