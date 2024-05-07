import FeaturesOne from "../components/home/hotCards/HotCards";
import FeaturesTwo from "../components/home/newSneakers/NewSneakers";
import Blog from "../components/home/Blog";
import BestSellers from "../components/home/BestSellers";
import BestSellers2 from "../components/home/BestSellers2";
import Carousel2 from "../components/home/Carousel2";
import AboutOurTeam from "../components/home/AboutOurTeam";
import OurService from "../components/home/OurService";
import GetInTouch from "../components/home/GetInTouch";
import { Stack } from "@mui/material";
import { FC } from "react";

const Home: FC = () => {
  return (
    <>
      <Stack direction={"column"} alignItems={"center"}>
        <Carousel2 />
        <Stack width={"1400px"} direction={"column"} alignItems={"center"}>
          <FeaturesOne />
          <BestSellers />
          <AboutOurTeam />
          <OurService />
        </Stack>
        <BestSellers2 />
        <FeaturesTwo />
        <Stack width={"1400px"} direction={"column"} alignItems={"center"}>
          <Blog />
        </Stack>
        <GetInTouch />
      </Stack>
    </>
  );
};
export default Home;
