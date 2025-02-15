import { FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const Brands = () => {
    const brands = useLoaderData();
    return (
        <div className="py-10">
            <h2 className="text-2xl font-semibold">All the Brands</h2>
            <div className="mt-8 flex flex-col items-center gap-5">
                {
                    brands.map(brand => (
                        <div key={brand._id} className="border border-gray-300 rounded-lg py-4 px-10 relative flex flex-col items-center w-1/2">
                            <img src={brand.brand_logo} alt={brand.brand_name} className="w-16 h-16 object-contain" />
                            <div className="flex justify-between items-center w-full px-2">
                                <h2 className="text-lg font-bold mt-2">{brand.brand_name}</h2>
                                <div className="flex items-center mt-2">
                                    <FaStar className="text-yellow-400 mr-1" />
                                    <span className="font-semibold">{brand.rating}</span>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 text-center mt-1">{brand.description}</p>

                            <Link to={`/details/${brand._id}`}>
                                <button className="mt-3 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-green-600">
                                    View Coupons
                                </button>
                            </Link>
                            {brand.isSaleOn && (
                                <div className="absolute top-2 right-2 text-red-500 font-bold animate-bounce">
                                    Sale is On!
                                </div>
                            )}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Brands;