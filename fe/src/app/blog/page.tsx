import { Stack } from "@mui/material";
import Footer from "../components/footer/page";
import Header from "../components/header/page";
import PageLayout from "./pagelayout";
import Body from "./body";

const blog = () => {
  return (
    <>
      <Header></Header>
      <PageLayout></PageLayout>
      <Body></Body>
      <Footer></Footer>
    </>
  );
};
export default blog;
