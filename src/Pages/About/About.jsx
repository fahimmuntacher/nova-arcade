import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../../assets/about.jpg"

const About = () => {
  return (
    <section className="bg-[#101010] py-20 px-6 sm:px-10 md:px-16">
        <title>About | NovaArcade</title>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={aboutImage}
            alt="About"
            className="w-full rounded-3xl shadow-2xl object-cover"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="md:w-1/2 flex flex-col gap-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#00ff80]">
            About Us
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Welcome to our platform! We are dedicated to providing the best gaming experience with detailed reviews, ratings, and game guides. Our mission is to help gamers discover their next favorite game with ease and enjoy a seamless experience across all devices.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            Our team is passionate about gaming and technology. We constantly update our content to ensure you have access to the latest and most accurate information about games, developers, and trends in the industry.
          </p>
          <button className="w-max px-6 py-3 bg-[#00ff80] text-black font-semibold rounded-full shadow-lg hover:bg-green-400 transition-all duration-300">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
