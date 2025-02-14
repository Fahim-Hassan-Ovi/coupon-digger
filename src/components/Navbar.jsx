import { Link } from "react-router-dom";
import logo from "../assets/logo2.webp"


const Navbar = () => {
  
    return (
        <div className="flex justify-between items-center">
            <img className="w-20 h-10" src={logo} alt="" />
            <div className="nav space-x-5">
                <Link to="/">Home</Link>
                <Link to="/brands">Brands</Link>
                <Link to="/profile">MY profile</Link>
                <Link to="/dev">About Dev</Link>
            </div>
            <div className="login flex gap-2 items-center">
                {/* <div className="">
                    {
                        user && user?.email ? (
                            <div>
                                <img className="w-10 rounded-full" src={user?.photoURL} alt="" />
                                <p>{user.displayName}</p>
                            </div>
                        ) : (
                            <img src={userIcon} alt="" />
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
                } */}
                <div>
                    <button className="btn btn-neutral rounded-none">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;