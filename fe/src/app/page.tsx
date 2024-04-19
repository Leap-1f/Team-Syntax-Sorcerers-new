import Header from "./components/header/page";
import Footer from "./components/footer/page";
import Blog from "./blog/homeblog";
export default function Home() {
    return (
        <>
            <Header />
            <Blog></Blog>
            <Footer />
        </>
    );
}
