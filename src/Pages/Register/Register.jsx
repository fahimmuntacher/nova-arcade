import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/firebase_init";
import { toast } from "react-toastify";
import { googleLogin } from "../../Utilities/googleLogin";
import { AuthContext } from "../../Context/AuthProvider";

const Register = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {setUser} = useContext(AuthContext)

  const handleRegister = (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const photoUrl = e.target.photoURL.value;
  const password = e.target.password.value;

  // Password validation
  if (password.length < 6) {
    setError("Password must be at least 6 characters long.");
    return;
  } else if (!/[A-Z]/.test(password)) {
    setError("Password must contain at least one uppercase letter.");
    return;
  } else if (!/[a-z]/.test(password)) {
    setError("Password must contain at least one lowercase letter.");
    return;
  } else {
    setError("");
  }

  //  Create user 
  createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      const user = res.user;
      // Adding name and phot url
      updateProfile(user, {
        displayName: name,
        photoURL: photoUrl || "https://i.ibb.co.com/sJF5Gzmh/blank-profile-picture-973460-1280.webp"
      })
    
      .then(() => {
        console.log("Profile info added");
        sendEmailVerification(user);
        toast.info("Verification email sent! Please check your inbox.");
        setUser(user);   
        e.target.reset();
        navigate("/my-profile"); 
      })
      .catch((err) => {
        console.error("Profile update error:", err);
        toast.error("Failed to update profile info!");
      });
    })
    .catch((e) => {
      console.log(e.code);
      if (e.code === "auth/email-already-in-use") {
        toast.warning("User already exists! Try logging in.");
      } else if (e.code === "auth/invalid-email") {
        toast.error("Invalid email format!");
      } else if (e.code === "auth/weak-password") {
        toast.error("Password is too weak! Use a stronger one.");
      } else if (e.code === "auth/missing-password") {
        toast.error("Please enter your password!");
      } else if (e.code === "auth/network-request-failed") {
        toast.error("Network error! Check your internet connection.");
      } else {
        toast.error("Something went wrong! Please try again later.");
      }
    });
};

  return (
    <section className="min-h-screen bg-[#101010] flex items-center justify-center px-6 sm:px-10">
      <title>Register | NovaArcade</title>
      <motion.div
        className="bg-[#1f1f1f] p-10 sm:p-16 rounded-3xl shadow-2xl w-full max-w-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-8">
          Register
        </h1>

        <form className="flex flex-col gap-4" onSubmit={handleRegister}>
          {/* Name */}
          <div className="flex flex-col gap-2.5">
            <label className="block text-gray-300 mb-1">Name</label>
            <input
            type="text"
            name="name"
            placeholder="Name"
            className="px-5 py-3 rounded-full border border-gray-600 bg-[#101010] text-white focus:outline-none focus:ring-2 focus:ring-[#00ff80] transition-all duration-300"
            required
          />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2.5">
            <label className="block text-gray-300">Email</label>
            <input
            type="email"
            name="email"
            placeholder="Email"
            className="px-5 py-3 rounded-full border border-gray-600 bg-[#101010] text-white focus:outline-none focus:ring-2 focus:ring-[#00ff80] transition-all duration-300"
            required
          />
          </div>

          {/* Photo URL */}
          <div className="flex flex-col gap-2.5">
            <label className="block text-gray-300">PhotoURL</label>
            <input
            type="text"
            name="photoURL"
            placeholder="Photo URL"
            className="px-5 py-3 rounded-full border border-gray-600 bg-[#101010] text-white focus:outline-none focus:ring-2 focus:ring-[#00ff80] transition-all duration-300"
          />

          </div>
          {/* Password */}
         <div className="relative w-full">
           <label className="block text-gray-300 mb-1">Password</label>
           <input
             type={show ? "text" : "password"}
             name="password"
             placeholder="Password"
             required
             className="w-full px-5 py-3 rounded-full border border-gray-600 bg-[#101010] text-white focus:outline-none focus:ring-2 focus:ring-[#00ff80] transition-all duration-300 pr-12"
           />
           <button
             type="button"
             onClick={() => setShow(!show)}
             className="absolute right-4 top-13 transform -translate-y-1/2 text-gray-300 transition-colors duration-300 cursor-pointer"
           >
             {show ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
           </button>
                   </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {/* Register Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#00ff80",
              color: "#000",
            }}
            type="submit"
            className="px-6 py-3 bg-[#00ff80] cursor-pointer text-black font-semibold rounded-full shadow-lg transition-all duration-300 text-lg mt-2"
          >
            Register
          </motion.button>
        </form>

        {/* Or Divider */}
        <div className="flex items-center justify-center gap-3 my-6">
          <span className="bg-gray-500 h-px flex-1"></span>
          <span className="text-gray-400 uppercase text-sm">or</span>
          <span className="bg-gray-500 h-px flex-1"></span>
        </div>

        {/* Google Login */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => googleLogin(navigate)}
          className="flex items-center justify-center gap-3 px-6 py-3 border cursor-pointer border-gray-600 rounded-full text-white bg-[#101010] w-full font-semibold transition-all duration-300"
        >
          <FcGoogle className="text-2xl" /> Login with Google
        </motion.button>

        {/* Login Link */}
        <p className="text-gray-400 text-center mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-[#00ff80] hover:underline">
            Login
          </Link>
        </p>
      </motion.div>
    </section>
  );
};

export default Register;
