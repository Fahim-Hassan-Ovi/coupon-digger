import { Link } from "react-router-dom";
import logo from "../assets/logo2.webp"
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <div className="flex justify-between items-center bg-gray-500">
            <img className="w-20 h-10" src={logo} alt="" />
            <div className="nav space-x-5">
                <Link to="/">Home</Link>
                <Link to="/brands">Brands</Link>
                <Link to="/profile">MY profile</Link>
                <Link to="/dev">About Dev</Link>
            </div>
            <div className="login flex gap-2 items-center">
                <div className="">
                    {
                        user && user?.email ? (
                            <div>
                                <img className="w-10 rounded-full" src={user?.photoURL} alt="" />
                                <p>{user.displayName}</p>
                            </div>
                        ) : (
                            <div></div>
                        )
                    }

                </div>
                {
                    user && user?.email ? (
                        <button onClick={logOut} className="btn btn-neutral rounded-none">log-Out</button>
                    ) :
                        (
                            <Link to="/auth/login" className="btn btn-neutral rounded-none">Login</Link>
                        )
                }
                {/* <div>
                    <button className="btn bg-gray-300 border-gray-300 rounded-none">Login</button>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;