
import CopyToClipboard from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BrandDetails = () => {

    const singleBrand = useLoaderData();
    const brand = singleBrand[0];
    console.log(brand);
    return (
        <div className="">
            <Toaster />
            <header>
                <Navbar />
            </header>
            <div className="p-6 min-h-[calc(100vh-264px)] container mx-auto">
                {/* Brand Header */}
                <div className="text-center my-10">
                    <img src={brand.brand_logo} alt={brand.brand_name} className="h-24 mx-auto" />
                    <h1 className="text-2xl font-bold mt-2">{brand.brand_name}</h1>
                    <p className="text-lg">⭐ {brand.rating} / 5</p>
                </div>

                {/* Coupons Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {brand.coupons.map((coupon, index) => (
                        <div key={index} className="border-1  border-gray-300 p-4 rounded-lg ">
                            <h2 className="text-lg font-semibold">{coupon.description}</h2>
                            <p className="text-gray-600">Expires: {coupon["expiry-date"]}</p>
                            <p className="text-gray-600">Condition: {coupon.condition}</p>

                            <div className="flex justify-between items-center">
                                {/* Copy Coupon Code Button */}
                                <CopyToClipboard text={coupon["coupon-code"]} onCopy={() => toast.success("Coupon Copied!")}>
                                    <button className="bg-gray-400 text-white px-4 py-2 mt-2 rounded">Copy Code</button>
                                </CopyToClipboard>

                                {/* Use Now Button */}
                                <button
                                    onClick={() => window.open(brand["shop-Link"], "_blank")}
                                    className="bg-green-400 text-white px-4 py-2 ml-2 rounded"
                                >
                                    Use Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BrandDetails;