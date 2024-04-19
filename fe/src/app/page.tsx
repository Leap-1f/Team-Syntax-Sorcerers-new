import Header from "./components/header/page";
import Footer from "./components/footer/page";
import { Card } from "@/app/components/card/page";
import { FeaturesOne } from "./components/featuresTwo/page";
import { Stack } from "@mui/material";
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
