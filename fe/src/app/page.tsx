import Header from "./components/header/page";
import Footer from "./components/footer/page";
import { Card } from "@/app/components/card/page";
import { Stack } from "@mui/material";
import { FeaturesOne } from "./components/featuresone/page";
export default function Home() {
  return (
    <>
      <Header />
      {/* Doorh Stack-d FeaturesOne, Best seller components orno. */}
      <Stack width={"1400px"} direction={"column"}>
        <FeaturesOne />
      </Stack>
      {/* Doorh Stack-d Blog, GetInTouch components orno. */}
      <Stack width={"1400px"} direction={"column"}></Stack>
      <Footer />
    </>
  );
}
