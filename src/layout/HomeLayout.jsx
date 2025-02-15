import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopBrands from "../components/TopBrands";

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                {/* Dynamic Section */}
                <div className="min-h-[calc(100vh-264px)] container mx-auto px-12">
                    <Banner />
                    <TopBrands />
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default HomeLayout;