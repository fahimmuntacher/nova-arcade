import React from "react";
import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#101010]">
      <motion.div
        className="relative w-20 h-20 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
      >
        {/* Outer Ring */}
        <div className="absolute inset-0 border-4 border-[#00ff80]/20 rounded-full"></div>

        {/* Rotating Arc */}
        <motion.div
          className="absolute inset-0 border-t-4 border-[#00ff80] rounded-full shadow-[0_0_15px_#00ff80]"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
        ></motion.div>

        {/* Inner Glow Dot */}
        <motion.div
          className="w-4 h-4 bg-[#00ff80] rounded-full shadow-[0_0_15px_#00ff80]"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;
