import React from "react";
import { motion } from "framer-motion";
import newsletter from "../../../assets/newsletter.jpg";

const Newsletter = () => {
  return (
    <section className="relative bg-white rounded-t-[40px] sm:rounded-t-[70px] sm:-mt-16 -top-38 z-40 shadow-[0_0_30px_rgba(0,255,142,0.2)] border-t border-[#00ff8e] pb-20 overflow-hidden pt-16 h-160">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-around gap-10 px-4 sm:px-8 lg:px-15 py-16 rounded-3xl shadow-2xl border border-[#00ff8e]">
        {/* Image */}
        <motion.img
          src={newsletter}
          alt="Newsletter"
          className="w-auto rounded-2xl object-cover shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />

        {/* Content */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#050505] mb-6">
            Subscribe to Our Newsletter!
          </h1>
          <p className="text-gray-600 mb-6">
            Stay updated with our latest games, offers, and news. Enter your
            email below to join our community.
          </p>

          {/* Form */}
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-full border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00ff8e] transition-all duration-300"
            />
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#00ff8e" }}
              type="submit"
              className="px-6 py-3 bg-[#00ff8e] text-black font-semibold rounded-full transition-all duration-300 cursor-pointer"
            >
              Subscribe
            </motion.button>
          </form>

          {/* Note */}
          <p className="text-gray-500 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
