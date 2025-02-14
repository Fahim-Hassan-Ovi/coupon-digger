
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Brands from "../pages/Brands";

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                {/* Dynamic Section */}
                <div className="min-h-[calc(100vh-264px)] container mx-auto px-12">
                    <Brands />
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default HomeLayout;