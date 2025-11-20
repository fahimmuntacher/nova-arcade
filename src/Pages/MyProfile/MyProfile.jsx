import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaSignOutAlt, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthProvider";

const MyProfile = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext)
  const { user } = useContext(AuthContext);

  return (
    <section className="min-h-screen bg-[#101010] flex items-center justify-center px-6 sm:px-10">
      <title>{user.displayName}</title>
      <motion.div
        className="bg-[#1f1f1f] p-10 sm:p-16 rounded-3xl shadow-2xl w-full max-w-lg text-white text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Profile Image */}
        <motion.div
          className="relative inline-block"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <motion.img
            src={user?.photoURL || "https://i.ibb.co.com/sJF5Gzmh/blank-profile-picture-973460-1280.webp"}
            alt="User Avatar"
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-[#00ff80] object-cover mx-auto shadow-lg"
          />
          <motion.div
            className="absolute bottom-2 right-2 bg-[#00ff80] rounded-full h-4 w-4 border border-black"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
          />
        </motion.div>

        {/* Name and Email */}
        <motion.h2
          className="text-2xl sm:text-3xl font-bold mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {user?.displayName || "User"}
        </motion.h2>

        <motion.p
          className="text-gray-400 mt-2 flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <FaEnvelope /> {user?.email}
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/update-profile")}
          className="flex mx-auto mt-5 cursor-pointer items-center gap-3 px-6 py-3 rounded-full font-semibold text-xl shadow-lg transition-all duration-300 bg-blue-500 text-white hover:bg-blue-700"
        >
          Update Information
        </motion.button>

        {/* Divider */}
        <motion.div
          className="w-16 h-1 bg-[#00ff80] mx-auto mt-6 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ duration: 0.8 }}
        />


        {/* Logout Button */}
        <motion.button
          whileHover={{
            scale: 1.05,
            // backgroundColor: "#00ff80",
            // color: "#000",
          }}
          onClick={() => logOut(navigate)}
          className="flex mx-auto mt-5 cursor-pointer items-center gap-3 px-6 py-3 rounded-full font-semibold text-xl shadow-lg transition-all duration-300 bg-[#00ff80] text-black hover:bg-[#101010] hover:text-white"
        >
          <FaSignOutAlt /> Logout
        </motion.button>
      </motion.div>
    </section>
  );
};

export default MyProfile;
