import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const TopBrands = () => {
    const [topBrands, setTopBrands] = useState([]);
    useEffect(() => {
        fetch('/brands.json')
            .then(res => res.json())
            .then(data => 
                setTopBrands(data))
    }, []);
    return (
        <div>
            <h2 className="text-2xl font-semibold my-5">Top Brands</h2>
            <Marquee pauseOnHover={true} speed={50} className="space-x-10">
                {
                    topBrands.map(brands=> (
                        <Link to={`/details/${brands._id}`} key={brands._id}><img className="w-20 h-20 object-contain mr-6" src={brands.brand_logo} alt="" /></Link>
                    ))
                }
            </Marquee>
        </div>
    );
};

export default TopBrands;