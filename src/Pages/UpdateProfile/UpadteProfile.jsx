import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../../Context/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const UpdateProfile = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [name, setName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            await updateProfile(user, { displayName: name, photoURL: photoURL });
            toast.success("Profile updated successfully!");
            navigate("/my-profile");
        } catch (error) {
            toast.error("Failed to update profile!");
        }
    };

    return (
        <section className="min-h-screen bg-[#101010] flex items-center justify-center px-6 sm:px-10">
            <motion.div
                className="bg-[#1f1f1f] p-10 sm:p-16 rounded-3xl shadow-2xl w-full max-w-md text-white"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-3xl font-bold mb-6 text-center">Update Profile</h1>

                <form onSubmit={handleUpdate} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                        <label>Name</label>
                        <input
                            type="text"
                            placeholder="Display Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="px-5 py-3 rounded-full border border-gray-600 bg-[#101010] text-white focus:outline-none focus:ring-2 focus:ring-[#00ff80] transition-all duration-300"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2.5 mt-5">
                        <label>PhotURL</label>
                    <input
                        type="text"
                        placeholder="Photo URL"
                        value={photoURL}
                        onChange={(e) => setPhotoURL(e.target.value)}
                        className="px-5 py-3 rounded-full border border-gray-600 bg-[#101010] text-white focus:outline-none focus:ring-2 focus:ring-[#00ff80] transition-all duration-300"
                    />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: "#00ff80", color: "#000" }}
                        type="submit"
                        className="px-6 py-3 bg-[#00ff80] text-black font-semibold rounded-full shadow-lg transition-all duration-300 text-lg mt-2"
                    >
                        Update Information
                    </motion.button>
                </form>
            </motion.div>
        </section>
    );
};

export default UpdateProfile;
