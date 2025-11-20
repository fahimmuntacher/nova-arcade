import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { Link, useLocation } from "react-router";
import { auth } from "../../../Firebase/firebase_init";

const ForgetPassword = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const prefilledEmail = params.get("email") || "";

  const [email, setEmail] = useState(prefilledEmail);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (prefilledEmail) setEmail(prefilledEmail);
  }, [prefilledEmail]);

  const handleReset = async (e) => {
    e.preventDefault();
    if (!email) return toast.error("Please enter your email!");

    setLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Reset email sent! Check your inbox.");
        setTimeout(() => {
            window.open("https://mail.google.com", "_blank")
        }, 2500);
      })
      .catch((err) => {
        toast.error("Error sending reset email.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[#1a1a1a] flex justify-center items-center px-4"
    >
      <div className="bg-[#101010] border border-[#1f1f1f] rounded-3xl p-8 sm:p-10 w-full max-w-md shadow-xl text-white">
        <h1 className="text-3xl font-extrabold text-center mb-6 text-[#00ff80]">
          Reset Password
        </h1>
        <p className="text-center text-gray-400 mb-8">
          Enter your email to receive a password reset link 🔑
        </p>

        <form onSubmit={handleReset} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your registered email"
              required
              className="w-full px-5 py-3 rounded-full border border-gray-600 bg-[#1a1a1a] text-white focus:outline-none focus:ring-2 focus:ring-[#00ff80] transition-all duration-300"
            />
          </div>

          {/* Reset Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-full font-bold text-lg transition-all duration-300 ${
              loading
                ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                : "bg-[#00ff80] text-black hover:bg-[#00cc66]"
            }`}
          >
            {loading ? "Sending..." : "Reset Password"}
          </button>

          <div className="text-center mt-4">
            <Link
              to="/login"
              className="text-sm text-[#00ff80] hover:underline"
            >
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </motion.section>
  );
};

export default ForgetPassword;
