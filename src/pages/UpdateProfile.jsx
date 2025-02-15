import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const UpdateProfile = () => {
    const { user, reloadUser } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName || "");
    const [photo, setPhoto] = useState(user?.photoURL || "");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleUpdate = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await updateProfile(user, {
                displayName: name,
                photoURL: photo,
            });
            toast.success("Update profile successfully")
            
            await reloadUser();
            // Navigate back to profile
            navigate("/my-profile");
        } catch (error) {
            setError(error.message);
            toast.error("Error updating profile:", error);
        }
    };

    return (
        
       <div>
        <Toaster />
         <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <form
                onSubmit={handleUpdate}
                className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
            >
                <h2 className="text-2xl font-bold text-center mb-4">Update Profile</h2>

                <label className="block mb-2 text-gray-700">Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg mb-4"
                />

                <label className="block mb-2 text-gray-700">Photo URL</label>
                <input
                    type="text"
                    value={photo}
                    onChange={(e) => setPhoto(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg mb-4"
                />

                <button
                    type="submit"
                    className="w-full bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-gray-400"
                >
                    Update Information
                </button>
            </form>
        </div>
       </div>
    );
};

export default UpdateProfile;
