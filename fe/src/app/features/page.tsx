"use client";
import { Home } from "./components/Home";
import { Container2 } from "./components/Container2";
import { Container3 } from "./components/Container3";
const Features = () => {
  return (
    <>
      <div className="flex flex-col gap-[70px]  ">
        <Home />
        <Container2 />
        <Container3/>
      </div>
    </>
  );
};

export default Features;
