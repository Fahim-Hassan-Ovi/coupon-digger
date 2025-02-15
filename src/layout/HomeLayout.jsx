import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Questions from "../components/Questions";
import Review from "../components/Review";
import SellBrands from "../components/SellBrands";
import TopBrands from "../components/TopBrands";

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                {/* Dynamic Section */}
                <div className="min-h-[calc(100vh-264px)] md:container px-6 md:px-12 md:w-[80%] max-w-[1200px]  mx-auto mt-10">
                    <Banner />
                    <TopBrands />
                    <SellBrands />
                    <Review />
                    <Questions />
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default HomeLayout;