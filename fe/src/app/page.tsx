import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import FeaturesOne from "./components/featuresone/FeaturesOne";
import FeaturesTwo from "./components/featuresTwo/FeaturesTwo";
import Blog from "./components/blog/Blog";
import BestSellers from "./components/bestsellers/BestSellers";
import Carousel from "./components/carousel/Carousel";
import AboutOurTeam from "./components/aboutourteam/AboutOurTeam";
import OurService from "./components/ourservice/OurService";
import GetInTouch from "./components/getInTouch/GetInTouch";
import { Stack } from "@mui/material";

const Home: React.FC = () => {
  return (
    <>
      <Stack direction={"column"} alignItems={"center"}>
        <Header />
        <Carousel />
        <Stack width={"1400px"} direction={"column"} alignItems={"center"}>
          <FeaturesOne />
          <AboutOurTeam />
          <OurService />
        </Stack>
        <BestSellers />
        <FeaturesTwo />
        <Stack width={"1400px"} direction={"column"} alignItems={"center"}>
          <Blog />
        </Stack>
        <GetInTouch />
        <Footer />
      </Stack>
    </>
  );
};
export default Home;
