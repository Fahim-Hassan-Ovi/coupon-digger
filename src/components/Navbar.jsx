import { Link } from "react-router-dom";
import logo from "../assets/logo2.webp"
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <>{
            user && user?.email ?(
                <p className="text-center my-5 text-2xl  font-semibold">Welcome!!! {user.displayName}</p>
            ) : (
                <div></div>
            )
        }
        <div className="flex flex-col md:flex-row justify-between items-center  bg-gradient-to-r from-gray-300 to-teal-200">
            <img className="w-20 h-10" src={logo} alt="" />
            <div className="nav space-x-5">
                <Link to="/">Home</Link>
                <Link to="/brands">Brands</Link>
                <Link to="/my-profile">MY profile</Link>
                <Link to="/about">About Dev</Link>
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
                        <button onClick={logOut} className="btn  bg-transparent border-none rounded-none hover:bg-gray-400">Log-Out</button>
                    ) :
                        (
                            <Link to="/auth/login" className="btn bg-transparent border-none rounded-none hover:bg-gray-400">Login</Link>
                        )
                }
                {/* <div>
                    <button className="btn bg-gray-300 border-gray-300 rounded-none">Login</button>
                </div> */}
            </div>
        </div>
        </>
    );
};

export default Navbar;