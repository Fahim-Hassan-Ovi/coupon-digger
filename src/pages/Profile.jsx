import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import background from "../assets/background1.avif"
import Footer from "../components/Footer";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const Profile = () => {
    const { user } = useContext(AuthContext)
    return (
        <>
            <div>
                <div className="min-h-[calc(100vh-224px)]">
                    {/* Cover Section */}
                    <div className=" w-full h-60 flex items-center justify-center"
                    style={{ backgroundImage: `url(${background})` }}
                    >
                        <h1 className="text-4xl text-white font-bold">Welcome, {user.displayName}!</h1>
                    </div>

                    {/* User Info Card */}
                    <div className="flex justify-center -mt-16">
                        <div className="bg-gradient-to-r from-gray-100 to-teal-100 p-6 rounded-xl shadow-xl w-3/4 md:w-1/2 text-center">
                            <img
                                src={user.photoURL}
                                alt="User"
                                className="w-24 h-24 mx-auto rounded-full border-4 border-teal-500"
                            />
                            <h2 className="text-2xl font-bold mt-3 text-gray-800">{user.displayName}</h2>
                            <p className="text-gray-500 mt-1">{user.email}</p>

                            <div className="flex items-center justify-around mt-4">
                            <Link to="/">
                            <button className="btn btn-ghost hover:bg-gray-400 rounded-lg">
                            <div className="flex items-center gap-2">
                            <p><IoArrowBackOutline /> </p><p>Back</p>
                            </div>
                            </button>
                            </Link>
                                {/* Update Features */}
                            <button className=" px-4 py-2 bg-teal-500 text-white rounded-lg shadow-md hover:bg-gray-600 transition">
                                Edit Profile
                            </button>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Profile;