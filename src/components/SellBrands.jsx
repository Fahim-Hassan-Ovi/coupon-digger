import { useEffect, useState } from "react";
import { RiCoupon2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const SellBrands = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
         AOS.init({
                    duration: 2000, 
                    once: true, 
                });
        fetch("/brands.json")
            .then((res) => res.json())
            .then((data) => {
                const saleBrands = data.filter((brand) => brand.isSaleOn === true);
                setBrands(saleBrands);
            });
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
                🔥 Brands on Sale
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {brands.map((brand) => (
                    <div data-aos="fade-up" data-aos-delay="100"
                        key={brand._id}
                        className="relative bg-white bg-opacity-90 border border-gray-200 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
                    >
                        {/* Gradient Border Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-teal-200 opacity-20 blur-xl"></div>

                        {/* Card Content */}
                        <div className="p-6 flex flex-col items-center relative z-10">
                            <img
                                src={brand.brand_logo}
                                alt={brand.brand_name}
                                className="w-32 h-16 object-contain mb-4"
                            />
                            <h3 className="text-2xl font-semibold text-gray-900">
                                {brand.brand_name}
                            </h3>
                            <p className="text-gray-600 text-sm mt-1">{brand.category}</p>
                            <p className="text-indigo-600 font-medium text-lg mt-2">
                            Available Coupons
                            </p>
                            <div className="flex items-center gap-2">
                            <p className="text-indigo-600 font-medium text-lg">{brand.coupons.length}</p>
                            <RiCoupon2Fill className="text-indigo-600 font-medium text-lg"/> 
                            </div>
                            <Link to={`/details/${brand._id}`}>
                            <button className="mt-4 px-4 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 transition duration-300">
                                View Deals
                            </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SellBrands;
