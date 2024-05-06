"use client";
import { Home } from "../../components/ourServices/Home";
import { Container2 } from "../../components/ourServices/Container2";
import { Container3 } from "../../components/ourServices/Container3";
import { Container4 } from "../../components/ourServices/Container4";

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
