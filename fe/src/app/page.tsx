import Header from "./components/header/page";
import Footer from "./components/footer/page";
import { Card } from "@/app/components/card/page";
import { Stack } from "@mui/material";
import { FeaturesOne } from "./components/featuresone/page";
import { FeaturesTwo } from "./components/featuresTwo/page";
import { Blog } from "./components/blog/page";
import { AboutOurTeam } from "./components/aboutourteam/page";
import { OurService } from "./components/ourservice/page";
import { GetInTouch } from "./components/getInTouch/page";

export default function Home() {
  return (
    <>
      <Stack direction={"column"} alignItems={"center"}>
        <Header />
        {/* Doorh Stack-d FeaturesOne, Best seller components orno. */}
        <Stack width={"1400px"} direction={"column"} alignItems={"center"}>
          <FeaturesOne />
          <AboutOurTeam />
          <OurService />
        </Stack>
        <FeaturesTwo />
        {/* Doorh Stack-d Blog, GetInTouch components orno. */}
        <Stack width={"1400px"} direction={"column"} alignItems={"center"}>
          <Blog />
        </Stack>
        <GetInTouch />
        <Footer />
      </Stack>
    </>
  );
}
