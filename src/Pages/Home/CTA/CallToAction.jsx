import React from "react";
import { motion } from "framer-motion";
import { FaDiscord, FaGamepad } from "react-icons/fa";
import { Link } from "react-router";

const CallToAction = () => {
  return (
    <section className="relative bg-white rounded-t-[40px] sm:rounded-t-[70px] -mt-16 sm:-mt-20 -top-38 z-40 shadow-lg overflow-hidden px-4 sm:px-8 lg:px-15 py-20 border-t border-[#00ff8e]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-10"
      >
        {/* Text Content */}
        <div className="text-center md:text-left w-full md:w-1/2">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-black mb-4">
            Join the NovaArcade Community!
          </h2>
          <p className="text-gray-700 text-lg sm:text-xl mb-8">
            Connect with indie game lovers, share your passion, discover hidden
            gems, and be part of a growing gaming family.
          </p>

          <motion.div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center md:justify-start">
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: "#00ff8e" }}
              href="https://discord.com/"
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 bg-black text-green-400 font-semibold rounded-full shadow-lg transition-all  hover:text-green-900"
            >
              <FaDiscord /> Join Discord
            </motion.a>

            <Link to="/games">
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: "#00ff8e" }}
              className="flex items-center gap-2 px-6 py-3 bg-black text-green-400 font-semibold rounded-full shadow-lg transition-all  hover:text-green-900"
            >
              <FaGamepad /> Explore Games
            </motion.a></Link>
          </motion.div>
        </div>

        {/* Image / Graphic */}
        <motion.img
          src="https://cutt.ly/Stug0Kug"
          alt="Gaming Community"
          className="w-full md:w-1/2 rounded-2xl shadow-2xl object-cover"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>
    </section>
  );
};

export default CallToAction;
