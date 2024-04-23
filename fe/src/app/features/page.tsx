"use client";
import { Home } from "./components/Home";
import { Container2 } from "./components/Container2";
import { Container3 } from "./components/Container3";
import { Container4 } from "./components/Container4";
const Features = () => {
  return (
    <>
      <div className="flex flex-col gap-[100px]  ">
        <Home />
        <Container2 />
        <Container3 />
        <Container4 />
      </div>
    </>
  );
};

export default Features;
